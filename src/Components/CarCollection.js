// import { useEffect, useState } from 'react';
// import VehicleCard from './VehicleCard';
// import YourGarage from './YourGarage'
// import DamagedCars from './DamagedCars'

function CarCollection(props){
return (
    <div>
    {props.listOfCarsArray.map(
        (eachCar)=>{
            console.log("Did I get the cars? --> ", eachCar)
        })}
        {/* <VehicleCard listOfCarsArray={listOfCarsArray}/> */}
    </div>
)
}

export default CarCollection;