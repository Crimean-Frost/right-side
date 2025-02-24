import type { Struct, Schema } from '@strapi/strapi';

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'connector';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    preview: Schema.Attribute.Media<'images'>;
    previewMobile: Schema.Attribute.Media<'images'>;
  };
}

export interface Sections404 extends Struct.ComponentSchema {
  collectionName: 'components_sections_404s';
  info: {
    displayName: '404';
    icon: 'layer';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface SectionsVacancies extends Struct.ComponentSchema {
  collectionName: 'components_sections_vacancies';
  info: {
    displayName: 'Vacancies';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
    vacancies: Schema.Attribute.Component<'section-components.text-card', true>;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionsServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_services';
  info: {
    displayName: 'services';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    serviceButton: Schema.Attribute.String & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionsSectorServices extends Struct.ComponentSchema {
  collectionName: 'components_sections_sector_services';
  info: {
    displayName: 'SectorServices';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    serviceButton: Schema.Attribute.String & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionsSectorCases extends Struct.ComponentSchema {
  collectionName: 'components_sections_sector_cases';
  info: {
    displayName: 'SectorCases';
    icon: 'layer';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsSectorApplication extends Struct.ComponentSchema {
  collectionName: 'components_sections_sector_applications';
  info: {
    displayName: 'SectorApplication';
    icon: 'bulletList';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionsPublications extends Struct.ComponentSchema {
  collectionName: 'components_sections_publications';
  info: {
    displayName: 'Publications';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    publications: Schema.Attribute.Component<
      'section-components.publication',
      true
    >;
  };
}

export interface SectionsPrinciples extends Struct.ComponentSchema {
  collectionName: 'components_sections_principles';
  info: {
    displayName: 'Principles';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    principles: Schema.Attribute.Component<
      'section-components.competence-card',
      true
    > &
      Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionsOurEmployees extends Struct.ComponentSchema {
  collectionName: 'components_sections_our_employees';
  info: {
    displayName: 'ourEmployees';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    employees: Schema.Attribute.Relation<'oneToMany', 'api::employee.employee'>;
    openButton: Schema.Attribute.String & Schema.Attribute.Required;
    closeButton: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsModalWindow extends Struct.ComponentSchema {
  collectionName: 'components_sections_modal_windows';
  info: {
    displayName: 'ModalWindow';
    icon: 'layer';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    form: Schema.Attribute.Component<'sections.modal-form', false>;
    completeTitle: Schema.Attribute.String & Schema.Attribute.Required;
    completeDescription: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsModalForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_modal_forms';
  info: {
    displayName: 'ModalForm';
    icon: 'bulletList';
  };
  attributes: {
    fullName: Schema.Attribute.Component<'section-components.input', false>;
    phone: Schema.Attribute.Component<'section-components.input', false>;
    writeMe: Schema.Attribute.Text & Schema.Attribute.Required;
    agreement: Schema.Attribute.Component<
      'section-components.agreement',
      false
    >;
    button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsMap extends Struct.ComponentSchema {
  collectionName: 'components_sections_maps';
  info: {
    displayName: 'Map';
    icon: 'search';
    description: '';
  };
  attributes: {
    centerX: Schema.Attribute.Decimal & Schema.Attribute.Required;
    centerY: Schema.Attribute.Decimal & Schema.Attribute.Required;
    iconX: Schema.Attribute.Decimal & Schema.Attribute.Required;
    iconY: Schema.Attribute.Decimal & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    zoom: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 19;
        },
        number
      > &
      Schema.Attribute.DefaultTo<16>;
  };
}

export interface SectionsMainHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_main_heroes';
  info: {
    displayName: 'MainHero';
    icon: 'layer';
    description: '';
  };
  attributes: {
    hero: Schema.Attribute.Component<'sections.hero', false> &
      Schema.Attribute.Required;
    openModalButton: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    iconMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsLeaveApplication extends Struct.ComponentSchema {
  collectionName: 'components_sections_leave_applications';
  info: {
    displayName: 'SingleTitleCard';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    card: Schema.Attribute.Component<
      'section-components.advantages-card',
      false
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsLeaveApplicationDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_leave_application_descriptions';
  info: {
    displayName: 'SingleTitleDescriptionCard';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    card: Schema.Attribute.Component<
      'section-components.learn-more-description-card',
      false
    >;
  };
}

export interface SectionsLearnMoreClean extends Struct.ComponentSchema {
  collectionName: 'components_sections_learn_more_cleans';
  info: {
    displayName: 'MultipleCleanCard';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    cards: Schema.Attribute.Component<
      'section-components.learn-more-clean-card',
      true
    >;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'rocket';
  };
  attributes: {
    title: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface SectionsForWhom extends Struct.ComponentSchema {
  collectionName: 'components_sections_for_whoms';
  info: {
    displayName: 'ForWhom';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
    cards: Schema.Attribute.Component<
      'section-components.for-whom-card',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsDetailChapter extends Struct.ComponentSchema {
  collectionName: 'components_sections_detail_chapters';
  info: {
    displayName: 'DetailChapter';
  };
  attributes: {
    shortTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface SectionsContacts extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contacts';
    icon: 'phone';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    contactLinks: Schema.Attribute.Component<'general.contact-link', true> &
      Schema.Attribute.Required;
    address: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    addressLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContactUs extends Struct.ComponentSchema {
  collectionName: 'components_sections_contactuses';
  info: {
    displayName: 'ContactUs';
    icon: 'layer';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    form: Schema.Attribute.Component<
      'section-components.contact-us-form',
      false
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsContactUsWithout extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_us_withouts';
  info: {
    displayName: 'ContactUsWithout';
    icon: 'layer';
  };
  attributes: {
    form: Schema.Attribute.Component<
      'section-components.contact-us-form',
      false
    >;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsContactUsTitle extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_us_titles';
  info: {
    displayName: 'ContactUsTitle';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
  };
}

export interface SectionsContactUsCareer extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_us_careers';
  info: {
    displayName: 'ContactUsCareer';
    icon: 'layer';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    form: Schema.Attribute.Component<
      'section-components.contact-us-form-career',
      false
    > &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionsCompetencesEmployee extends Struct.ComponentSchema {
  collectionName: 'components_sections_competences_employees';
  info: {
    displayName: 'CompetencesEmployee';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    cards: Schema.Attribute.Component<
      'section-components.competence-link-card',
      true
    >;
  };
}

export interface SectionsCompetenceCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_competence_cards';
  info: {
    displayName: 'Competences';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
    competenceCards: Schema.Attribute.Component<
      'section-components.competence-card',
      true
    >;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionsClientsAndPartners extends Struct.ComponentSchema {
  collectionName: 'components_sections_clients_and_partners';
  info: {
    displayName: 'Clients&Partners';
    icon: 'layer';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    partners: Schema.Attribute.Relation<'oneToMany', 'api::partner.partner'>;
  };
}

export interface SectionsCertificates extends Struct.ComponentSchema {
  collectionName: 'components_sections_certificates';
  info: {
    displayName: 'Certificates';
    icon: 'layer';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    images: Schema.Attribute.Component<'section-components.image', true>;
  };
}

export interface SectionsCases extends Struct.ComponentSchema {
  collectionName: 'components_sections_cases';
  info: {
    displayName: 'Cases';
    icon: 'layer';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
    cases: Schema.Attribute.Relation<'oneToMany', 'api::case.case'>;
    button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsCardPagination extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_paginations';
  info: {
    displayName: 'cardPagination';
    icon: 'apps';
    description: '';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    sortings: Schema.Attribute.Relation<'oneToMany', 'api::sorting.sorting'>;
    generalButton: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'\u0427\u0438\u0442\u0430\u0442\u044C \u0441\u0442\u0430\u0442\u044C\u044E'>;
  };
}

export interface SectionsBlog extends Struct.ComponentSchema {
  collectionName: 'components_sections_blogs';
  info: {
    displayName: 'Blog';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    button: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsBlogHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_heroes';
  info: {
    displayName: 'BlogHero';
    icon: 'layer';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    company: Schema.Attribute.String;
  };
}

export interface SectionsAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_sections_advantages';
  info: {
    displayName: 'MultipleTitleCard';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    cards: Schema.Attribute.Component<
      'section-components.advantages-card',
      true
    >;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    card: Schema.Attribute.Component<
      'section-components.advantages-card',
      false
    >;
    descriptions: Schema.Attribute.Component<
      'section-components.text-card',
      true
    > &
      Schema.Attribute.Required;
  };
}

export interface SectionsAboutEmployee extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_employees';
  info: {
    displayName: 'AboutEmployee';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    > &
      Schema.Attribute.Required;
    smallImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    largeImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    largeImageMobile: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    descriptions: Schema.Attribute.Component<
      'section-components.text-card',
      true
    >;
  };
}

export interface SectionsAboutCompany extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_companies';
  info: {
    displayName: 'AboutCompany';
    icon: 'layer';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
    cards: Schema.Attribute.Component<
      'section-components.competence-title-card',
      true
    > &
      Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionsAboutCommand extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_commands';
  info: {
    displayName: 'AboutCommand';
    icon: 'layer';
    description: '';
  };
  attributes: {
    titleContainer: Schema.Attribute.Component<
      'section-components.title-container',
      false
    >;
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    coverMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    descriptions: Schema.Attribute.Component<
      'section-components.text-card',
      true
    >;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    icon: 'folder';
    description: '';
  };
  attributes: {
    headerMenu: Schema.Attribute.Component<'header.header-menu', false> &
      Schema.Attribute.Required;
    openModalButton: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface HeaderHeaderMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_header_menus';
  info: {
    displayName: 'HeaderMenu';
    icon: 'server';
    description: '';
  };
  attributes: {
    items: Schema.Attribute.Component<'general.menu-item', true>;
    contactLinks: Schema.Attribute.Component<'general.contact-link', true>;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface GeneralMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_general_menu_items';
  info: {
    displayName: 'MenuItem';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.Text & Schema.Attribute.Required;
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
  };
}

export interface GeneralContactLink extends Struct.ComponentSchema {
  collectionName: 'components_general_contact_links';
  info: {
    displayName: 'ContactLink';
    icon: 'paperPlane';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    action: Schema.Attribute.Enumeration<['link', 'phone', 'mail']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'link'>;
    link: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionComponentsTitleContainer
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_title_containers';
  info: {
    displayName: 'titleContainer';
    icon: 'pin';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface SectionComponentsTextCard extends Struct.ComponentSchema {
  collectionName: 'components_section_components_text_cards';
  info: {
    displayName: 'textCard';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionComponentsPublication extends Struct.ComponentSchema {
  collectionName: 'components_section_components_publications';
  info: {
    displayName: 'Publication';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 35;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 75;
      }>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionComponentsLearnMoreDescriptionCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_learn_more_description_cards';
  info: {
    displayName: 'TitleDescriptionCard';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    coverMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionComponentsLearnMoreCleanCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_learn_more_clean_cards';
  info: {
    displayName: 'CleanCard';
    icon: 'picture';
    description: '';
  };
  attributes: {
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    coverMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionComponentsInput extends Struct.ComponentSchema {
  collectionName: 'components_section_components_inputs';
  info: {
    displayName: 'Input';
    icon: 'brush';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    placeholder: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionComponentsImage extends Struct.ComponentSchema {
  collectionName: 'components_section_components_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface SectionComponentsForWhomCard extends Struct.ComponentSchema {
  collectionName: 'components_section_components_for_whom_cards';
  info: {
    displayName: 'ForWhomCard';
    icon: 'picture';
  };
  attributes: {
    label: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
  };
}

export interface SectionComponentsContactUsForm extends Struct.ComponentSchema {
  collectionName: 'components_section_components_contact_us_forms';
  info: {
    displayName: 'contactUsForm';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    firstName: Schema.Attribute.Component<'section-components.input', false> &
      Schema.Attribute.Required;
    phone: Schema.Attribute.Component<'section-components.input', false> &
      Schema.Attribute.Required;
    time: Schema.Attribute.Component<'section-components.input', false> &
      Schema.Attribute.Required;
    socialNetwork: Schema.Attribute.Component<
      'section-components.input',
      false
    > &
      Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    rangeTimes: Schema.Attribute.Relation<
      'oneToMany',
      'api::vremennoj-diapazon.vremennoj-diapazon'
    >;
    socialNetworks: Schema.Attribute.Relation<
      'oneToMany',
      'api::soczialnye-seti.soczialnye-seti'
    >;
    agreement: Schema.Attribute.Component<
      'section-components.agreement',
      false
    >;
  };
}

export interface SectionComponentsContactUsFormCareer
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_contact_us_form_careers';
  info: {
    displayName: 'ContactUsFormCareer';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    fullName: Schema.Attribute.Component<'section-components.input', false> &
      Schema.Attribute.Required;
    phone: Schema.Attribute.Component<'section-components.input', false> &
      Schema.Attribute.Required;
    mail: Schema.Attribute.Component<'section-components.input', false> &
      Schema.Attribute.Required;
    comment: Schema.Attribute.Component<'section-components.input', false> &
      Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    agreement: Schema.Attribute.Component<
      'section-components.agreement',
      false
    >;
  };
}

export interface SectionComponentsCompetenceTitleCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_competence_title_cards';
  info: {
    displayName: 'CompetenceTitleCard';
    icon: 'bulletList';
  };
  attributes: {
    number: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionComponentsCompetenceLinkCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_competence_link_cards';
  info: {
    displayName: 'CompetenceLinkCard';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<1>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    link: Schema.Attribute.String;
  };
}

export interface SectionComponentsCompetenceCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_competence_cards';
  info: {
    displayName: 'CompetenceCard';
    icon: 'layer';
    description: '';
  };
  attributes: {
    number: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
          maxLengthCharacters: 150;
        }
      >;
  };
}

export interface SectionComponentsAgreement extends Struct.ComponentSchema {
  collectionName: 'components_section_components_agreements';
  info: {
    displayName: 'Agreement';
    icon: 'check';
  };
  attributes: {
    agreement: Schema.Attribute.Text & Schema.Attribute.Required;
    files: Schema.Attribute.Component<'footer.file-link', true>;
  };
}

export interface SectionComponentsAdvantagesCard
  extends Struct.ComponentSchema {
  collectionName: 'components_section_components_advantages_cards';
  info: {
    displayName: 'TitleCard';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    cover: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    button: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    coverMobile: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
    icon: 'folder';
    description: '';
  };
  attributes: {
    footerMenu: Schema.Attribute.Component<'footer.footer-menu', false>;
    contactLinks: Schema.Attribute.Component<'general.contact-link', true>;
    centerFileLinks: Schema.Attribute.Component<'footer.file-link', true>;
    rightFileLinks: Schema.Attribute.Component<'footer.file-link', true>;
    credit: Schema.Attribute.String;
    disclaimer: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    address: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    workingTime: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface FooterFooterMenu extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_menus';
  info: {
    displayName: 'FooterMenu';
    icon: 'server';
  };
  attributes: {
    items: Schema.Attribute.Component<'general.menu-item', true>;
  };
}

export interface FooterFileLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_file_links';
  info: {
    displayName: 'fileLink';
    icon: 'picture';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'seo.seo': SeoSeo;
      'sections.404': Sections404;
      'sections.vacancies': SectionsVacancies;
      'sections.services': SectionsServices;
      'sections.sector-services': SectionsSectorServices;
      'sections.sector-cases': SectionsSectorCases;
      'sections.sector-application': SectionsSectorApplication;
      'sections.publications': SectionsPublications;
      'sections.principles': SectionsPrinciples;
      'sections.our-employees': SectionsOurEmployees;
      'sections.modal-window': SectionsModalWindow;
      'sections.modal-form': SectionsModalForm;
      'sections.map': SectionsMap;
      'sections.main-hero': SectionsMainHero;
      'sections.leave-application': SectionsLeaveApplication;
      'sections.leave-application-description': SectionsLeaveApplicationDescription;
      'sections.learn-more-clean': SectionsLearnMoreClean;
      'sections.hero': SectionsHero;
      'sections.for-whom': SectionsForWhom;
      'sections.detail-chapter': SectionsDetailChapter;
      'sections.contacts': SectionsContacts;
      'sections.contact-us': SectionsContactUs;
      'sections.contact-us-without': SectionsContactUsWithout;
      'sections.contact-us-title': SectionsContactUsTitle;
      'sections.contact-us-career': SectionsContactUsCareer;
      'sections.competences-employee': SectionsCompetencesEmployee;
      'sections.competence-card': SectionsCompetenceCard;
      'sections.clients-and-partners': SectionsClientsAndPartners;
      'sections.certificates': SectionsCertificates;
      'sections.cases': SectionsCases;
      'sections.card-pagination': SectionsCardPagination;
      'sections.blog': SectionsBlog;
      'sections.blog-hero': SectionsBlogHero;
      'sections.advantages': SectionsAdvantages;
      'sections.about': SectionsAbout;
      'sections.about-employee': SectionsAboutEmployee;
      'sections.about-company': SectionsAboutCompany;
      'sections.about-command': SectionsAboutCommand;
      'header.header': HeaderHeader;
      'header.header-menu': HeaderHeaderMenu;
      'general.menu-item': GeneralMenuItem;
      'general.contact-link': GeneralContactLink;
      'section-components.title-container': SectionComponentsTitleContainer;
      'section-components.text-card': SectionComponentsTextCard;
      'section-components.publication': SectionComponentsPublication;
      'section-components.learn-more-description-card': SectionComponentsLearnMoreDescriptionCard;
      'section-components.learn-more-clean-card': SectionComponentsLearnMoreCleanCard;
      'section-components.input': SectionComponentsInput;
      'section-components.image': SectionComponentsImage;
      'section-components.for-whom-card': SectionComponentsForWhomCard;
      'section-components.contact-us-form': SectionComponentsContactUsForm;
      'section-components.contact-us-form-career': SectionComponentsContactUsFormCareer;
      'section-components.competence-title-card': SectionComponentsCompetenceTitleCard;
      'section-components.competence-link-card': SectionComponentsCompetenceLinkCard;
      'section-components.competence-card': SectionComponentsCompetenceCard;
      'section-components.agreement': SectionComponentsAgreement;
      'section-components.advantages-card': SectionComponentsAdvantagesCard;
      'footer.footer': FooterFooter;
      'footer.footer-menu': FooterFooterMenu;
      'footer.file-link': FooterFileLink;
    }
  }
}
