# React Challenges Project Structure

```
react-challenges/
├── public/                      # Static files
│   ├── index.html               # HTML template
│   ├── favicon.ico              # Favicon
│   └── assets/                  # Static assets like images
│
├── src/                         # Source code
│   ├── index.js                 # Entry point
│   ├── App.js                   # Main App component
│   ├── App.css                  # App-level styles
│   │
│   ├── challenges/              # Main challenges folder
│   │   ├── beginner/            # Beginner level challenges
│   │   │   ├── StateCounter/    # Example challenge: State Counter
│   │   │   │   ├── index.jsx    # Challenge component 
│   │   │   │   ├── Problem.md   # Challenge description
│   │   │   │   ├── Solution.jsx # Example solution (can be hidden initially)
│   │   │   │   └── styles.css   # Component-specific styles
│   │   │   │
│   │   │   ├── TodoList/        # Another beginner challenge
│   │   │   └── ...
│   │   │
│   │   ├── intermediate/        # Intermediate level challenges
│   │   │   ├── DataFetching/    # API fetching challenge
│   │   │   ├── FormValidation/  # Form validation challenge
│   │   │   └── ...
│   │   │
│   │   └── advanced/            # Advanced level challenges
│   │       ├── CustomHooks/     # Custom hooks implementation
│   │       ├── ContextAPI/      # Context API challenge
│   │       ├── ReduxIntegration/ # State management with Redux
│   │       └── ...
│   │
│   ├── components/              # Shared/common components
│   │   ├── Layout/              # Layout components
│   │   │   ├── index.jsx        # Main layout component
│   │   │   └── styles.css       # Layout styles
│   │   ├── Navigation/          # Navigation components
│   │   ├── ChallengeCard/       # Card to display challenge info
│   │   └── ...
│   │
│   ├── hooks/                   # Custom hooks
│   │   ├── useLocalStorage.js   # Example: Local storage hook
│   │   └── ...
│   │
│   ├── context/                 # Context providers
│   │   ├── ChallengesContext.js # Manage challenge state
│   │   └── ThemeContext.js      # Theme management (light/dark)
│   │
│   ├── utils/                   # Utility functions
│   │   ├── formatters.js        # Data formatting functions
│   │   ├── validators.js        # Validation helpers
│   │   └── ...
│   │
│   └── styles/                  # Global styles
│       ├── global.css           # Global CSS
│       ├── variables.css        # CSS variables
│       └── ...
│
├── tests/                       # Test files
│   ├── unit/                    # Unit tests
│   └── integration/             # Integration tests
│
├── .gitignore                   # Git ignore file
├── package.json                 # Project dependencies and scripts
├── README.md                    # Project documentation
└── .env                         # Environment variables (add to .gitignore)
```
