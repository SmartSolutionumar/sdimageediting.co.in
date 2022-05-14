import React,{useState,useEffect,useRef} from 'react';
import bgd from './background.jpg';
import './App.css';

const divStyle = {
  backgroundImage: `url("static/media/background.1ecd7740.jpg")`,
};
function App() {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      var element = document.getElementById("header");
      if(currentScrollY > 590){
        console.log(currentScrollY)
        element.classList.add("header-active-white");
        element.classList.remove("header-active");
      }else {
        element.classList.remove("header-active");
        element.classList.remove("header-active-white");
      }
      if (currentScrollY > 150) {
        element.classList.add("header-active");
      }else {
        element.classList.remove("header-active");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return (
    <div>
        <div className="parallax" style={divStyle}>
          
        </div>
        <div style={{height:1000,backgroundColor:"#ddd",fontSize:20}}>
          Recruitment Consulting Services
          Joining a new job is like a promise to a new phase of life. On the other hand, it is an investment to hire a new resource to help build their company to the next level. Fiducia Mobis aims to bridge the gap between the company and candidates in making a smooth transition of a candidate to a new job. With sheer professionalism and commitment to providing quality services, Fiducia Mobis has a stringent process oriented hiring process to ensure that recruitment is mutually beneficial.

          We focus on all  Executive Searches, Senior & Middle-Level hiring with IT and Non-IT alike.
        </div>        
    </div>
  );
}

export default App;
