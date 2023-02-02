{% raw %}
import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    const cellSpacing = [10, 10];
    let panels = [
        { 'sizeX': 1, 'sizeY': 1, 'row': 0, 'col': 0, content: '<div class="content">0</div>' },
        { 'sizeX': 3, 'sizeY': 2, 'row': 0, 'col': 1, content: '<div class="content">1</div>' },
        { 'sizeX': 1, 'sizeY': 3, 'row': 0, 'col': 4, content: '<div class="content">2</div>' },
        { 'sizeX': 1, 'sizeY': 1, 'row': 1, 'col': 0, content: '<div class="content">3</div>' },
        { 'sizeX': 2, 'sizeY': 1, 'row': 2, 'col': 0, content: '<div class="content">4</div>' },
        { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 2, content: '<div class="content">5</div>' },
        { 'sizeX': 1, 'sizeY': 1, 'row': 2, 'col': 3, content: '<div class="content">6</div>' }
    ];
    //Dashboard Layout's created event function
    function onCreated(args) {
        // movePanel("id", row, col)
        dashboardObj.movePanel("layout_0", 1, 0);
    }
    //Dashboard Layout's change event function
    function onChange(args) {
        console.log("Change event triggered");
    }
    let dashboardObj;
    return (<div>
          <div className="container">
              <DashboardLayoutComponent id='defaultLayout' ref={(scope) => { dashboardObj = scope; }} cellSpacing={cellSpacing} panels={panels} columns={5} created={onCreated.bind(this)} change={onChange.bind(this)}/>
          </div>
      </div>);
}
export default App;
{% endraw %}