import React from 'react';
import './App.css';
import axios from 'axios';


const openWeatherApiKey = 'c792484ade42380886f51003cfcaf04d';


class App extends React.Component {

  constructor(props){
    super()
    this.state = {
     weather: null,
  
    }
  }

 
  componentWillMount() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&units=metric&mode=json&appid=${openWeatherApiKey}`)
        .then(res => {
          console.log(res) 
          console.log(res.data) 
            this.setState({weather: res.data});

        });
  }
 




  render() {

    const {weather} = this.state
    // const users = [
    //   'all',
    //   'bill',
    //   'alo'
    // ]

    return (

      <div>
        <div className="wrapper">
            {/* {users.map( (item, index) => {
              return (
                <div key = {index}> {item.name}
                </div>
              )
            })} */}

            {weather && weather.name}

        </div>
        
      
      
      </div>
     
    );
  }
}


export default App;







   