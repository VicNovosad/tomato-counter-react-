
export default function TomatoBox({ day, selectedDay, setSelectedDay, allDaysTomatoes }){
//or //const tomatoDivs = new Array(allDaysTomatoes[day]).fill().map((_, index) => (
    const tomatoDivs = typeof allDaysTomatoes[day] === 'number'
        ? Array.from({ length: allDaysTomatoes[day] }, (_, index) => (
            <div key={index} className="tomato-img"></div>
        ))
        : null;
    
    return (
        <div 
            onClick={() => setSelectedDay(day)}
            className={`tomato-box ${selectedDay === day ? 'selected' : ''}`}>
            <h3
                // style={selectedDay === day ? {color: '#06cfa4', fontSize: '24px'} : {}}
            >{day}</h3>
            <div className="tomato-day-box">
                {!allDaysTomatoes[day] ? 'No water this day yet' : tomatoDivs}
            </div>
        </div>
    );
}