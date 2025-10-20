import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import imgabout from '../Images/img-ilyass.jpg'

export default function About() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name='about'
      className='w-full min-h-screen bg-amber-500 flex flex-col md:flex-row justify-center items-center py-8 px-4'
    >
      {/* Image - Visible sur tous les écrans mais disposition différente */}
      <div className='flex justify-center items-center mb-8 md:mb-0 md:ml-[10%] w-full md:w-[40%]'>
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className='shadow-2xl rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover'
          src={imgabout}
          alt="Ilyass Elkhadri"
        />
      </div>
      
      {/* Contenu texte */}
      <div 
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom" 
        data-aos-duration="2000"  
        className='flex flex-col w-full md:w-[50%] md:mr-[10%] items-center md:items-start text-center md:text-left'
      >
        <h1 className='text-3xl font-bold border-b-4 my-6 border-white pb-2'>
          About
        </h1>
        <h2 className='font-bold text-xl md:text-2xl lg:text-3xl mb-4'>
          Hi. I'm Ilyass Elkhadri, nice to meet you. Please take a look around.
        </h2>
        <p className='text-base md:text-lg leading-relaxed'>
          I am passionate about building excellent software that improves the lives of those around me.
          I specialize in creating software for clients ranging from individuals and small businesses 
          all the way to large enterprise corporations. I design and deploy innovative solutions that 
          integrate artificial intelligence to address real-world challenges. What would you do if you
          had a software expert available at your fingertips?
        </p>
      </div>
    </div>
  );
}