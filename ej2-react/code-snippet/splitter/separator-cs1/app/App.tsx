


import { PaneDirective, PanesDirective, SplitterComponent } from '@syncfusion/ej2-react-layouts';
import * as React from "react";

class App extends React.Component {
  public leftContent(): JSX.Element {
    return (
      <div>
        <div className="content">
          <h3>Grid </h3>
          The ASP.NET DataGrid control, or DataTable is a feature-rich control used to display data in a tabular format.
        </div>
      </div>
    );
  }
  public middleContent(): JSX.Element {
    return (
      <div>
        <div className="content">
          <h3>Schedule </h3>
          The ASP.NET Scheduler, a.k.a. event calendar, facilitates almost all calendar features, thus allowing users to manage their time efficiently.
        </div>
      </div>
    );
  }
  public rightContent(): JSX.Element {
    return (
      <div>
        <div className="content">
          <h3>Chart </h3>
          ASP.NET charts, a well-crafted easy-to-use charting package, is used to add beautiful charts in web and mobile applications.
        </div>
      </div>
    );
  }
  public render() {
    return (<div className="App">
      <SplitterComponent id="separator" height="250px" width='600px' separatorSize={5}>
      <PanesDirective>
        <PaneDirective size='200px' content = {this.leftContent as any}/>
        <PaneDirective size='200px' content = {this.middleContent as any}/>
        <PaneDirective size='200px' content = {this.rightContent as any}/>
      </PanesDirective>
      </SplitterComponent>
  </div>);
  }
}
export default App;


