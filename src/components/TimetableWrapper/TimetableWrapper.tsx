import { useDispatch } from "react-redux";
import { useTimetable } from "../../hooks/useTimetable";
import DateForm from "../DateForm/DateForm";
import TimetableDisplay from "../TimetableDisplay/TimetableDisplay";
import TimetableForm from "../TimetableForm/TimetableForm";
import styles from "./TimetableWrapper.module.css";
import { AppDispatch } from "../../redux/store";
import { toggleEditing } from "../../redux/api/feature/timetableSlice";

const TimetableWrapper: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    weekA,
    weekB,
    isEditing,
    saveTimetable,
    isDateRangeSet,
    handleDatesSubmit,
    handleUpdateDates,
    handleReset,
  } = useTimetable();

  if (!isDateRangeSet) {
    return (
      <div className={styles.appContainer}>
        <DateForm onDatesSubmit={handleDatesSubmit} />
      </div>
    );
  }

  return (
    <div className={styles.appContainer}>
      {isEditing ? (
        <TimetableForm
          initialWeekA={weekA}
          initialWeekB={weekB}
          onSave={saveTimetable}
          onCancel={() => dispatch(toggleEditing(false))}
        />
      ) : (
        <TimetableDisplay
          weekA={weekA}
          weekB={weekB}
          onEdit={() => dispatch(toggleEditing(true))}
          onUpdateDates={handleUpdateDates}
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default TimetableWrapper;
