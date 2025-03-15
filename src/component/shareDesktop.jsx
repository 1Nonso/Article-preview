import { useState } from "react";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import twitter from "../assets/icon-twitter.svg";
import { AnimatePresence, easeOut, motion } from "framer-motion";

const ShareComponentDesktop = () => {
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
            className="shareDesktop flex justify-around items-center shareComponent w-[13rem] h-[3rem] p-3 rounded-xl fixed bottom-[40%] left-[63%]"
          >
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
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShareComponentDesktop;
