{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from "react";
import {
  DiagramComponent,
  Inject,
  DataBinding,
  HierarchicalTree,
} from "@syncfusion/ej2-react-diagrams";

const App = () => {
  const diagramRef = useRef(null);

  const dataModify = [
    {
      id: "288192",
      IsAssistant: false,
      ParentId: "288200",
      shapeType: "Electrical Analytical Bus",
      load: "2600000 VA",
      current: "3127 A",
      voltage: "480 V",
      Name: "SWGREM4-B",
    },
    {
      id: "288193",
      IsAssistant: false,
      ParentId: "288192",
      shapeType: "Electrical Analytical Transformer",
      load: "800000 VA",
      current: "962 A",
      voltage: "480 V",
      Name: "ATS-EQ-1",
    },
    {
      id: "288198",
      IsAssistant: false,
      ParentId: "288192",
      shapeType: "Electrical Analytical Transfer Switch",
      load: "800000 VA",
      current: "962 A",
      voltage: "480 V",
      Name: "ATS-EQ-2",
    },
  ];

  const designConnectors = () => {
    const connectors = [];
    let count = 1;

    dataModify.forEach((node) => {
      const childNodes = checkIfAnyChildExists(node.id);
      childNodes.forEach((child) => {
        connectors.push({
          id: `connector-${count}`,
          sourceID: node.id,
          srcPortID: `portOut-${child.id}`,
          targetID: child.id,
          targetPortID: `portIn-${child.id}`,
        });
        count++;
      });
    });

    return connectors;
  };

  const checkIfAnyChildExists = (id) => {
    return dataModify.filter((data) => data.ParentId === id);
  };

  const getNodeDefaults = (node) => {
    node.width = 60;
    node.height = 100;
    node.shape = { type: "Basic", shape: "Rectangle" };
    node.style = { fill: "#6BA5D7", strokeColor: "White" };
    return node;
  };

  const getConnectorDefaults = (connector) => {
    connector.style = { strokeColor: "black", strokeWidth: 2 };
    connector.targetDecorator = {
      shape: "None",
      style: { fill: "#6BA5D7", strokeColor: "#6BA5D7" },
    };
    connector.type = "Orthogonal";
    connector.segmentThumbShape = "Circle";
    connector.sourcePortID = connector.srcPortID;
    connector.targetPortID = connector.targetPortID;
    return connector;
  };

  return (
    <DiagramComponent
      id="container"
      ref={diagramRef}
      width="100%"
      height="700px"
      layout={{
        type: "OrganizationalChart",
        verticalSpacing: 100,
        getLayoutInfo: (node, options) => {
          if (!options.hasSubTree) {
            options.orientation = "Horizontal";
          }
        },
      }}
      dataSourceSettings={{
        id: "id",
        parentId: "ParentId",
        dataSource: dataModify,
        crudAction: {
          customFields: ["Id", "Description", "Color"],
        },
        connectionDataSource: {
          id: "id",
          sourceID: "sourceID",
          targetID: "targetID",
          crudAction: {
            customFields: ["srcPortID", "targetPortID"],
          },
          dataManager: designConnectors(),
        },
      }}
      getNodeDefaults={getNodeDefaults}
      getConnectorDefaults={getConnectorDefaults}
    >
      <Inject services={[DataBinding, HierarchicalTree]} />
    </DiagramComponent>
  );
};

const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);

{% endraw %}