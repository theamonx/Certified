import { createContext, useContext, useState, ReactNode } from 'react';


interface HoverContextType {
    hoverText: String;
    handleMouseEnter: (text: string) => void;
    handleMouseLeave: () => void;
}

const HoverContext = createContext<HoverContextType | undefined>(undefined);

export const useHover = (): HoverContextType => {
    const context = useContext(HoverContext);
    if (!context){
        throw new Error('useHover must be used within a HoverProvider');
    }
    return context;
};

interface HoverProviderProps {
    children: ReactNode;
}

export const HoverProvider = ({ children }: HoverProviderProps)=>{
    const [hoverText, setHoverText] = useState('');

    const handleMouseEnter = (text: string) => {
        setHoverText(text);
    };

    const handleMouseLeave = ()=>{
        setHoverText('');
    };

    return (
        <HoverContext.Provider value={{ hoverText, handleMouseEnter, handleMouseLeave }}>
            {children}
        </HoverContext.Provider>
    )
}