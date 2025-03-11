import { useState } from "react";
import "./App.css";
import Bio  from "./component/bio"
import firstImage from "./assets/drawers.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="w-[20rem]">
        <img src={firstImage} alt="" />
        <div>
          <p className="font-bold">            
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
          </p>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete
          </p>

          < Bio />
        </div>
      </main>
    </>
  );
}

export default App;
