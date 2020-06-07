import React, { Component } from 'react';

class App extends Component { 
  constructor(props){
    super(props);    
      this.state = {
        list:[]
      }    
      this.getList = this.getList.bind(this);  
    }

      getList = () => {
        fetch('api/getList')
        .then(res =>  res.json())
        .then(result => this.setState({
          list: result
        }))
      }

    componentDidMount() {   
       this.getList();  
      }

      render() { 
        const { list } = this.state
        return (
            <div className="container">
            <h1>List of Items</h1>
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  {item}
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
              
    </div>       
        );  
      }}

  export default App;

