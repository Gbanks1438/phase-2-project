import React, {useEffect, useState} from "react";
import CarCollection from './CarCollection';
import YourGarage from './YourGarage';
// import DamagedCars from './DamagedCars';

function CarList() {

    const baseURL = "http://localhost:3000/classc_car_collection";
  
  const [listOfCarsArray, setListOfCarsArray] = useState([]);
  const [carGarageArray, setCarGarageArray] = useState([]);
  // const [damagedCarArray, setDamagedCarArray] = useState([]);
  
  function fetchUrl() {
    fetch(baseURL)
    .then(r=>r.json())
    .then(vehicleCollection => setListOfCarsArray(vehicleCollection))
  }

  useEffect(fetchUrl, []);

  function vehicleCardClicked(eachCar) {

      let checkForDupes = carGarageArray.find(
        (aVehicle)=>{return aVehicle.id === eachCar.id}
      )
  
      if (checkForDupes === undefined) {
        setCarGarageArray([...carGarageArray, eachCar])
    
      } 
      else {
        console.log("This car has already been rented!");
      }
      }

  const removeCarFromGarage =(car)=>{  
        const removeCar = carGarageArray.filter(
          (oneCar)=>{
            return car.id !== oneCar.id
          }
        )
        setCarGarageArray(removeCar)
      }
      
//STRETCH GOAL
  // function insuranceButtonClicked(eachCar) {
  //   let checkForDupes = listOfCarsArray.find(
  //     (aVehicle)=>{return aVehicle.id === eachCar.id}
  //   )
  //   if (checkForDupes === undefined) {
  //     setListOfCarsArray([...listOfCarsArray, eachCar])
  //   // console.log(listOfCarsArray)
  //   } else {
  //     console.log("ERR!");
  //   }
  //   }

  return (
    <div>
      <CarCollection 
        listOfCarsArray={listOfCarsArray}
        // insuranceButtonClicked={insuranceButtonClicked}
        vehicleCardClicked={vehicleCardClicked}
      />
      <YourGarage 
        carGarageArray={carGarageArray}
        vehicleCardClicked={vehicleCardClicked}
        removeCarFromGarage={removeCarFromGarage}
        // insuranceButtonClicked={insuranceButtonClicked}
      />
      </div>
  )
}

export default CarList;