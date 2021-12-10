import VehicleCard from './VehicleCard'

function YourGarage({carGarageArray, removeCarFromGarage }) {
    console.log(carGarageArray)

    function removedFromGarage(eachCar) {
        removeCarFromGarage(eachCar)
    }

    return (
        <div className="garage">
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