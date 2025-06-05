import React from "react";
class ClassCom extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 7,
      num2: 70
    };
  }

  componentDidMount(){
    async function  fetchData() {
        console.log("fetchingData....")
    }
        fetchData()
    }

  render() {

    
    const{props:{name},state:{num, num2}} = this
    console.log(this.props)
    // let num = 6
    return (
      <div>
        <h1>{name}</h1>
        <h1>Class Component</h1>
        <button onClick={()=>this.setState({
            num2: this.state.num2 - 1
        })}>Increament</button>
        {/* <p>{this.state.num}</p> */}
        <p>{this.state.num2}</p>
      </div>
    );
  }
}

export default ClassCom;
