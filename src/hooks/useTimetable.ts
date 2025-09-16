import { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  resetDates,
  setTimetable,
  setDates,
  resetAll,
} from "../redux/api/feature/timetableSlice";
import { AppDispatch, RootState } from "../redux/store";
import type { Timetable } from "../types/interface";

export const useTimetable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { weekA, weekB, isEditing, isDateRangeSet, endDate } = useSelector(
    (state: RootState) => state.timetable
  );

  useEffect(() => {
    if (endDate && moment().isAfter(moment(endDate))) {
      dispatch(resetDates());
    }
  }, [dispatch, endDate]);

  const saveTimetable = (newWeekA: Timetable, newWeekB: Timetable) => {
    dispatch(setTimetable({ weekA: newWeekA, weekB: newWeekB }));
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
