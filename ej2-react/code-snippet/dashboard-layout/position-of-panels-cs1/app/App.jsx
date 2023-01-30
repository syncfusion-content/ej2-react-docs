import { DashboardLayoutComponent } from '@syncfusion/ej2-react-layouts';
import * as React from 'react';
function App() {
    const cellSpacing = [20, 20];
    let panels = [
        { "row": 0, "col": 0, content: '<div class="content">1</div>' },
        { "row": 0, "col": 1, content: '<div class="content">2</div>' },
        { "row": 0, "col": 2, content: '<div class="content">3</div>' },
        { "row": 1, "col": 0, content: '<div class="content">4</div>' },
        { "row": 1, "col": 1, content: '<div class="content">5</div>' },
        { "row": 1, "col": 2, content: '<div class="content">6</div>' }
    ];
    return (<div>
          <div className="container">
              <DashboardLayoutComponent id='defaultLayout' cellSpacing={cellSpacing} panels={panels} columns={3}/>
          </div>
      </div>);
}
export default App;
