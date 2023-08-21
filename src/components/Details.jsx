const Details = ({ weather }) => {
  return (
    <div className="w-full max-w-sm">
      <ul className="mt-4 bg-white p-4 rounded-md">
        <li className="flex items-center justify-between ">
          <div>
            <i className="mr-3 fa-solid fa-location-dot"></i>
            <span>Location</span>
          </div>
          <b className="text-sm">
            {weather.name},{weather.sys.country}
          </b>
        </li>
        <hr className=" my-2" />
        <li className="flex items-center justify-between">
          <div>
            <i className="mr-3 fa-solid fa-temperature-three-quarters"></i>
            <span>Feels like</span>
          </div>
          <b className="text-sm">{weather.main.feels_like}°C</b>
        </li>
        <hr className=" my-2" />
        <li className="flex items-center justify-between ">
          <div>
            <i className="mr-3 fa-solid fa-cloud"></i>
            <span>Clouds</span>
          </div>
          <b className="text-sm">{weather.clouds.all}%</b>
        </li>
        <hr className=" my-2" />

        <li className="flex items-center justify-between">
          <div>
            <i className="mr-3 fa-solid fa-water"></i>
            <span>Humidity</span>
          </div>
          <b className="text-sm">{weather.main.humidity}</b>
        </li>
        <hr className=" my-2" />
        <li className="flex items-center justify-between">
          <div>
            <i className="mr-3 fa-solid fa-bars"></i>
            <span>description</span>
          </div>
          <b className="text-sm">{weather.weather[0].description}</b>
        </li>
        <hr className=" mt-2" />
      </ul>
    </div>
  );
};

export default Details;
