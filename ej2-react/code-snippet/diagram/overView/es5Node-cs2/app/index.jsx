{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, OverviewComponent, SnapConstraints } from '@syncfusion/ej2-react-diagrams';

// A node is created and stored in nodes array.
let node = [
  { id: 'node1', offsetX: 400, offsetY: 400, height: 100, width: 200 },
];
// Initializes the Diagram control
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 7 }}>
        <DiagramComponent
          id="container"
          height={'790px'}
          width={'100%'}
          nodes={node}
          scrollSettings={{ scrollLimit: 'Diagram' }}
          // Sets the constraints of the SnapSettings
          snapSettings={{ constraints: SnapConstraints.None }}
        ></DiagramComponent>
      </div>
      <div
        style={{
          flex: 3,
          height: 250,
          padding: 0,
          right: 30,
          bottom: 20,
          border: '#eeeeee',
          background: '#f7f7f7',
        }}
      >
        <OverviewComponent
          id="overview"
          sourceID="container"
          width={'300px'}
          height={'150ppx'}
        />
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
{% endraw %}
