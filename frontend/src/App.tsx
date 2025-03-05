import './App.css';

import jsonData from './CollegeBasketballTeams.json';


// Functions

// Team Card Function
function Team({school, name, city, state}: {school: string; name: string; city: string; state: string}) {
    
  return(
    <>
      {/* Space for aesthetic */}
      <h2>-------------</h2> 

      {/* School and mascot name */}
      <h2>{school}: {name}</h2>
      
      {/* Location */}
      <h3>{city}, {state}</h3>
    </>
  )
}


// Returns a list of team cards
function TeamList() {
  return (
    <>
      {/* Heading */}
      <h1>NCAA Basketball Teams</h1>

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
      <h3>By Trevor Davis</h3>
      
      {/* Introduction to the website */}
      <h2>
        With March Madness upon us, here is a list of information for all the college basketball teams in the NCAA!
      </h2>
    </>
  );
}

function Spacing(){
  return(
    <>
      <br />
      <br />
    </>
  )
}

function App() {


  return (
    <>
      {/* Include the intro text */}
      <Intro />

      {/* Aesthetic Spacing */}
      <Spacing />

      {/* Include the team list */}
      <TeamList />
    </>
  )
}

export default App
