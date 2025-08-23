import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [fetchData, setfetchData] = useState([]);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.search.search);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setfetchData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const filteredData = fetchData.filter((data) =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddToCart = (item) => {
    dispatch(add(item));
    toast.success(`${item.title} added to cart!`);
  };

  return (
    <div className="px-6 py-8">
      {/* Responsive grid instead of flex-wrap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredData.map((data, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img
              className="w-full h-56 object-contain p-4"
              src={data.image}
              alt={data.title}
            />
            <div className="p-4">
              <h2 className="text-gray-800 font-bold text-lg truncate">
                {data.title}
              </h2>
              <div className="flex justify-between items-center mt-3">
                <h2 className="text-gray-700 font-semibold">${data.price}</h2>
                <button
                  onClick={() => handleAddToCart(data)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
