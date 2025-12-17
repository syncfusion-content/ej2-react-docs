import * as React from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.iconNumericObj = React.createRef();
    this.prepenNumericObj = React.createRef();
    this.appendNumericObj = React.createRef();
  }

  onPriceChange = () => {
    this.appendNumericObj.current.value = this.prepenNumericObj.current.value * 5;
  };

  onKgChange = () => {
    this.prepenNumericObj.current.value = this.appendNumericObj.current.value / 5;
  };

  prependTemplate = () => {
    return (
      <>
        <span className="e-icons e-menu"></span>
        <span className="e-input-separator"></span>
        <span className="e-icons e-search"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendTemplate = () => {
    return <span>kg</span>;
  };

  prependIconTemplate = () => {
    const handleResetClick = () => {
      this.iconNumericObj.current.value = null;
    };
    return (
      <>
        <span
          className="e-icons e-reset"
          title="Reset"
          onClick={handleResetClick}
        ></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendIconTemplate = () => {
    const handleSubractClick = () => {
      this.iconNumericObj.current.value = this.iconNumericObj.current.value - 1;
    };
    const handlePlusClick = () => {
      this.iconNumericObj.current.value = this.iconNumericObj.current.value + 1;
    };
    return (
      <>
        <span className="e-input-separator"></span>
        <span
          className="e-icons e-horizontal-line"
          onClick={handleSubractClick}
        ></span>
        <span className="e-input-separator"></span>
        <span className="e-icons e-plus" onClick={handlePlusClick}></span>
      </>
    );
  };

  render() {
    return (
      <div className="control-pane">
        <div className="col-lg-12 control-section">
          <div className="content-wrapper sample-numeric-icon">
            <div className="row custom-margin">
              <NumericTextBoxComponent
                ref={this.prepenNumericObj}
                floatLabelType="Auto"
                cssClass="e-prepend-numeric"
                value={1}
                placeholder="Enter the price"
                prependTemplate={this.prependTemplate}
                change={this.onPriceChange}
              />
            </div>
            <div className="row custom-margin">
              <NumericTextBoxComponent
                ref={this.appendNumericObj}
                floatLabelType="Auto"
                step={1}
                value={5}
                placeholder="Enter the kg"
                appendTemplate={this.appendTemplate}
                change={this.onKgChange}
              />
            </div>
            <div className="row custom-margin-row">
              <NumericTextBoxComponent
                ref={this.iconNumericObj}
                floatLabelType="Auto"
                placeholder="Enter the Number"
                value={10}
                showSpinButton={false}
                prependTemplate={this.prependIconTemplate}
                appendTemplate={this.appendIconTemplate}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDom.render(<App />,document.getElementById('sample'));