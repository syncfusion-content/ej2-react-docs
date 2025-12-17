import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Component } from 'react';
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.rows = 5;
    this.cols = 250;
    this.cols2 = 500;
  }

  floatFocus = (args) => {
    args.target.parentElement.classList.add('e-input-focus');
  };

  floatBlur = (args) => {
    args.target.parentElement.classList.remove('e-input-focus');
  };

  render() {
    return (
      <div className='control-pane'>
        <div id="textarea-sample" className='control-section input-content-wrapper'>
          <div className="row custom-margin material">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <b>Outlined and Filled</b>
            </div>
          </div>
          <div className="row custom-margin custom-padding-5 material">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <TextAreaComponent
                placeholder="Outlined"
                cssClass="e-outline"
                floatLabelType="Auto"
                rows={this.rows}
                cols={this.cols}
              />
            </div>
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <TextAreaComponent
                placeholder="Filled"
                cssClass="e-filled"
                floatLabelType="Auto"
                rows={this.rows}
                cols={this.cols}
              />
            </div>
          </div>
          <div className="row custom-margin">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <b>Please leave a comment</b>
            </div>
          </div>
          <div className="row custom-margin">
            <div className="col-xs-12 col-sm-12 col-lg-12 col-md-12">
              <TextAreaComponent
                placeholder="Enter your comments"
                floatLabelType="Auto"
                rows={this.rows}
                cols={this.cols2}
              />
            </div>
          </div>
          <div className="row custom-margin">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <b>Validation States</b>
            </div>
          </div>
          <div className="row custom-margin">
            <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div className="e-input-group e-success">
                <textarea
                  className="e-input"
                  onFocus={this.floatFocus}
                  onBlur={this.floatBlur}
                  placeholder="Success"
                  rows={this.rows}
                  cols={this.cols}
                />
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div className="e-input-group e-warning">
                <textarea
                  className="e-input"
                  onFocus={this.floatFocus}
                  onBlur={this.floatBlur}
                  placeholder="Warning"
                  rows={this.rows}
                  cols={this.cols}
                />
              </div>
            </div>
            <div className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
              <div className="e-input-group e-error">
                <textarea
                  className="e-input"
                  onFocus={this.floatFocus}
                  onBlur={this.floatBlur}
                  placeholder="Error"
                  rows={this.rows}
                  cols={this.cols}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />,document.getElementById('sample'));