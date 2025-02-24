import nodemailer from 'nodemailer'

const config = useRuntimeConfig();

export  type MailModel = {
    from: string,
        to: string,
        subject: string,
        text: string,
        html: string,
}

const transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
        user: config.private.username,
        pass: config.private.password,
    },
});

export const sendMail =  async (data: MailModel) => {
    const info = await transporter.sendMail({
        from: data.from,
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.html,
    });
    return info as  any
}