import React, {useEffect, useState} from "react";
import CarCollection from './CarCollection';
// import YourGarage from './YourGarage';
// import DamagedCars from './DamagedCars';

function CarList() {

    const baseURL = "http://localhost:3000/classc_car_collection";
  
  const [listOfCarsArray, setListOfCarsArray] = useState([]);
  // const [carGarageArray, setCarGarageArray] = useState([]);
  // const [damagedCarArray, setDamagedCarArray] = useState([]);
  
  function fetchUrl() {
    fetch(baseURL)
    .then(r=>r.json())
    .then(vehicleCollection => setListOfCarsArray(vehicleCollection))
  }

  useEffect(fetchUrl, []);

  // console.log("Did useEffect work? ", listOfCarsArray)
  
  return (
    <div>
      <CarCollection 
      listOfCarsArray={listOfCarsArray}
      />
      </div>
  )
}

export default CarList;