import './index.css';
import * as React from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.appendTextboxObj = React.createRef();
    this.iconTextboxObj = React.createRef();
  }

  prependTemplate = () => {
    return (
      <>
        <span className="e-icons e-user"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendTemplate = () => {
    const handleClick = (e) => {
      let textIcon = e.target;
      if (textIcon) {
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

  prependIconTemplate = () => {
    return (
      <>
        <span className="e-icons e-people"></span>
        <span className="e-input-separator"></span>
      </>
    );
  };

  appendIconTemplate = () => {
    const handleDeleteClick = () => {
      this.iconTextboxObj.current.value = '';
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

  render() {
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

ReactDom.render(<App />,document.getElementById('sample'));