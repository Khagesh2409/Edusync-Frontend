import React from 'react'
import Navbar from "../Components/Navbar";
import Component from '../assets/Component 35.png'
import Trophy from '../assets/Trophy.png'
import char from '../assets/character_de1111a819 1.png'
// import videoMouth from '../assets/test.mp4'

export default function Detection() {
  return (
    <div>
        {/* <Navbar /> */}
        <div>
        <div className="border-y-4 font-spacegrotesksemibold border-black font-medium lg:text-2xl md:text-2xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center">
            {`Phenome V and B`}
          </div>
          <div className=" font-spacegrotesksemibold border-black font-medium lg:text-2xl md:text-xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-28">
            Test Number : {`2`}
            </div>
          <div className=" font-spacegrotesksemibold border-black text-sky-400 font-medium lg:text-2xl md:text-xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-10">
            Details about the test  :
          </div>
          < div className='md:flex font-spacegrotesksemibold justify-between items-center font-medium lg:text-2xl md:text-xl sm:text-xl text-xl  lg:ml-20 ml-2 lg:mr-20 mr-2  text-center mt-10'>
                <div>Words to be spelled :{`Boat` }</div>
                <div>Phenome word: {`Voat`}</div>
                <div>Average correct percentage : {`30`}%</div>
          
          </div>
          <div className="border-y-4 font-spacegrotesksemibold border-black font-medium lg:text-2xl md:text-2xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-40 mb-14">
            Analysis Result
          </div>
          <div className="relative w-full mx-auto mt-4">
            {/* Background Image */}
            <img  className=" w-9/12 h-[300px]  mx-2 md:mx-20" src={Component}/>
            {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../assets/Component 35.png')" }}></div> */}

            {/* Progress Bar */}
            <div className="font-spacegrotesksemibold relative z-10 w-9/12 mx-2 md:mx-20 h-12 bg-[#E5D1FF]">
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

          <div className="font-spacegrotesksemibold border-y-4 border-black font-medium lg:text-2xl md:text-2xl sm:text-xl text-xl w-fit lg:ml-20 ml-2 text-center mt-48">
            Model and Remedies
          </div>
          <div className='md:flex  justify-between items-center m-20 md:mx-80'>
            <div className='rounded '>
            {/* <video width="320" height="320" autoplay controls className='rounded-xl'>
                                        <source src={videoMouth} type='video/mp4' />
            </video> */}
            </div>
            <div>
            <div className="font-spacegrotesksemibold bg-white rounded-3xl p-10 shadow-2xl lg:h-80 lg:w-96 md:h-80 md:w-96 max-w-96 mt-10 ">
              <div className="md:flex items-center gap-20 justify-center lg:items-start lg:justify-start md:items-start md:justify-start">
                {/* <img
                  src={Progress}
                  alt=""
                  className="mb-4 lg:h-20 md:h-20 h-14" */}
                {/* /> */}
              </div>
              <div className=''>
              <div className="font-spacegrotesksemibold mb-2 lg:text-xl md:text-xl text-lg text-center bg-[#89D85D] rounded-2xl w-max p-2 mt-2 drop-shadow-[2px_3px_2px_rgba(0,0,0,0.7)]">
                Instructions
              </div>
              <div className="font-spacegrotesklight text-center md:text-xl text-lg lg:text-start md:text-start font-semibold mt-5">
                {`Here, the instructions and remedies would appear.this model will not appear if score is good instead party poppers will appear of nowhere stating you have passed the test.`}
              </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className='font-spacegrotesksemibold md:flex gap-20 ml-40 mx-20 lg:mx-80 my-10 mb-20'>
        <button className="w-[20rem] h-[4rem] bg-[#0984E3] mt-10 rounded-lg text-white drop-shadow-[1px_2px_1px_rgba(0,0,0,0.7)] hover:opacity-80 flex justify-center ml-20 items-center">
          <div className="mx-1  text-xl">Test Again</div>
          {/* <img src={Sparkle} className="h-[1rem]"></img> */}
        </button>
        <button className="font-spacegrotesksemibold w-[20rem] h-[4rem] bg-[#89D85D] mt-10 rounded-lg drop-shadow-[1px_2px_1px_rgba(0,0,0,0.7)] hover:opacity-80 flex justify-center items-center">
          <div className="mx-1 text-xl">Back To Learning</div>
          {/* <img src={Sparkle} className="h-[1rem]"></img> */}
        </button>
          {/* <button></button> */}
        </div>
        {/* <footer className="bg-gray-200 mt-20">
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
      </footer> */}
    </div>
  )
}
