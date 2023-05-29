import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    const cellSpacing = [10, 10];
    let enableRTL = true;
    let panels = [
        { 'id': 'Panel0', 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, header: '<div>Panel 0</div>', content: '<div class="content">Content<div>' },
        { 'id': 'Panel1', 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, header: '<div>Panel 1</div>', content: '<div class="content">Content<div>' },
        { 'id': 'Panel2', 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, header: '<div>Panel 2</div>', content: '<div class="content">Content<div>' },
        { 'id': 'Panel3', 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, header: '<div>Panel 3</div>', content: '<div class="content">Content<div>' },
        { 'id': 'Panel4', 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, header: '<div>Panel 4</div>', content: '<div class="content">Content<div>' },
        { 'id': 'Panel5', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, header: '<div>Panel 5</div>', content: '<div class="content">Content<div>' },
        { 'id': 'Panel6', 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, header: '<div>Panel 6</div>', content: '<div class="content">Content<div>' }
    ];
    return (<div>
          <div className="control-section">
              <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} enableRtl={enableRTL} panels={panels} columns={5}/>
          </div>
      </div>);
}
export default App;
