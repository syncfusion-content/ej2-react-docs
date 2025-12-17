import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

interface AdornmentsState {}

export default class App extends React.Component<{}, AdornmentsState> {
  private appendTextboxObj = React.createRef<TextBoxComponent>();
  private iconTextboxObj = React.createRef<TextBoxComponent>();

  constructor(props: {}) {
    super(props);
  }

  prependTemplate = (): React.ReactNode => {
    return (
      <>
        <span className="e-icons e-user"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendTemplate = (): React.ReactNode => {
    const handleClick = (e: React.MouseEvent<HTMLSpanElement>): void => {
      const textIcon = e.target as HTMLSpanElement;
      if (textIcon && this.appendTextboxObj.current) {
        if (this.appendTextboxObj.current.type === 'text') {
          this.appendTextboxObj.current.type = 'Password';
          textIcon.className = 'e-icons e-eye-slash';
        } else {
          this.appendTextboxObj.current.type = 'text';
          textIcon.className = 'e-icons e-eye';
        }
      }
    };
    return (
      <>
        <span className="e-input-separator"></span>
        <span
          id="text-icon"
          className="e-icons e-eye"
          onClick={handleClick}
        ></span>
      </>
    );
  };

  prependIconTemplate = (): React.ReactNode => {
    return (
      <>
        <span className="e-icons e-people"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendIconTemplate = (): React.ReactNode => {
    const handleDeleteClick = (): void => {
      if (this.iconTextboxObj.current) {
        this.iconTextboxObj.current.value = '';
      }
    };
    return (
      <>
        <span>.com</span>
        <span className="e-input-separator"></span>
        <span
          className="e-icons e-trash"
          onClick={handleDeleteClick}
        ></span>
      </>
    );
  };

  render(): React.ReactNode {
    return (
      <div className='control-pane'>
        <div className='col-lg-12 control-section adornment-textbox'>
          <div className="content-wrapper sample-icon">
            <div className="row">
              <TextBoxComponent
                placeholder="Enter your Name"
                cssClass="e-prepend-textbox"
                floatLabelType="Auto"
                prependTemplate={this.prependTemplate}
              />
            </div>
            <div className="row">
              <TextBoxComponent
                ref={this.appendTextboxObj}
                placeholder="Password"
                floatLabelType="Auto"
                cssClass="e-eye-icon"
                appendTemplate={this.appendTemplate}
              />
            </div>
            <div className="row custom-margin-row">
              <TextBoxComponent
                ref={this.iconTextboxObj}
                placeholder="Enter the Mail Address"
                cssClass="e-icon-textbox"
                floatLabelType="Auto"
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