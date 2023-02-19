import { useState } from 'react';
import "./styles.css";
import TomatoBox from './TomatoBox';
import ButtonContainer from './ButtonContainer';

// 1. Select day, Turn it bold (default "M")
// 2. Create a state for each day's tomatoes 🍅 
// 3. Increment / decrement should work based which day is selected 

export default function App() {
  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  const [allDaysTomatoes, setAllDaysTomatoes] = useState({});
  const [selectedDay, setSelectedDay] = useState("M");
  
  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        {days.map((day, index) => (
            <TomatoBox key={index} 
              day={day}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              allDaysTomatoes={allDaysTomatoes}
            />
        ))}
        <ButtonContainer 
          allDaysTomatoes={allDaysTomatoes}
          setAllDaysTomatoes={setAllDaysTomatoes}
          selectedDay={selectedDay}
        />
      </div>
    </div>
  );
}
