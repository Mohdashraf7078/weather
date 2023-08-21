import { useEffect, useState } from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
import Details from "./components/Details";
import Error from "./components/Error";
import "./index.css";

function App() {
  const [weather, setWeather] = useState({});
  console.log(weather);

  useEffect(() => {
    getdata("bareilly");
  }, []);

  const getdata = async (city) => {
    const API_KEY = "3265874a2c77ae4a04bb96236a642d2f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };
  const cityName = (data) => {
    getdata(data);
  };

  return (
    <>
      <div className="cover bg-gray-100 min-h-screen">
        <div className="container mx-auto flex flex-col items-center px-3">
          <h2 className="my-4 font-bold text-2xl">Daily Weather</h2>
          <Search cityName={cityName} />
          {weather.cod === "404" ? <Error weather={weather} /> : ""}
          {weather.name ? <Weather weather={weather} /> : ""}
          {weather.name ? <Details weather={weather} /> : ""}
        </div>
      </div>
    </>
  );
}

export default App;
