import {useEffect} from'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Index from './Components/Index';
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
   <Index/>
    </div>
  );
}

export default App;
