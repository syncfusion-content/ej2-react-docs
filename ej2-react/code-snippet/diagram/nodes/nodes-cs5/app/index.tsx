import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DiagramComponent,
  Inject,
  DataBinding,
} from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
let diagramInstance: DiagramComponent;
let data: any = [
  {
    id: 'data1',
    parent: null,
  },
];
let items: any = new DataManager(data, new Query().take(7));
// initialize Diagram component
function App() {
  return (
    <DiagramComponent
      id="container"
      ref={(diagram) => (diagramInstance = diagram)}
      width={'100%'}
      height={'700px'}
      getNodeDefaults={(node) => {
        node.height = 100;
        node.width = 100;
        node.offsetX = 300;
        node.offsetY = 200;
        node.style = { fill: 'yellow', strokeColor: 'yellow' };
        return node;
      }}
      dataSourceSettings={{
        id: 'id',
        parentId: 'parent',
        dataManager: items,
      }}
    >
      <Inject services={[DataBinding]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
