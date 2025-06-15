
import React from "react";

/**
 * AdSpace - a simple container for paid advertisements.
 * The default style is now neutral.
 * You can pass custom children for real ads, or use the default placeholder.
 */
const AdSpace = ({
  vertical = false,
  className = "",
  children,
}: {
  vertical?: boolean;
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={`bg-white border border-gray-300 rounded-xl flex items-center justify-center my-6 mx-auto shadow-md
      ${vertical ? "w-56 h-80 flex-col" : "w-full h-28"}
      ${className}`}
    aria-label="Advertisement"
    role="complementary"
  >
    {children ?? (
      <span className="uppercase text-xs font-bold text-gray-400 tracking-widest">Advertisement</span>
    )}
  </div>
);

export default AdSpace;

