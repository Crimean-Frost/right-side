import type {ContactUsCareerFormData, ContactUsFormData, ModalWindowFormData} from "~/types/submit-form-types";

type FormData = ContactUsFormData | ContactUsCareerFormData | ModalWindowFormData;

const generateEmailContent = (formData: FormData) => {
    switch (formData.type) {
        case 'contact-us-general':
            return {
                text: `ФИО: ${formData.firstName}\nТелефон: ${formData.phone}\nВремя: ${formData.time}\nМессенджер: ${formData.socialNetwork}`,
                html: `<p>ФИО: ${formData.firstName}</p><p>Телефон: ${formData.phone}</p><p>Время: ${formData.time}</p><p>Мессенджер: ${formData.socialNetwork}</p>`,
            };
        case 'contact-us-career':
            return {
                text: `ФИО: ${formData.fullName}\nТелефон: ${formData.phone}\nЭлектронная почта: ${formData.mail}\nКомментарий: ${formData.comment}`,
                html: `<p>ФИО: ${formData.fullName}</p><p>Телефон: ${formData.phone}</p><p>Электронная почта: ${formData.mail}</p><p>Комментарий: ${formData.comment}</p>`,
            };
        case 'contact-us-modal':
            return {
                text: `ФИО: ${formData.fullName}\nТелефон: ${formData.phone}\nНапишите мне: ${formData.writeMe ? 'Да' : 'Нет'}`,
                html: `<p>ФИО: ${formData.fullName}</p><p>Телефон: ${formData.phone}</p><p>Напишите мне: ${formData.writeMe ? 'Да' : 'Нет'}</p>`,
            };
        default:
            throw new Error('Неизвестный тип формы');
    }
};

export const submitForm = async (form: FormData, config: any, isValid: boolean): Promise<boolean> => {
    if (isValid) {
        const {text, html} = generateEmailContent(form);

        try {
            const response = await fetch('/api/mailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: config.public.sender,
                    to: config.public.recipient,
                    subject: 'Новое сообщение из формы',
                    text: text,
                    html: html,
                }),
            });

            const result = await response.json();
            return response.ok && result.data;
        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
};