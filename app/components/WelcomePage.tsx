"use client";
import { useState, useEffect } from "react";
import { delay, motion } from "framer-motion";

const welcome = ["we create", "therefore", "we live"];
function WelcomePage() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  }, []);
  return (
    <>
      {visible ? (
        <motion.div
          animate={{ y: -1200 }}
          transition={{ delay: 2.4, duration: 0.5 }}
          className="w-full h-[100vh] bg-black text-white z-20 fixed top-0"
        >
          <div className="flex flex-row gap-x-5 items-center w-full h-full justify-center font-semibold text-[14px] md:text-[28px]">
            {welcome.map((w, i) => (
              <motion.p
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: i * 0.5, ease: "easeOut" }}
                key={i}
              >
                {w}
              </motion.p>
            ))}
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

export default WelcomePage;
