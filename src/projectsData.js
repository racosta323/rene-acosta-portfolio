export const projectsData = [
    {
        id: 1,
        name: "Personal Portfolio",
        tagline: 'A dynamic showcase of my technical expertise and creativity, featuring innovative and engaging features.',
        summary: 'A personal portfolio crafted to resemble a professional company\'s website, showcasing my projects in a sleek, chronological timeline. Built entirely in React, with vanilla CSS for styling and Bootstrap for icons, it\'s designed for easy navigation, making it simple to explore and learn more about my experience.',
        image: '/Portfolio.png',
        tech: 'JavaScript, Python, React',
        features: [
            'Images dynamically adjust to fit any screen size, ensuring optimal viewing across devices.', 
            'A refined sticky Navbar offers direct routing to each section, with styling updates triggered by scrolling.',
            'Offers various contact methods throughout the page, providing convenient options for communication.', 
            'Card components are rendered for each item in an array, providing a structured and organized presentation.',
            'Project cards feature buttons that open modals, offering in-depth information about each project.',
            'External links are seamlessly integrated through distinct icons, which appear only when relevant information is available.',
            'The useState and useEffect hooks manage the opening and closing of modals, ensuring responsive and intuitive user interactions.'
        ],
        ghLink: 'https://github.com/racosta323/rene-acosta-portfolio',
        siteLink: 'https://rene-acosta-portfolio.onrender.com/',
        accomplishments: []
    },
    {
        id: 2,
        name: 'Showmate',
        tagline: 'Discover, review, and connect over live concerts. Built with Flask and React for seamless navigation and a vibrant music community.',
        summary: "Developed as my capstone project at Flatiron School, ShowMate was born from a discussion with my partner about the surprising lack of dedicated platforms for concert reviews. Inspired by industry titans like IMDB and Rotten Tomatoes, ShowMate offers users a rich and engaging experience with extensive navigation across various components. The project features RESTful APIs crafted with Python and Flask, providing intuitive and user-friendly endpoints for a seamless and engaging experience.",
        image: '/showmate_homepage.png',
        tech: 'JavaScript, Python, React, Bootstrap, HTML, CSS, PostgreSQL, Flask, SQLAlchemy, Formik, Yup',
        features: [
            'A robust Flask app featuring RESTful API endpoints to manage artists, reviews, and users with efficiency and ease.', 
            'Effortlessly create, retrieve, update, and delete records in a relational database, with well-defined models for Artists, Reviews, and Users.',
            ' Utilizes SQLAlchemy for powerful Object-Relational Mapping, ensuring smooth data interactions and management.',
            'Manages user sessions with secure login and logout functionality, safeguarding user access and data integrity.',
            'Includes comprehensive error handling and data validation to maintain smooth and reliable operations.',
            'Conditionally renders nested routes or authentication forms based on user login status, enhancing the user experience.',
            'Showcases a dynamic navigation bar with a built-in search function and seamless user logout, all elegantly styled with React Bootstrap for a polished appearance.',
            'Leverages React\'s state and effect hooks to ensure efficient data fetching and real-time UI updates, with context setup for smooth state sharing across components.'
        ],
        features2: "This Python script defines a Flask web application with RESTful API endpoints for managing artists, reviews, and users. It includes routes for creating, retrieving, updating, and deleting records in a relational database, with models for Artist, Review, and User. The application uses SQLAlchemy for ORM, handles session management for user authentication, and provides functionality for logging in and out. Error handling and data validation are implemented to ensure smooth operations. managing user authentication and fetching data such as artists and reviews. It conditionally renders nested routes or an authentication form based on the user's logged-in status. The component includes a navigation bar, handles user logout, and utilizes React Bootstrap for styling. It sets up context to share state and functions with nested components and ensures proper data fetching and UI updates using React's state and effect hooks.",
        ghLink: 'https://github.com/racosta323/phase-5-project-showmate/blob/main/README.md',
        siteLink: 'https://phase-5-project-showmate.onrender.com/',
        accomplishments: ['Achieved high Google Lighthouse scores (Performance: 95, Accessibility: 94, Best Practices: 93, SEO: 100)']
    },
    {
        id: 3,
        name: 'Friday Fund',
        tagline: 'A streamlined goal-tracking app built with Flask, React, and Bootstrap to simplify goal management and achievement.',
        summary: 'The Friday Fund is an innovative web application designed to empower users in their goal-setting journey. It allows users to effortlessly add, track, review, and delete goals, while contributing to and monitoring their progress with ease. As the project lead during our software engineering bootcamp, I spearheaded the ideation, development, and management of this tool. Our team set out to create a user-friendly platform that simplifies goal tracking and helps users achieve their objectives with confidence.',
        image: '/FridayFund.png',
        tech: 'JavaScript, React, React Router DOM Python, SQL, MySQL, CLI, SQLAlchemy, Formik, Faker',
        features: [
            'Intuitive onboarding process captures user data and keeps them actively engaged from the start', 
            ' Includes secure user authentication mechanisms to ensure authorized access and protect user data.',
            'Manages user sessions to maintain a seamless and personalized experience throughout interactions.',
            'Utilizes Flask to build a robust RESTful API for efficiently managing users, goals, and their relationships.',
            'Handles HTTP responses effectively to provide clear and accurate feedback to users and client applications.',
            'Connects with a database using Object-Relational Mapping (ORM) for streamlined data handling and operations',
            'Full Create, Read, Update, and Delete capabilities are integrated for complete control over data management',
            'Utilizes Formik and Yup to ensure precise and user-friendly form validations.',
            'Implemented React Router DOM for smooth and efficient client-side navigation throughout the application.',
            'A dynamic dashboard tracks and displays progress on goals with options to add and manage new objectives',
            'Each goal features a detailed profile with comprehensive information and options for further editing and updates.',
            'Incorporates debugging tools to facilitate efficient development, troubleshooting, and optimization.'
        ],
        features2: 'The code implements a Flask-based RESTful API for managing users, goals, and their relationships, with features for user authentication, session management, and CRUD operations on various resources. It integrates with a database using ORM, handles HTTP responses, and includes debugging tools for development.',
        ghLink:'https://github.com/racosta323/kpkr-phase-4-project/blob/main/README.md' ,
        siteLink: '',
        accomplishments: []
    },
    {
        id: 4,
        name: 'CatSpace',
        tagline: 'A purrfect single-page app built with React, inspired by a shared love for cats.',
        summary: 'Collaborated with fellow bootcamp peers to design and develop an engaging single-page web app, tailored for cat enthusiasts. Spearheaded wireframing, ideation, and development to create a platform where users can effortlessly create and manage detailed cat profiles. This project, fueled by our collective passion for cats, brings the joy of feline companionship to life!',
        image: '/CatSpace.png',
        tech: 'JavaScript, React, Bootstrap, HTML, CSS',
        features: [
            'Users can search for, add, and view detailed profiles of cats directly from the homepage.',
            'Navigation efficiently managed through React Routing and React Router DOM.', 
            'responsive design facilitated by React Bootstrap',
            'A Navbar and Footer are designed for streamlined and intuitive navigation',
            'Users can filter and refine their search through the list of added cats directly from the Nav Bar.',
            'Personal branding elements are included to introduce the development team.',
            'Each cat profile includes extensive information and the capability to delete entries',
            'Routing endpoints are created to enhance navigation, including a dedicated error page.',
            'Users can input data into a controlled form, which includes comprehensive input validation.'
        ],
        ghLink:'https://github.com/racosta323/her-phase-2-project-catspace/blob/main/README.md' ,
        siteLink: '',
        accomplishments: []
    },
    {
        id: 5,
        name: 'Travel CLI Tool',
        tagline: "A CLI tool in Python for sharing and viewing trip details with friends, featuring a database built with ORM",
        summary: 'Led a group project as the primary coordinator, overseeing ideation, wireframing, planning, development, and code review, while managing overall project organization and execution. Inspired by group\'s love for travel.',
        image: 'Travel CLI.png',
        tech: 'Python, sqlite3, SQLAlchemy, ipdb',
        features: [
            'Efficiently track and manage travel experiences through a sophisticated CLI interface, featuring a streamlined menu for easy navigation.', 
            'Interact with the system to input and manage personal and trip information, enabling the creation, updating, and removal of travel records with precision.',
            'Update traveler details seamlessly, with all information securely stored in a SQL relational database to ensure data integrity and persistence.',
            'Benefit from robust error handling and debugging capabilities designed to maintain smooth operation and safeguard data integrity.'
        ],
        ghLink:'https://github.com/racosta323/brt-phase-3-project/blob/main/README.md' ,
        siteLink: '',
        accomplishments: []
    },
    {
        id: 6,
        name: 'The Rickiverse',
        tagline: 'Fun project cataloguing the various Ricks from Rick and Morty -- created using vanilla Javascript/CSS',
        summary: 'Created during my time at Flatiron School, I spearheaded a group project inspired by the hit TV series Rick and Morty. I took charge of wireframing, meticulous planning, and dynamic code reviews, leading our team from conception to successful execution.',
        image: 'Rickiverse.png',
        tech: 'JavaScript, CSS, HTML',
        features: [
            'Seamlessly retrieves data from an internal db.json file using dynamic HTTP requests.',
            'Empowers users to select their favorite Rick from an interactive dropdown menu, instantly updating the display.', 
            'Enhances user engagement with clickable buttons on each image, making it easy to pick a Rick.',
            'Enables users to give a like (via button) to their chosen Rick, which updates the number of likes on the screen and persist throughout the session.',
            'Developed powerful scripts to seamlessly launch and manage both frontend and backend servers, ensuring smooth and efficient operations across the entire application stack.'
        ],
        ghLink:'https://github.com/racosta323/the-rickiverse/blob/main/README.md' ,
        siteLink: '',
        accomplishments: []
    }
]

