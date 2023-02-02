import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";
export default class App extends React.Component {
    leftContent(data) {
        return (<div>
        <div className="content">
          <h3>Grid </h3>
          The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format.
        </div>
      </div>);
    }
    middleContent(data) {
        return (<div>
        <div className="content">
          <h3>Schedule </h3>
          The ASP.NET Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently.
        </div>
      </div>);
    }
    rightContent(data) {
        return (<div>
        <div className="content">
          <h3>Chart </h3>
          ASP.NET charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications.
        </div>
      </div>);
    }
    render() {
        return (<div className="App">
      <SplitterComponent id="percentage" height="200px" width='600px'>
      <PanesDirective>
        <PaneDirective size='200px' content={this.leftContent} resizable={false}/>
        <PaneDirective size='200px' content={this.middleContent}/>
        <PaneDirective size='200px' content={this.rightContent}/>
      </PanesDirective>
      </SplitterComponent>
  </div>);
    }
}
