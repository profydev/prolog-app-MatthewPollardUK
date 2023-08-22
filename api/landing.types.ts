export interface Meta {
  title: string;
  description: string;
  image: string;
}

export interface Image {
  src: string;
  width: number;
  height: number;
}

export interface Company {
  name: string;
  logo: string;
}

export interface Testimonial {
  title: string;
  text: string;
  userName: string;
  userRole: string;
  userCompany: string;
  userImage: Image;
}

export interface Section {
  sectionType: string;
  theme: string;
  title: string;
  subtitle: string;
  image?: Image; // Optional, since not all sections have an image
  companies?: Company[]; // Optional, since not all sections have companies
  testimonials?: Testimonial[]; // Optional, since not all sections have testimonials
}

export type Landing = {
  meta: Meta;
  sections: Section[];
};
