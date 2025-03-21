import gql from "graphql-tag";
import type { SiteContent } from "~/types";

export const useSiteContent = async (): Promise<Ref<SiteContent>> => {
  const QUERY = `
    {
      mainSection {
        about
        aboutImage {
          url
        }
        heroImage {
          url
        }
        designation
      }
      skillsSection {
        image {
          url
        }
        description
        skill {
          name
          precentage
        }
      }
      allSocialLinks {
        hide
        link
        icon {
          url
        }
      }
      team {
        name
        image {
          url
        }
        designation
      }
      footer {
        description
        buttonText
        buttonLink
        title
        image {
          url
        }
      }
      academicsSection {
        image {
          url
        }
        academicInstituions {
          name
          hide
          description
          order
        }
      }
      allClients {
        id
        name
        image {
          url
        }
        hide
        designation
      }
      allHappyClients {
        message
        client {
          id
          image {
            url
          }
          name
          designation
        }
      }
      allBrands {
        name
        hide
        logo {
          url
        }
      }
      contactSection {
        image {
          url
        }
        contactInformation {
          title
          value
          id
        }
      }
      directionSection {
        imageLeft {
          url
        }
        imageRight {
          url
        }
        description
      }
      howDoWeShootSection {
        imageLeft {
          url
        }
        imageRight {
          url
        }
        equipment {
          name
          description
        }
      }
      howDoWeEditSection {
        image {
          url
        }
        editingSoftware {
          name
        }
      }
    }
  `;

  const { data, error } = await useGraphQlQuery({ query: QUERY });
  if (error.value) {
    console.error(error.value);
    throw error.value.message;
  }
  return data as any as Ref<SiteContent>;
};
