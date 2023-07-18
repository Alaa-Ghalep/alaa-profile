import React from 'react'
import '../Style/MyStyle.css';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
  return (
    <div>
      <div className='container-fluid py-2 shadow-sm parent-footer mb-0 p-0'>
    
                       
                    <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 offset-md-2"  >
                                    <div class="social-links text-center ">
                                        <a class="social-btn d-inline-block overflow-hidden position-relative shadow-sm" href="#"
                                          style={{display:'flex',justifyContent:'center',verticalAlign:'center'}}>
                                            <i class="fa fa-facebook-f fs-5 lh-lg "></i>
                                        </a>
                                        <a class="social-btn d-inline-block overflow-hidden position-relative shadow-sm" href="https://www.instagram.com/alaa.ghalep/"
                                          style={{display:'flex',justifyContent:'center',verticalAlign:'center'}}>
                                            <i class="fa fa-instagram fs-5 lh-lg"></i>
                                        </a>
                                      
                                        <a class="social-btn d-inline-block overflow-hidden position-relative shadow-sm" href="https://github.com/Alaa-Ghalep"
                                        style={{display:'flex',justifyContent:'center',verticalAlign:'center'}}>
                                            <i class="fa fa-github fs-5 lh-lg"></i>
                                        </a>
                                    </div>


                                
                                </div>
                            </div>
                            </div>

                        
                    </footer>
         
      </div>
    </div>
  )
}
