import { DayOfWeek, Timetable } from "../types/interface";


export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  weekType: "A" | "B",
  day: DayOfWeek,
  index: number,
  setWeekA?: React.Dispatch<React.SetStateAction<Timetable>>,
  setWeekB?: React.Dispatch<React.SetStateAction<Timetable>>
) => {
  const { value } = e.target;
  const updateState = weekType === "A" ? setWeekA : setWeekB;
  if (updateState) {
    updateState((prevWeek) => {
      const newDaySubjects = prevWeek[day]
        ? [...(prevWeek[day] as string[])]
        : [];
      newDaySubjects[index] = value;
      return { ...prevWeek, [day]: newDaySubjects };
    });
  }
};
