import { useState, useEffect } from "react";
import moment, { Moment } from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { getWeekType } from "../utils/getWeekType";

export const useDateInfo = () => {
  const [currentDate, setCurrentDate] = useState<Moment>(moment());
  const startDate = useSelector(
    (state: RootState) => state.timetable.startDate
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(moment());
    }, 60000);

    return () => clearInterval(timerId);
  }, []);

  const dayOfWeek = currentDate.format("dddd");
  const weekType = getWeekType(currentDate, startDate);

  return {
    currentDate,
    dayOfWeek,
    weekType,
  };
};
