import './App.css';
import axios from "axios"
import { useState, useEffect } from "react"
import Loading from './components/Loading';
import WeatherCard from './components/WeatherCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Information from './components/information';

function App() {
  const [data, setData] = useState({});
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [address, setAddress] = useState();
  const [loading, setLoading] = useState(true);

  const getData = async (lat, long) => {
    try{
     
     const res = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,relativehumidity_2m,cloudcover,apparent_temperature`);
     setData(res.data);
     
   }catch(error) {
     console.log(error);
   };
 }
 const getAddress = async (lat, long) => {
  try{
   
   const res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=7d182227bd0c4d61a48dfba36c4ca4dc`);
   setAddress(res.data)
   
 }catch(error) {
   console.log(error);
 };
}

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    
    getData(lat, long);
    getAddress(lat, long);
    setLoading(false);
    },[lat,long]);
  
if(!data || !address)return(
  <Loading/>
)

if(data && address) return (
    <div>
      <Navbar/>
      <Hero address={address.results[0].formatted}/>
      <WeatherCard temp={data.hourly.temperature_2m}
                   humi={data.hourly.relativehumidity_2m}
                   cloudcover={data.hourly.cloudcover}
                   apparentTemp={data.hourly.apparent_temperature}/>
      <Information/>
      <Footer/>
    </div>
  )};

export default App;
