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
      <section className="flex items-center justify-between w-[100%] lg:w-[100%] ">
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
          className="shareButton flex justify-center items-center rounded-full w-[2rem] h-[2rem]"
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
      <section className="shareComponent w-[100%] ">
        <div>
          <button>
            <img src={twitter} alt="" />{" "}
          </button>
          <button>
            <img src={pinterest} alt="" />{" "}
          </button>
          <button>
            <img src={facebook} alt="" />{" "}
          </button>
        </div>
        <button
          onClick={() => {
            setDefaultState(true);
          }}
        >
          <img src={shareButton} alt="" />
        </button>
      </section>
    </>
  );
};
