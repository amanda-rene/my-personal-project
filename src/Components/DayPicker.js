import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
// import DayPickerInput from 'react-day-picker/DayPickerInput';
// import 'react-day-picker/lib/style.css';

const DayPicker = (props) => {
    const [selectedDate, setSelectedDate] = useState(null)

return(
<DatePicker 
                name='dateTrained'
                // value={this.dateTrained}
                placeholderText='date trained'
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)}/>

)

}






export default DayPicker;



// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleDayChange = this.handleDayChange.bind(this);
//     this.state = {
//       selectedDay: undefined,
//       isEmpty: true,
//       isDisabled: false,
//     };
//   }

//   handleDayChange(selectedDay, modifiers, dayPickerInput) {
//     const input = dayPickerInput.getInput();
//     this.setState({
//       selectedDay,
//       isEmpty: !input.value.trim(),
//       isDisabled: modifiers.disabled === true,
//     });
//   }

//   render() {
//     const { selectedDay, isDisabled, isEmpty } = this.state;
//     return (
//       <div>
//           <h3>
//           {isEmpty && 'Please type or pick a day'}
//           {!isEmpty && !selectedDay && 'This day is invalid'}
//           {selectedDay && isDisabled && 'This day is disabled'}
//           {selectedDay &&
//             !isDisabled &&
//             `You chose ${selectedDay.toLocaleDateString()}`}
//         </h3>
//         <DayPickerInput
//           value={selectedDay}
//           onDayChange={this.handleDayChange}
//           dayPickerProps={{
//             selectedDays: selectedDay,
//             disabledDays: {
//               daysOfWeek: [0, 6],
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }


