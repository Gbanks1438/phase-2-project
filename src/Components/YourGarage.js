import VehicleCard from './VehicleCard'

// { vehicleCardClicked, insuranceButtonClicked } //Other destructured props NOT currently in use
function YourGarage({carGarageArray, removeCarFromGarage }) {
    console.log(carGarageArray)

    function removedFromGarage(eachCar) {
        removeCarFromGarage(eachCar)
    }

    return (
        <div>
            <h2>Your Garage</h2>
        {
        carGarageArray.map((eachCar)=>{
          return <VehicleCard 
          key={eachCar.id} 
          eachCar={eachCar}
          vehicleCardClicked={removedFromGarage}
          />
        })
      }
    </div>
    )
}

export default YourGarage;
