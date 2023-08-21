const Error = ({ weather }) => {
  return (
    <div className="text-center mt-4 text-red-600">
      <h2 className="font-bold text-md">Error : {weather.cod}</h2>
      <h3 className="font-bold text-md">{weather.message}</h3>
      <p className="text-xl">Please enter valid name</p>
    </div>
  );
};
export default Error;
