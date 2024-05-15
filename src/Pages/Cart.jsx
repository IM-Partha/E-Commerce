import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remove } from '../Redux/CartSlice'

const Cart = () => {
  const i = useSelector((state)=>state.cart.cart)
  const item = useSelector((state)=>state.cart.cart)
  const dispatch = useDispatch()
  const TotalQty = item.reduce((totalq , index)=>{
   return totalq + index.qty
},0)
  const TotalPrice = item.reduce ((TotalP,index)=>{
    return TotalP + index.qty * index.price
  },0)
  return (
    <div>
       <div className='my-5'>
        {
            i.map((item)=>(
               <div className='flex p-5 gap-3'>
                <img className='h-[100px] w-[100px]' src={item.image} alt="" />
                <div>
                    <h2>{item.title.slice(0,15)}</h2>
                    <h2>{item.price}</h2>
                    <button onClick={(()=>dispatch(remove(item)))}  className='p-1 w-[100px] rounded text-white bg-[#2980b9]'>remove</button>
                </div>
                <div className=''>
                    <button onClick={()=>dispatch(decrement(item))} className='text-4xl'>-</button>
                    <span className='text-3xl'>{item.qty}</span>
                    <button onClick={()=>dispatch(increment(item))} className='text-3xl'>+</button>
                    </div>
               </div>
            ))
        }
    </div>

    
    <div className=' fixed right-0 top-20 mr-[200px] p-20 border mt-5 '>
      <h2>QTY:{TotalQty}</h2>
      <h2>Total Amount: {TotalPrice}</h2>
    </div>
    </div>
  )
}

export default Cart