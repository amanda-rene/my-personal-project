
import React, {useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {TimePicker} from 'antd';
import 'antd/dist/antd.css';


function Calendar(props){
    const [selectedDate, setSelectedDate] = useState(null)
    const [dateTrained, setDateTrained] = useState(0)
    const [timeTrained, setTimeTrained] = useState(0)
    const [timeRolling, setTimeRolling] = useState(0)


    // addTraining = async (e) => {
    //     e.preventDefault();
    //     const {dateTrained, timeRolling, timeTrained} = this.state;
    //     try{
    //         const training = await axios.post('/api/add/post', {dateTrained, timeTrained, timeRolling})
    //         this.props.addTraining(training.data)
    //         this.props.history.push('/post')
    //     }
    //     catch {
    //         alert(`Couldn't add post :/`)
    //     }
    // }


//   going to need useEffect as opposed to componentDidMount
    return(
        <div>
            <h3>Date Trained</h3>
        <DatePicker 
                name='timeTrained'
                // value={this.timeTrained}
                placeholderText='date trained'
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)}/>
            <h3>Time Trained
                <h4>hh:mm:ss</h4>
            </h3>
        <TimePicker 
        showNow={false}
        minuteStep={15}/>
            <h3>Time Rolling</h3>
            <h4>hh:mm:ss</h4>
        <TimePicker
        showNow={false}

        minuteStep={15}/>
        
        </div>
    )
}

export default Calendar;