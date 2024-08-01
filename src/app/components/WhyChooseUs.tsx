"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Button } from "@/components/ui/button";

import BackgroundGridImage from "@/assets/why-choose-us-grid.svg";

export function WhyChooseUs() {
  return (
    <>
      <section className="py-12 md:py-24 text-white relative ">
        <div className="container">
          {/* background grid */}
          <div className="w-full absolute left-0 -top-[25rem] min-h-96 ">
            <BackgroundGridImage className="w-full h-full opacity-60" />
          </div>
          <div>
            <div className="w-full absolute left-[50rem] top-[15rem] min-h-96  ">
              <BackgroundGridImage className="w-full h-full opacity-60" />
            </div>
            <div className="sm:w-[33.75rem] mx-auto  flex flex-col items-center   ">
              <div className="flex justify-center pb-5">
                <div className="tag text-lg border border-white rounded-lg">
                  Why choose us
                </div>
              </div>
              <h2
                className="section-header bg-gradient-to-b from-white to-[#586285] text-transparent bg-clip-text
  [-webkit-background-clip:text]  lg:w-[55rem] mt-10 lg:leading-tight "
              >
                Why Choose Our <span className="hidden lg:block"></span>
                <span className="block md:hidden"></span>
                AI-Powered On-Site Search?
              </h2>
              <p className="text-xl leading-relaxed pt-5 text-center text-white/90 mt-5">
                Our AI effortlessly navigates through your website information,
                providing visitors with instant, accurate results.
              </p>
            </div>
            <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-5">
              {/* add des prop */}
              <Card
                title="Expertise in AI Technology"
                icon={<AceternityIcon order="Reason 1" />}
                des="With years of experience in artificial intelligence and machine learning, we're pioneers in delivering innovative search solutions tailored to your business needs"
              >
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  // add these classed for the border rounded overflowing -> rounded-3xl overflow-hidden
                  containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
                />
              </Card>
              <Card
                title="Customizable Solutions"
                icon={<AceternityIcon order="Reason 2" />}
                des="We understand that every business is unique. That's why we offer customizable solutions to suit your specific requirements and objectives."
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  // change bg-black to bg-pink-900
                  containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
                  colors={[
                    // change the colors of the
                    [255, 166, 158],
                    [221, 255, 247],
                  ]}
                  dotSize={2}
                />
                {/* Radial gradient for the cute fade */}
                {/* remove this one */}
                {/* <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" /> */}
              </Card>
              <Card
                title="Proven Results"
                icon={<AceternityIcon order="Reason 3" />}
                des="Join the ranks of satisfied clients who have experienced increased conversion rates, higher customer satisfaction, and improved retention with our AI-powered on-site search."
              >
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
                  colors={[[125, 211, 252]]}
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      {/* this btn is from https://ui.aceternity.com/components/tailwindcss-buttons border magic */}
      {/* change rounded-lg, text-purple px-5 py-2 */}
      {/* remove focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cuz we don't need to focus */}
      {/* remove text-sm font-medium h-12 , add font-bold text-2xl */}
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-violet-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
    // <svg
    //   width="66"
    //   height="65"
    //   viewBox="0 0 66 65"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    // >
    //   <path
    //     d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    //     stroke="currentColor"
    //     strokeWidth="15"
    //     strokeMiterlimit="3.86874"
    //     strokeLinecap="round"
    //     style={{ mixBlendMode: "darken" }}
    //   />
    // </svg>
  );
};

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-gray-400 group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl bg-gradient-to-br from-[#2e2453] to-[#14093E] "
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        // background: "rgb()",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* change to h-10 w-10 , add opacity-30  */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-base opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200 font-semibold tracking-wide"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
