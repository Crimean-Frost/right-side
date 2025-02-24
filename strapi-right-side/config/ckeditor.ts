
// Ваш код конфигурации
const CKEConfig = () => ({
  presets: {
    default: {
      styles: `
        .ck-dropdown__panel .ck-list {
          max-height: 300px;
          overflow-y: auto;
        }
      `,
      editorConfig: {
        fontFamily: {
          options: ['default', 'Golos', 'Mulish', 'Onest'],
          supportAllValues: true,
        },
        removePlugins: [
          'Style',
          'Indent',
          'IndentBlock',
          'OutdentBlock',
          'Table',
          'SimpleUpload',
          'Image',
          'ImageCaption',
          'ImageInsert',
          'ImageResize',
          'ImageStyle',
          'ImageTextAlternative',
          'ImageUpload',
          'BlockQuote',
          'HorizontalLine',
          'PageBreak',
          'ShowBlocks',
          'ListPropertiesUI',
          'ListProperties',
          'HtmlEmbedCommand',
          'HtmlEmbed',
          'HtmlEmbedConfig',
          'HtmlEmbedEditing',
          'HtmlEmbedUI',
          'CodeBlock',
          'CodeBlockCommand',
          'CodeBlockConfig',
          'CodeBlockEditing',
          'CodeBlockUI',
          'List',
          'ListStyle',
          'MediaEmbed',
          'Link',
          'LinkCommand',
          'LinkConfig',
          'LinkEditing',
          'LinkImage',
          'LinkImageUI',
          'LinkImageEditing',
          'LinkUI',
          'StrapiMediaLib',
          'FontSize',
        ],
      },
    },
  },
});