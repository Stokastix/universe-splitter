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
      return (
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" fill="black"/>
          <g style={{transform: 'translate(50%, 50%) scale(20,20) '}}>
            <text x="0" y="0" height="1" style={{fontSize: "0.8px"}} dominantBaseline="baseline" textAnchor="middle" fill="green">Root Node</text>    
          
            <g>
              <line x1="0" y1="1" x2="0" y2="2" stroke="green" strokeWidth="0.2" />

              <line x1="0" y1="2" x2="1" y2="3" stroke="green" strokeWidth="0.2" />
              <text x="1" y="3" height="1" style={{fontSize: "0.8px"}}  dominantBaseline="baseline" textAnchor="start" fill="green">Outcome 1</text>

              <line x1="0" y1="2" x2="-1" y2="3" stroke="green" strokeWidth="0.2" />
              <text x="-1" y="3" height="1" style={{fontSize: "0.8px"}} dominantBaseline="baseline" textAnchor="end" fill="green">Outcome 2</text>

              <g>
                <line x1="1" y1="3" x2="1" y2="4" stroke="green" strokeWidth="0.2" />

                <line x1="1" y1="4" x2="2" y2="5" stroke="green" strokeWidth="0.2" />
                <text x="2" y="5" height="1" style={{fontSize: "0.8px"}}  dominantBaseline="baseline" textAnchor="start" fill="green">Outcome 1</text>

                <line x1="1" y1="4" x2="0" y2="5" stroke="green" strokeWidth="0.2" />
                <text x="0" y="5" height="1" style={{fontSize: "0.8px"}} dominantBaseline="baseline" textAnchor="end" fill="green">Outcome 2</text>

                <g>
                  <line x1="0" y1="5" x2="0" y2="6" stroke="green" strokeWidth="0.2" />

                  <line x1="0" y1="6" x2="1" y2="7" stroke="green" strokeWidth="0.2" />
                  <text x="1" y="7" height="1" style={{fontSize: "0.8px"}}  dominantBaseline="baseline" textAnchor="start" fill="green">Outcome 1</text>

                  <line x1="0" y1="6" x2="-1" y2="7" stroke="green" strokeWidth="0.2" />
                  <text x="-1" y="7" height="1" style={{fontSize: "0.8px"}} dominantBaseline="baseline" textAnchor="end" fill="green">Outcome 2</text>

                </g>

              </g>

            </g>

          </g>
      </svg>
      );
    }
}

export default Chart;