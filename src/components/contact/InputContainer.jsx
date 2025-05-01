import { useState } from "react";
import FadeOnScroll from "../utilComponents/FadeOnScroll";

const InputContainer = ({
  label,
  onChange,
  placeholder,
  className = "",
  isArea = false,
  error,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [messageCounter, setMessageCounter] = useState(0);
  const maxLength = 500;

  return (
    <div className={`flex flex-col ${className}`}>
      <FadeOnScroll>
        <div className="flex flex-col">
          <label
            className={`text-xs font-semibold tracking-wider uppercase ${
              isFocused ? "text-secondary" : "text-textPrimary"
            } ${isArea ? "mb-2" : "mb-1"}`}
          >
            {label}
          </label>
          {isArea ? (
            <div className="relative w-full">
              <div className="absolute right-2 -top-4 text-xs text-textSecondary">
                {messageCounter}/{maxLength}
              </div>
              <textarea
                maxLength={maxLength}
                placeholder={placeholder}
                rows={5}
                onChange={(e) => {
                  if (e.target.value.length <= maxLength) {
                    setMessageCounter(e.target.value.length);
                    onChange(e.target.value);
                  }
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full appearance-none bg-background border-2 rounded-lg border-textSecondary text-textPrimary font-semibold text-lg
                p-2 resize-none focus:outline-none focus:border-secondary"
              />
              <p className="text-red text-sm mt-1">{error}</p>
            </div>
          ) : (
            <>
              <input
                maxLength={30}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="rounded-none bg-background border-b-2 border-textSecondary text-textPrimary font-semibold text-lg
              py-3 focus:outline-none focus:border-b-secondary"
              />
              <p className="text-red text-sm mt-1">{error}</p>
            </>
          )}
        </div>
      </FadeOnScroll>
    </div>
  );
};

export default InputContainer;
