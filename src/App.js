// import { useEffect } from 'react';
import './App.css';
// import { useState } from "react";

// import CarCollection from './CarCollection'
// import YourGarage from './YourGarage'
// import DamagedCars from './DamagedCars'

////fetch at this level and insert most of the functions here

function App() {

  const baseURL = "http://localhost:3000/classc_car_collection";
  
  // const [carCollectionArray, setCarCollectionArray] = useState([]);
  // const [carGarageArray, setCarGarageArray] = useState([]);
  // const [damagedCarArray, setDamagedCarArray] = useState([]);

  function fetchUrl () {
    fetch(baseURL)
    .then(r=>r.json())
    .then(vehicleCollection => vehicleCollection.map(
      (eachCar) => {
        console.log("eachCar --> ", eachCar)
       } ))
    // .then(vehicle => setCarCollectionArray(vehicle))
  }
  fetchUrl()
  // useEffect(fetchUrl, []);
  // console.log("Did useEffect work? ", carCollectionArray)
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Some Text
        </p>
      </header>
    </div>
  );
}

export default App;


//trying to figure out this [ubic API
// const url = "http://api.carmd.com/v3.0/image?year=2015&make=CHEVROLET&model=EQUINOX&engine=L4, 2.4L; DOHC; 16V; DI; FFV";
// const response = fetch(url, {
//   method: 'GET',
//   mode: 'cors',
//   cache: 'no-cache',
//   credentials: 'same-origin',
//   headers: {
//     'Content-Type': 'application/json',
//     "authorization":"Basic ZWU1M2Y2MjItYzYxMy00NmM1LTg0MDAtYzIyOWIxOGZmNGJl",
//     "partner-token":"4c83ec36d19d4023bba3fc1166781431"    
//   },
//   redirect: 'follow',
//   referrerPolicy: 'no-referrer',
//   body: JSON.stringify(data)
// });
// return response.json();
// }

// postData('https://example.com/answer', { answer: 42 })
// .then(data => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });]