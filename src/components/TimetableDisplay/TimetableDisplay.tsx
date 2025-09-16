import React, { useEffect } from "react";
import Button from "../Button/Button";
import { useDateInfo } from "../../hooks/useDateInfo";
import { useTimetable } from "../../hooks/useTimetable";
import type { TimetableDisplayProps } from "./TimetableDisplay.types";
import type { DayOfWeek } from "../../types/interface";
import styles from "./TimetableDisplay.module.css";


const TimetableDisplay: React.FC<TimetableDisplayProps> = (props) => {
  const { weekA, weekB, onEdit, onUpdateDates, onReset } = props;
  const { currentDate, dayOfWeek, weekType } = useDateInfo();
  const currentTimetable = (weekType === "A" ? weekA : weekB);
  const subjectsForToday = currentTimetable[dayOfWeek as DayOfWeek] || [];

  const { hasTimetable } = useTimetable();

  useEffect(() => {
    const endDate = localStorage.getItem("endDate");
    if (endDate && new Date() > new Date(endDate)) {
      onUpdateDates();
    }
  }, [onUpdateDates]);

  return (
    <>
      {!hasTimetable && (
        <div className={styles.displayContainer}>
          <h1 className={styles.welcomeTitle}>Welcome to your Timetable App</h1>
          <p className={styles.infoText}>
            No timetable data found. Please create one to get started.
          </p>
          <div className={styles.buttonGroup}>
            <Button onClick={onEdit}>Create Timetable</Button>
            <Button onClick={onReset} variant="danger">
              Reset
            </Button>
          </div>
        </div>
      )}
      {hasTimetable && (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") && (
        <div className={styles.displayContainer}>
          <h1 className={styles.welcomeTitle}>It's the weekend! 🥳</h1>
          <p className={styles.infoText}>No timetable today. Enjoy your day!</p>
          <div className={styles.buttonGroup}>
            <Button onClick={onEdit}>Edit Timetable</Button>
            <Button onClick={onUpdateDates} variant="secondary">
              Update Dates
            </Button>
          </div>
        </div>
      )}
      {hasTimetable && dayOfWeek !== "Saturday" && dayOfWeek !== "Sunday" && (
        <div className={styles.displayContainer}>
          <h1 className={styles.welcomeTitle}>Daily Timetable Reminder</h1>
          <p className={styles.infoText}>
            {currentDate.toLocaleDateString("en-US", { dateStyle: "full" })}
          </p>
          <h2 className={styles.infoText}>
            It's {dayOfWeek} of Week {weekType}
          </h2>
          <div className={styles.timetableCard}>
            <h3 className={styles.cardTitle}>Today's Subjects:</h3>
            <ul className={styles.subjectList}>
              {subjectsForToday.length > 0 ? (
                subjectsForToday.map((subject, index: number) => (
                  <li key={index} className={styles.subjectItem}>
                    <span className={styles.subjectIndex}>{index + 1}.</span>
                    &nbsp;
                    {subject}
                  </li>
                ))
              ) : (
                <li className={styles.noSubject}>
                  No subjects scheduled for today.
                </li>
              )}
            </ul>
          </div>
          <div className={styles.buttonGroup}>
            <Button onClick={onEdit}>Edit Timetable</Button>
            <Button onClick={onUpdateDates} variant="secondary">
              Update Dates
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TimetableDisplay;
