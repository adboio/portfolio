import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, AppleIcon } from "lucide-react";

type Work = {
  company: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string; // Optional
  href?: string; // Optional
  description: string;
  badges?: readonly string[]; // Optional
};

type Project = {
  title: string;
  href?: string; // Optional
  dates: string;
  active?: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly { type: string; href: string; icon: React.ReactNode }[]; // Optional
  image?: string; // Optional
  video?: string; // Optional
};

export const DATA: {
  name: string;
  initials: string;
  url: string;
  location: string;
  description?: string;
  summary: string;
  avatarUrl: string;
  skills: readonly string[];
  navbar: readonly { href: string; icon: React.ElementType; label: string }[];
  contact: {
    email: string;
    tel: string;
    social: {
      [key: string]: {
        name: string;
        url: string;
        icon: React.ElementType;
        navbar: boolean;
      };
    };
  };
  work: readonly Work[];
  projects: readonly Project[];
} = {
  name: "adam",
  initials: "ab",
  url: "https://adbo.io",
  location: "Seattle, WA",
  // description: "software developer & entrepreneur",
  // summary: "college dropout, hopeful (and ex-) founder, ",
  summary: "i like to build stuff. here you'll find my resume, fitness data, cool digital projects, and progress on my campervan build",
  // summary: "software developer by day, indie hacker by night - a college dropout who's built everything from web scraping platforms to big data pipelines to STEM summer camps. currently cooking up an app called Forkfile that turns social media recipe videos into text 😋",
  avatarUrl: "/me.jpeg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Adobe Pr, Ae, Ps, Ai",
    "AWS",
    "AI",
    "Swift"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://medium.com/@adboio", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "adambowker98@gmail.com",
    tel: "+19102602599",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/adboio",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/adam-bowker",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/adboio",
        icon: Icons.x,
        navbar: true,
      },
      Medium: {
        name: "Medium",
        url: "https://medium.com/@adboio",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:adambowker98@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "PostHog",
    //   title: "Senior Product Engineer",
    //   logoUrl: "/posthog-icon.png",
    //   start: "Nov 2025",
    //   description: "asking you questions about how you use surveys so you can use surveys to ask your users questions about how they use your product",
    // },
    {
      company: "Amazon",
      title: "Software Engineer II",
      logoUrl: "/amazon.png",
      start: "Apr 2022",
      end: "Nov 2025",
      description: "built a cool new marketplace (NDA rip), bunch of ML/data pipelines, agentic testing framework, and human-in-the-loop system for customer service. mentored several junior engs / interns / non-SDE folks."
      // description: "Currently focused on optimizing customer return rate & product regionalization. On my previous team, spent ~1 year helping build a new Amazon storefront, where I was responsible for the design & implementation of a \"benefits\" program associated with product purchases (under NDA)."
    },
    {
      company: "Tukios",
      title: "Software Engineer",
      logoUrl: "/tukios.jpeg",
      start: "Nov 2020",
      end: "Apr 2022",
      description: 'responsible for a large part of Tukios\' website product. built an automated web scraper for obituaries to growth-hack / simplify onboarding, plus a custom website builder/launcher/cms platform. tukios is almost the #1 funeral home website provider now 🤫',
      // description: "Responsible for a large part of Tukios' website platform. Built a robust web scraping tool that gathered over 1/2 million obituaries per year, designed & implemented a project management system for website design + launch, and integrated Tukios tech with a white labeled website builder."
    },
    {
      company: "Imagicode",
      badges: ['acquired 🎉'],
      title: "Co-founder & Instructor",
      logoUrl: "/imagicode.jpg",
      start: "Jan 2019",
      end: "Jun 2020",
      description: 'worked at a coding camp -> boss left the country and went dark -> so we stole his clients. taught kids to code in summer camps & after-school clubs til covid hit, then acquired by a local STEM school in June 2020 to expand their direct-to-school offerings.'
      // description: "Imagicode, LLC traveled to elementary schools across the Triangle area teaching computer science in after-school clubs. Acquired by Betabox, Inc. June 2020 to expand direct-to-consumer offerings."
    },
    {
      company: "Heller PR",
      title: "Software Engineer - Freelance",
      logoUrl: "/heller-pr.jpg",
      start: "Nov 2018",
      end: "Nov 2024",
      description: 'built creative software for lots of different clients. fun: ended up co-founding a nonprofit and built a cool web VR experience to accompany an in-person event. less fun, more impressive: a complete practice mgmt system for an adult ADHD clinic resulting in +100% prospective patients/year and +25% new patients/year with 50% less staff.'
      // description: "Designed and developed creative software solutions for a multitude of clients. Recently built a complete practice management & automation platform for an adult ADHD clinic, resulting in +100% prospective patients/yr and +25% new patients/yr with 50% less staff."
    },
  ],
  projects: [
    {
      title: 'CreatorCookbooks',
      href: 'https://www.creatorcookbooks.com',
      dates: 'Fall 2025',
      active: true,
      description: 'The easiest way for creators to make and sell a cookbook.',
      technologies: [
        'Supabase',
        'Resend',
        'NextJS',
        'Forkfile AI'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.creatorcookbooks.com',
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/cc-banner.jpg",
    },
    {
      title: "Forkfile",
      href: "https://getforkfile.com",
      dates: "Fall 2024",
      active: true,
      description: "Built an iOS app to solve one of my biggest (small) problems. Forkfile converts social media recipe videos to text with AI!",
      technologies: [
        "Supabase",
        "Swift",
        "GenAI",
        "AWS"
      ],
      links: [
        {
          type: "Website",
          href: "https://getforkfile.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/forkfile/id6737213815",
          icon: <AppleIcon className="size-3" />,
        },
      ],
      image: "/forkfile-banner.jpg",
    },
    {
      title: "TheMailButton",
      href: "https://www.themailbutton.com",
      dates: "April 2025",
      active: true,
      description: "Press The Mail Button. Send a beautiful 4x6 postcard in seconds.",
      technologies: [
        "Supabase",
        "Next.js/React",
        "The USPS 😛"
      ],
      links: [
        {
          type: "Website",
          href: "https://www.themailbutton.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/mailbutton-banner.jpg",
    },
    {
      title: "FirstClassMeme",
      href: "https://www.firstclassmeme.com",
      dates: "April 2025",
      active: true,
      description: "Send a customzied meme in the actual physical mail.",
      technologies: [
        "Supabase",
        "Next.js/React",
        "Docker",
        "The USPS 😛",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.firstclassmeme.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fcm.png",
    },
  ],
} as const;
