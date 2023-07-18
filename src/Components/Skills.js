import React from 'react'
import '../Style/MyStyle.css';
import img1 from'../Images/skillsimg1.jpg';
import img2 from'../Images/skillsimg2.jpg';

export default function Skills() {
  return (
    <div className='parent-skills' id="skills">
                          <section class="strength section hasbg dual-slant tslant-white bslant-gray  center" id="skills">
                        <div class="overlay overlay-black"></div>
                        <div class="container animatedParent animateOnce">
                            <h2 data-aos="flip-right" data-aos-duration="2000" data-aos-once="true" class="text-center fw-bold fs-1 text-Color mb-4"> Sk<span class="spanskills">il</span>ls</h2>



                            <div class="row text-center mt-5 px-5">
                                <div class=" col-lg-6 col-xl-6 col-xxl-6 ">
                                    <div class="prof-skills px-2">
                                        <div data-aos="fade-up-right" data-aos-duration="2000" data-aos-once="true" class="skillset">
                                            <div class="skillbar" data-percent="99%">
                                                <div class="title skillTitle">Microsoft Program</div>
                                                <div class="count-bar"id="MP">
                                                    <div class="count"><span>99%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="99%">
                                                <div class="title skillTitle">HTML5/CSS3</div>
                                                <div class="count-bar "id="Hcss">
                                                    <div class="count"><span>99%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="98%">
                                                <div class="title skillTitle">Media Query</div>
                                                <div class="count-bar " id="MQ">
                                                    <div class="count"><span>98%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="98%">
                                                <div class="title skillTitle">Bootstrap5</div>
                                                <div class="count-bar "id="Boot">
                                                    <div class="count"><span>98%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="95%">
                                                <div class="title skillTitle">React.JS</div>
                                                <div class="count-bar "id="React">
                                                    <div class="count"><span>95%</span></div>
                                                </div>
                                            </div>
                                            <div class="skillbar" data-percent="94%">
                                                <div class="title skillTitle">JavaScript</div>
                                                <div class="count-bar" id="Javasc">
                                                    <div class="count"><span>94%</span></div>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>

                            
                                <div class=" col-lg-6 col-xl-6 col-xxl-6 ">
                                    <div class="prof-skills px-2">
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-once="true" class="skillset">
                                            <div class="skillbar" data-percent="92%">
                                                <div class="title skillTitle">Adobe Photoshop</div>
                                                <div class="count-bar" id="photo" >
                                                    <div class="count"><span>92%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="85%">
                                                <div class="title skillTitle">C#</div>
                                                <div class="count-bar" id="C">
                                                    <div class="count"><span>85%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="80%">
                                                {/* <div class="title skillTitle">Windows Presentation Foundation</div> */}
                                                <div class="title skillTitle">WPF</div>
                                                <div class="count-bar" id="WPF">
                                                    <div class="count"><span>80%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="77%">
                                                <div class="title skillTitle">ASP.net Core</div>
                                                <div class="count-bar" id="ASP">
                                                    <div class="count"><span>77%</span></div>
                                                </div>
                                            </div>

                                            <div class="skillbar" data-percent="77%">
                                                <div class="title skillTitle">Flutter</div>
                                                <div class="count-bar " id="FLUTTER">
                                                    <div class="count"><span>77%</span></div>
                                                </div>
                                            </div>

                                      
                                            <div class="skillbar" data-percent="70%">
                                                <div class="title skillTitle">Json</div>
                                                <div class="count-bar " id="JSon">
                                                    <div class="count"><span>70%</span></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                          
                            </div>


                    </section>

    </div>
    
  )
}
