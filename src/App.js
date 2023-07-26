import { useState } from 'react';
import './App.css';
import List from './List';
import data from './data';

function App() {
  const [people, setPeople] =useState(data);
  function clearAllRecords () {
    setPeople([]);
  }
  return (
    <main>
      <section className="container">
        <h3>{[].length}  Birthdays Today</h3>
        <List people={people} />
				<button onClick={clearAllRecords}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
