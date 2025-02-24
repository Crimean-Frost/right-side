

export interface ContactUsFormData {
  type: 'contact-us-general'
  firstName: string;
  phone: string;
  time: string;
  socialNetwork: string;
  agreement: boolean;
}

export interface ContactUsCareerFormData {
  type: 'contact-us-career'
  fullName: string;
  phone: string;
  mail: string;
  comment: string;
  agreement: boolean;
}

export interface ModalWindowFormData {
  type: 'contact-us-modal'
  fullName: string;
  phone: string;
  writeMe: boolean;
  agreement: boolean;
}