// access teams from database
import Calendar from 'react_google_calendar'
import React, {Component} from "react";

const calendar_configuration = {
    api_key: 'AIzaSyAJSufN6BrG08QvwGL_VmRCKqdIMyUTeXY',
    calendars: [
        {
            name: 'demo', url: '643352115261-p5ec8khsaffnc5s5q7v7g766aj664qrb.apps.googleusercontent.com'
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