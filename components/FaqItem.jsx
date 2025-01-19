import clsx from "clsx";
import { useState } from "react";
import {SlideDown} from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeID, setActiveID] = useState(null);

  const active = activeID === item.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => setActiveID(activeID === item.id ? null : item.id)}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1"
            )}
          >
            {item.question}
          </div>
        </div>

        <div className={clsx("faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4", active && 'before:bg-p1 after:rotate-0 after:bg-p1')}>
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>

      <SlideDown>
          {activeID === item.id && (
            <div className="faq-content relative z-10 mb-10 rounded-14 border-2 border-s4 bg-s1/50 p-7 shadow-400 max-md:p-5">
              <div className="body-1 max-md:text-p3">{item.answer}</div>
            </div>
          )}
      </SlideDown>
    </div>
  );
};

export default FaqItem;
