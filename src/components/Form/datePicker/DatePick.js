import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { MdCalendarToday } from "react-icons/md"
import { dateToString } from "../../utils/functions";
import styles from "../input/Input.module.css";
import './DatePick.css'


const DatePick = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(
    ({ value, onClick }, ref) => (
      <button className="datePicker" type="button" onClick={onClick} ref={ref} valid="true">
        <span>{dateToString(value)}</span>
        <MdCalendarToday />
      </button>
    ),
  )

  return (
    <div className={styles.inputGroup}>
      <label htmlFor={props.name} valid="true">
        {props.label}
      </label>
      <DatePicker
        selected={startDate}
        onChange={(value) => setStartDate(value)}
        dateFormat="yyyy-MM-dd"
        customInput={<CustomInput />}
      />
    </div>
  );
}

export default DatePick;
