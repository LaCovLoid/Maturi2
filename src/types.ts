export interface FooterTitleMenuType {
  name: string;
  subMenu: FooterMenuType[];
}

export interface FooterMenuType {
  name: string;
  url: string;
  src?: string;
}

export interface ProtectDescriptionType {
  title: string;
  iconUrl: string;
  description?: string;
}

export interface ReasonDescriptionType {
  width: string;
  text: string;
  img: string;
  backgroundImg?: string;
}
