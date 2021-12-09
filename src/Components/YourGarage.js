import VehicleCard from './VehicleCard'

function YourGarage({carGarageArray, vehicleCardClicked, insuranceButtonClicked, removeCarFromGarage}) {
    console.log(carGarageArray)

    function removedFromGarage(eachCar) {
        removeCarFromGarage(eachCar)
    }

    return (
    <div>
        <h2>Your Garage</h2>
        {
        carGarageArray.map((eachCar)=>{
            // console.log(car)
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

//Add POST somewhere here