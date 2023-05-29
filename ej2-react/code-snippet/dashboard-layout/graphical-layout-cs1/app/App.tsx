import {  DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

function App() {
  const cellSpacing: number[] = [10, 10];
  let panels: object[] =  [
    { "sizeX": 3, "sizeY": 2, "row": 0, "col": 1, content:'<div class="content">1</div>' },
    { "sizeX": 1, "sizeY": 3, "row": 0, "col": 4, content:'<div class="content">2</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 2, content:'<div class="content">3</div>' },
    { "sizeX": 1, "sizeY": 1, "row": 2, "col": 3, content:'<div class="content">4</div>' }
  ];
  return (
    <div>
      <div className="control-section">
          <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} showGridLines={true} panels={panels} columns={5} />
      </div>
    </div>
  );
}
export default App;
