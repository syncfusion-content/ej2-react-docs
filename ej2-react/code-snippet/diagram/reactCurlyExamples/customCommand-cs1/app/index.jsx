{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Keys, KeyModifiers } from "@syncfusion/ej2-react-diagrams";
let diagramInstance;
// Initializes the nodes
let node = [
  {
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    width: 70,
    height: 40,
    style: { fill: '#64abbb' },
  },
];

// Initializes the Diagram component
function App() {
  return (

    <DiagramComponent
      id="diagram1"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'650px'}
      height={'350px'}
      nodes={node}
      commandManager={{
        commands: [
          {
            name: 'clone',
            canExecute: function () {
              return diagramInstance.selectedItems.nodes.length > 0;
            },
            execute: function () {
              diagramInstance.copy();
              diagramInstance.paste();
            },
            gesture: {
              // Press G to clone node
              key: Keys.G,
              keyModifiers: null,
            },
          },
          {
            name: 'color',
            canExecute: function () {
              return diagramInstance.selectedItems.nodes.length > 0;
            },
            execute: function () {
              const node = diagramInstance.selectedItems.nodes[0];
              node.style.fill = node.style.fill === '#64abbb' ? 'yellow' : '#64abbb';
              diagramInstance.dataBind();
            },
            gesture: {
              // Press Shift+G or Alt+G to change node color
              key: Keys.G,
              keyModifiers: KeyModifiers.Shift | KeyModifiers.Alt,
            },
          },
        ],
      }}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

{% endraw %}
