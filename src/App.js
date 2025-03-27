import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HelloWorld from './challenges/L1_beginners/1_HellloWorld/hello-world-index.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            <Link to="/" className="home-link">React Challenges</Link>
          </h1>
          {/* <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
            </ul>
          </nav> */}
        </header>

        <main className="App-main">
          <Routes>
            <Route path="/" element={<HomeWithTabs />} />
            <Route path="/challenges/beginner/hello-world" element={<HelloWorld />} />
            {/* More routes for other challenges can be added here */}
          </Routes>
        </main>

        <footer className="App-footer">
          <p>React Challenges Practice Project</p>
        </footer>
      </div>
    </Router>
  );

function HomeWithTabs() {
  const [activeTab, setActiveTab] = React.useState('Beginner');

  const challenges = {
    Beginner: [
      { name: 'Hello World', path: '/challenges/beginner/hello-world', difficulty: 'Easy' },
      // Add more beginner challenges here
    ],
    Intermediate: [
      // Add intermediate challenges here
    ],
    Advanced: [
      // Add advanced challenges here
    ],
  };

  return (
    <div className="home-container">
      <h2>Welcome to React Challenges</h2>
      <p>Select a challenge from the navigation to get started.</p>

      <div className="tabs">
        {Object.keys(challenges).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="challenges-section">
        <h3>{activeTab} Challenges</h3>
        <div className="scrollable-container">
          <ul className="challenge-list">
            {challenges[activeTab].map((challenge, index) => (
              <li key={index}>
                <Link to={challenge.path}>{challenge.name}</Link>
                <span className="difficulty">{challenge.difficulty}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
}

// Home component for the landing page
// function Home() {
//   return (
//     <div className="home-container">
//       <h2>Welcome to React Challenges</h2>
//       <p>Select a challenge from the navigation to get started.</p>
      
//       <div className="challenges-section">
//         <h3>Beginner Challenges</h3>
//         <div className="scrollable-container">
//           <ul className="challenge-list">
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             <li>
//               <Link to="/challenges/beginner/hello-world">Hello World</Link>
//               <span className="difficulty">Easy</span>
//             </li>
//             {/* More beginner challenges can be listed here */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;