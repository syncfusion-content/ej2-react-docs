
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DataBinding, HierarchicalTree, DiagramTools, Inject } from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from '@syncfusion/ej2-data';
//Initializes diagram control
function App() {
    return (<DiagramComponent id="container" width={'100%'} height={490} 
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
            getLayoutInfo: (node, options) => {
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
    getNodeDefaults={(obj) => {
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
    getConnectorDefaults={(connector) => {
            connector.type = 'Orthogonal';
            connector.style.strokeColor = '#048785';
            connector.targetDecorator.shape = 'None';
        }} 
    //Configures data source
        dataSourceSettings={{
            id: "Id",
            parentId: "ParentId",
            dataSource: new DataManager({
                url: "https://services.syncfusion.com/react/production/api/RemoteData",
                crossDomain: true
            }),
            //binds the external data with node
            doBinding: (nodeModel, data, diagram) => {
                nodeModel.annotations = [
                    {
                        /* tslint:disable:no-string-literal */
                        content: data["Label"],
                        style: { color: "white" }
                    }
                ];
            }
        }}
    //Disables all interactions except zoom/pan
    tool={DiagramTools.ZoomPan} snapSettings={{
            constraints: 0,
        }}>
      <Inject services={[DataBinding, HierarchicalTree]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
