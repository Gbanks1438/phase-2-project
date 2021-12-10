import VehicleCard from './VehicleCard';

function CarCollection({vehicleCardClicked, insuranceButtonClicked, listOfCarsArray}) {
return (
    <div className="car-collection">
        <h2>Car Collection</h2>
    {listOfCarsArray.map(
        (eachCar)=>{
            return (
                <div>
                <VehicleCard 
                key={eachCar.id}
                eachCar={eachCar}
                insuranceButtonClicked={insuranceButtonClicked}
                vehicleCardClicked={vehicleCardClicked}
                />
                </div>
            )
        })}
    </div>
)
}

export default CarCollection;