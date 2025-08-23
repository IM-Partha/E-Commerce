import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch } from '../Redux/SearchSlice'

const Navbar = () => {
  const i = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  return (
    <div className="w-full shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center p-4 gap-4">
        {/* Logo */}
        <h1 className="text-lg font-bold">REDUX TOOLKIT</h1>

        {/* Search */}
        <div className="w-full md:w-[300px]">
          <input
            onChange={(e) => dispatch(setSearch(e.target.value))}
            className="outline-none text-base border rounded-md p-2 w-full"
            type="text"
            placeholder="Search"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center relative">
          <Link to={"/"} className="hover:text-blue-500">Home</Link>

          <Link to={"/Cart"} className="hover:text-blue-500 flex items-center relative">
            Cart
            {/* Show red badge only if cart is not empty */}
            {i.length > 0 && (
              <span className="ml-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {i.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
