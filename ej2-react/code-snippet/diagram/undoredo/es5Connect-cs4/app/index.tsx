import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    NodeModel,
    ConnectorModel,
    Rect,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
let nodes: NodeModel[] = [{
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}];
function App() {
  const scrollableArea = (args: any) => {
    diagramInstance.scrollSettings.scrollLimit = args.target.value;
    diagramInstance.dataBind();
  };
  return (
    <div>
      <label>Scrollable Area</label>
      <select id="scrollLimit" onChange={scrollableArea}>
        <option value="Limited">Limited</option>
        <option value="Infinity">Infinity</option>
        <option value="Diagram">Diagram</option>
      </select>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={nodes}
        rulerSettings={{ showRulers: true }}
        scrollSettings={{
          canAutoScroll: true,
          //Sets the scroll limit
          scrollLimit: 'Limited',
          //Sets the scrollable Area
          scrollableArea: new Rect(0, 0, 1500, 1500),
        }}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);