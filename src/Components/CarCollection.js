import VehicleCard from './VehicleCard';
// import YourGarage from './YourGarage'
// import DamagedCars from './DamagedCars'

// {listOfCarsArray}, {insuranceButtonClicked}, {vehicleCardClicked}

function CarCollection(props){
return (
    <div>
    {props.listOfCarsArray.map(
        (eachCar)=>{
            console.log("Did I get the cars? --> ", eachCar) //Yes we are good to go!
            return (
                <VehicleCard 
                key={eachCar.id}
                eachCar={eachCar}
                // props.insuranceButtonClicked={insuranceButtonClicked}
                // props.vehicleCardClicked={vehicleCardClicked}
                />
            )
        })}
    </div>
)
}

export default CarCollection;