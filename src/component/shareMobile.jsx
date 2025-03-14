import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-pinterest.svg";
import shareButton from "../assets/icon-share.svg";
import twitter from "../assets/icon-twitter.svg";
import { motion } from "framer-motion";

const ShareComponentMobile = ({ changeValue }) => {
  return (
    <>
      <motion.section
        animate={{ y: [500, 0] }}
        transition={{ duration: 0.5 }}
        className="flex justify-around items-center shareComponent w-[100%] h-24 py-3"
      >
        <div className="flex items-center justify-around w-[60%] ">
          <button>
            <p className=" tracking-[0.4em] text-[0.7rem] font-light text-[#fff] ">
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
          }}
        >
          <img
            className="w-[1rem] relative bottom-[0.1rem]"
            src={shareButton}
            alt=""
          />
        </button>
      </motion.section>
    </>
  );
};

export default ShareComponentMobile;
