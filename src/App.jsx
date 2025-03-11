import { useState } from "react";
import "./App.css";
import Bio from "./component/bio";
import firstImage from "./assets/drawers.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="main flex flex-col lg:flex-row w-[20rem] lg:w-[40rem] h-[35rem] lg:h-[15rem] rounded-lg overflow-hidden">
        <div className="w-[100%] lg:w-[40rem] h-[38%] lg:h-[100%] overflow-clip bg-cover">
          <img className="lg:h-[100%] lg:w-[50rem] " src={firstImage} alt="" />
        </div>
        <div className="flex flex-col justify-between items-center h-[62%] lg:h-[100%] p-7">
          <p className="font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className="">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete
          </p>
          <Bio />
        </div>
      </main>
    </>
  );
}

export default App;
