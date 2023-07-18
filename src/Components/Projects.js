import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Style/MyStyle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from'../Images/Project1.png';
import slide2 from'../Images/Project2.png';
import slide3 from'../Images/Project3.png';
import slide4 from'../Images/reactappimg.png';
import slide5 from'../Images/food.jpg';


import '../Style/MyStyle.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Projects() {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
 
  };
  return (
   
   <div className='parent-projects' id="projects">
<div className='text-center'>
  <h2
   data-aos="zoom-in" data-aos-duration="2000" data-aos-once="true"
    className='fs-2 fw-bold text-Color mb-4'>MY FRO<span class="spanskills">NTE</span>ND  PROJECT</h2>
</div>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className=" mySwiper shadow-sm"
      >
    
      
      
        <SwiperSlide  className='h-100'>
  <div class="content">
        <a   href="https://alaa-ghalep.github.io/StartUpProject/" target="_blank" class="h-100 w-100">
        <div class="content-overlay"></div>
         <img  class="d-block w-100" src={slide1}/> 
         <div class="content-details  fadeIn-bottom">
        <h1 class="content-title  text-white " style={{zIndex:1}}>Click her</h1>
        <p class="content-text  text-white fw-bold">To Show Project</p>
      </div>  </a>      
</div>
        </SwiperSlide>   


     

          <SwiperSlide  className='h-100'>
  <div class="content">
        <a href="https://alaa-ghalep.github.io/PompeoProject/" target="_blank" class="h-100 w-100">
        <div class="content-overlay"></div>
         <img  class="d-block w-100" src={slide2}/> 
         <div class="content-details  fadeIn-bottom">
        <h1 class="content-title  text-white " style={{zIndex:1}}>Click her</h1>
        <p class="content-text  text-white fw-bold">To Show Project</p>
      </div>  </a>      
</div>
        </SwiperSlide>   


        <SwiperSlide  className='h-100'>
  <div class="content">
        <a href="https://alaa-ghalep.github.io/Calculator-Project/" target="_blank" class="h-100 w-100">
        <div class="content-overlay"></div>
         <img  class="d-block w-100" src={slide3}/> 
         <div class="content-details  fadeIn-bottom">
        <h1 class="content-title  text-white " style={{zIndex:1}}>Click her</h1>
        <p class="content-text  text-white fw-bold">To Show Project</p>
      </div>  </a>      
</div>
        </SwiperSlide>
      
      
        <SwiperSlide  className='h-100'>
  <div class="content">
        <a href="https://alaa-ghalep.github.io/React_App/" target="_blank" class="h-100 w-100">
        <div class="content-overlay"></div>
         <img  class="d-block w-100" src={slide4}/> 
         <div class="content-details  fadeIn-bottom">
        <h1 class="content-title  text-white " style={{zIndex:1}}>Click her</h1>
        <p class="content-text  text-white fw-bold">To Show Project</p>
      </div>  </a>      
</div>
        </SwiperSlide>
     
       
        <SwiperSlide  className='h-100'>
  <div class="content">
        <a href="https://alaa-ghalep.github.io/food-react-app/" target="_blank" class="h-100 w-100">
        <div class="content-overlay"></div>
         <img  class="d-block w-100" src={slide5}/> 
         <div class="content-details  fadeIn-bottom">
        <h1 class="content-title  text-white " style={{zIndex:1}}>Click her</h1>
        <p class="content-text  text-white fw-bold">To Show Project</p>
      </div>  </a>      
</div>
        </SwiperSlide>
        <div className='Slide' >
    <div  className='text-center text-white '
     data-aos='zoom-in'
    data-aos-duration="2000"
    data-aos-once="true">
   
  
</div>
</div>
      </Swiper>
      </div>
   
    
  );
}
