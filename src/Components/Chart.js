import React from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux'
import moment from 'moment';


class Chart extends React.Component {

        

  render() {
    
    const months = this.props.postReducer.post.map(post => moment(post.date_trained).format('L'))

    const january= months.reduce((a, month) => a+(month.slice(0, 2) === `01` ? 1 : 0), 0)

    const february = months.reduce((a, month) => a+(month.slice(0, 2) === `02` ? 1 : 0), 0)

    const march = months.reduce((a, month) => a+(month.slice(0, 2) === `03` ? 1 : 0), 0)

    const april = months.reduce((a, month) => a+(month.slice(0, 2) === `04` ? 1 : 0), 0)
    
    const may = months.reduce((a, month) => a+(month.slice(0, 2) === `05` ? 1 : 0), 0)

    const june = months.reduce((a, month) => a+(month.slice(0, 2) === `06` ? 1 : 0), 0)

    const july = months.reduce((a, month) => a+(month.slice(0, 2) === `07` ? 1 : 0), 0)

    console.log('Months:', months)

    // const newDate = this.props.postReducer.post.length ? moment(this.props.postReducer.post[0].date_trained).format('l') : null


    // console.log(newDate)

    

    const data = {
  labels: ['January', 'February', 'March',
           'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Days Trained',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [january, february, march, april, may, june, july]
    }
  ]
}

    
    return (
      <div>
        <Bar
        
          data={data}
          width={500}
          height={200}

          options={{
            title:{
              display:true,
              text:'Monthly Training Totals',
              fontSize:20,
              maintainAspectRatio: false
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Chart)