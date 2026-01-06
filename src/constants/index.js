export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Oleksandr was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Oleksandr’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Oleksandr. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Oleksandr was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'The Private Surgeon Clinic - Medical Website',
    desc: 'The Private Surgeon Clinic is a modern, multilingual website built for a private surgical practice. Designed with accessibility and trust in mind, it features a clean UI, responsive layout, and seamless internationalization using Next.js, TypeScript, and Tailwind CSS.',
    subdesc:
      'Developed with Next.js 15 App Router, Tailwind CSS, TypeScript, Shadcn UI, and next-intl, the site delivers fast performance, responsive design, and a professional user experience tailored for both English and Ukrainian audiences.',

    href: 'https://private-surgeon.vercel.app',
    texture: '/textures/project/private_surgeon.mp4',
    logo: '/assets/surgeon_logo.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Nextjs',
        path: '/assets/next_logo.png',
      },
    ],
  },
  {
    title: 'YC Directory - Startup Pitch Platform',
    desc: 'YC Directory is a dynamic platform where entrepreneurs can pitch their startup ideas, explore others, and engage with a like-minded community. It fosters innovation by offering a space for idea sharing, discovery, and collaboration.',
    subdesc:
      'Built with Next.js 15, Tailwind CSS, TypeScript, and Sanity CMS, YC Directory features GitHub authentication, real-time content updates, and a clean, minimal UI for seamless user interaction and pitch management.',
    href: 'https://yc-directory-ebon.vercel.app',
    texture: '/textures/project/yc_directory.mp4',
    logo: '/assets/lightbulb.ico',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Nextjs',
        path: '/assets/next_logo.png',
      },
    ],
  },
  {
    title: 'Shoe Store - Full-Stack E-commerce Platform',
    desc: 'Shoe Store is a complete e-commerce web application featuring a modern storefront, shopping cart, checkout flow, and an admin dashboard. It allows users to browse products, manage their cart, and securely complete purchases.',
    subdesc:
      'Built with Next.js 15, TypeScript, Tailwind CSS, and Stripe, the platform includes a full-featured admin dashboard for managing products, banners, and orders. It supports real-time statistics, order tracking, and secure payment processing, making it a scalable foundation for any online store.',
    href: 'https://shoe-oleks.vercel.app',
    texture: '/textures/project/shoe_olex.mp4',
    logo: '/assets/shoe_olex_logo.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Nextjs',
        path: '/assets/next_logo.png',
      },
    ],
  },
  {
    title: 'WebWizardOK - Full-Stack Developer Portfolio',
    desc: 'WebWizardOK is a visually rich portfolio site that showcases the skills and creativity of a full-stack developer. It features immersive canvas animations, smooth transitions, and a bold design that reflects both technical depth and artistic flair.',
    subdesc:
      'Built with Next.js 14, TypeScript, Tailwind CSS, and GSAP, the site includes animated canvas elements, interactive sections, and a responsive layout. It highlights the developer’s expertise in both front-end and back-end technologies through a dynamic and engaging user experience.',
    href: 'https://childhood.webwizardok.com',
    texture: '/textures/project/portfolio.mp4',
    logo: '/assets/portfolio_logo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Pulse - Sport Tech Landing Page',
    desc: 'Pulse is a single-page landing site designed to promote heart rate monitors for runners and athletes. It features smooth animations, interactive sliders, and a clean, modern layout that highlights product benefits and encourages user engagement.',
    subdesc:
      'Built with HTML, CSS, jQuery, and animation libraries, Pulse includes form validation, dynamic UI effects, and responsive design. It’s optimized for performance and crafted to deliver a visually engaging experience across all devices.',
    href: 'https://pulse.webwizardok.com',
    texture: '/textures/project/pulse.mp4',
    logo: '/assets/pulse_logo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'jQuery',
        path: '/assets/jquery_icon.svg',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: 'assets/javascript_icon.svg',
      },
      {
        id: 3,
        name: 'Bootstrap',
        path: '/assets/bootstrap_icon.svg',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/css_icon.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [3, -5, 3]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
    archeryTargetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -12, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freelancer',
    pos: 'Full-Stack Developer',
    duration: '2023 - Present',
    title:
      'As a freelancer, I build responsive landing pages, full-stack web apps, and e-commerce platforms. I focus on accessibility, performance, and clean design using tools like Next.js, TypeScript, and Tailwind CSS.',
    icon: '/assets/freelancer_icon.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'UKAD',
    pos: 'Front-End Developer',
    duration: '2021 - 2023',
    title:
      'At UKAD, I contributed to nine diverse projects, focusing on building accessible, SEO-optimized, and performant user interfaces. I worked with React, TypeScript, and UI libraries like MUI and Tailwind CSS to deliver clean, responsive web applications with strong attention to best practices in performance, accessibility, and SEO.',
    icon: '/assets/UKAD_3.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Bifo',
    pos: 'Junior Web Developer',
    duration: '2020 - 2021',
    title:
      'At Bifo, I worked on internal tools and client-facing websites, focusing on clean UI implementation and responsive layouts. I collaborated with designers and senior developers to deliver accessible, performant web experiences using HTML, CSS, JavaScript, and jQuery.',
    icon: '/assets/bifo.svg',
    animation: 'salute',
  },
];
