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
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const workExperiences = [
    {
        id: 1,
        name: 'Old Dominion Freight Line',
        position: 'Associate Software Engineer',
        duration: 'Oct 2022 - Present',
        title: "Developed a Java and SQL-based UI and web service for driver projections, enhancing trailer time estimation accuracy.",
        icon: '/assets/old_dominion_freight_line_logo.png',
        animation: 'clapping',
    },
    {
        id: 2,
        name: 'Best Buy',
        position: 'Associate Software Engineer',
        duration: 'May 2022 - November 2022',
        title: 'Built Spring Boot APIs for Amazon S3 data handling, integrating robust JUnit and Groovy tests for functionality validation.',
        icon: '/assets/best_buy_logo.png',
        animation: 'swimming'
    },
    {
        id: 3,
        name: 'Marriott Vacations Worldwide',
        position: 'Associate Software Engineer',
        duration: 'April 2021 - July 2022',
        title: 'Engineered back-end API responses in Spring Boot for seamless integration with React and mobile applications.',
        icon: '/assets/marriott_vacations_worldwide_logo.png',
        animation: 'cheering'
    },
    {
        id: 4,
        name: 'Andersen Windows',
        position: 'Associate Software Engineer',
        duration: 'October 2019 - March 2020',
        title: 'Transitioned legacy Excel macros to a Java Spring Boot application, streamlining bill of material validation for manufacturing.',
        icon: '/assets/andersen_windows_logo.png',
        animation: 'dancing'
    },
    {
        id: 5,
        name: 'Express Scripts',
        position: 'Associate Software Engineer',
        duration: 'December 2018 - June 2019',
        title: 'Designed and developed Spring Boot REST APIs to modernize the customer rebate application.',
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