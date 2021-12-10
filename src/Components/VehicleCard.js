function VehicleCard({eachCar, insuranceButtonClicked, vehicleCardClicked}) {
  return (
      <div className="container">

        <div
          className="card"
          key={eachCar.id}
          onClick={() => 
          vehicleCardClicked(eachCar)
          }>

          <div className="image">
            <img alt={eachCar.make} src={eachCar.img_url}/>
          </div>

          <div className="content">
              <p><strong>Year:</strong> {eachCar.year}</p>
              <p><strong>Make:</strong> {eachCar.make}</p>
              <p><strong>Model:</strong> {eachCar.model}</p>
          </div>

            <div className="extra_content">
                  <table>
                      <tbody>
                          <tr>
                              <th>Top Speed</th>
                              <th>Horse Power</th>
                              <th>Engine Type</th>
                              <th>Drive Train</th>
                              <th>convertible</th>
                          </tr>
                          <tr>
                              <td>{eachCar.top_speed}</td>
                              <td>{eachCar.horsepower}</td>
                              <td>{eachCar.engine}</td>
                              <td>{eachCar.drive_train}</td>
                              <td>{eachCar.convertable}</td>
                          </tr>
                      </tbody>
                  </table>
           </div>

        </div>
              <div className="segment">
                <button className="insurance_button" 
                onClick={() => 
                insuranceButtonClicked(eachCar)
                }>File Insurance Claim</button>
              </div>
      </div>
    );
}

export default VehicleCard;