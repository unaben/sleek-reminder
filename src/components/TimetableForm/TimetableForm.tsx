import React, { useState } from "react";
import Button from "../Button/Button";
import type { TimetableFormProps } from "./TimetableForm.types";
import { days } from "./constants";
import { TimetableWeekForm } from "./components";
import styles from "./TimetableForm.module.css";
import { Timetable } from "../../types/interface";
import { handleInputChange, handleAddSubject, handleRemoveSubject } from "./utils/timetableForm";

const TimetableForm: React.FC<TimetableFormProps> = (props) => {
  const { initialWeekA, initialWeekB, onSave, onCancel } = props;
  const [weekA, setWeekA] = useState<Timetable>(initialWeekA);
  const [weekB, setWeekB] = useState<Timetable>(initialWeekB);

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Edit Timetable</h2>
      <div className={styles.formGrid}>
        <TimetableWeekForm
          weekData={weekA}
          weekType="A"
          days={days}
          onInputChange={(e, weekType, day, index) =>
            handleInputChange(e, weekType, day, index, setWeekA, setWeekB)
          }
          onAddSubject={(weekType, day) =>
            handleAddSubject(weekType, day, setWeekA, setWeekB)
          }
          onRemoveSubject={(weekType, day, index) =>
            handleRemoveSubject(
              weekType,
              day,
              index,
              weekA,
              weekB,
              setWeekA,
              setWeekB
            )
          }
        />
        <TimetableWeekForm
          weekData={weekB}
          weekType="B"
          days={days}
          onInputChange={(e, weekType, day, index) =>
            handleInputChange(e, weekType, day, index, setWeekA, setWeekB)
          }
          onAddSubject={(weekType, day) =>
            handleAddSubject(weekType, day, setWeekA, setWeekB)
          }
          onRemoveSubject={(weekType, day, index) =>
            handleRemoveSubject(
              weekType,
              day,
              index,
              weekA,
              weekB,
              setWeekA,
              setWeekB
            )
          }
        />
      </div>
      <div className={styles.buttonGroup}>
        <Button onClick={() => onSave(weekA, weekB)}>Save Timetable</Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TimetableForm;
