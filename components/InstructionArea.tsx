import React, { useState } from 'react';
import HoverText from './HoverText';
import Char from './Char';

const InstructionArea: React.FC = () => {

    const [whatMode, setWhatMode] = useState(true);

        const toggleMode = () => {
                setWhatMode(prevState => !prevState);
        };

        return (
            <div className='sm:h-full w-full flex flex-col '>
                <HoverText whatMode={whatMode} disappear={toggleMode} />
                <Char whatMode={whatMode} disappear={toggleMode} />
            </div>
        )
        
}

export default InstructionArea;