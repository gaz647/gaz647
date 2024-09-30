import "./MyProjects.css";
import Project from "../components/Project";
import Heading from "../components/Heading";
import { v4 as uuidv4 } from "uuid";

import EmtruckV2Image from "../images/mockup-emtruck-v2.0-w-800-px.png";
import Putovka from "../images/mockup-putovka-w-800-px.png";
import TatovaPila from "../images/mockup-tatova-pila-w-800-px.png";
import gaz647 from "../images/mockup-gaz647-w-800-px.png";
import BeneetoHours from "../images/mockup-beneeto-hours-w-800-px.png";
import OktagonSchedule from "../images/mockup-oktagon-schedule-w-800-px.png";
import EmtruckV1Image from "../images/mockup-emtruck-v1.0-w-800-px.png";

const MyProjects = ({ language }: { language: string }) => {
  const projectsData = [
    {
      name: "emTRUCK v2.0",
      image: EmtruckV2Image,
      bio_en:
        "Full-Stack logbook web app for private company truck drivers - THE PROJECT HAD TO BE TERMINATED.",
      bio_cs:
        "Kniha jízd pro řidiče soukromé společnosti - PROJEKT MUSEL BÝT UKONČEN.",
      website: "https://emtruck.net/",
      github: "https://github.com/gaz647/emTRUCK",
      logo: "react",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/1a883016-572f-4180-8581-73d1b8c50428.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "Axios",
        "Exchange Rate API",
        "Vite",
        "Netlify",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "Axios",
        "Exchange Rate API",
        "Vite",
        "Netlify",
      ],
      position: "left",
    },
    {
      name: "Puťovka",
      image: Putovka,
      bio_en:
        "Simplified version of emTRUCK v2.0. Demo account: demo@putovka.net, Password: put24*test_",
      bio_cs:
        "Zjednodušená verze emTRUCK v2.0. Demo účet: demo@putovka.net, Heslo: put24*test_",
      website: "https://putovka.net/",
      github: "https://github.com/gaz647/putovka.net",
      logo: "react",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/3dfeb4b8-4a0d-4c3a-9304-b78526567524.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "Axios",
        "Exchange Rate API",
        "Vite",
        "Netlify",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "React Router",
        "Redux Toolkit",
        "Firebase",
        "Axios",
        "Exchange Rate API",
        "Vite",
        "Netlify",
      ],
      position: "right",
    },
    {
      name: "Tátova Pila",
      image: TatovaPila,
      bio_en: "Website for woodworking company.",
      bio_cs: "Webová stránka pro společnost zabývající se zpracováním dřeva.",
      website: "https://tatovapila.cz/",
      github: "https://github.com/gaz647/tatova-pila_ts",
      logo: "react",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/018c1b57-9fb4-4879-8e56-75f570716b1f.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "React Router",
        "Google Maps API",
        "Vite",
        "Netlify",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "React Router",
        "Google Maps API",
        "Vite",
        "Netlify",
      ],
      position: "left",
    },
    {
      name: "gaz647",
      image: gaz647,
      bio_en: "Personal Web.",
      bio_cs: "Osobní Web.",
      website: "https://gaz647.net/",
      github: "https://github.com/gaz647/gaz647",
      logo: "react",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/018cf290-0b79-4c55-bc8a-0d1a7a4b578c.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "Netlify",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Vite",
        "Netlify",
      ],
      position: "right",
    },
    {
      name: "Beneeto-Hours",
      image: BeneetoHours,
      bio_en: "Working hours time keeping web app.",
      bio_cs: "Webová aplikace pro evidenci pracovních hodin.",
      website: "https://beneeto-hours.netlify.app",
      github: "https://github.com/gaz647/beneeto-hours_ts",
      logo: "react",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/bf2c22ad-f6b8-4f77-b86d-e9a72a65905b.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Redux Toolkit",
        "Moment.js",
        "localStorage",
        "Vite",
        "Netlify",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Redux Toolkit",
        "Moment.js",
        "localStorage",
        "Vite",
        "Netlify",
      ],
      position: "left",
    },
    {
      name: "Oktagon Schedule",
      image: OktagonSchedule,
      bio_en: "Schedule of Oktagon MMA Events.",
      bio_cs: "Kalendář galavečerů organizace Oktagon MMA.",
      website: "https://fancy-narwhal-e5080d.netlify.app/",
      github: "https://github.com/gaz647/oktagon-schedule-ts",
      logo: "react",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/124c0e6a-9248-4c01-bf48-1c49b325afe3.svg",
      stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Firebase",
        "date-fns",
        "Vite",
        "Netlify",
        "HTML",
        "CSS",
        "TypeScript",
        "React",
        "Firebase",
        "date-fns",
        "Vite",
        "Netlify",
      ],
      position: "right",
    },
    {
      name: "emTRUCK v1.0",
      image: EmtruckV1Image,
      bio_en:
        "Logbook web app for private company truck drivers (access code: em23).",
      bio_cs:
        "Kniha jízd pro řidiče soukromé společnosti (demo účet: email: test@emtruck.net, heslo: eMtes*T24).",
      website: "https://emtruck-v1.netlify.app/",
      github: "https://github.com/gaz647/emTRUCK_VUE",
      logo: "vue",
      wakaTimeImage:
        "https://wakatime.com/badge/user/0042881c-6061-4165-a38d-5958bd6d02bc/project/925b101f-155e-4ecb-ada0-5c21ec73df5e.svg",
      stack: [
        "HTML",
        "CSS",
        "JS",
        "Vue",
        "Axios",
        "Lodash",
        "Exchange Rate API",
        "localStorage",
        "Vite",
        "Netlify",
        "HTML",
        "CSS",
        "JS",
        "Vue",
        "Axios",
        "Lodash",
        "Exchange Rate API",
        "localStorage",
        "Vite",
        "Netlify",
      ],
      position: "left",
    },
  ];

  console.log();

  return (
    <section className="my-projects">
      <Heading
        text={
          language === "en"
            ? "Explore my projects"
            : "Prohlédněte si mé projekty"
        }
        color={"black"}
      />
      {projectsData.map((oneProject) => {
        return (
          <Project
            key={uuidv4()}
            projectData={oneProject}
            language={language}
          />
        );
      })}
    </section>
  );
};

export default MyProjects;
