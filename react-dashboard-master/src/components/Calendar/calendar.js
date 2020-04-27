import Calendar from 'react_google_calendar'
import React, {Component} from "react";

const calendar_configuration = {
    api_key: 'API KEY HERE',
    calendars: [
        {
            name: 'demo', url: 'URL HERE'
        }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

export default class MyApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    render = () =>
        <div>
            <Calendar
                events={this.state.events}
                config={calendar_configuration} />
        </div>
}