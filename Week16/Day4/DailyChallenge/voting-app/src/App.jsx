import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
                                            {name: "Php", votes: 0},
                                            {name: "Python", votes: 0},
                                            {name: "JavaSript", votes: 0},
                                            {name: "Java", votes: 0}
                                          ]);

  const addVote = (index) => {
    const updated = languages.map((lang, i) =>
      i === index ? { ...lang, votes: lang.votes + 1 } : lang
    );
    setLanguages(updated);
  };

  return (
    <div>
      <h2>Vote for your favorite language:</h2>

      {languages.map((lang, index) => (
        <div key={index}>
          <span>{lang.name}: {lang.votes} votes</span>
          <button onClick={() => addVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );

}

export default App
