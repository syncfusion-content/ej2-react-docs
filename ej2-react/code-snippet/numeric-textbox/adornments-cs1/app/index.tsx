import * as React from "react";
import * as ReactDOM from "react-dom";
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ChangeEventArgs } from '@syncfusion/ej2-inputs';

interface AdornmentsState {}

export default class App extends React.Component<{}, AdornmentsState> {
  iconNumericObj: React.RefObject<NumericTextBoxComponent> = React.createRef();
  prepenNumericObj: React.RefObject<NumericTextBoxComponent> = React.createRef();
  appendNumericObj: React.RefObject<NumericTextBoxComponent> = React.createRef();

  constructor(props: {}) {
    super(props);
  }

  onPriceChange = (): void => {
    if (this.appendNumericObj.current && this.prepenNumericObj.current) {
      this.appendNumericObj.current.value = 
        (this.prepenNumericObj.current.value as number) * 5;
    }
  };

  onKgChange = (): void => {
    if (this.prepenNumericObj.current && this.appendNumericObj.current) {
      this.prepenNumericObj.current.value = 
        (this.appendNumericObj.current.value as number) / 5;
    }
  };

  prependTemplate = (): React.ReactNode => {
    return (
      <>
        <span className="e-icons e-menu"></span>
        <span className="e-input-separator"></span>
        <span className="e-icons e-search"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendTemplate = (): React.ReactNode => {
    return <span>kg</span>;
  };

  prependIconTemplate = (): React.ReactNode => {
    const handleResetClick = (): void => {
      if (this.iconNumericObj.current) {
        this.iconNumericObj.current.value = null;
      }
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

  appendIconTemplate = (): React.ReactNode => {
    const handleSubractClick = (): void => {
      if (this.iconNumericObj.current) {
        this.iconNumericObj.current.value = 
          (this.iconNumericObj.current.value as number) - 1;
      }
    };
    const handlePlusClick = (): void => {
      if (this.iconNumericObj.current) {
        this.iconNumericObj.current.value = 
          (this.iconNumericObj.current.value as number) + 1;
      }
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

  render(): React.ReactNode {
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

ReactDOM.render(<App />,document.getElementById('sample'));