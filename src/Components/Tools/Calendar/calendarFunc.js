import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateofMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateofMonth = dayjs().year(year).month(month).endOf("month");

  const arrayofDate = [];

  // create prefix date
  for (let i = 0; i < firstDateofMonth.date(); i++) {
    arrayofDate.push({ currentMonth: false, date: firstDateofMonth.date(i) });
  }

  //generate current date
  for (let i = firstDateofMonth.date(); i <= lastDateofMonth.date(); i++) {
    arrayofDate.push({
      date: firstDateofMonth.date(i),
      currentMonth: true,
      today:
        firstDateofMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
    });
  }

  const remainingDate = 35 - arrayofDate.length;

  for (
    let i = lastDateofMonth.date() + 1;
    i <= lastDateofMonth.date() + remainingDate;
    i++
  ) {
    arrayofDate.push({ date: lastDateofMonth.date(i), currentMonth: false });
  }

  return arrayofDate;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
