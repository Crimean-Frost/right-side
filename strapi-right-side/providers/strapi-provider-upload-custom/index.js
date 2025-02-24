const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');

module.exports = {
  init(config) {
    return {
      async upload(file) {
        try {

          file.url = `/uploads/${file.hash}${file.ext}`;

          const uploadDir = path.join(process.cwd(), 'public/uploads');
          await fs.mkdir(uploadDir, {recursive: true});

          const originalFilePath = path.join(uploadDir, file.hash + file.ext);

          await fs.writeFile(originalFilePath, file.buffer);

          if (file.mime.startsWith('image/')) {
            const ignoredPrefixes = ['thumbnail_', 'medium_', 'small_', 'large_'];
            if (ignoredPrefixes.some((prefix) => file.name.startsWith(prefix))) {
              return null;
            }

            const createdFiles = []; // Список новых файлов

            const folderPath = file.folderPath || '/';
            const folderId = parseInt(folderPath.split('/').filter(Boolean).pop(), 10) || null;

            const outputFileName = `${file.hash}.webp`;
            const outputFilePath = path.join(uploadDir, outputFileName);

            await sharp(originalFilePath)
                .resize(file.width)
                .webp({quality: 90})
                .toFile(outputFilePath);

            const stats = await fs.stat(outputFilePath);
            const metadata = await sharp(outputFilePath).metadata();

            createdFiles.push({
              name: outputFileName,
              hash: `${file.hash}_webp`,
              ext: '.webp',
              mime: 'image/webp',
              size: stats.size / 1024,
              sizeInBytes: stats.size,
              width: metadata.width,
              height: metadata.height,
              url: `/uploads/${outputFileName}`,
              folderPath: file.folderPath,
              provider: 'strapi-provider-upload-custom',
              alternativeText: `Generated webp version`,
              caption: '',
              filepath: outputFilePath,
              tmpWorkingDirectory: uploadDir,
              getStream: () => fs.createReadStream(outputFilePath),
              related: [],
            });

            const uploadedFiles = [];
            for (const newFile of createdFiles) {
              const createdFile = await strapi.query('plugin::upload.file').create({
                data: newFile,
              });

              if (folderId) {
                await strapi.db.query('files_folder_lnk').create({
                  data: {
                    file_id: createdFile.id,
                    folder_id: folderId,
                    file_ord: 1,
                  },
                });
              }

              uploadedFiles.push(createdFile);
            }

            return uploadedFiles.find((file) => file.hash.includes('desktop')) || uploadedFiles[0];
          }
        } catch (error) {
          strapi.log.error('Ошибка при обработке изображения:', error);
          throw new Error('Ошибка при обработке изображения.');
        }
      },

      async delete(file) {
        try {
          if (file.mime.startsWith('image/')) {
            const uploadDir = path.join(process.cwd(), 'public/uploads');

            const filePath = path.join(uploadDir, file.url.replace('/uploads/', ''));
            const exists = await fs.access(filePath).then(() => true).catch(() => false);
            if (exists) {
              await fs.unlink(filePath);
            }
          }
        } catch (error) {
          strapi.log.error(`Ошибка при удалении файла: ${error.message}`);
        }
      },

      async uploadStream(file) {
        const chunks = [];
        return new Promise((resolve, reject) => {
          file.stream.on('data', (chunk) => chunks.push(chunk));
          file.stream.on('end', async () => {
            try {
              file.buffer = Buffer.concat(chunks);
              const createdFile = await this.upload(file);
              resolve(createdFile);
            } catch (err) {
              reject(err);
            }
          });
          file.stream.on('error', (err) => reject(err));
        });
      },
    };
  },
};