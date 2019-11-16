import React, {Component} from "react";
import Graph from "react-graph-vis";
import { tsConstructorType } from "@babel/types";

class Chart extends Component {
    constructor(props){
      super(props)
    }

    componentDidMount() {
    }
  

    render(){
      const Outcome = props =>
        <text height="1" style={{fontSize: "0.8px"}} dominantBaseline="baseline" textAnchor="middle" fill="green" {...props} />;

      const Dot = props => 
        <circle r="0.3" fill="url(#circleGradient)" filter="url(#f1)" {...props} />;

      const Branch = props => 
        <line stroke="green" strokeWidth="0.2" {...props} />;

      const Jonction = props => 
        <g>
          <Branch x1={props.x} y1={props.y} x2={props.x} y2={props.y+1} />
          <Branch x1={props.x} y1={props.y+1} x2={props.x-1} y2={props.y+2} />
          <Branch x1={props.x} y1={props.y+1} x2={props.x+1} y2={props.y+2} />
          <Dot cx={props.x}  cy={props.y+1} />
          <Dot cx={props.x}  cy={props.y} />
        </g>;


      return (
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="circleGradient">
              <stop offset="10%" stopColor="gold"/>
              <stop offset="95%" stopColor="green"/>
            </radialGradient>
            <filter id="f1">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.1" />
            </filter>
          </defs>


          <rect width="100%" height="100%" fill="black"/>
          
          <g style={{transform: 'translate(50%, 50%) scale(20,20) '}}>
            <Outcome x="0" y="0">Root Node</Outcome>    
          
            <Jonction x={0} y={1} />
            <Outcome x="1" y="3" textAnchor="start">Outcome 1 </Outcome>
            <Outcome x="-1" y="3" textAnchor="end">Outcome 2 </Outcome>

            <Jonction x={1} y={3} />
            <Outcome x="2" y="5" textAnchor="start">Outcome 1</Outcome>
            <Outcome x="0" y="5" textAnchor="end">Outcome 1</Outcome>

            <Jonction x={0} y={5} />
            <Outcome x="1" y="7" textAnchor="start">Outcome 1</Outcome>
            <Outcome x="-1" y="7" textAnchor="end">Outcome 1</Outcome>
            

          </g>
      </svg>
      );
    }
}

export default Chart;