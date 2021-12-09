import { useState } from 'react';

const CreateNewVehicle = () => {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [img_url, setImg_url] = useState("https://static.foxdealer.com/681/2021/10/VDP-Carousel-Image.jpg");
    const [engine, setEngine] = useState("");
    const [top_speed, setTop_speed] = useState("");
    const [horsepower, setHorsepower] = useState("");
    const [convertable, setConvertable] = useState("");
    const [drive_train, setDrive_train] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const vehicle = { make, model, year, img_url, engine, top_speed, horsepower, convertable, drive_train };

        setIsPending(true);

        fetch("http://localhost:3000/classc_car_collection", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(vehicle)
        }).then(() => {
            console.log("A new vehicle was added");
            setIsPending(false);
        })
     }

return (
<div className="container">
    <h2>Your Garage</h2>
        <div className="create">
            <h3>Add a new car</h3>
            <form onSubmit={handleSubmit}>
                <label>Make:</label>
                <input
                    type="text"
                    required
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    />
                <label>Model:</label>
                <input
                    type="text"
                    required
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    />
                <label>Year:</label>
                <input
                    type="text"
                    required
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    />
                <label>Image Link:</label>
                <input
                    type="text"
                    required
                    value={img_url}
                    onChange={(e) => setImg_url(e.target.value)}
                    />
                <label>Engine Type:</label>
                <input
                    type="text"
                    required
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    />
                <label>Top Speed:</label>
                <input
                    type="text"
                    required
                    value={top_speed}
                    onChange={(e) => setTop_speed(e.target.value)}
                    />
                <label>Horsepower:</label>
                <input
                    type="text"
                    required
                    value={horsepower}
                    onChange={(e) => setHorsepower(e.target.value)}
                    />
                 <label>Convertable:</label>
                 <select
                    value={convertable}
                    onChange={(e) => setConvertable(e.target.value)}
                    >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                <label>Drive train:</label>
                <select
                    value={drive_train}
                    onChange={(e) => setDrive_train(e.target.value)}
                    >
                      <option value="FWD">FWD</option>
                        <option value="RWD">RWD</option>
                        <option value="AWD">AWD</option>
                        <option value="4x4">4x4</option>
                        </select>  
                    { !isPending &&<button>Add new car</button>}
                    { isPending &&<button disabled>Adding car...</button>}
            </form>
        </div>
</div>
        );
     }

     export default CreateNewVehicle;