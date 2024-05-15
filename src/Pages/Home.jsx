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

    const filteredData = fetchData.filter((data) => data.title.toLowerCase().includes(searchQuery.toLowerCase()));

    const handleAddToCart = (item) => {
        dispatch(add(item));
        toast.success(`${item.title} added to cart!`);
    };

    return (
        <div className='flex  flex-wrap items-center justify-center gap-6 mx-8 my-8'>
            {filteredData.map((data, index) => (
                <div key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                    <div className='bg-white w-full overflow-hidden shadow'>
                        <img className='w-full h-56 object-cover' src={data.image} alt={data.title} />
                        <div className='p-4'>
                            <h2 className='text-gray-800 font-bold text-lg'>{data.title.slice(0, 17)}</h2>
                            <div className='flex justify-between items-center mt-2'>
                                <h2 className='text-gray-700 font-semibold'>{data.price}</h2>
                                <button onClick={() => handleAddToCart(data)} className='px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300'>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <ToastContainer />
        </div>
    );
};

export default Home;
