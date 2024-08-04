import { useState } from 'react';
import { useHover } from '@/context/HoverContext';

const Form = ()=>{

    const { handleMouseEnter, handleMouseLeave } = useHover();

    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form submitted:', formData);
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col space-y-2 rounded-lg text-xs sm:text-sm'>
            <div className="flex flex-col">
                <label htmlFor="name" className='mb-0.5 text-gray-400'>Candidate Name</label>
                <input type="text" id='name' name='name' value={formData.name} onChange={handleChange}  className='p-3 border rounded-xl' required onMouseEnter={()=>handleMouseEnter('Enter Your name there...')} onMouseLeave={handleMouseLeave}/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="sr" className='mb-0.5 text-gray-400'>Candidate Number</label>
                <input type="text" id='sr' name='sr' value={formData.sr} onChange={handleChange}  className='p-3 border rounded-xl' required onMouseEnter={()=>handleMouseEnter('Enter Your Registration Number there...')} onMouseLeave={handleMouseLeave} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className='mb-0.5 text-gray-400'>Email ID</label>
                <input type="email" id='email' name='email' value={formData.email} onChange={handleChange} placeholder='(optional)' className='p-3 border rounded-xl' onMouseEnter={()=>handleMouseEnter('Enter Your Email there if you like to, Its optional so its your choice.')} onMouseLeave={handleMouseLeave}/>
            </div>
            <button type="submit" className='py-3 !mt-8  px-4 text-white text-base bg-[#00ba82] rounded-xl hover:bg-black transiiton-colors duration-300 font-bold'>Send</button>
        </form>
    )
}

export default Form;