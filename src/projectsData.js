export const projectsData = [
    {
        id: 1,
        name: "Personal Portfolio",
        tagline: 'A dynamic showcase of my technical expertise and creativity, featuring innovative and engaging features.',
        summary: 'Developed a groundbreaking app that translates dog barks into human speech, revolutionizing pet communication. Achieved 1 million downloads in the first month and received accolades from major tech blogs.',
        image: '/showmate_homepage.png',
        tech: 'JavaScript, Python, React',
        features: [
            'Responsive images?', 
            'navbar'
        ],
        ghLink: '',
        siteLink: ''
    },
    {
        id: 2,
        name: 'Showmate',
        tagline: 'Discover, review, and connect over live concerts. Built with Flask and React for seamless navigation and a vibrant music community.',
        summary: "the app allows users to review and explore concerts, creating a community centered around live music experiences. Built with Flask and SQLAlchemy for the backend and React with React Router for the frontend, ShowMate features a robust data management system, full CRUD functionality, validations, and state management using useContext. The app includes many-to-many relationships and implements various client-side routes for smooth navigation.",
        image: '/showmate_homepage.png',
        tech: 'JavaScript, Python, React, Bootstrap, HTML, CSS, PostgreSQL, Flask, SQLAlchemy, Formik, Yup',
        features: [
            'Responsive images?', 
            'navbar'
        ],
        features2: "This Python script defines a Flask web application with RESTful API endpoints for managing artists, reviews, and users. It includes routes for creating, retrieving, updating, and deleting records in a relational database, with models for Artist, Review, and User. The application uses SQLAlchemy for ORM, handles session management for user authentication, and provides functionality for logging in and out. Error handling and data validation are implemented to ensure smooth operations. managing user authentication and fetching data such as artists and reviews. It conditionally renders nested routes or an authentication form based on the user's logged-in status. The component includes a navigation bar, handles user logout, and utilizes React Bootstrap for styling. It sets up context to share state and functions with nested components and ensures proper data fetching and UI updates using React's state and effect hooks.",
        ghLink: 'https://github.com/racosta323/phase-5-project-showmate/blob/main/README.md',
        siteLink: 'https://phase-5-project-showmate.onrender.com/'
    },
    {
        id: 3,
        name: 'Friday Fund',
        tagline: 'Simplifies savings goals, investment tracking, and financial management with intuitive design and robust web development features.',
        summary: 'The Friday Fund is a web application designed to simplify financial management and investment tracking, allowing users to set and achieve savings goals with ease. The project demonstrates comprehensive web development skills, including models, relationships, validations, routes, and RESTful API implementation. It features a backend with robust data integrity measures, full CRUD operations, and frontend validation using Formik and Yup. The app provides an intuitive user experience with client-side routing and seamless data interaction via the Fetch API. Setup instructions and a focus on feedback and continuous improvement are included, making it a practical and user-friendly tool for managing personal finances.',
        image: '/FridayFund.png',
        tech: 'JavaScript, React, React Router DOM Python, SQL, SQLAlchemy, Formik, Faker',
        features: [
            'Responsive images?', 
            'navbar'
        ],
        features2: 'The code implements a Flask-based RESTful API for managing users, goals, and their relationships, with features for user authentication, session management, and CRUD operations on various resources. It integrates with a database using ORM, handles HTTP responses, and includes debugging tools for development.',
        ghLink:'https://github.com/racosta323/kpkr-phase-4-project/blob/main/README.md' ,
        siteLink: ''
    },
    {
        id: 4,
        name: 'CatSpace',
        tagline: 'A purrfect single-page app built with React, inspired by a shared love for cats.',
        summary: 'showcases cats from a database, allowing users to search, add, and view detailed profiles of cats. It utilizes React routing, React Bootstrap styling, and integrates with the Cat as a Service (CATAAS) API for profile pictures. Key features include a searchable homepage, an "Add a Cat" page, detailed profile pages, and an informative "About" page. The app also has a custom error page for navigational errors.',
        image: '/CatSpace.png',
        tech: 'JavaScript, React, Bootstrap, HTML, CSS',features: [
            'Responsive images?', 
            'navbar'
        ],
        features2: '',
        ghLink:'https://github.com/racosta323/her-phase-2-project-catspace/blob/main/README.md' ,
        siteLink: ''
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
        features2: 'Error handling; debugging capabilities',
        ghLink:'https://github.com/racosta323/brt-phase-3-project/blob/main/README.md' ,
        siteLink: ''
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
        siteLink: ''
    }
]

