import React from "react";
import bStorage from "./Backend";
import Draggable from 'react-draggable';

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

const Split = props =>
  <g>
    <Jonction x={props.x} y={props.y} />
    <Outcome x={props.x-1-0.5} y={props.y+2} textAnchor="end">{props.option[0]}</Outcome>
    <Outcome x={props.x+1+0.4} y={props.y+2} textAnchor="start">{props.option[1]}</Outcome>
  </g>;

class Chart extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: []};

    bStorage.getLastSplits(10, docs => {
      const rawData = Object.values(docs).reverse();
      this.setState({"data": rawData});
    });
  }

  render(){
    var pos = 0;
    const dataNodes = this.state.data.map( function(item, i) {
      // we make sure we are between -4:4
      if( (pos===4 && item.selectedOption===1) || (pos===-4 && item.selectedOption===0) ){
        item.options = item.options.reverse();
        item.selectedOption = 1-item.selectedOption;
      }

      let res = <Split key={i} x={pos} y={1+2*i} option={item.options}/>;
      pos = (item.selectedOption === 1) ? (pos+1) : (pos-1);
      return res;
    });
      
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
        
        <Draggable axis="y" bounds={{bottom:0}}>
          <g>
          <rect width="100%" height="500%" fill="black"/>

          <g style={{transform: 'translate(50%, 10%) scale(20,20) '}}>
            <Outcome x="0" y="0">Start U-Splitter</Outcome>
            { dataNodes }
          </g>
          </g>
        </Draggable>
    </svg>
    );
  }
    
}

export default Chart;