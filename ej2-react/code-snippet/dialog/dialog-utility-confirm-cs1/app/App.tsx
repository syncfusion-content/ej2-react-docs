

import { DialogUtility } from '@syncfusion/ej2-popups';
import * as React from "react";

class App extends React.Component<{}, {}> {
  public buttonClick(): void {
    DialogUtility.confirm('This is a Confirmation Dialog!');
}
  public render() {
    return (
    <button className="e-control e-btn" onClick={this.buttonClick = this.buttonClick.bind(this)} id="targetButton" role="button">Open Confirm Dialog</button>
    );
  }
}
export default App;



