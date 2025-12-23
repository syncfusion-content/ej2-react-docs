import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  const appendTextboxRef = React.useRef(null);
  const iconTextboxRef = React.useRef(null);

  const prependTemplate = () => (
    <>
      <span className="e-icons e-user"></span>
      <span className="e-input-separator"></span>
    </>
  );

  const appendTemplate = () => {
    const handleClick = (e) => {
      const textIcon = e.target;
      const inst = appendTextboxRef.current;
      if (!inst) return;

      if (inst.type === 'text') {
        inst.type = 'password';
        inst.dataBind();
        textIcon.className = 'e-icons e-eye-slash';
      } else {
        inst.type = 'text';
        inst.dataBind();
        textIcon.className = 'e-icons e-eye';
      }
    };

    return (
      <>
        <span className="e-input-separator"></span>
        <span id="text-icon" className="e-icons e-eye" onClick={handleClick}></span>
      </>
    );
  };

  const prependIconTemplate = () => (
    <>
      <span className="e-icons e-people"></span>
      <span className="e-input-separator"></span>
    </>
  );

  const appendIconTemplate = () => {
    const handleDeleteClick = () => {
      const inst = iconTextboxRef.current;
      if (!inst) return;
      inst.value = '';
      inst.dataBind();
    };
    return (
      <>
        <span>.com</span>
        <span className="e-input-separator"></span>
        <span className="e-icons e-trash" onClick={handleDeleteClick}></span>
      </>
    );
  };

  return (
    <div className='control-pane'>
      <div className='col-lg-12 control-section adornment-textbox'>
        <div className="content-wrapper sample-icon">
          <div className="row">
            <TextBoxComponent
              placeholder="Enter your Name"
              cssClass="e-prepend-textbox"
              floatLabelType="Auto"
              prependTemplate={prependTemplate}
            />
          </div>

          <div className="row">
            <TextBoxComponent
              ref={appendTextboxRef}
              placeholder="Password"
              type="password"
              floatLabelType="Auto"
              cssClass="e-eye-icon"
              appendTemplate={appendTemplate}
            />
          </div>

          <div className="row custom-margin-row">
            <TextBoxComponent
              ref={iconTextboxRef}
              placeholder="Enter the Mail Address"
              cssClass="e-icon-textbox"
              floatLabelType="Auto"
              prependTemplate={prependIconTemplate}
              appendTemplate={appendIconTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('sample'));