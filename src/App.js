import React from 'react';
import './App.css';
import axios from 'axios';





     

// function App() {

//  const  onDragEvent =  function(event){
//     console.log(" event ", event)
//   };


//   return (
//     <div className="App">
//       <div className="wrapper"
//         style={{
//           width: '800px',
//           height: '50px',
//           border: "1px solid black"
//         }}
//       >
     
//     {boxes.map( (item, index) => {
//       return (
//           <Rnd
//             key = {index}
//             default={{
//               x: item.x,
//               y: item.y,
//               width: item.width,
//               height: item.height,
//             }}
//             minWidth={item.minWidth}
//             minHeight={item.minHeight}
//             bounds={item.bounds}
//             dragAxis= {item.dragAxis}
//             onDrag={(event => {onDragEvent(event)})}
//           >
//             <Box />
//           </Rnd>
//       )
//     })}



// {/*     
//     <Rnd
//         default={{
//           x: 105,
//           y: 0,
//           width: 100,
//           height: 50,
//         }}
//         minWidth={100}
//         minHeight={50}
//         bounds="parent"
//         dragAxis= 'x'
//       >
//         <Box />
//       </Rnd>
//    */}
  
//   </div>
  
//     </div>
//   );
// }


class App extends React.Component {

  constructor(props){
    super()
    this.state = {
     users: [],
  
    }
  }


  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            this.setState({users: res.data});

            // console.log(res)
        });
  }
 




  render() {

    const {users} = this.state

    return (

      <div>
        <div className="wrapper">
            {/* {users.map( (item, index) => {
              return (
                <div key = {index}> {item}
                </div>
              )
            })} */}

        </div>
        
      
      
      </div>
     
    );
  }
}


export default App;







   