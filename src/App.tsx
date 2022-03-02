import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Newusers from './components/view/newUser';
import Allusers from './components/view/allUsers';
import Navbar from './components/view/Navbar';
import Edituser from './components/view/editUser';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>   
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Allusers/>} ></Route> 
        <Route  path="/newusers" element={<Newusers/>} > </Route>
        <Route  path="/editusers/:id" element={<Edituser/>} ></Route>
         
         
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
