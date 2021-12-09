import VehicleCard from './VehicleCard';
// import YourGarage from './YourGarage'
// import DamagedCars from './DamagedCars'

 
function CarCollection({vehicleCardClicked, insuranceButtonClicked, listOfCarsArray}) {
    // console.log("What it passed? ", insuranceButtonClicked)
return (
    <div>
        <h2>Car Collection</h2>
    {listOfCarsArray.map(
        (eachCar)=>{
            // console.log("Did I get the cars? --> ", eachCar) //Yes we are good to go!
            return (
                <VehicleCard 
                key={eachCar.id}
                eachCar={eachCar}
                insuranceButtonClicked={insuranceButtonClicked}
                vehicleCardClicked={vehicleCardClicked}
                />
            )
        })}
    </div>
)
}

export default CarCollection;