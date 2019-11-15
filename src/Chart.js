import React from "react";
import Graph from "react-graph-vis";

export default () => {
    const graph = {
        nodes: [
          { id: "1", label: "Choice 1", title: "node 1 tootip text" },
          { id: "2", label: "Outcome 2", title: "node 2 tootip text" },
          { id: "3", label: "Outcome 1", title: "node 3 tootip text" },
          { id: "4", label: "Node 4", title: "node 4 tootip text" },
          { id: "5", label: "Node 5", title: "node 5 tootip text" }
        ],
        edges: [
          { from: "1", to: "2" },
          { from: "1", to: "3" },
          { from: "2", to: "4" },
          { from: "2", to: "5" }
        ]
      };
     
      const options = {
        layout: {
          hierarchical: {
            direction: "UD"
          }
        },
        edges: {
          color: "#000000"
        },
        height: "500px"
      };
     
      const events = {
        select: function(event) {
          var { nodes, edges } = event;
        }
      };
      return (
        <Graph
          graph={graph}
          options={options}
          events={events}
        />
      );
}
