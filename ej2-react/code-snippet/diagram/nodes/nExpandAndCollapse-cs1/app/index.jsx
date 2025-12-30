
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  DiagramComponent,
  Inject,
  HierarchicalTree,
  DataBinding,
} from '@syncfusion/ej2-react-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
//Initializes data source
let data = [
  {
    Name: 'Node 1',
  },
  {
    Name: 'Node 2',
    ReportingPerson: 'Node 1',
  },
];
let items = new DataManager(data, new Query().take(7));
function App() {
  return (
    <div className="control-pane">
      <div className="control-section">
        <div className="content-wrapper" style={{ width: '100%' }}>
          <DiagramComponent
            id="container"
            width={'100%'}
            height={'550px'}
            //Uses layout to auto-arrange nodes on the diagram page
            layout={{
              //Sets layout type
              type: 'HierarchicalTree',
            }}
            //Configures data source for diagram
            dataSourceSettings={{
              id: 'Name',
              parentId: 'ReportingPerson',
              dataManager: items,
            }}
            //Sets the default properties for nodes
            getNodeDefaults={(obj) => {
              obj.shape = {
                type: 'Text',
                content: obj.data.Name,
              };
              obj.style = {
                fill: 'None',
                strokeColor: 'none',
                strokeWidth: 2,
                bold: true,
                color: 'white',
              };
              obj.borderColor = 'white';
              obj.width = 100;
              obj.height = 40;
              obj.backgroundColor = '#6BA5D7';
              obj.borderWidth = 1;
              obj.shape.margin = {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5,
              };
              obj.expandIcon = {
                height: 10,
                width: 10,
                shape: 'ArrowDown',
                fill: 'lightgray',
                offset: { x: 0.5, y: 1 },
              };
              obj.collapseIcon.offset = { x: 0.5, y: 1 };
              obj.collapseIcon.height = 10;
              obj.collapseIcon.width = 10;
              obj.collapseIcon.shape = 'ArrowUp';
              obj.collapseIcon.fill = 'lightgray';
              return obj;
            }}
          >
            <Inject services={[DataBinding, HierarchicalTree]} />
          </DiagramComponent>
        </div>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
