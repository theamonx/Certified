import { useHover } from "@/context/HoverContext";

interface HoverTextProps {
    whatMode: boolean;
    disappear: () => void;
}

const HoverText:React.FC<HoverTextProps> = ({ whatMode, disappear}) => {

    const { hoverText } = useHover();
    
    const { handleMouseEnter, handleMouseLeave } = useHover();

    return (
        <div className={`flex-[1] flex items-end justify-center relative h-full cursor-pointer` } onMouseEnter={ () => handleMouseEnter("Hover over elements to see details...")} onMouseLeave={handleMouseLeave}>
            <div className={`bg-[#00ba82] w-[150px] text-white rounded-md text-sm p-3 text-center mx-auto cursor-pointer ${ whatMode ? '' : 'hidden' }`}  onClick={disappear}>Need any Help?</div>
            <div className={` bg-[#00ba82] text-white p-2 text-xs rounded !max-w-[250px] text-center mx-auto ${ whatMode ? 'hidden' : '' }`} style={{width: hoverText ? 'auto' : '0', height: hoverText ? 'auto' : '0', visibility: hoverText ? 'visible' : 'hidden'}} >
                {hoverText}
            </div>
        </div>
    );
};

export default HoverText;