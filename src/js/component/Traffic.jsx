import React, { useEffect, useState } from "react";


function Traffic() {
  const [time, setTime] = useState(0);
  const [divStyle, setDivStyle] = useState({});

  


  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  function timeLapse() {
    let number = 0
    number = ((Math.floor(time)%12)+1)
    return number
  }
  const [selectedColor, setSelectedColor] =useState("amarilla")

  
  const handlePauseResume = () => {
    if (selectedColor === "roja") {
      setSelectedColor("amarilla")
    } else if(selectedColor ==="amarilla") {
      setSelectedColor("verde")
    }else if (selectedColor === "verde") {
      setSelectedColor("purpura")
    }else if (selectedColor === "purpura") {
      setSelectedColor("roja")
    }
  };


  return (
    <div className="d-flex flex-column align-items-center justify-content-evenly">
      <div className="poste"></div>
      <div className="caja">
        
        <div onClick={()=> setSelectedColor("roja")} className={"luz roja "+(selectedColor === "roja"?"encendida":"")}></div>
        <div onClick={()=> setSelectedColor("amarilla")} className={"luz amarilla "+(selectedColor === "amarilla"?"encendida":"")}></div>
        <div onClick={()=> setSelectedColor("verde")} className={"luz verde "+(selectedColor === "verde"?"encendida":"")}></div>
        <div onClick={()=> setSelectedColor("purpura")} className={"luz purpura "+(selectedColor === "purpura"?"encendida":"")}></div>
      </div>
      <button onClick={handlePauseResume} className="col-12 mt-5">
        Siguiente
      </button>      
      <button onClick={()=> setSelectedColor("purpura")} className="col-12 mt-5">
        A purpura
      </button>
    </div>
  );
}

export default Traffic;