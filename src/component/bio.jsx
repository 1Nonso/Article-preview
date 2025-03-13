import { useState } from "react";
import profilePicture from "../assets/avatar-michelle.jpg";
import shareButton from "../assets/icon-share.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import facebook from "../assets/icon-facebook.svg";

const Bio = () => {
  const [defaultState, setDefaultState] = useState(false);
  {
    /* ALgorithm to change the state of a button component, upon onclick function new return compoent gets added */
  }

  if (defaultState) {
    return (
      <>
        <ShareComponent />
      </>
    );
  }

  if (defaultState === true) {
    console.log("the state is true");
  }

  return (
    <>
      <section className="flex items-center justify-between w-[100%] lg:w-[100%] px-6 ">
        <img
          className="w-[3rem] lg:w-[2rem] rounded-[2rem]"
          src={profilePicture}
          alt=""
        />
        <div className="relative right-2 lg:text-sm lg:right-11">
          <p className="font-extrabold">Michelle Appleton</p>
          <p>28 Jun 2020</p>
        </div>
        <button
          className="shareButton flex justify-center items-center rounded-full w-[2.2rem] h-[2.2rem]"
          onClick={() => {
            setDefaultState(true);
          }}
        >
          <img
            className="w-[1.2rem] relative bottom-[0.1rem]"
            src={shareButton}
            alt=""
          />
        </button>
      </section>
      <ShareComponent />
    </>
  );
};

export default Bio;

export const ShareComponent = () => {
  return (
    <>
      <section className="flex justify-around items-center shareComponent w-[100%] h-20 py-3">
        <div className="flex items-center justify-around w-[60%] ">
          <button>
            <p className=" tracking-[0.4em] text-[0.7rem] font-light text-[#fff] " >SHARE</p>
          </button>
          <button>
            <img src={facebook} alt="Facebook logo" />
          </button>
          <button>
            <img src={twitter} alt="twitter logo" />
          </button>
          <button>
            <img src={pinterest} alt="pinterest logo" />
          </button>
        </div>
        <button
          className="shareButtonMobile flex justify-center items-center rounded-full w-[1.7rem] h-[1.7rem]"
          onClick={() => {
            setDefaultState(true);
          }}
        >
          <img
            className="w-[1rem] relative bottom-[0.1rem]"
            src={shareButton}
            alt=""
          />
        </button>
      </section>
    </>
  );
};
