import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetDates,
  setTimetable,
  setDates,
  resetAll,
} from "../redux/api/feature/timetableSlice";
import { AppDispatch, RootState } from "../redux/store";
import { Timetable } from "../types/interface";

export const useTimetable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { weekA, weekB, isEditing, isDateRangeSet, endDate } = useSelector(
    (state: RootState) => state.timetable
  );

  useEffect(() => {
    if (endDate && new Date() > new Date(endDate)) {
      dispatch(resetDates());
    }
  }, [dispatch, endDate]);

  const saveTimetable = (
    formDataWeekA: Timetable,
    formDataWeekB: Timetable
  ) => {
    dispatch(setTimetable({ weekA: formDataWeekA, weekB: formDataWeekB }));
  };

  const handleDatesSubmit = (startDate: string, endDate: string) => {
    dispatch(setDates({ startDate, endDate }));
  };

  const handleUpdateDates = () => {
    dispatch(resetDates());
  };

  const handleReset = () => {
    dispatch(resetAll());
  };

  const hasTimetable =
    weekA &&
    Object.values(weekA).some((day) => day?.length > 0) &&
    weekB &&
    Object.values(weekB).some((day) => day?.length > 0);

  return {
    weekA,
    weekB,
    isEditing,
    saveTimetable,
    hasTimetable,
    isDateRangeSet,
    handleDatesSubmit,
    handleUpdateDates,
    handleReset,
  };
};
