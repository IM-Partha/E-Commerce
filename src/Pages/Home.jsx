import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../Redux/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [fetchData, setfetchData] = useState([])
    
    const dispatch = useDispatch()
    const i = useSelector((state)=>state.search.search)
    
    const fetchDataFromApi = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json()
            setfetchData(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchDataFromApi()
    }, [])

    const filteredData = fetchData.filter((data) => data.title.toLowerCase().includes(i.toLowerCase()))

    const handleAddToCart = (item) => {
        dispatch(add(item))
        toast.success(`${item.title} added to cart!`)
    }

    return (
        <div className='flex flex-wrap gap-6 mx-8 my-8'>
            {filteredData.map((data, index) => (
                <div key={index} className=''>
                    <img className='w-[200px] h-[200px]' src={data.image} alt={data.title} />
                    <div>
                        <h2>{data.title.slice(0, 17)}</h2>
                        <h2 className=' font-bold'>{data.price}</h2>
                    </div>
                    <div>
                        <button onClick={() => handleAddToCart(data)} className='p-1 cursor-pointer text-white bg-blue-500 w-[200px] rounded'>Add</button>
                    </div>   
                </div>
            ))}
            <ToastContainer/>
        </div>
    )
}

export default Home
