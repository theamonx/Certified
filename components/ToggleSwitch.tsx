import { useState } from 'react';
import { useHover } from '@/context/HoverContext';

const Togg = ()=> {

    const { handleMouseEnter, handleMouseLeave } = useHover();

    const [LbtnActive, setLActive] = useState(true);
    const [RbtnActive, setRActive] = useState(false);

    const leftClick = ()=>{
        setLActive(true);
        setRActive(false);
    }

    const rightClick = ()=>{
        setLActive(false);
        setRActive(true);
    }

        return (
            <div className="my-6 sm:my-8 mx-auto w-56 sm:w-[250px] bg-[#00BA82] relative rounded-full h-[50px]">
                <div id='whiteLog' className={`transition-all duration-150 top-1 absolute w-2/4 h-[42px] bg-white rounded-full ${RbtnActive ? 'left-[108px] sm:left-[121px]' : (LbtnActive ? 'left-[4px]' : 'left-[108px] sm:left-[121px]')}` }  ></div>
                <button type="button" className={`my-1 sm:my-0 text-sm sm:text-base cursor-pointer border-0 relative text-center px-4 sm:px-auto py-3 w-2/4 sm:font-normal font-bold ${LbtnActive ? 'text-[#00ba82]' :  'text-white'}`} onClick={leftClick} onMouseEnter={ () => handleMouseEnter("If your are an intern than that's for you...")} onMouseLeave={handleMouseLeave}>Internship</button>
                <button type="button" className={`my-1 sm:my-0 text-sm sm:text-base cursor-pointer border-0 relative text-center px-4 sm:px-auto py-3 w-2/4 sm:font-normal font-bold ${RbtnActive ? 'text-[#00ba82]' :  'text-white'}`} onMouseEnter={()=>handleMouseEnter("If you're a competetor than that's option is for you...")} onMouseLeave={()=>handleMouseLeave} onClick={rightClick}>Hackathon</button>
            </div>
        )

}

export default Togg;