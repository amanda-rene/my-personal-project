import React from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux'
import moment from 'moment';
import {Link} from 'react-router-dom'
import MenuRoundedIcon from '@material-ui/icons/MenuOpenRounded'

class Chart extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        toggleShow: false,

    }
}


toggleShowFunc = () => {
  this.setState((prevState)=> {
      return{
      toggleShow: !prevState.toggleShow
      }
  })
}

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
      hoverBackgroundColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      data: [january, february, march, april, may, june, july]
    }
  ]
}

    
    return (
      <div>
        <header className='header'><h1>Training Totals</h1>
      
        <nav className={`nav-bar ${this.state.toggleShow ? "show" : ""}`}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to='/add/post'>Add Training</Link></li>
                        <li><Link to='/display'>Display</Link></li>
                    </ul>
                </nav>
                <MenuRoundedIcon onClick={this.toggleShowFunc} alt='menu-icon' type='image' src={MenuRoundedIcon} id='nav-btn'/>

</header>
        
        <p
        style={{paddingTop: '200px', color:'white'}}>Here are your training totals for the year!</p>

        <Bar
        
          data={data}
          width={700}
          height={200}

          options={{
            title:{
              display:true,
              text:'Monthly Training Totals',
              color: 'rgba(255, 255, 255, 1)',
              fontSize:20,
              maintainAspectRatio: false
            },
            legend:{
              display:true,
              position:'right',
              
            }
          }}
        />
      <p className='danaher'><img src='https://media3.giphy.com/media/ZZqGbYItJ7ymDZ17WZ/giphy.gif?cid=ecf05e47qsbzqkuz3mywbh66qas5vfgas0av74quclrpoj47&rid=giphy.gif'></img></p>

      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(Chart)