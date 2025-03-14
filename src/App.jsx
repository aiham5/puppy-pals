import { useState } from "react";
import "./App.css";
import { puppyList } from "./data.js";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      <h1>Puppy Bowl</h1>

      {featPupId && featuredPup && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Tricks:</li>
            <ul>
              {featuredPup.tricks.length > 0 ? (
                featuredPup.tricks.map((trick) => (
                  <li key={trick.id}>{trick.title}</li>
                ))
              ) : (
                <li>No tricks yet!</li>
              )}
            </ul>
          </ul>
        </div>
      )}

      {puppies.map((pup) => (
        <p
          key={pup.id}
          onClick={() => setFeatPupId(pup.id)}
          style={{ cursor: "pointer" }}
        >
          {pup.name}
        </p>
      ))}
    </>
  );
}

export default App;
