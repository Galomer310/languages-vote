import React, { useState } from 'react';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to increase votes for a specific language
  const handleVote = (languageName) => {
    const updatedLanguages = languages.map(language => 
      language.name === languageName 
        ? { ...language, votes: language.votes + 1 } 
        : language
    );
    setLanguages(updatedLanguages);
  };

  return (
    <div>
      <h1>Vote Your Language!</h1>
      <div>
        {languages.map((language) => (
          <div key={language.name} style={{ marginBottom: "10px" }}>
            <span>{language.votes} </span>
            <span>{language.name} </span>
            <a 
              href="#"
              onClick={() => handleVote(language.name)}
              style={{ color: 'blue', textDecoration: 'underline' }}
            >
              Click Here
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
