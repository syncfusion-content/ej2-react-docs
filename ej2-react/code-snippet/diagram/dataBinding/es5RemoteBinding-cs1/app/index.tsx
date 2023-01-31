{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    Node,
    Connector,
    DataBinding,
    HierarchicalTree,
    TreeInfo,
    DiagramTools,
    Inject
} from "@syncfusion/ej2-react-diagrams";
import {
    DataManager,
    Query
} from '@syncfusion/ej2-data';

//Initializes diagram control

function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={490}
      //Configrues hierarchical tree layout
      layout={{
        type: 'HierarchicalTree',
        margin: {
          left: 0,
          right: 0,
          top: 100,
          bottom: 0,
        },
        verticalSpacing: 40,
        getLayoutInfo: (node: Node, options: TreeInfo) => {
          if (options.level === 3) {
            node.style.fill = '#3c418d';
          }
          if (options.level === 2) {
            node.style.fill = '#108d8d';
            options.type = 'Center';
            options.orientation = 'Horizontal';
          }
          if (options.level === 1) {
            node.style.fill = '#822b86';
          }
        },
      }}
      //Sets the default values of nodes
      getNodeDefaults={(obj: NodeModel) => {
        obj.width = 80;
        obj.height = 40;
        //Initialize shape
        obj.shape = {
          type: 'Basic',
          shape: 'Rectangle',
        };
        obj.style = {
          fill: '#048785',
          strokeColor: 'Transparent',
        };
      }}
      //Sets the default values of connector
      getConnectorDefaults={(connector: ConnectorModel) => {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#048785';
        connector.targetDecorator.shape = 'None';
      }}
      //Configures data source
      dataSourceSettings={{
        id: 'EmployeeID',
        parentId: 'ReportsTo',
        dataManager: new DataManager(
          {
            url: 'https://mvc.syncfusion.com/Services/Northwnd.svc/',
            crossDomain: true,
          },
          new Query()
            .from('Employees')
            .select('EmployeeID,ReportsTo,FirstName')
            .take(9)
        ),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
          nodeModel.annotations = [
            {
              /* tslint:disable:no-string-literal */
              content: data['FirstName'],
              style: {
                color: 'white',
              },
            },
          ];
        },
      }}
      //Disables all interactions except zoom/pan
      tool={DiagramTools.ZoomPan}
      snapSettings={{
        constraints: 0,
      }}
    >
      <Inject services={[DataBinding, HierarchicalTree]} />
    </DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

export interface DataInfo {
    [key: string]: string;
}



{% endraw %}