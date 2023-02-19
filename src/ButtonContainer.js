export default function ButtonContainer({allDaysTomatoes, setAllDaysTomatoes, selectedDay}){
  
  const incrementTomatoes = () => {
    const newAllTomatoes = {...allDaysTomatoes};
    if (!newAllTomatoes[selectedDay]) {
      newAllTomatoes[selectedDay] = 1;
    } else {
      newAllTomatoes[selectedDay]++;
    }
    setAllDaysTomatoes(newAllTomatoes);
  }  

  const decrementTomatoes = () => {
    const newAllTomatoes = {...allDaysTomatoes};
    if (newAllTomatoes[selectedDay] > 0) {
      newAllTomatoes[selectedDay]--;
    }
    setAllDaysTomatoes(newAllTomatoes);
  }
  
  
  return(
    
      <div className="buttons-container">
        <div 
          className="button"
          onClick={decrementTomatoes} 
          >-</div>
        <div 
          className="button"
          onClick={incrementTomatoes} 
        >+</div>
      </div>
    );
}