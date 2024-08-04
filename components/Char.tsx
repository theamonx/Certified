import { useState } from 'react';
import Hi from '../public/SVG/hi.svg';
import Wait from '../public/SVG/wait.svg'
import Congrats from '../public/SVG/congrats.svg';
import Medi from '../public/SVG/medi.svg';

interface CharProps {
        whatMode: boolean;
        disappear: () => void;
    }

const Char:React.FC<CharProps> = ({ whatMode,  disappear }) => {

        return (
        <div className='flex-[1]'>
                {/* <Hi className={`char bottom-0 h-64 -left-20 absolute cursor-pointer ${ whatMode ? '' : 'hidden'}`}/> */}
                <Medi className={`char h-full flex items-center justify-center`}/>
                {/* <Wait className={`char bottom-0 h-64 -left-20 absolute cursor-pointer ${ whatMode ? 'hidden' : ''}`}/> */}
                {/* <Congrats className={`char bottom-0 h-64 left-8 absolute cursor-pointer ${ Mode ? '' : 'hidden'}`} onMouseEnter={disappear}/> */}

        </div>
)};

export default Char;

// make a div box size of character to control hi appreaces and dissappearence