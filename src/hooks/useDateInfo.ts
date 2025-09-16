import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getWeekType } from "../utils/getWeekType";

export const useDateInfo = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const startDate = useSelector(
    (state: RootState) => state.timetable.startDate
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timerId);
  }, []);

  const dayOfWeek = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const weekType = getWeekType(currentDate, startDate);

  return {
    currentDate,
    dayOfWeek,
    weekType,
  };
};
