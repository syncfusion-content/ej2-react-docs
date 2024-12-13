{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    NodeModel,
    DiagramComponent
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance: DiagramComponent;
let node: NodeModel[] = [{
  offsetX: 300,
  offsetY: 300,
}];
function App() {
  const updateOffset = () => {
    diagramInstance.scrollSettings.horizontalOffset = 200;
    diagramInstance.scrollSettings.verticalOffset = 100;
    diagramInstance.dataBind();
  }; 
  return (
    <div>
      <button id="updateOffset" onClick={updateOffset}>Update Scroller Offset</button>
      <DiagramComponent
        id="container"
        ref={(diagram) => (diagramInstance = diagram)}
        width={700}
        height={700}
        nodes={node}
        rulerSettings={{ showRulers: true }}
        scrollSettings={{ scrollLimit: 'Infinity' }}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}

