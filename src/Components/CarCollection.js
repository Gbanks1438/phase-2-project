import VehicleCard from './VehicleCard';
// import YourGarage from './YourGarage'
// import DamagedCars from './DamagedCars'

function CarCollection(props){
return (
    <div>
    {props.listOfCarsArray.map(
        (eachCar)=>{
            // console.log("Did I get the cars? --> ", eachCar) //Yes we are good to go!
            return (
                <VehicleCard 
                key={eachCar.id} 
                eachCar={eachCar}
                />
            )
        })}
    </div>
)
}

export default CarCollection;