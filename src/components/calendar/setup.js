    
            let daysInMonth = [];
            for (let d = 1; d <= this.daysInMonth(); d++) {
                let className = (d == this.currentDay() ? "day current-day": "day");
                let selectedClass = (d === this.state.selectedDay ? " selected-day " : "");
                for (let i=0; i< this.props.bigCities.length; i++){
                    // console.log(this.props.bigCities[i].date, d, this.props.bigCities[i].month, this.month(), this.props.bigCities[i].year, +this.year())
                    if (this.props.bigCities[i].date === d && this.props.bigCities[i].month === this.month() && this.props.bigCities[i].year === +this.year()) {
                        this.matches.push(d)
                        // this.matches.filter(val => d.includes(val))
                        this.parentYear.push(this.props.bigCities[i].year)
                        this.parentMonth.push(this.props.bigCities[i].month)
                        console.log('big cities:', this.props.bigCities)
                        console.log('big cities month:', this.props.bigCities[i].month)
                        console.log('parent year:', this.parentYear)
                        console.log('parent month:', this.parentMonth)
                        console.log(('killer:', killer))
                    }
                }
                daysInMonth.push(
                    <td onClick={(e)=>{this.onDayClick(e, d)}} key={d} name={d} className={className + selectedClass + (this.matches.includes(d) && this.parentYear[1] === +this.year() &&  this.parentMonth[1] === this.month()  ? 'day scheduled-day':'')} >
                        <span>{d}</span>
                    </td>
                );
            }