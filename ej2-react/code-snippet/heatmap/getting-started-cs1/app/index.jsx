
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HeatMapComponent } from '@syncfusion/ej2-react-heatmap';

export function App() {
  return ( <HeatMapComponent ></HeatMapComponent> );
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

