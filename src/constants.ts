import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  type LucideIcon
} from "lucide-react";

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
        "Working on enterprise-level Adobe Experience Manager (AEM) cloud implementations. Developing reusable AEM React components, managing CQ dialogs and configurations, and collaborating with cross-functional teams in Agile methodology to deliver scalable and accessible web applications.",
      period: "Jul 2024 – Present",
      tags: ["Adobe Experience Manager (AEM)", "React.js", "Agile Methodologies"],
      url: "https://www.rcgglobalservices.com/"
    },
    {
      title: "Advanced App Engineering Sr Analyst",
      position: "Advanced App Engineering Sr Analyst",
      organization: "Accenture",
      summary:
        "We utilize Adobe Experience Manager as the content manager for webpages where we create reusable AEM react components including CQ dialogs and configurations in collaboration with the UI/UX designers to turn their designs into functional webpages.",
      period: "Jun 2023 – Jul 2024",
      tags: [
        "Adobe Experience Manager (AEM)",
        "Cascading Style Sheets (CSS)",
        "Agile Methodologies",
        "HTML5",
        "React.js",
        "JavaScript",
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
      period: "Apr 2022 – Feb 2023",
      tags: [
        "Computer Hardware",
        "Computer Hardware Troubleshooting",
        "HTML5",
        "Cascading Style Sheets (CSS)",
        "jQuery"
      ],
      url: "https://www.facebook.com/jblmghofficial"
    },
    {
      title: "Project Development Officer III",
      position: "Project Development Officer III",
      organization: "Department of Information and Communications Technology - Philippines",
      summary:
        "For this role, I worked for the DICT ICT Academy program, which allowed IT specialists employed by the government to obtain certifications that includes Cisco's CCNA and CCNP program and Microsoft Certified Professional Certificates. I also developed a web application that was used for managing the students of the ICT Academy Program of DICT.",
      period: "Jul 2021 – Jun 2022",
      tags: ["Adobe Photoshop", "Computer Networking", "CCNA"],
      url: "https://dict.gov.ph/"
    },
    {
      title: "Administrative Assistant I",
      position: "Administrative Assistant I",
      organization: "Jose B Lingad Memorial General Hospital",
      summary:
        "In this position, I was responsible for analyzing patient data, gathering information and documents and ensure that the medical records are organized, accurate and complete.",
      period: "May 2018 – Jul 2021",
      tags: [
        "People Management",
        "Teamwork",
        "Interpersonal Skills",
        "Coaching",
        "PeopleSoft",
        "Engaging People",
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
      period: "May 2017 – Mar 2018",
      tags: [
        "Cascading Style Sheets (CSS)",
        "CSS Flexbox",
        "Ionic Framework",
        "Bootstrap",
        "HTML",
        "Redux Tool Kit",
        "Swift (Programming Language)",
        "React.js",
        "REST APIs",
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
      period: "2014 – 2017",
      url: "https://www.marythequeencollege.com/"
    },
    {
      title: "Information and Computer Technology, Programming",
      position: "Technical-Vocational",
      organization: "Next Generation Technological College",
      period: "2013 – 2014",
      url: "https://nextgen.edu.ph/"
    },
    {
      title: "Industrial Technology (Computer)",
      position: "Certificate Program",
      organization: "Bulacan State University",
      period: "2011 – 2013",
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
      title: "JSON Type Code Sample",
      position: "Lead Frontend Developer",
      summary:
        "Built a reusable AEM component set using React and Sling Models with authoring support and custom dialogs.",
      period: "",
      tags: ["React", "AEM", "Sling Models", "TypeScript"],
      url: null,
      imageSrc: "src/assets/proj-json-typecode.jpg"
    },
    {
      title: "Hospital Inventory System",
      position: "Full Stack Developer",
      summary:
        "Internal web application for hospital inventory and equipment tracking with QR code generation.",
      period: "2022",
      tags: ["Vue", "PHP", "MySQL", "Bootstrap"],
      url: null,
      imageSrc: "/images/hospital-inventory-system.png"
    },
    {
      title: "DICT ICT Academy Portal",
      position: "Frontend Developer",
      summary:
        "Managed student enrollment and certification portal with login and batch processing features.",
      period: "2021",
      tags: ["HTML", "CSS", "JavaScript", "Laravel"],
      url: "https://ictacademy.dict.gov.ph",
      imageSrc: ""
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
      platform: "Facebook",
      url: "https://facebook.com/yourprofile",
      icon: Facebook
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/yourprofile",
      icon: Instagram
    }
  ]
};

export default profile;
