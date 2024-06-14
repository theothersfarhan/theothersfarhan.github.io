export interface MainSection {
  about: string;
  heroImage: {
    url: string;
  };
  designation: string;
}

export interface Skill {
  name: string;
  precentage: number;
}

export interface SkillsSection {
  image: {
    url: string;
  };
  description: string;
  skill: Skill[];
}

export interface SocialLink {
  hide: boolean;
  link: string;
  icon: {
    url: string;
  };
}

export interface TeamMember {
  name: string;
  image: {
    url: string;
  };
  designation: string;
}

export interface Footer {
  description: string;
  buttonText: string;
  buttonLink: string;
  title: string;
  image: {
    url: string;
  };
}

export interface AcademicInstitution {
  name: string;
  hide: boolean;
  description: string;
  order: number;
}

export interface AcademicsSection {
  image: {
    url: string;
  };
  academicInstituions: AcademicInstitution[];
}

export interface Client {
  id: string;
  name: string;
  image: {
    url: string;
  };
  hide: boolean;
}

export interface HappyClient {
  message: string;
  client: {
    id: string;
  };
}

export interface Brand {
  name: string;
  hide: boolean;
  logo: {
    url: string;
  };
}

export interface ContactInformation {
  title: string;
  value: string;
  id: string;
}

export interface ContactSection {
  image: {
    url: string;
  };
  contactInformation: ContactInformation[];
}

export interface DirectionSection {
  imageLeft: {
    url: string;
  };
  imageRight: {
    url: string;
  };
  description: string;
}

export interface Equipment {
  name: string;
  description: string;
}

export interface HowDoWeShootSection {
  imageLeft: {
    url: string;
  };
  imageRight: {
    url: string;
  };
  equipment: Equipment[];
}

export interface EditingSoftware {
  name: string;
}

export interface HowDoWeEditSection {
  image: {
    url: string;
  };
  editingSoftware: EditingSoftware[];
}

export interface SiteContent {
  mainSection: MainSection;
  skillsSection: SkillsSection;
  allSocialLinks: SocialLink[];
  team: TeamMember[];
  footer: Footer;
  academicsSection: AcademicsSection;
  client: Client[];
  happyClient: HappyClient[];
  brand: Brand[];
  contactSection: ContactSection;
  directionSection: DirectionSection;
  howDoWeShootSection: HowDoWeShootSection;
  howDoWeEditSection: HowDoWeEditSection;
}
