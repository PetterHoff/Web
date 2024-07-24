import "./hjem_style.css" //styling



//media
import balcony_sun from "../components/Assets/home1.jpg"


const Hjem = () => {
  return (
    <div>
      <h1>Home</h1>
      <img src={balcony_sun} alt="balcony_sun"  ></img>
      
    </div>
  );
};

export default Hjem;
