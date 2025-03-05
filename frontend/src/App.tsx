import './App.css'

const teamsData = [
  {
    school: "BYU",
    mascot: "Cougars",
    city: "Provo",
    state: "Utah"
  },
  {
    school: "UofU",
    mascot: "Red Hawk",
    city: "Salt Lake City",
    state: "Utah"
  },
];

function Team({school, mascot, city, state}: {school: string; mascot: string; city: string; state: string}) {
    
  return(
    <>
      <h2>School: {school}</h2>
      <h3>Mascot: {mascot}</h3>
      <h3>Location: {city}, {state}</h3>
    </>
  )
}

function TeamList() {
  return (
    <>
      {
        teamsData.map((singleTeam) => (
          <Team {...singleTeam}/>
        ))
      }
    </>
  );
}

function App() {


  return (
    <>
      <h1>Mission #9</h1>
      <h2>What are we about?</h2>
      <p>Text "introducing the user to what the site is"</p>

      <h2>Team Card</h2>
      <TeamList />
    </>
  )
}

export default App
