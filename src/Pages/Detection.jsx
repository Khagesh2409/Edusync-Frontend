import React from 'react'
import Navbar from "../Components/Navbar";
import Component from '../assets/Component 35.png'
import Trophy from '../assets/Trophy.png'
import char from '../assets/character_de1111a819 1.png'
import videoMouth from '../assets/test.mp4'

export default function Articles() {
  return (
    <div>
        <Navbar />
        <div>
        <div className="border-y-4 font-spacegrotesksemibold border-black font-medium lg:text-4xl md:text-3xl sm:text-2xl text-2xl w-fit lg:ml-20 ml-2 text-center">
            {`Phenome V and B`}
          </div>
          <div className=" font-spacegrotesksemibold border-black font-medium lg:text-2xl md:text-xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-10">
            Test Number : {`2`}
            </div>
          <div className=" font-spacegrotesksemibold border-black text-sky-400 font-medium lg:text-2xl md:text-xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-10">
            Details about the test  :
          </div>
          < div className='md:flex  justify-between items-center font-medium lg:text-2xl md:text-xl sm:text-xl text-xl  lg:ml-20 ml-2 lg:mr-20 mr-2  text-center mt-3'>
                <div>Words to be spelled :{`Boat` }</div>
                <div>Phenome word: {`Voat`}</div>
                <div>Average correct percentage : {`30`}%</div>
          
          </div>
          <div className="border-y-4 font-spacegrotesksemibold border-black font-medium lg:text-4xl md:text-3xl sm:text-2xl text-2xl w-fit lg:ml-20 ml-2 text-center mt-14">
            Analysis Result
          </div>
          <div className="relative w-full mx-auto mt-4">
            {/* Background Image */}
            <img  className=" w-9/12 h-[300px]  mx-2 md:mx-20" src={Component}/>
            {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../assets/Component 35.png')" }}></div> */}

            {/* Progress Bar */}
            <div className="relative z-10 w-9/12 mx-2 md:mx-20 h-12 bg-[#E5D1FF]">
                {/* Progress Indicator */}
                <div
                className="flex items-center  justify-center bg-purple-600 text-white font-bold h-full "
                style={{ width: `${30}%` }}
                >
                <img src={char} alt="Cat" className=" absolute h-40 w-50" style={{ left: `${30 - 5}%` }} />
                <span>{30}%</span>
                </div>
            </div>

            {/* Trophy Image */}
            <img
                src={Trophy}
                alt="Trophy"
                className="absolute z-20 right-[440px] bottom-0 transform translate-x-1/2"
            />
            </div>

          <div className="border-y-4 font-spacegrotesksemibold border-black font-medium lg:text-4xl md:text-3xl sm:text-2xl text-2xl w-fit lg:ml-20 ml-2 text-center mt-14">
            Model and Remedies
          </div>
          <div className='md:flex  justify-between items-center m-20'>
            <div className='rounded '>
            <video width="320" height='90%' autoplay controls className='rounded-xl'>
                                        <source src={videoMouth} type='video/mp4' />
            </video>
            </div>
            <div>
            <div className="bg-white rounded-3xl p-6 shadow-2xl lg:h-64 lg:w-96 md:h-64 md:w-96 max-w-96 mt-10">
              <div className="md:flex items-center gap-20 justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                {/* <img
                  src={Progress}
                  alt=""
                  className="mb-4 lg:h-20 md:h-20 h-14" */}
                {/* /> */}
              </div>
              <div className=''>
              <div className="font-spacegrotesksemibold mb-2 lg:text-2xl md:text-2xl text-lg text-center lg:text-start md:text-start bg-[#89D85D] rounded-xl p-2 textcenter">
                Progress Tracking
              </div>
              <div className="font-spacegrotesklight text-center lg:text-start md:text-start font-semibold">
                {`Track success, analyze and celebrate milestone.`}
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className='md:flex items-center gap-20 justify-center'>
          <button className=''></button>
          <button></button>
        </div>
        <footer className="bg-gray-200 mt-20">
        <div className="container px-4 mx-auto">
          <div className="pt-24 pb-11 mx-auto max-w-4xl lg:items-start lg:justify-start md:items-start md:justify-start flex items-center justify-center flex-col">
            <a className="block md:mx-auto mb-5 max-w-max text-center" href="#">
              <div className="font-spacegroteskbold lg:text-5xl md:text-4xl text-3xl text-left">
                Awaaz
              </div>
            </a>
            <div className="flex flex-wrap text-center justify-center w-full">
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href="/terms"
                >
                  Terms
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href="/privacy"
                >
                  Privacy
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href=""
                >
                  Contact Us
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href="/careers"
                >
                  Careers
                </a>
              </div>
              <div className="w-full md:w-auto p-3 md:px-6">
                <a
                  className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                  href="/pricing"
                >
                  Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-100" />
        <div className="container px-4 mx-auto">
          <p className="py-10 md:pb-20 text-md text-gray-400 font-spacegroteskmedium text-center">
            Copyright Awaaz 2024
          </p>
        </div>
      </footer>
    </div>
  )
}
