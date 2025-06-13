import {
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoTailwindCss
} from "react-icons/bi";

import {RiGithubFill, RiMusic2Line} from "react-icons/ri";
import {CgPokemon} from "react-icons/cg";
import {css, docker, git, html, java, javascript, react, springboot, tailwindcss, threejs} from "../assets";

import creativity from "../assets/creativity.svg";
import strategy from "../assets/strategy.svg";
import code from "../assets/code.svg";

import pokemonGameGif1 from "../assets/pokemonGameGif1.mp4";
import pokemonGameGif2 from "../assets/pokemonGameGif2.mp4";
import pokemonGameImage1 from "../assets/pokemonGameImage1.png";
import pokemonApiImage1 from "../assets/pokemonApiImage1.png";
import pokemonApiImage2 from "../assets/pokemonApiImage2.png";
import pokemonApiImage3 from "../assets/pokemonApiImage3.png";
import spotifyCloneImage1 from "../assets/spotifyCloneImage1.png";
import spotifyCloneImage2 from "../assets/spotifyCloneImage2.png";
import spotifyCloneImage3 from "../assets/spotifyCloneImage3.png";

import luffyGameboy from "../assets/luffyGameboy.jpg";
import luffyPokeball from "../assets/luffyPokeball.jpg";
import luffyMusic from "../assets/luffyMusic.jpg"


import oldDominionFreightLineLogo from "../assets/old_dominion_freight_line_logo.png";
import bestBuyLogo from "../assets/best_buy_logo.png";
import marriottVacationsWorldwideLogo from "../assets/marriott_vacations_worldwide_logo.png";
import andersenWindowsLogo from "../assets/andersen_windows_logo.png";
import expressScriptsLogo from "../assets/express_scripts_logo.png";

export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Tech',
        href: '#tech',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const heroWords = [
    {text: 'Creativity', imgPath: creativity},
    {text: 'Strategy', imgPath: strategy},
    {text: 'Code', imgPath: code},
    {text: 'Creativity', imgPath: creativity},
    {text: 'Strategy', imgPath: strategy},
    {text: 'Code', imgPath: code},
    {text: 'Creativity', imgPath: creativity},
    {text: 'Strategy', imgPath: strategy},
    {text: 'Code', imgPath: code}
];

export const personalProjects = [
    {
        title: 'Java Pokemon Game (Ongoing)',
        description: 'A Java turn-based RPG inspired by classic Pokémon mechanics. ' +
            'Features include AI battles, type-based attacks, health management, and a custom game loop. All built without external engines. ' +
            'Demonstrates strong object-oriented design and Java GUI development. Instructions are on GitHub.',
        navLinks: [
            {icon: RiGithubFill, href: 'https://github.com/spasic21/PokemonClone'},
            {icon: CgPokemon, href: 'https://github.com/spasic21/PokemonClone/releases/download/v1.0/PokemonClone.jar'}
        ],
        logo: luffyGameboy,
        tech: [
            BiLogoJava
        ],
        images: [
            pokemonGameGif1,
            pokemonGameGif2,
            pokemonGameImage1
        ]
    },
    {
        title: 'Pokemon API',
        description: 'Developed a RESTful API with Java and Spring Boot to serve structured Pokémon data for the Pokemon game I created. ' +
            'Supports efficient retrieval by Pokédex number or range (1–251), showcasing scalable design and clean data access to power game logic.',
        navLinks: [
            {icon: RiGithubFill, href: 'https://github.com/spasic21/PokemonApi'}
        ],
        logo: luffyPokeball,
        tech: [
            BiLogoJava,
            BiLogoSpringBoot
        ],
        images: [
            pokemonApiImage1,
            pokemonApiImage2,
            pokemonApiImage3
        ]
    },
    {
        title: 'Music Player App',
        description: 'Built a Spotify-style music player using React, Tailwind CSS, and Redux, integrated with a custom proxy server to fetch and stream music from the Deezer API. ' +
            'Features include track browsing, genre filtering, and responsive playback controls in a sleek, modern UI.',
        navLinks: [
            {icon: RiGithubFill, href: 'https://github.com/spasic21/react-music-app'},
            {icon: RiMusic2Line, href: 'https://spasic21.github.io/react-music-app/'}
        ],
        logo: luffyMusic,
        tech: [
            BiLogoHtml5,
            BiLogoJavascript,
            BiLogoCss3,
            BiLogoReact,
            BiLogoTailwindCss
        ],
        images: [
            spotifyCloneImage1,
            spotifyCloneImage2,
            spotifyCloneImage3,
        ]
    }
];

export const workExperiences = [
    {
        id: 1,
        name: 'Old Dominion Freight Line',
        position: 'Associate Software Engineer',
        duration: 'December 2022 – Present',
        responsibilities: [
            "Developed a Java and SQL-based UI and web service for freight line information and route projections, improving trailer time estimation.",
            "Led migration from Subversion to GitLab, implementing CI/CD pipelines to enhance deployment speed.",
            "Optimized back-end services, increasing system reliability and reducing downtime."
        ],
        icon: oldDominionFreightLineLogo,
    },
    {
        id: 2,
        name: 'Best Buy',
        position: 'Software Engineer (Java & Spring Boot)',
        duration: 'May 2022 - November 2022',
        responsibilities: [
            "Developed and maintained RESTful APIs using Java and Spring Boot to streamline data access from Amazon S3, increasing data reliability and operational efficiency.",
            "Led the migration of source code repositories from Bitbucket to GitHub, significantly improving version control workflows and cross-team collaboration.",
            "Collaborated within a cross-functional Agile team to deliver high-quality solutions on schedule, actively participating in sprint planning, code reviews, and daily stand-ups."
        ],
        icon: bestBuyLogo,
    },
    {
        id: 3,
        name: 'Marriott Vacations Worldwide',
        position: 'Back-End Java Developer',
        duration: 'April 2021 - April 2022',
        responsibilities: [
            "Developed Spring Boot REST APIs for seamless integration with React and mobile apps.",
            "Streamlined CMS operations with Jahia, improving front-end data presentation.",
            "Contributed to front-end updates on Vistana’s WordPress platform."
        ],
        icon: marriottVacationsWorldwideLogo,
    },
    {
        id: 4,
        name: 'Andersen Windows',
        position: 'Software Engineer',
        duration: 'October 2019 - March 2020',
        responsibilities: [
            "Modernized legacy processes by replacing Excel macros with a Java Spring Boot application.",
            "Implemented Hibernate for efficient data retrieval, improving performance and accuracy."
        ],
        icon: andersenWindowsLogo,
    },
    {
        id: 5,
        name: 'Express Scripts',
        position: 'Back-End Java Developer',
        duration: 'December 2018 - June 2019',
        responsibilities: [
            "Redesigned Spring Boot REST APIs for the customer rebate application, improving performance.",
            "Optimized data processing using Hibernate for complex Oracle SQL queries.",
            "Strengthened code reliability with JUnit and Mockito unit testing."
        ],
        icon: expressScriptsLogo,
    }
];

export const technologies = [
    {
        name: "Java",
        icon: java
    },
    {
        name: "Spring Boot",
        icon: springboot
    },
    {
        name: "Html",
        icon: html
    },
    {
        name: "JavaScript",
        icon: javascript
    },
    {
        name: "CSS",
        icon: css
    },
    {
        name: "React",
        icon: react
    },
    {
        name: "Tailwind CSS",
        icon: tailwindcss
    },
    {
        name: "Three",
        icon: threejs
    },
    {
        name: "Git",
        icon: git
    },
    {
        name: "Docker",
        icon: docker
    }
];

export const techStackIcons = [
    {
        name: "Java Developer",
        modelPath: "models/java.glb",
        scale: 1.5,
        rotation: [0, 0, 0]
    },
    {
        name: "React Developer",
        modelPath: "models/react.glb",
        scale: 1,
        rotation: [0, 0, 0]
    },
    {
        name: "Interactive Developer",
        modelPath: "models/three_js.glb",
        scale: 0.05,
        rotation: [0, 0, 0]
    },
    {
        name: "Project Manager",
        modelPath: "models/git.glb",
        scale: 3,
        rotation: [0, 0, 0]
    },
]