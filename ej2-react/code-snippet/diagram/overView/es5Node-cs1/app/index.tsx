

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { StackPanel, TextElement, DataBinding, OverviewComponent, HierarchicalTree, DiagramTools, DiagramComponent, Inject } from "@syncfusion/ej2-react-diagrams";
/**
 * Overview
 */
let data: object[] = [{
        'Id': 'parent',
        'Name': 'Maria Anders',
        'Designation': 'Managing Director',
        'IsExpand': 'true',
        'RatingColor': '#C34444'
    },
    {
        'Id': 1,
        'Name': 'Ana Trujillo',
        'Designation': 'Project Manager',
        'IsExpand': 'false',
        'RatingColor': '#68C2DE',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 2,
        'Name': 'Anto Moreno',
        'Designation': 'Project Lead',
        'IsExpand': 'false',
        'RatingColor': '#93B85A',
        'ReportingPerson': 'parent'
    },
    {
        'Id': 3,
        'Name': 'Thomas Hardy',
        'Designation': 'Senior S/w Engg',
        'IsExpand': 'false',
        'RatingColor': '#68C2DE',
        'ReportingPerson': 1
    },
    {
        'Id': 4,
        'Name': 'Christina kaff',
        'Designation': 'S/w Engg',
        'IsExpand': 'false',
        'RatingColor': '#93B85A',
        'ReportingPerson': 2
    },
    {
        'Id': 5,
        'Name': 'Hanna Moos',
        'Designation': 'Project Trainee',
        'IsExpand': 'true',
        'RatingColor': '#D46E89',
        'ReportingPerson': 2
    },
];
let diagramInstance: DiagramComponent;
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
let layout: any = {
  type: 'HierarchicalTree',
  margin: {
    top: 20
  },
  getLayoutInfo: (node, tree) => {
    if (!tree.hasSubTree) {
      tree.orientation = 'Vertical';
      tree.type = 'Alternate';
    }
  },
}
// Initializes the Diagram control
function App() {
  return (
    <div>
      <div style={{ width: '100%', float: 'left' }}>
        <DiagramComponent
          id="container"
          ref={(diagram) => (diagramInstance = diagram)}
          height={'499px'}
          created={() => {
            //To draw an object once, activate draw once
            diagramInstance.tool = DiagramTools.ZoomPan;
            diagramInstance.dataBind();
          }}
          layout={layout}
          dataSourceSettings={{
            id: 'Id',
            parentId: 'ReportingPerson',
            dataManager: items,
          }}
          getNodeDefaults={(node) => {
            node.height = 50;
            node.style.fill = '#6BA5D7';
            node.borderColor = 'white';
            node.style.strokeColor = 'white';
            return node;
          }}
          getConnectorDefaults={(obj) => {
            obj.style.strokeColor = '#6BA5D7';
            obj.style.fill = '#6BA5D7';
            obj.style.strokeWidth = 2;
            obj.targetDecorator.style.fill = '#6BA5D7';
            obj.targetDecorator.style.strokeColor = '#6BA5D7';
            obj.targetDecorator.shape = 'None';
            obj.type = 'Orthogonal';
            return obj;
          }}
          setNodeTemplate={(obj, diagram) => {
            let content = new StackPanel();
            content.id = obj.id + '_outerstack';
            content.style.strokeColor = 'darkgreen';
            content.style.fill = '#6BA5D7';
            content.orientation = 'Horizontal';
            content.padding = {
              left: 5,
              right: 10,
              top: 5,
              bottom: 5,
            };
            let innerStack = new StackPanel();
            innerStack.style.strokeColor = 'none';
            innerStack.style.fill = '#6BA5D7';
            innerStack.margin = {
              left: 5,
              right: 0,
              top: 0,
              bottom: 0,
            };
            innerStack.id = obj.id + '_innerstack';
            let text = new TextElement();
            text.content = obj.data['Name'];
            text.style.color = 'white';
            text.style.strokeColor = 'none';
            text.style.fill = 'none';
            text.id = obj.id + '_text1';
            let desigText = new TextElement();
            desigText.margin = {
              left: 0,
              right: 0,
              top: 5,
              bottom: 0,
            };
            desigText.content = obj.data['Designation'];
            desigText.style.color = 'white';
            desigText.style.strokeColor = 'none';
            desigText.style.fill = 'none';
            desigText.style.textWrapping = 'Wrap';
            desigText.id = obj.id + '_desig';
            innerStack.children = [text, desigText];
            content.children = [innerStack];
            return content;
          }}
        >
          <Inject services={[DataBinding, HierarchicalTree]} />
        </DiagramComponent>
      </div>
      <OverviewComponent
        id="overview"  
        sourceID="container"
        width={'100%'}
        height={'250px'}
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

