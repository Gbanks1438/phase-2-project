function VehicleCard(props) {
    return (
        <div className="container">

          <div
            className="card"
            key={props.eachCar.id}
            onClick={() => console.log("A vehicle card was clicked!")}>

            <div className="image">
              <img alt={props.eachCar.make} src={props.eachCar.img_url}/>
            </div>

            <div className="content">
                <p><strong>Year:</strong> {props.eachCar.year}</p>
                <p><strong>Make:</strong> {props.eachCar.make}</p>
                <p><strong>Model:</strong> {props.eachCar.model}</p>
            </div>

              <div className="extra_content">
                    <table>
                        <tbody>
                            <tr>
                                <th>Top Speed</th>
                                <th>Horse Power</th>
                                <th>Engine Type</th>
                                <th>Drive Train</th>
                                <th>convertable</th>
                            </tr>
                            <tr>
                                <td>{props.eachCar.top_speed}</td>
                                <td>{props.eachCar.horsepower}</td>
                                <td>{props.eachCar.engine}</td>
                                <td>{props.eachCar.drive_train}</td>
                                <td>{props.eachCar.convertable}</td>
                            </tr>
                        </tbody>
                    </table>
             </div>

          </div>
                <div className="segment">
                  <button className="insurance_button" onClick={() => console.log("Car was in an accident!")}>File Insurance Claim</button>
                </div>
        </div>
      );
}

export default VehicleCard;