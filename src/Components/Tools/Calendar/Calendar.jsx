import { useState, useEffect } from "react";
import { generateDate, months } from "./calendarFunc";
import dayjs from "dayjs";
import { Cn } from "./cn.js";
import { CaretCircleRight, CaretCircleLeft } from "@phosphor-icons/react";

function Calendar() {
  const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  const currentDay = dayjs();
  const [today, setToday] = useState(currentDay);

  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <div className="flex justify-center div-x-2 gap-10 pt-[80px] items-center">
        {/* schedule */}
        <div className="h-96 w-96 pt-2">
          <h1 className="text-[21px] text-hover-active  ">
            {date.toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h1>
        </div>

        {/* calendar adjust w- height for sm */}
        <div className="w-[440px] h-auto">
          <div className="w-full flex items-center justify-around gap-2">
            <span>
              <CaretCircleLeft
                size={32}
                className="text-hover-active cursor-pointer"
                onClick={() => {
                  setToday(today.month(today.month() - 1));
                }}
              />
            </span>
            <h1 className="text-hover-active">
              {months[today.month()]}, {today.year()}
            </h1>
            <span>
              <CaretCircleRight
                size={32}
                className="text-hover-active cursor-pointer"
                onClick={() => {
                  setToday(today.month(today.month() + 1));
                }}
              />
            </span>
          </div>
          <div className="w-[440px] grid grid-cols-7 text-hover-active">
            {days.map((days, index) => {
              return (
                <h1
                  key={index}
                  className="h-14 border-b border-costum-blue grid place-content-center text-sm"
                >
                  {days}
                </h1>
              );
            })}
          </div>
          <div className="w-[440px] grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => (
                <div
                  key={index}
                  className="h-14 grid place-content-center text-sm"
                >
                  <h1
                    className={Cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-hover-active text-white" : "b",
                      "h-10 w-10 grid place-content-center rounded-full hover:bg-hover-active hover:text-white cursor-pointer transition-all"
                    )}
                  >
                    {date.date()}
                  </h1>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
