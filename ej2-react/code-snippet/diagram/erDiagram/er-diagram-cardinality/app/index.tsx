import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Diagram, ErDiagrams } from "@syncfusion/ej2-react-diagrams";
import { ConnectorModel, ErConnectorShapeModel } from "@syncfusion/ej2-diagrams";

Diagram.Inject(ErDiagrams);

// Define ER Nodes and connectors with a multiplicity type
const customer: NodeModel = {
  id: 'Customer',
  offsetX: 250,
  offsetY: 100,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Customer'
      }
    },
    fields: [
      {
        id: 'customer_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true
      }
    ]
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  }
};

const order: NodeModel= {
  id: 'Order',
  offsetX: 400,
  offsetY: 250,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Order'
      }
    },
    fields: [
      {
        id: 'order_id',
        name: 'OrderID',
        dataType: 'INT',
        isPrimaryKey: true
      },
      {
        id: 'customer_id_fk',
        name: 'CustomerID',
        dataType: 'INT',
        isForeignKey: true
      }
    ]
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  }
};

const relationship: ConnectorModel = {
  id: 'customer_order',
  sourceID: 'Customer',
  targetID: 'Order',
  shape: {
    type: 'Er',
    sourceMultiplicity: {
      type: 'One'
    },
    targetMultiplicity: {
      type: 'OneOrMany'
    }
  },
  style: {
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  },
  sourceDecorator: {
    style: {
      strokeColor: '#7c3aed',
      strokeWidth: 1.5
    }
  },
  targetDecorator: {
    style: {
      strokeColor: '#7c3aed',
      strokeWidth: 1.5
    }
  }
};
// Initialize diagram control
function App() {
  return (
    <DiagramComponent id="container"
      width={'100%'}
      height={'400px'}
      nodes={[customer,order]}
      connectors={[relationship]}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


