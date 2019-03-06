import React, {Component} from 'react';
import logo from '../logo.svg';
import {AppointmentButton} from './AppointmentButton.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Appointment</h1>
                </header>
                <div className="btn-group">
                    <AppointmentButton> 9:00 a.m. </AppointmentButton>
                    <AppointmentButton> 10:00 a.m.</AppointmentButton>
                    <AppointmentButton> 11:00 a.m. </AppointmentButton>
                    <AppointmentButton> 12:00 p.m. </AppointmentButton>
                    <AppointmentButton> 1:00 p.m. </AppointmentButton>
                    <AppointmentButton> 2:00 p.m.</AppointmentButton>
                    <AppointmentButton> 3:00 p.m. </AppointmentButton>
                    <AppointmentButton> 4:00 p.m. </AppointmentButton>
                    <AppointmentButton> 5:00 p.m. </AppointmentButton>
                </div>
            </div>
        );
    }
}

export default App;
