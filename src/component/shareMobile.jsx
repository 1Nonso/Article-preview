import { useState } from "react";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import shareButton from "../assets/icon-share.svg";
import twitter from "../assets/icon-twitter.svg";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const ShareComponentMobile = ({ changeValue }) => {
  const [IsVisible, setIsVisible] = useState(true);

  return (
    <>
      <AnimatePresence>
        {IsVisible && (
          <motion.section
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: [500, -100, 0], opacity: 1 }}
            exit={{ x: -500, opacity: 0, transition: { duration: 10 } }}
            transition={{ ease: easeOut, duration: 1.5 }}
            className="flex justify-around items-center shareComponent w-[100%] h-[56px] py-3"
          >
            <div className="flex items-center justify-around w-[60%] ">
              <button>
                <p className=" tracking-[0.4em] text-[0.7rem] font-light text-[#9eafc2] ">
                  SHARE
                </p>
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
                changeValue();
                setIsVisible(!IsVisible);
              }}
            >
              <img
                className="w-[1rem] relative bottom-[0.1rem]"
                src={shareButton}
                alt=""
              />
            </button>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShareComponentMobile;
