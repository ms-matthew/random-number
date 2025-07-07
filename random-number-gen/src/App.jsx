import { useState } from 'react'
import './index.css'
import CountUp from './CountUp'
import * as motion from "motion/react-client"


function getRandomInt(min, max){
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return(
    Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
  )
}


function App() {
  const [minNumber, setMinNumber] = useState(0);
  const [maxNumber, setMaxNumber] = useState(100);
  const [randomInt, setRandomInt] = useState(0);

  function handleChangeMin(e) {
    setMinNumber(e.target.value)
  }
  function handleChangeMax(e) {
    setMaxNumber(e.target.value)
  }
  function setRandomNumber(){
    setRandomInt(getRandomInt(minNumber, maxNumber))
  }

  return (
    <div className='flex flex-row justify-center h-[100vh] items-center w-[100vw] bg-[#222831]'>
      <div className='w-2/3 flex justify-center text-7xl'>
        <CountUp
          from={minNumber ? minNumber : 0}
          to={randomInt ? randomInt : 0}
          separator=","
          direction="up"
          duration={1}
          className="count-up-text text-[#948979]"
        />
      </div>
      <div className='flex flex-col w-1/3 gap-5 text-[#DFD0B8]'>
        <p>
          Min: <input className='text-black dark:text-[#DFD0B8] pl-2 w-1/3 box-border text-base border border-solid bg-white dark:bg-zinc-800 rounded-[10px] focus-visible:outline-0 focus-visible:border-teal-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#71717a2e] dark:focus-visible:ring-[#14b8a61a]' type="number" value={minNumber} placeholder='Minimum' onChange={handleChangeMin}/>
        </p>
        
        <p>
          Max: <input className='text-black dark:text-[#DFD0B8] pl-2 w-1/3 box-border text-base border border-solid bg-white dark:bg-zinc-800 rounded-[10px] focus-visible:outline-0 focus-visible:border-teal-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#71717a2e] dark:focus-visible:ring-[#14b8a61a]' type="number" value={maxNumber} placeholder='Maximum' onChange={handleChangeMax}/>
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className='border rounded-2xl p-2 bg-[#393E46] justify-start w-1/3'
          onClick={setRandomNumber}>
              Generate
        </motion.button>
        
      </div>
      
    </div>
  )
}

export default App
