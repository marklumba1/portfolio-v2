import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon
} from "lucide-react";
import projJsonImage from "/proj-json-typecode.jpg"
import pv1 from "/portfolio-v1.jpg"
import pv2 from "/portfolio-v2.jpg"
import weather from "/weather.jpg"
import shoreAgents from "/shore-agents.jpg"
import dotty from "/dotty.jpg"
export interface CommonEntry {
  title: string;          // Job title, degree, certification name, or project title
  position: string;       // Role or position held
  organization?: string;  // Company, school, cert issuer, or organization name
  summary?: string;       // Description or summary (optional, e.g. not for education)
  period: string | number;
  tags?: string[];
  url?: string | null;
  imageSrc?: string;
}

export interface Social {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface Profile {
  name: string;
  pronouns: string;
  title: string;
  location: string;
  openToRoles: string[];
  tagLine: string;
  experience: CommonEntry[];
  education: CommonEntry[];
  certifications: CommonEntry[];
  projects: CommonEntry[];
  socials: Social[];
}

const profile: Profile = {
  name: "Mark O. Lumba",
  pronouns: "He/Him",
  title: "Front End Developer",
  location: "Pampanga, Central Luzon, Philippines",
  openToRoles: ["Web Developer", "React Developer"],
  tagLine: "I build interactive, accessible UIs with JavaScript and React — one component at a time.",
  
  experience: [
    {
      title: "Consultant III",
      position: "Consultant III",
      organization: "RCG Global Services",
      summary:
        "Working on AEM Cloud front-end development using React. Building reusable components, managing CQ dialogs, and collaborating in Agile teams to deliver scalable, accessible web applications.",
      period: "Jul 2024 - Present",
      tags: ["Adobe Experience Manager (AEM)", "React.js", "Agile Methodologies"],
      url: "https://www.rcgglobalservices.com/"
    },
    {
      title: "Advanced App Engineering Sr Analyst",
      position: "Advanced App Engineering Sr Analyst",
      organization: "Accenture",
      summary:
        "Developing AEM front-end solutions with React on AEM as a Cloud Service. Focused on reusable components, CQ dialog setup, and cross-team collaboration in Agile environments to deliver performant and accessible web apps.",
      period: "Jun 2023 - Jul 2024",
      tags: [
        "Agile",
        "React.js",
        "Tailwind CSS"
      ],
      url: "https://www.accenture.com/"
    },
    {
      title: "Information System Analyst I",
      position: "Information System Analyst I",
      organization: "Jose B Lingad Memorial General Hospital",
      summary:
        "Developed web based applications where we utilize Vue as the JavaScript framework with the application of HTML5, CSS and Bootstrap for front end. MySQL, SQL Server and PHP are utilized for backend. Also maintained existing systems that are created using jQuery.",
      period: "Apr 2022 - Feb 2023",
      tags: [
        "HTML5",
        "Cascading Style Sheets (CSS)",
        "Vue",
        "React"
      ],
      url: "https://www.facebook.com/jblmghofficial"
    },
    {
      title: "Project Development Officer III",
      position: "Project Development Officer III",
      organization: "Department of Information and Communications Technology - Philippines",
      summary:
        "For this role, I worked for the DICT ICT Academy program, which allowed IT specialists employed by the government to obtain certifications that includes Cisco's CCNA and CCNP program and Microsoft Certified Professional Certificates. I also developed a web application that was used for managing the students of the ICT Academy Program of DICT.",
      period: "Jul 2021 - Jun 2022",
      tags: [  "Cascading Style Sheets (CSS)",
        "HTML",
        "JavaScript",],
      url: "https://dict.gov.ph/"
    },
    {
      title: "Administrative Assistant I",
      position: "Administrative Assistant I",
      organization: "Jose B Lingad Memorial General Hospital",
      summary:
        "In this position, I was responsible for analyzing patient data, gathering information and documents and ensure that the medical records are organized, accurate and complete.",
      period: "May 2018 - Jul 2021",
      tags: [
        "Interpersonal Skills",
        "Leadership"
      ],
      url: "https://www.facebook.com/jblmghofficial"
    },
    {
      title: "Associate Software Engineer",
      position: "Associate Software Engineer",
      organization: "Accenture",
      summary:
        "This was an entry level role where I was assigned to various roles including development and QA roles. Mainly I developed web based apps using various frameworks including React and Ionic.",
      period: "May 2017 - Mar 2018",
      tags: [
        "Cascading Style Sheets (CSS)",
        "HTML",
        "React.js",
        "JavaScript",
        "Functional Testing"
      ],
      url: "https://www.accenture.com/"
    }
  ],

  education: [
    {
      title: "Bachelor of Science in Information Technology",
      position: "Undergraduate",
      organization: "Mary the Queen College, Guagua, Pampanga",
      period: "2014 - 2017",
      url: "https://www.marythequeencollege.com/"
    },
    {
      title: "Information and Computer Technology, Programming",
      position: "Technical-Vocational",
      organization: "Next Generation Technological College",
      period: "2013 - 2014",
      url: "https://nextgen.edu.ph/"
    },
    {
      title: "Industrial Technology (Computer)",
      position: "Certificate Program",
      organization: "Bulacan State University",
      period: "2011 - 2013",
      url: "https://www.bulsu.edu.ph/"
    }
  ],

  certifications: [
    {
      title: "IELTS General Training 7.0",
      position: "Credential",
      organization: "IELTS Official",
      summary: "Achieved a band score of 7.0 in IELTS General Training.",
      period: "Dec 2023",
      tags: ["English Proficiency"],
      url: "https://ielts.idp.com/"
    },
    {
      title: "MD-100 Windows 10",
      position: "Certification",
      organization: "Microsoft",
      summary: "Validated knowledge in Windows 10 configuration and management. Expired in Jun 2024.",
      period: "Jun 2021",
      tags: ["Microsoft", "Windows 10"],
      url: "https://learn.microsoft.com/"
    }
  ],

  projects: [
      {
    title: "Weather Mok App",
    organization: "",
    summary: "A responsive weather application built with React, Tailwind CSS, and OpenWeather API. Features search by city, geolocation fallback, and a 5-day forecast. Defaults to Manila when location is unavailable. Deployed via Netlify.",
    url: "https://weather-mok.netlify.app/",
    period: "",
    position: "",
    imageSrc: weather,
    tags: ["React", "HTML", "CSS", "Tailwind", "Framer Motion"],
  },
  {
    title: "Portfolio-v2",
    organization: "",
    summary: "Personal portfolio site showcasing professional experience, education, and projects. Built with React, Tailwind CSS, and deployed via Netlify.",
    url: "https://mark-lumba.netlify.app",
    period: "",
    position: "",
    imageSrc: pv2,
    tags: ["React", "HTML", "CSS", "Tailwind", "Framer Motion"],
  },
  {
    title: "sample-jsontypecode",
    organization: "",
    summary: "A frontend application consuming JSONPlaceholder API, demonstrating data fetching and display using React and Tailwind CSS.",
    url: "https://sample-jsontypecode.netlify.app",
    period: "",
    position: "",
    imageSrc: projJsonImage,
    tags: ["React", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "shoreagents-demo",
    organization: "",
    summary: "A UI demo project created for ShoreAgents. Features responsive components styled with Tailwind CSS and structured using React.",
    url: "https://shoreagents-demo.netlify.app",
    period: "",
    position: "",
    imageSrc: shoreAgents,
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "dotty-app",
    organization: "",
    summary: "A simple movie promotional site built with React and Tailwind CSS, showcasing film details in a clean, responsive layout.",
    url: "https://dotty-app.netlify.app",
    period: "",
    position: "",
    imageSrc: dotty,
    tags: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Portfolio",
    organization: "",
    summary: "An early version of personal portfolio hosted manually on Netlify. Serves as a base structure for future iterations.",
    url: "https://marklumba.netlify.app",
    period: "",
    position: "",
    imageSrc: pv1,
    tags: ["React", "HTML", "CSS", "Tailwind", "GSAP"],
  }
  ],

  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/marklumba1",
      icon: Github
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/mark-lumba-bb6401133/",
      icon: Linkedin
    },
    {
      platform: "Gmail",
      url: "https://mail.google.com/mail/u/0/?fs=1&to=marklumba1@gmail.com&su=hi%20Mark&body=&bcc=&tf=cm",
      icon: Mail
    }
  ]
};

export default profile;
