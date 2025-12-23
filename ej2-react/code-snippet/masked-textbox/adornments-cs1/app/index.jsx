import * as React from "react";
import * as ReactDOM from "react-dom";
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default class App extends React.Component {
  prependTemplate = () => {
    return (
      <>
        <span className="e-icons e-user"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendTemplate = () => {
    return (
      <>
        <span className="e-input-separator"></span>
        <span className="e-icons e-send"></span>
      </>
    );
  };

  render() {
    return (
      <div className="control-pane">
        <div className="control-section">
          <div className="content-wrapper">
            <div className="mask-row">
              <MaskedTextBoxComponent
                mask="000-000-0000"
                promptChar="#"
                cssClass="e-prepend-mask"
                placeholder="Enter phone number"
                floatLabelType="Auto"
                prependTemplate={this.prependTemplate}
                appendTemplate={this.appendTemplate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('sample'));