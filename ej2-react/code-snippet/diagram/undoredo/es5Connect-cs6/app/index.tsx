{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    NodeModel,
    UndoRedo,
    Inject
} from "@syncfusion/ej2-react-diagrams";
let nodes: NodeModel[] = [{
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 200,
    annotations: [{
      id: 'label1',
      content: 'Start'
    }],
}];
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      nodes={nodes}
      historyManager={{ stackLimit: 3 }}
    >
      <Inject services={[UndoRedo]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}