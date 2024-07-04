//Create list of months
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"];
let daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Class for calender (React component)
class Calendar extends React.Component{
    //Constructor
    constructor(props){
    super(props);
    const date = new Date();
    this.state={
        currentMonth: date.getMonth(),
        currentYear: date.getFullYear(),
        currentDay: date.getDay()
    };
    }
    // Method for setting the previous month
    prevMonth = () => {
    this.setState(prevState => {
        const newDate = new Date(prevState.currentYear, prevState.currentMonth - 1);
        return{
            currentMonth: newDate.getMonth(),
            currentYear: newDate.getFullYear()
        }
    }) 
    }
    // Method for setting the next month
    nextMonth = () => {
        this.setState(prevState => {
            const newDate = new Date(prevState.currentYear, prevState.currentMonth + 1, 1);
            return {
                currentMonth: newDate.getMonth(),
                currentYear: newDate.getFullYear()
            };
        });
    };
    // Method for selecting a date
    selectDate=(day)=>{
        this.setState({
            selectedDate: day
        });
    }

    // Method for rendering the days in the calendar
    renderDays = () => {
        const { currentMonth, currentYear, selectedDate } = this.state;
        const dayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
        const firstDayOfMonth = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        
        let days = [];
        // Add empty divs for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }
        
        for (let day = 1; day <= daysInMonth; day++) {
            const isSelected = selectedDate === day;
            days.push(
                <div
                    key={day}
                    className={`day ${isSelected ? "selected" : ""}`}
                    onClick={() => this.selectDate(day)}
                >
                    {day}
                </div>
            );
        }
        return days;    
    };

    render() {
        const { currentMonth, currentYear } = this.state;
        return (
            <div className="calendar">
                <div className="calendarHeader">
                    <button className="prev" onClick={this.prevMonth}>&#8249;</button>
                    <div id="month-year">{months[currentMonth]} {currentYear}</div>
                    <button className="next" onClick={this.nextMonth}>&#8250;</button>
                </div>
                <div className="daysOfWeek">
                    {daysOfWeek.map((day, index) => <div key={index} className="dayOfWeek">{day}</div>)}
                </div>
                <div className="calendarDays">
                    {this.renderDays()}
                </div>
            </div>
        );
    }

}
    ReactDOM.render(<Calendar />, document.getElementById('react-calendar'));