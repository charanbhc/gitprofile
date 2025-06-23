// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'charanbhc', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'charanbhc/boxoffice',
          'charanbhc/NLP_Projects_Solomon',
          'charanbhc/Facenet_Facial_Attendance',
          'charanbhc/Soil_Moisture',
          'charanbhc/AthaduCountdownBot',
          'charanbhc/firebase-todo-app',
          'charanbhc/td-bank-clone',
          'charanbhc/foodrecipe',
        ],
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.


      projects: [
        {
          title: 'Food Wastage Management System',
          description:
            'Built a web-based application to connect food donors with recipients. Donors can input food quantity and address details, enabling efficient redistribution. The system streamlines communication, reduces food waste, and ensures timely delivery to those in need, improving social impact through technology',
          imageUrl:
            'https://mb.cision.com/Public/8962/2268042/8f480966b966d2c2_org.jpg',
          link: 'https://github.com/charanbhc/Project_Files/blob/main/Food_Wastage_Manegement_System.pdf',
        },
        {
          title: 'Facenet',
          description:
            'Developed a real-time facial recognition system using the FaceNet model. Collected and preprocessed facial image data, extracted embeddings, and used cosine similarity for face identification and verification. Fine-tuned the model for accuracy and integrated a user-friendly interface, gaining hands-on experience in deep learning and image processing.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUy66-TACi-SVhzxw1i8b_MObFkuFWnoKWDQ&s',
          link: 'https://github.com/charanbhc/Project_Files/blob/main/B5_Facial_Attendance.pdf',
        },
        {
          title: 'Rain Fall Prediction',
          description:
            'Developed and compared ML models for rainfall prediction using historical weather data. Algorithms like logistic regression, decision trees, and XGBoost were evaluated on accuracy, precision, recall, and F1-score. Findings highlight strengths of each model under various conditions, aiding improved forecasting and better preparedness against weather-related risks.',
          imageUrl:
            'https://png.pngtree.com/png-vector/20191118/ourmid/pngtree-rain-icon-creative-design-template-png-image_1998625.jpg',
          link: 'https://github.com/charanbhc/Project_Files/blob/main/B5_Rain_Fall_Prediction.pdf',
        },
        {
          title: 'Smart Home Automation',
          description:
            'The IoT Smart Home Automation is the ability to control domestic appliances by electronically controlled, internet-connected systems. It may include setting complex heating and lighting systems in advance and setting alarms and home security controls, all connected by a central hub and remote-controlled by a mobile app. We have done this project as part of Skill Oriented Course',
          imageUrl:
            'https://thumbs.dreamstime.com/b/home-automation-vector-icon-logo-suitable-smart-home-technology-home-security-home-monitoring-technology-line-art-home-240581428.jpg',
          link: 'https://github.com/charanbhc/Project_Files/blob/main/Smart_Home_Automation.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Charan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'charanbhc',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'bharicharanreddy@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1boWYPk163zCzOLkL1T7iX1qoAZgqi0f6/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'Git',
  
  ],
  experiences: [
    {
      company: 'Wipro',
      position: 'Project Engineer',
      from: 'January 2025',
      to: 'Present',
      companyLink: 'https://www.wipro.com/',
    },
  ],
  certifications: [
    {
      name: 'Microsoft',
      body: 'Azure Developer Associate AZ - 204',
      year: 'March 2023',
      link: 'https://example.com',
    },
    {
      name: 'Microsoft',
      body: 'Azure Administrator AZ - 104',
      year: 'March 2023',
      link: 'https://example.com',
    },
    {
      name: 'Google',
      body: 'Cloud Digital Leader',
      year: 'November 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Vasireddy Venkatadri Institute of Technology',
      degree: 'Computer Science and Engineering (IoT)',
      from: '2020',
      to: '2024',
    }
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],

  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 6, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
