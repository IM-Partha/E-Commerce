import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, remove } from '../Redux/CartSlice';

const Cart = () => {
    const items = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();

    const TotalQty = items.reduce((totalq, item) => {
        return totalq + item.qty;
    }, 0);

    const TotalPrice = items.reduce((TotalP, item) => {
        return TotalP + item.qty * item.price;
    }, 0);

    return (
        <div className="md:flex md:flex-col md:items-center">
            <div className='md:max-w-4xl my-5'>
                {items.map((item, index) => (
                    <div key={index} className='flex flex-col md:flex-row p-5 gap-3'>
                        <img className='h-24 w-24 md:h-[100px] md:w-[100px] object-cover' src={item.image} alt="" />
                        <div className='md:flex md:flex-col md:justify-between'>
                            <div>
                                <h2>{item.title.slice(0, 15)}</h2>
                                <h2>{item.price}</h2>
                            </div>
                            <div className='flex justify-between items-center w-full md:w-auto'>
                                <div className='flex items-center'>
                                    <button onClick={() => dispatch(decrement(item))} className='text-2xl md:text-4xl'>-</button>
                                    <span className='mx-2 text-lg md:text-3xl'>{item.qty}</span>
                                    <button onClick={() => dispatch(increment(item))} className='text-2xl md:text-3xl'>+</button>
                                </div>
                                <button onClick={() => dispatch(remove(item))} className='p-1 md:w-[100px] rounded text-white bg-[#2980b9]'>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='fixed bottom-0 right-0 left-0 bg-white p-5 md:fixed md:right-auto md:top-20 md:mr-[200px] md:mt-5 md:border md:p-10 md:max-w-xl'>
                <h2>QTY: {TotalQty}</h2>
                <h2>Total Amount: {TotalPrice}</h2>
                <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'>Check Out</button>
            </div>
        </div>
    );
};

export default Cart;
