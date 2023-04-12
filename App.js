import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios'
function App() {
  const apiKey="b2060776d427179dff85f2fa52ddab39"
  const [datas,setData]=useState({})
  const [city,setCity]=useState({})



  const getweatherdetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=b2060776d427179dff85f2fa52ddab39"
    axios.get(apiURL).then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleSearch=()=>{
    getweatherdetails(city)
  }
const handleonchange=(e)=>{
        setCity(e.target.value)
}


  return (
   <div className="col-md-12">
    <div className="weatherbg">
      <h1 className="heading">Weather app</h1>
      <div className="d-grid gap-3 col-4 mt-4">
      <input type="text" className="form-control " onChange={handleonchange} value={city}/>
      <button className="btn btn-primary" onClick={handleSearch}  type="button">Search</button>
      </div>
    </div>
    <div className="col-md-12 text-center ">

    <div className=" shadow rounded weatheresultbox">
     <img  className="weathericon" src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" alt="" />
     <h5 className="weathercity"> {datas.name} </h5>
    <h5 className="weathertemp"> {(datas?.main?.temp-273).toFixed(2)}°C</h5>
    </div>
   
      
   
    </div>
   </div>

  );
}

export default App;


