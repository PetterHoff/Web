//Create list of months
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Desember"];
let daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

// Class for calender (React component)
class Calendar extends React.Component{
    //Constructor for a date object
    constructor(props){
    super(props);
    const date = new Date();
    this.state={
        currentMonth: date.getMonth(),
        currentYear: date.getFullYear(),
        currentDay: date.getDay()
    };
    }
    // Method for moving to the previous month
    prevMonth = () => {
        //Setter staten til å være forrige måned (-1), for så å returne en ny dato
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
        // Setter staten til å være neste måned (+1), for så å returnere en ny dato
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
    // Litt verre å forklare
    /*
    *
    * 
    */
    renderDays = () => {
        const { currentMonth, currentYear, selectedDate } = this.state;
        // Get the day of the week for the first day of the month
        const dayOfWeek = new Date(currentYear, currentMonth, 1).getDay();
        // Siden getDay() returnerer 0 for søndag, vil vi ha 6 for søndag så må søndag settes til 6
        const firstDayOfMonth = (dayOfWeek === 0) ? 6 : dayOfWeek - 1;
        // Get the number of days in the month
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        //Oppretter en tom liste for dager
        let days = [];
        // For-løkke som legger til tomme dager før første dagen i måneden, hvis første dagen er en fredag vil det legges til 4 tomme dager
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="empty-day"></div>);
        }
        //For-løkke som legger til dager i måneden, begynner fra dag første dagen i måneden
        for (let day = 1; day <= daysInMonth; day++) {

            const isSelected = selectedDate === day;
            // Legger til en div for hver dag i måneden av typen "day" og legger til en onClick event som kaller selectDate metoden
            // Hvis dagen er valgt vil klassen "selected" legges til
            // Sånn at vi kan se hvilken dag som er valgt
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
    // Metode som returnerer en div som inneholder en div for hver dag i uken
    // Linje 96-100: 
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