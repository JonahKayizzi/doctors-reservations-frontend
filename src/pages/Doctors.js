// eslint-disable-next-line import/no-extraneous-dependencies
import {
  CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,
} from 'pure-react-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DoctorBrief from '../components/DoctorBrief';
import { getDoctorsData } from '../redux/doctors/doctorsSlice';

const Doctors = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.doctorsReducer.doctors);

  useEffect(() => {
    dispatch(getDoctorsData());
  }, []);

  const doctorsList = doctors.map((doctor, index) => (
    // eslint-disable-next-line
    <Slide key={index + 1} index={index}>
      <DoctorBrief
        id={doctor.id}
        name={doctor.name}
        image={doctor.image}
        speciality={doctor.speciality}
        description={doctor.description}
      />
    </Slide>
  ));

  return (
    <div className="flex flex-col w-full h-full self-center">
      <div className="flex flex-col items-center my-2 md:my-0 pt-16">
        <h2 className="font-black text-xl md:text-3xl">OUR DOCTORS</h2>
        <p className="font-bold text-gray-500">Please select a doctor</p>
        <div className="border-b-2 border-gray-200 border-dotted w-1/5 my-2 md:my-6" />
      </div>
      <div className="flex items-start justify-center w-full h-3/4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight totalSlides={doctors.length} visibleSlides={3} step={1} infinite>
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack role="button" aria-label="slide backward" className="prev-btn rounded-r-full p-5 bg-gray-300 absolute z-30 left-0 pl-12 focus:outline-none cursor-pointer" id="prev">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonBack>
            <div className="w-3/4 h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-start justify-start transition ease-out duration-700">
                  {doctorsList}
                </div>
              </Slider>
            </div>
            <ButtonNext role="button" aria-label="slide forward" className="prev-btn rounded-l-full p-5 bg-gray-300 absolute z-30 right-0 pr-12 focus:outline-none cursor-pointer" id="next">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight totalSlides={doctors.length} visibleSlides={2} step={1} infinite>
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack role="button" aria-label="slide backward" className="prev-btn rounded-r-full p-5 bg-gray-300 absolute z-30 left-0 pl-12 focus:outline-none cursor-pointer" id="prev">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonBack>
            <div className="w-3/4 h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-start justify-start transition ease-out duration-700">
                  {doctorsList}
                </div>
              </Slider>
            </div>
            <ButtonNext role="button" aria-label="slide forward" className="prev-btn rounded-l-full p-5 bg-gray-300 absolute z-30 right-0 pr-12 focus:outline-none cursor-pointer" id="next">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider className="block md:hidden" naturalSlideWidth={100} isIntrinsicHeight totalSlides={doctors.length} visibleSlides={1} step={1} infinite>
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack role="button" aria-label="slide backward" className="prev-btn rounded-r-full p-5 bg-gray-300 absolute z-30 left-0 pl-12 focus:outline-none cursor-pointer" id="prev">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonBack>
            <div className="w-3/4 h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-start justify-start transition ease-out duration-700">
                  {doctorsList}
                </div>
              </Slider>
            </div>
            <ButtonNext role="button" aria-label="slide forward" className="prev-btn rounded-l-full p-5 bg-gray-300 absolute z-30 right-0 pr-12 focus:outline-none cursor-pointer" id="next">
              <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

    </div>
  );
};

export default Doctors;
