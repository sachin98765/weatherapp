import React from "react"
import { FaSearch } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { WiStrongWind } from "react-icons/wi"
import wicon from "../src/assets/wicon.png"

const App = () => {
  return (
    <div className="flex  items-center justify-center h-screen bg-gradient-to-br from-green-950 to-black text-white">
      {/* Serch bar and icon */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 mb-6 w-80 shadow-lg">
        <input type="text" placeholder="Search" className="flex-1 text-black outline-none px-2"/>
        <FaSearch className="text-gray-500  cursor-pointer" />
      </div>

      {/* Wetaher icon */}
      <img src={wicon} alt="" />

      {/* temprature and Wind Speed*/}
      <h1>40°C</h1>
      <h2>Kolkata</h2>

      {/* humidity and city name */}
      <div>
        <div>
          <WiHumidity />
          <span>80%</span>
          <p>Humidity</p>
        </div>
        <div>
          <WiStrongWind />
          <span>10 km/h</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}

export default App
