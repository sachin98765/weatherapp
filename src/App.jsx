import React from "react"
import { FaSearch } from "react-icons/fa"
import { WiHumidity } from "react-icons/wi"
import { WiStrongWind } from "react-icons/wi"
import wicon from "../src/assets/wicon.png"

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-950 to-black text-white">
      {/* Serch bar and icon */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 mb-6 w-80 shadow-lg">
        <input type="text" placeholder="Search" className="flex-1 text-black outline-none px-2"/>
        <FaSearch className="text-gray-500  cursor-pointer" />
      </div>

      {/* Wetaher icon */}
      <img src={wicon} alt="" className="w-20 h-20 mb-4" />

      {/* temprature and Wind Speed*/}
      <h1 className="text-4xl font-bold">40°C</h1>
      <h2 className="text-2xl mt-2 font-semibold">Kolkata</h2>

      {/* humidity and city name */}
      <div className=" w-full max-w-md mt-67 flex flex-col md:flex-row items-center justify-between md:items-start">
        <div className="flex flex-col items-center ">
          <WiHumidity className="text-3xl" />
          <span className="text-lg font-medium">80%</span>
          <p className="text-sm">Humidity</p>
        </div>
        <div className="flex flex-col items-center">
          <WiStrongWind className="text-3xl" />
          <span className="text-lg font-medium">10 km/h</span>
          <p className="text-sm">Wind Speed</p>
        </div>
      </div>
    </div>
  )
}

export default App
