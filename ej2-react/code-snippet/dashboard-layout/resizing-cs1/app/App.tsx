import {  DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';

function App() {
  const cellSpacing: number[] = [10, 10];
  let resize: any[] = ['e-south-east','e-east','e-west','e-north','e-south'];
  let panels: any =  [
    {'sizeX': 1, 'sizeY': 1,'row': 0, 'col': 0, content:'<div class="content">0</div>'},
    {'sizeX': 3, 'sizeY': 2, 'row': 0,'col': 1, content:'<div class="content">1</div>'},
    {'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content:'<div class="content">2</div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content:'<div class="content">3</div>'},
    {'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content:'<div class="content">4</div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content:'<div class="content">5</div>'},
    {'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content:'<div class="content">6</div>'}
  ];
  function onResizeStart(){
    console.log("Resize start");
  }
    //Dashboard Layout's drag event function
  function onResize(args: any) {
    console.log("Resizing");
  }
  //Dashboard Layout's dragstop event function
  function onResizeStop(args: any) {
    console.log("Resize stop");
  }
  return (
      <div>
          <div id="container">
              <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing}  panels={panels} allowResizing={true}  columns={5} resizableHandles={resize}
              resizeStart={onResizeStart} resize={onResize} resizeStop={onResizeStop}/>
          </div>
      </div>
  );
}
export default App;
