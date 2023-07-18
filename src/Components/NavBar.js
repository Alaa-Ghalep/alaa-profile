import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Style/MyStyle.css';
import 'font-awesome/css/font-awesome.min.css';
import alaaprofile from'../Images/alaaProfile.jpg';



function NavBar() {
  

  return (
    <Navbar  expand="lg" className="navbar navbar-expand-lg fixed-top  parentnavbar " id="sideNav" >
        <Navbar.Brand href="#"> 
       
        <a class=" " href="#">
             <span class="d-sm-block d-md-block d-lg-none  d-xl-none  d-xxl-none d-xxxl-none">
                <img  class="img-fluid img-profile2 rounded-circle d-flex ms-3 mx-auto "
                   src={alaaprofile} alt="" style={{width:60,verticalAlign:'center'}}/>
                            </span>
                        </a>
    

        </Navbar.Brand>
        <Navbar.Brand href="#"> 
       
       <a class="navbar-brand js-scroll-trigger" href="#">
            <span class="d-none d-lg-block">
               <img  class="img-fluid img-profile rounded-circle mx-auto mb-2"
                  src={alaaprofile} alt=""/>
                           </span>
                       </a>
   

       </Navbar.Brand>
     
 
        <Navbar.Toggle className="shadow-none border-0 p-3" id="newtoggle"><i className="fa fa-bars py-1 px-2 " style={{fontSize:22,color:'#fff',border:'2px solid #fff',borderRadius:5}}></i></Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          
          
             
        <Nav className=" me-auto mb-2 mb-lg-0 mx-lg-auto">
            <Nav.Link href="#about"className="d-inline-block text-decoration-none me-4 mx-4 nav-link js-scroll-trigger active">About</Nav.Link>
                 
            <Nav.Link href="#experience" className="d-inline-block text-decoration-none me-4 mx-4 nav-link js-scroll-trigger">Experience</Nav.Link>
            <Nav.Link href="#skills" className="d-inline-block text-decoration-none me-4 mx-4 nav-link js-scroll-trigger">Skills</Nav.Link>
            <Nav.Link href="#projects" className="d-inline-block text-decoration-none me-4 mx-4 nav-link js-scroll-trigger">Projects</Nav.Link>

         
          </Nav>


        </Navbar.Collapse>
     
    </Navbar>
  );
}

export default NavBar;