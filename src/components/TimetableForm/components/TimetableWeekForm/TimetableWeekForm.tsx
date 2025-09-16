import Button from "../../../Button/Button";
import type { TimetableWeekFormProps } from "./TimetableWeekForm.types";
import styles from "../../TimetableForm.module.css";

const TimetableWeekForm: React.FC<TimetableWeekFormProps> = ({
  weekData,
  weekType,
  days,
  onInputChange,
  onAddSubject,
  onRemoveSubject,
}) => {
  return (
    <div className={styles.formSection}>
      <h3 className={styles.sectionTitle}>Week {weekType}</h3>
      {days.map((day) => (
        <div key={day} className={styles.daySection}>
          <h4 className={styles.dayTitle}>{day}</h4>
          {(weekData[day] || []).map((subject, index) => (
            <div
              key={`${weekType}-${day}-${index}`}
              className={styles.subjectInputGroup}
            >
              <input
                type="text"
                value={subject}
                onChange={(e) => onInputChange(e, weekType, day, index)}
                placeholder={`Subject ${index + 1}`}
                className={styles.subjectInput}
              />
              <Button
                variant="danger"
                onClick={() => onRemoveSubject(weekType, day, index)}
                disabled={weekData[day]?.length === 1}
              >
                &times;
              </Button>
            </div>
          ))}
          <Button
            variant="success"
            className={styles.addButton}
            onClick={() => onAddSubject(weekType, day)}
          >
            + Add Subject
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TimetableWeekForm;
