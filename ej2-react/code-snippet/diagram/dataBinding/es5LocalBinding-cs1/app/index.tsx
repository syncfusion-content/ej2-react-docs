


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    Diagram,
    DiagramComponent,
    NodeModel,
    ConnectorModel,
    Node,
    DataBinding,
    HierarchicalTree,
    DiagramTools,
    Inject
} from "@syncfusion/ej2-react-diagrams";
import {
    DataManager
} from '@syncfusion/ej2-data';

let species: object[] = [
    { 'Name': 'Species', 'fillColor': '#3DD94A' },
    { 'Name': 'Plants', 'Category': 'Species' },
    { 'Name': 'Fungi', 'Category': 'Species' },
    { 'Name': 'Lichens', 'Category': 'Species' },
    { 'Name': 'Animals', 'Category': 'Species' },
    { 'Name': 'Mosses', 'Category': 'Plants' },
    { 'Name': 'Ferns', 'Category': 'Plants' },
    { 'Name': 'Gymnosperms', 'Category': 'Plants' },
    { 'Name': 'Dicotyledens', 'Category': 'Plants' },
    { 'Name': 'Monocotyledens', 'Category': 'Plants' },
    { 'Name': 'Invertebrates', 'Category': 'Animals' },
    { 'Name': 'Vertebrates', 'Category': 'Animals' },
    { 'Name': 'Insects', 'Category': 'Invertebrates' },
    { 'Name': 'Molluscs', 'Category': 'Invertebrates' },
    { 'Name': 'Crustaceans', 'Category': 'Invertebrates' },
    { 'Name': 'Others', 'Category': 'Invertebrates' },
    { 'Name': 'Fish', 'Category': 'Vertebrates' },
    { 'Name': 'Amphibians', 'Category': 'Vertebrates' },
    { 'Name': 'Reptiles', 'Category': 'Vertebrates' },
    { 'Name': 'Birds', 'Category': 'Vertebrates' },
    { 'Name': 'Mammals', 'Category': 'Vertebrates' }
];
//Initializes diagram control
function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={490}
      //Configures data source
      dataSourceSettings={{
        id: 'Name',
        parentId: 'Category',
        dataManager: new DataManager(species),
        //binds the external data with node
        doBinding: (nodeModel: NodeModel, data: DataInfo, diagram: Diagram) => {
          nodeModel.annotations = [
            {
              /* tslint:disable:no-string-literal */
              content: data['Name'],
              margin: {
                top: 10,
                left: 10,
                right: 10,
                bottom: 0,
              },
              style: {
                color: 'black',
              },
            },
          ];
          /* tslint:disable:no-string-literal */
          nodeModel.style = {
            fill: '#ffeec7',
            strokeColor: '#f5d897',
            strokeWidth: 1,
          };
        },
      }}
      //Configrues HierarchicalTree layout
      layout={{
        type: 'HierarchicalTree',
        horizontalSpacing: 15,
        verticalSpacing: 50,
        margin: {
          top: 10,
          left: 10,
          right: 10,
          bottom: 0,
        },
      }}
      //Sets the default values of nodes
      getNodeDefaults={(obj: Node, diagram: Diagram) => {
        //Initialize shape
        obj.shape = {
          type: 'Basic',
          shape: 'Rectangle',
        };
        obj.style = {
          strokeWidth: 1,
        };
        obj.width = 95;
        obj.height = 30;
      }}
      //Sets the default values of connectors
      getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#4d4d4d';
        connector.targetDecorator.shape = 'None';
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

export interface EmployeeInfo {
    Role: string;
    color: string;
}
export interface DataInfo {
    [key: string]: string;
}



