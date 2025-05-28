import {
    java,
    springboot,
    html,
    javascript,
    css,
    react,
    threejs,
    git,
    docker
} from "../../public/assets";

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
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Work',
        href: '#work',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const personalProjects = [
    {
        title: 'Java Pokemon Game (Ongoing)',
        description: 'A turn-based RPG game built entirely in Java that mimics the core mechanics of traditional Pokémon games. ' +
            'Players can select a Pokemon, battle AI-controlled enemies, use various moves, and manage health stats during combat. ' +
            'The game includes basic sprite rendering, type-based attacks, a simple UI, and turn logic, all developed without external game engines. ' +
            'This project showcases object-oriented design, custom game loop implementation, and Java GUI programming',
        href: 'https://github.com/spasic21/PokemonClone',
        images: [
            '/assets/pokemonGameGif1.mp4',
            '/assets/pokemonGameGif2.mp4',
            '/assets/pokemonGameImage1.png'
        ]
    },
    {
        title: 'Pokemon API',
        description: 'A REST API built using Spring Boot that provides Pokemon stats and other important information for the game Pokemon Clone. ' +
            'The API provides endpoints for retrieving Pokemon data by pokedex number, or by a range from 1 to 251.',
        href: 'https://github.com/spasic21/PokemonClone',
        images: [
            '/assets/pokemonApiImage1.png',
            '/assets/pokemonApiImage2.png'
        ]
    }
];

export const workExperiences = [
    {
        id: 1,
        name: 'Old Dominion Freight Line',
        position: 'Associate Software Engineer',
        duration: 'December 2022 – Present',
        title: "Developed a Java and SQL-based UI and web service for driver projections, improving trailer time estimation.",
        icon: '/assets/old_dominion_freight_line_logo.png',
        animation: 'clapping',
    },
    {
        id: 2,
        name: 'Best Buy',
        position: 'Software Engineer (Java & Spring Boot)',
        duration: 'May 2022 - November 2022',
        title: 'Built Spring Boot APIs for Amazon S3 data handling, integrating robust JUnit and Groovy tests for functionality validation.',
        icon: '/assets/best_buy_logo.png',
        animation: 'swimming'
    },
    {
        id: 3,
        name: 'Marriott Vacations Worldwide',
        position: 'Back-End Java Developer',
        duration: 'April 2021 - April 2022',
        title: 'Developed Spring Boot REST APIs for seamless integration with React and mobile apps.',
        icon: '/assets/marriott_vacations_worldwide_logo.png',
        animation: 'cheering'
    },
    {
        id: 4,
        name: 'Andersen Windows',
        position: 'Software Engineer',
        duration: 'October 2019 - March 2020',
        title: 'Modernized legacy processes by replacing Excel macros with a Java Spring Boot application.',
        icon: '/assets/andersen_windows_logo.png',
        animation: 'dancing'
    },
    {
        id: 5,
        name: 'Express Scripts',
        position: 'Back-End Java Developer',
        duration: 'December 2018 - June 2019',
        title: 'Redesigned Spring Boot REST APIs for the customer rebate application, improving performance.',
        icon: '/assets/express_scripts_logo.png',
        animation: 'salute'
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