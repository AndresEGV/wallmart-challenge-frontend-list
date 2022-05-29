import React, { useEffect, useState } from "react";
import axios from "axios";
const ShipList = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [shipsApi, setShipsApi] = useState([]);
  useEffect(() => {
    const getShips = async () => {
      const { data } = await axios.get(
        import.meta.env.VITE_API_URL + `/?page=${page}`
      );
      setShipsApi(data.results);
      console.log(data);
    };
    getShips();
  }, [page]);

  const handleNext = () => {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  };

  const handlePrevius = () => {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {shipsApi.map((ship) => (
          <div
            key={ship.name}
            href="#"
            className="flex flex-col  p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 text-center">
              {ship.name}
            </h5>
            <div className="flex flex-col items-stretch">
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold text-white mr-3">Model: </span>
                {ship.model}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold text-white mr-3">
                  Manufacturer:{" "}
                </span>
                {ship.manufacturer}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold text-white mr-3">Passengers: </span>
                {ship.passengers}
              </p>

              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold text-white mr-3">
                  Star Ship Class:{" "}
                </span>
                {ship.starship_class}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <span className="font-bold text-white mr-3">
                  Cargo Capacity:{" "}
                </span>
                {ship.cargo_capacity}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-evenly mt-20">
        <button
          disabled={page === 1}
          type="button"
          className="text-white dark:bg-gray-700 hover:bg-sky-700  font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 disabled:bg-gray-300"
          onClick={handlePrevius}
        >
          Previus
        </button>
        <button
          type="button"
          className="text-white dark:bg-gray-700 hover:bg-sky-700  font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ShipList;
