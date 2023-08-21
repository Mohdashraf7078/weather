import { useState } from "react";
const Search = ({ cityName }) => {
  const [data, setData] = useState("");
  // console.log(data)
  const getCity = (e) => {
    setData(e.target.value);
  };
  const getData = (e) => {
    e.preventDefault();
    if (data == "") {
      return;
    }
    cityName(data);
  };
  return (
    <div className="flex items-center justify-between my-2">
      <form onSubmit={getData}>
        <input
          className="rounded-md"
          type="text"
          value={data}
          onChange={getCity}
          placeholder="City"
        />
        <button>
          <i className="bg-gray-300 p-3 rounded-full ml-2 fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
