import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
let connectors = [{
  // Name of the connector
  id: "connector1",
  // Sets source and target points
  sourcePoint: {
    x: 100,
    y: 100
  },
  targetPoint: {
    x: 200,
    y: 200
  }
},
{
  id: 'connector2',
  type: 'Straight',
  sourcePoint: {
    x: 300,
    y: 100,
  },
  targetPoint: {
    x: 400,
    y: 200,
  },
},

];
function App() {
  const add = () => {
    // diagramInstance.add(connectors[0])
    let connector = {
      type: 'Straight',
      sourcePoint: {
        x: 100,
        y: 300,
      },
      targetPoint: {
        x: 200,
        y: 400,
      },
    };
    diagramInstance.add(connector);
  }
  const remove = () => {
    let connector =
      diagramInstance.selectedItems.connectors.length > 0
        ? diagramInstance.selectedItems.connectors[0]
        : diagramInstance.connectors[0];
    diagramInstance.remove(connector)
  }
  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <DiagramComponent id="container" width={'100%'}
        ref={(diagram) => (diagramInstance = diagram)}
        height={'600px'} connectors={connectors}
        collectionChange={(args) => {
          console.log('collectionChange');
        }
        }
      /></div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
