const Weather = ({ weather }) => {
  return weather ? (
    <div className="w-full">
      <div className="text-center">
        <h1 className="text-4xl">{weather.name}</h1>
        <div className="flex items-center justify-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="icon"
          ></img>
          <h2 className="font-bold text-5xl">{weather.main.temp}°C</h2>
        </div>
        <div className="flex items-center justify-center mb-2">
          <div>
            <span className="text-md font-bold">
              feel likes : {weather.main.feels_like}°C
            </span>
          </div>
          <div>
            <i className="text-red-400 mx-2 fa-solid fa-angle-up"></i>
            <span>{weather.main.temp_max}°</span>
          </div>
          <div>
            <i className="text-green-400 mx-2 fa-solid fa-angle-down"></i>
            <span>{weather.main.temp_min}°</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Weather;
