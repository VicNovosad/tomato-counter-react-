import { useState } from 'react';
import "./styles.css";
import WaterBox from './WaterBox';
import ButtonContainer from './ButtonContainer';

export default function App() {
  const days = ["M", "T", "W", "Th", "F", "Sa", "Su"];
  const [allDaysTomatoes, setAllDaysTomatoes] = useState({});
  const [selectedDay, setSelectedDay] = useState("M");
  
  return (
    <div className="App">
      <div className="window">
        <h2>Water Glass Counter</h2>
        {days.map((day, index) => (
            <WaterBox key={index} 
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
