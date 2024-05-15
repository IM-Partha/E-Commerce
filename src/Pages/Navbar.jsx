import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch } from '../Redux/SearchSlice'
const Navbar = () => {

  const i = useSelector((state)=>state.cart.cart)
  const dispatch= useDispatch()
  return (
    <div className=''>
        <div className='flex justify-between w-screen shadow-md p-5'>
            <h1>REDUC TOOLKIT</h1>
            <div>
                <input onChange={(e)=>dispatch(setSearch(e.target.value))} className='outline-none text-1xl border rounded-md p-2 w-[300px]' type="text" placeholder='Search' />
            </div>
            <div className='flex flex-row gap-5 mr-5'>
                <Link to={"/"}>Home</Link>
                <Link to={"/Cart"}>Cart<span>{i.length}</span></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar