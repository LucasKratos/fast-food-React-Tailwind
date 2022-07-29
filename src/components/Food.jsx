import React, { useState } from 'react'
import {data} from '../data/data.js'

const Food = () => {

    const [foods, setFoods] =useState(data)

    //Filter type of foods

    const filterType = (category)=>{
        setFoods(
            data.filter((item) =>{
                return item.category === category
            })
        )
    }

    const filterPrice = (price)=>{
        setFoods(
            data.filter((item) =>{
                return item.price === price
            })
        )
    }
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>
            Top Rated Menu items   
        </h1>
         {/*filter row */}
         <div className='felx felx-col lg:flex-row justify-between'>
            {/*filter type */}
            <div className='mt-4'>
                <p className='font-bold mt-2'>Filter Type</p>
                <div className='mt-2'>
                    <button onClick={()=> setFoods(data)} className=' ml-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>All</button>
                    <button onClick={()=> filterType('burger')} className=' ml-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>Burgers</button>
                    <button onClick={()=> filterType('pizza')} className=' ml-1 border  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>Pizza</button>
                    <button onClick={()=> filterType('salad')} className=' ml-1 border  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>Salads</button>
                    <button onClick={()=> filterType('chicken')} className=' ml-1 border  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>Chiken</button>
                </div>
            </div>

            {/*Filter Price */}
            <div>
                <p className='font-bold text-gray-700 mt-2'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full mt-2'>
                    <button onClick={()=> filterPrice('$')}className= 'ml-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>$</button>
                    <button onClick={()=> filterPrice('$$')} className='ml-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>$$</button>
                    <button onClick={()=> filterPrice('$$$')} className='ml-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>$$$</button>
                    <button onClick={()=> filterPrice('$$$$')} className='ml-1 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white rounded-xl px-5 py-1'>$$$$</button>
     
                </div>
            </div>
         </div>
            {/*Display Foods */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4'>
                {foods.map((item, index)=>(
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[200px] object-cover rounded-t-lg' 
                        />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>
                                {item.name}
                            </p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-xl'>{item.price}</span> 
                            </p>
                        </div>

                    </div>
                ))}


            </div>
    </div>
  )
}

export default Food