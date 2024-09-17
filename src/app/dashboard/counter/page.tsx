'use client'

import {useState} from 'react'

 const CounterPage = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
        <span>
            Total products: {count}
        </span>
        <div>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'
            onClick={()=>setCount(count+1)}>
                +1
            </button>
            <button className='px-4 py-2 bg-blue-500 text-white rounded-md'
            onClick={()=>setCount(count-1)}
            >
                -1
            </button>
        </div>
    </div>
  )
}
export default CounterPage;
