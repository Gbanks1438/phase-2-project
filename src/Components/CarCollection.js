import VehicleCard from './VehicleCard';

function CarCollection({vehicleCardClicked, insuranceButtonClicked, listOfCarsArray}) {
return (
    <div>
        <h2>Car Collection</h2>
    {listOfCarsArray.map(
        (eachCar)=>{
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