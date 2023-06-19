import React from "react";
import style from "./App.module.css";
import Button from "./component/ui/Button";

class App extends React.PureComponent {
  
  constructor(props) {
    super(props);
    
    this.state={counter:0}
  }
  render() {
    return (
      <div className={style.App}>
        valeur de counter :{" "}
        <span style={{ fontWeight: "900", fontSize: "42pt" }}>
          {this.state.counter}
        </span>
        <hr />
        <Button bgcolor="tomato" onButtonClick={()=>
        { this.setState({counter:this.state.counter-1});
        console.log(this.state.counter);
        }
        }>-1</Button>
        <Button bgcolor="skyblue" onButtonClick={()=>
        { this.setState({counter:this.state.counter+1});
        console.log(this.state.counter);
        }} >+1</Button>
      </div>
    );
  }
}
export default App;