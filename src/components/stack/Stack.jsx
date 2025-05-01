import React from "react";
import SectionContainer from "../utilComponents/SectionContainer";
import { stackData } from "../../data/stackData";
import FadeOnScroll from "../utilComponents/FadeOnScroll";
import { layoutWidth, secondaryTitle } from "../../utils/layout";

const Stack = () => {
  return (
    <SectionContainer title={"My Stack"}>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 md:gap-x-10 gap-y-5 md:gap-y-24 items-start ${layoutWidth}`}
      >
        {stackData.map((item, index) => (
          <React.Fragment key={item.category}>
            <FadeOnScroll>
              <div
                className={`text-4xl text-center ${secondaryTitle} ${
                  index !== 0 && "mt-20 md:mt-0"
                }`}
              >
                {item.category}
              </div>
            </FadeOnScroll>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-x-10 gap-y-10 px-10 md:px-0 md:max-w-[620px]">
              {item.technologies.map((technologies) => (
                <FadeOnScroll key={technologies.name}>
                  <div
                    key={technologies.name}
                    className="flex flex-col items-center gap-3 md:hover:scale-110 transition-transform duration-200"
                  >
                    {typeof technologies.icon === "string" ? (
                      <i
                        className={`${technologies.icon} colored text-5xl`}
                      ></i>
                    ) : (
                      technologies.icon
                    )}
                    <div className="text-textPrimary font-medium text-xl whitespace-nowrap">
                      {technologies.name}
                    </div>
                  </div>
                </FadeOnScroll>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Stack;
