import React, { useState } from "react";
import Button from "../Button/Button";
import type { DateFormProps } from "./DateForm.types";
import styles from "./DateForm.module.css";

const DateForm: React.FC<DateFormProps> = ({ onDatesSubmit }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (startDate && endDate) {
      onDatesSubmit(startDate, endDate);
    }
  };

  const isFormValid = startDate && endDate;

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Set Timetable Dates</h2>
      <p>Please provide a start and end date for your timetable period. </p>
      <form onSubmit={handleSubmit} className={styles.dateInputGroup}>
        <label className={styles.inputLabel}>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className={styles.dateInput}
          />
        </label>
        <label className={styles.inputLabel}>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className={styles.dateInput}
          />
        </label>
        <Button type="submit" disabled={!isFormValid}>
          Proceed to Timetable
        </Button>
      </form>
    </div>
  );
};

export default DateForm;
