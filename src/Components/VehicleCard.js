function VehicleCard(props) {
    return (
        <div className="ui column">
          <div
            className="ui card"
            key={props.eachCar.id}
            onClick={() => 
                console.log("A vehicle card was clicked!")
          }
          >
            <div className="image">
              <img alt="Broken Link!" 
              src={props.eachCar.img_url} 
              />
            </div>
            <div className="content">
              <div className="header">
                {props.eachCar.make}
              </div>
              <div className="meta text-wrap">
                <small>{props.eachCar.model}</small>
              </div>
            </div>
            <div className="extra content">
              <span>
                {props.eachCar.year}
              </span>
              <span>
                {props.eachCar.engine}
              </span>
              <span>
                {props.eachCar.top_speed}
              </span>
              <span>
                {props.eachCar.horsepower}
              </span>
              <span>
                {props.eachCar.convertable}
              </span>
              <span>
                {props.eachCar.drive_train}
              </span>
              

              <span>
                <div className="ui center aligned segment basic">
                  <button
                    className="Insurance_button"
                    onClick={() =>
                    console.log("Car was in an accident!")
                    }
                  >
                    File Insurance Claim
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      );
}

export default VehicleCard;