import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Customer from './coffe_component/Customer';
import Header from './Header/header';
import { Imgfolder } from './allcomponen/Imgfolder';
import Uploadedimages from '../../myfire/Uploadedimages';
//import ImesUplooo from '../../myfire/Uploadedimages';
// import Applod from '../../Midey';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>vite</h1>
 
      {/* <Header/> */}
      <div>
      
        {/* <Routes>
          <Route path='/customer' element={<Customer/>}/>
        </Routes> */}
  
            {/* <Imgfolder/>  */}
<Uploadedimages/>
             {/* <Applod/> */}

             <br></br>
             {/* <ImesUplooo/> */}
      </div>
      
    </>
  )
}

export default App
