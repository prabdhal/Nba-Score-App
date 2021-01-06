import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calender({ getSelectedDate }) {
  var today = new Date();

  const [selectedDate, setSelectedDate] = useState(today);

  useEffect(() => {
    handleSelectedDate(selectedDate);
  }, []);

  function handleSelectedDate(date) {
    setSelectedDate(date);
    getSelectedDate(date);
  }

  return (
    <div className="App">
      <DatePicker
        selected={selectedDate}
        dateFormat="yyyy-MM-dd"
        onChange={(date) => handleSelectedDate(date)}
        minDate={new Date("1979-09-01")}
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default Calender;
