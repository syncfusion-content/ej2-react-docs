import * as React from "react";
import * as ReactDOM from "react-dom";
import { useRef } from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App(){
  const iconNumericObj = useRef<NumericTextBoxComponent>(null);
  const prepenNumericObj = useRef<NumericTextBoxComponent>(null);
  const appendNumericObj = useRef<NumericTextBoxComponent>(null);

  const onPriceChange = (): void => {
    if (appendNumericObj.current && prepenNumericObj.current) {
      appendNumericObj.current.value = 
        (prepenNumericObj.current.value as number) * 5;
    }
  };

  const onKgChange = (): void => {
    if (prepenNumericObj.current && appendNumericObj.current) {
      prepenNumericObj.current.value = 
        (appendNumericObj.current.value as number) / 5;
    }
  };

  const prependTemplate = () => {
    return (
      <>
        <span className="e-icons e-menu"></span>
        <span className="e-input-separator"></span>
        <span className="e-icons e-search"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  const appendTemplate = () => {
    return (
      <>
        <span>kg</span>
      </>
    );
  };

  const prependIconTemplate = () => {
    const handleResetClick = (): void => {
      if (iconNumericObj.current) {
        iconNumericObj.current.value = null;
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

  const appendIconTemplate = () => {
    const handleSubractClick = (): void => {
      if (iconNumericObj.current) {
        iconNumericObj.current.value = 
          (iconNumericObj.current.value as number) - 1;
      }
    };

    const handlePlusClick = (): void => {
      if (iconNumericObj.current) {
        iconNumericObj.current.value = 
          (iconNumericObj.current.value as number) + 1;
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

  return (
    <div className="control-pane">
      <div className="col-lg-12 control-section">
        <div className="content-wrapper sample-numeric-icon">
          <div className="row custom-margin">
            <NumericTextBoxComponent
              ref={prepenNumericObj}
              floatLabelType="Auto"
              cssClass="e-prepend-numeric"
              value={1}
              placeholder="Enter the price"
              prependTemplate={prependTemplate}
              change={onPriceChange}
            />
          </div>
          <div className="row custom-margin">
            <NumericTextBoxComponent
              ref={appendNumericObj}
              floatLabelType="Auto"
              step={1}
              value={5}
              placeholder="Enter the kg"
              appendTemplate={appendTemplate}
              change={onKgChange}
            />
          </div>
          <div className="row custom-margin-row">
            <NumericTextBoxComponent
              ref={iconNumericObj}
              floatLabelType="Auto"
              placeholder="Enter the Number"
              value={10}
              showSpinButton={false}
              prependTemplate={prependIconTemplate}
              appendTemplate={appendIconTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
ReactDOM.render(<App />,document.getElementById('sample'));