import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TimetableState } from "../model/interface";
import { Timetable, DayOfWeek } from "../../../types/interface";
import { initialTimetable } from "../../../utils/getWeekType";

const initialState: TimetableState = {
  weekA: initialTimetable,
  weekB: initialTimetable,
  isEditing: false,
  isDateRangeSet: false,
  startDate: null,
  endDate: null,
};

const timetableSlice = createSlice({
  name: "timetable",
  initialState,
  reducers: {
    setTimetable(
      state,
      action: PayloadAction<{ weekA: Timetable; weekB: Timetable }>
    ) {
      state.weekA = action.payload.weekA;
      state.weekB = action.payload.weekB;
      state.isEditing = false;
    },
    toggleEditing: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, isEditing: payload };
    },
    setDates(
      state,
      action: PayloadAction<{ startDate: string; endDate: string }>
    ) {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.isDateRangeSet = true;
    },
    resetDates(state) {
      state.startDate = null;
      state.endDate = null;
      state.isDateRangeSet = false;
    },
    resetAll(state) {
      state.weekA = initialTimetable;
      state.weekB = initialTimetable;
      state.isEditing = false;
      state.isDateRangeSet = false;
      state.startDate = null;
      state.endDate = null;
    },
    updateDaySubjects(
      state,
      action: PayloadAction<{
        weekType: "A" | "B";
        day: DayOfWeek;
        newSubjects: string[];
      }>
    ) {
      const { weekType, day, newSubjects } = action.payload;
      if (weekType === "A") {
        state.weekA[day] = newSubjects;
      } else {
        state.weekB[day] = newSubjects;
      }
    },
  },
});

export const {
  setTimetable,
  toggleEditing,
  setDates,
  resetDates,
  resetAll,
  updateDaySubjects,
} = timetableSlice.actions;

export default timetableSlice.reducer;
