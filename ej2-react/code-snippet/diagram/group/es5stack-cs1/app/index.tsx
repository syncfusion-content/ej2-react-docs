{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    StackPanel,
    TextElement,
} from "@syncfusion/ej2-react-diagrams";
let diagramInstance:DiagramComponent;
let nodes: NodeModel[] = [{
    id: 'node5',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7'
    },
    annotations: [{
        content: 'Custom Template',
        offset: {
            y: 1
        },
        verticalAlignment: 'Top'
    }]
}, ];
let count: Number = 11;
let getTextElement: Function = (text: string) => {
    let textElement: TextElement = new TextElement();
    textElement.id = "text" + count;
    textElement.width = 50;
    textElement.height = 20;
    textElement.content = text;
    count++;
    return textElement;
};
let addRows: Function = (column: StackPanel) => {
    column.children.push(getTextElement('Row1'));
    column.children.push(getTextElement('Row2'));
    column.children.push(getTextElement('Row3'));
    column.children.push(getTextElement('Row4'));
};
//Intialize Diagram Component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={900}
      height={900}
      nodes={nodes}
      getNodeDefaults={(node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      }}
      setNodeTemplate={(obj: NodeModel, diagram: Diagram): StackPanel => {
        if (obj.id.indexOf('node5') !== -1) {
          // It will be replaced with grid panel
          let table: StackPanel = new StackPanel();
          table.orientation = 'Horizontal';
          table.padding.left;
          let column1: StackPanel = new StackPanel();
          column1.children = [];
          column1.children.push(getTextElement('Column1'));
          addRows(column1);
          let column2: StackPanel = new StackPanel();
          column2.children = [];
          column2.children.push(getTextElement('Column2'));
          addRows(column2);
          table.children = [column1, column2];
          return table;
        }
        return null;
      }}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);



{% endraw %}