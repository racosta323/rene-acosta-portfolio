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
        summary: 'This Python program facilitates tracking and managing travel experiences. It interacts with users to gather personal and trip information, allowing them to create, update, and remove travel records. Users can filter and sort their trips by various criteria such as stars, state, or country, and view trips made by others. The program also enables updating traveler details and resetting all data if needed. It includes error handling and debugging capabilities to ensure smooth operation and data integrity.',
        image: 'Travel CLI.png',
        tech: 'Python, sqlite3, SQLAlchemy, ipdb',
        features: [
            'Responsive images?', 
            'navbar'
        ],
        features2: 'Error handling; debugging capabilities',
        ghLink:'https://github.com/racosta323/brt-phase-3-project/blob/main/README.md' ,
        siteLink: ''
    },
    {
        id: 6,
        name: 'The Rickiverse',
        tagline: 'Fun project cataloguing the various Ricks from Rick and Morty -- created using vanilla Javascript/CSS',
        summary: 'A Vanilla JS and CSS project that lets users choose a Rick from a dropdown and like it. The app fetches data from an internal db.json file using HTTP methods and dynamically updates the DOM using CSS selectors. With five event listeners, it offers a responsive and interactive user experience.',
        image: 'Rickiverse.png',
        tech: 'JavaScript, CSS, HTML',
        features: [
            'Responsive images?', 
            'navbar'
        ],
        features2: 'Maintains "like" counts preserved during session. Scripts for starting both frontend and backend servers',
        ghLink:'https://github.com/racosta323/the-rickiverse/blob/main/README.md' ,
        siteLink: ''
    }
]

