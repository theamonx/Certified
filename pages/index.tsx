import InstructionArea from '../components/InstructionArea';
import Image from "next/image";
import logo from '../public/internpluss.svg?url';
import frame from '../public/SVG/frame.svg?url';
import Togg from '../components/ToggleSwitch';
import Form from '../components/FormArea';


export default function Home() {

  return (
    <section className="bg-neutral-100">
      <div className="pl-8 sm:pl-20">
        <Image src={logo} alt="logo" className='w-24 sm:w-32 pt-4 sm:pt-8' />
      </div>
      <div className="lg:w-[900px] flex flex-col sm:flex-row bg-white my-4 sm:my-8 mx-auto sm:mx-auto rounded-t-3xl sm:rounded-3xl p-0 ">
        <div className="w-full md:w-1/2 p-8 sm:pl-8 sm:pr-0 sm:py-8 flex-[1] ">
          <h1 className='text-xl sm:text-2xl font-bold text-neutral-400'>Verify Certificate</h1>
          <div className=" w-full">
                <Togg></Togg>
          </div>
          <div className=" max-w-[450px] mx-auto px-4 sm:px-8">
            <Form></Form>
          </div>
        </div>
        <div className="w-full max-w-[450px] mx-auto md:w-1/2 flex-[1] justify-center items-center relative pt-8 ">
          <div className="relative sm:h-full">
            <InstructionArea />
          </div>
          <div className="absolute inset-0 z-10 pointer-events-none">
          <Image src={frame} alt="frame" className='stroke-[#00ba82] w-full h-full object-fill p-4'/>
          </div>
          
        </div>
      </div>
    </section>
  );
}
