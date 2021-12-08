//styling for the card that holds each car goes here

function VehicleCard(props) {
    return (
        <div className="ui column">
          <div
            className="ui card"
            // key={bot.id}
            // onClick={() => 
            //   handleClick(bot)
        //   }
          >
            <div className="image">
              <img alt="Yikes!" 
            //   src={props.img_url} 
              />
            </div>
            <div className="content">
              <div className="header">
                {/* {props.make} */}
                {/* <i className={botTypeClasses[bot.bot_class]} /> IDK what this would be */}
              </div>
              <div className="meta text-wrap">
                {/* <small>{bot.catchphrase}</small> */}
              </div>
            </div>
            <div className="extra content">
              <span>
                {/* <i className="icon heartbeat" />
                {bot.health} */}
              </span>
    
              <span>
                {/* <i className="icon lightning" />
                {bot.damage} */}
              </span>
              <span>
                {/* <i className="icon shield" />
                {bot.armor} */}
              </span>
              <span>
                <div className="ui center aligned segment basic">
                  <button
                    className="ui mini red button"
                    // onClick={() =>
                    //  handleDeletionClick()
                    // }
                  >
                    x
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      );
}

export default VehicleCard;