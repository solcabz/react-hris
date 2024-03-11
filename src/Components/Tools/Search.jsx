import { useState } from "react";
import * as Icon from "@phosphor-icons/react";

function Search() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex container items-center p-2 w-[380px] rounded-md">
      <div
        className={`relative w-full ${
          isFocused ? "focus-within:border-costum-blue" : ""
        }`}
      >
        <input
          type="text"
          placeholder="search..."
          className={`w-full p-2 pr-10 rounded-md border focus:outline-none focus:ring-2 focus:ring-costum-blue ${
            isFocused ? "border-costum-blue" : "border-gray-400"
          }`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <Icon.MagnifyingGlass
            size={22}
            className={`text-${isFocused ? "costum-blue" : "gray-400"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
