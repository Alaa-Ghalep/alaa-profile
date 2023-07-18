import React from 'react'
import '../Style/MyStyle.css';
export default function About() {
  return (
    <div>
      
      <div class="container-fluid pt-4 pb-5 parent-about p-0"id="about">
      <div className='container pt-5 pb-5'>
        <div className='row px-3 pt-5 pb-3'>
          <div className='col-md-6'>
            <section class="resume-section  d-flex d-column " >
    <div class="my-auto "
   data-aos="fade-up-right" data-aos-duration="2000" data-aos-once="true">
        <h1 class="mb-4"id="myname" >
            <span className='fw-bold me-2' style={{fontSize:55}}>Alaa</span>
            <span class="fw-bold " style={{fontSize:22,color:'#820000'}}>abu hamra</span>
        </h1>
        <p class="fw-bold text-Color">Web Designer & FrontEnd Developer</p>
        <p  class="mb-5 fw-bold">
            I have experience in designing and developing websites using programming languages,
            Designing and constantly updating the internal and external websites of the company, in addition to
            Designing the external appearance of the site, specifying the color and size of the font, and providing it with pictures.
        </p>
    </div>
</section>
          </div>
          <div className='col-md-6'>
            <div className='mt-4 ms-5 h-100'
            data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
              <h5 className='fw-bold text-Color'>Basic Information</h5>
              <div className='d-flex mb-2'>
                <p className='fw-bold text-Color me-4'>Age</p>
                <p className='fw-bold'>20</p>
              </div>

              <div className='d-flex mb-2'>
                <p className='fw-bold text-Color me-4'>Email</p>
                <p className='fw-bold'>alaaabuhamra06@gmail.com</p>
              </div>

              <div className='d-flex mb-2'>
                <p className='fw-bold text-Color me-4'>Phone</p>
                <p className='fw-bold'>0567774961</p>
              </div>
              <div className='d-flex mb-2'>
                <p className='fw-bold text-Color me-4'>Address</p>
                <p className='fw-bold'>Palestine-Gaza</p>
              </div>
             
              </div>
          </div>
        </div>
      </div>




</div>
    </div>
  )
}
