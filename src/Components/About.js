function About() {
  
  return (
    <div className="About-text">
        <br></br>
  <p>This is one of the most prestegious collections of classic cars, supercars, and all around oddities.</p>
  <p>Now you have the opportunity to rent one of these beauties for the day!</p>
  <p>Please be very careful when driving as these vehicles are irreplaceable.</p>
  <p>Every car comes with an <strong>Insurance Claim Form</strong> in case you are involved in an accident.</p>
    <br></br>
  <button className="Button" onClick={() => console.log("Button was pressed")}>Click to continue</button>
  </div>
  );
}

export default About;