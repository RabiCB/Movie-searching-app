import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mtgshow from "./MTGhome/Mtgshow";
import Header from "./Components/Header";
import Signup from "./signup/Signup";
import {useStateValue} from './Stateprovider';


function App() {
  const [{user}, dispatch]=useStateValue();
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {!user?(
            <>
          <Route path="/" element={<Home />}></Route>

          <Route path="/header" element={<Header />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          </>):(
            <>
            <Route path="/mtgshow" element= {<Mtgshow />}/>
            <Route path="/signup" element={<Signup />}></Route>
        
            </>
          )}
      
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;