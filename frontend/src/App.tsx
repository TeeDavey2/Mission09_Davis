import './App.css';

import jsonData from './CollegeBasketballTeams.json';


// Functions

// Team Card Function
function Team({school, name, city, state}: {school: string; name: string; city: string; state: string}) {
    
  return(
    <>
      {/* Space for aesthetic */}
      <h3>-------------</h3> 

      {/* School and mascot name */}
      <h3>{school}: {name}</h3>
      
      {/* Location */}
      <h4>{city}, {state}</h4>
    </>
  )
}


// Returns a list of team cards
function TeamList() {
  return (
    <>
      {/* Heading */}
      <h2>NCAA Basketball Teams</h2>

      {/* Display of all team cards */}
      {
        jsonData.teams.map((singleTeam) => (
          <Team {...singleTeam}/>
        ))
      }
    </>
  );
}

// This is the Introduction heading
function Intro() {
  return(
    <>
      {/* Title */}
      <h1>Welcome to Mission #9!</h1>
      
      {/* Introduction to the website */}
      <h3>
        With March Madness upon us, here is a list of all the colleges in NCAA Basketball for your reference!
      </h3>
    </>
  );
}

function App() {


  return (
    <>
      {/* Include the intro text */}
      <Intro />

      {/* Include the team list */}
      <TeamList />
    </>
  )
}

export default App
