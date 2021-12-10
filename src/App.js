import { Route, Routes } from "react-router-dom"; //Navigate
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import CarList from './Components/CarList';
import Form from './Components/Form';


function App() {
  
  return (
    <div className="App">
    <Header />

<Routes>
    {/* <Route path='/' element={<Navigate replace to="/about" />} /> */}
    <Route path='/about' element={<About />} />
   
    <Route path='/carlist' element={<CarList />} />
 
    <Route path='/form' element={<Form />} />
        
</Routes>
  </div>
  );
}

export default App;