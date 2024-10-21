import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
export default class Default extends React.Component {
  public textBoxObj = React.createRef();
  public render() {
    return (
      <div className="wrap">
        <div className="row">
          <TextBoxComponent
            id="default"
            placeholder="Enter value"
            floatLabelType="Auto"
            ref={this.textBoxObj}
            readOnly="true"
          />
        </div>
        <div className="row">
          <button
            className="e-btn update_value"
            id="valuebtn"
            onClick={this.updateBtnClick}
          >
            Set value
          </button>
          <button
            className="e-btn remove_value"
            id="removebtn"
            onClick={this.removeBtnClick}
          >
            Remove value
          </button>
        </div>
      </div>
    );
  }
  public updateBtnClick = () => {
    (this.textBoxObj as any).current.value = '10';
  };
  public removeBtnClick = () => {
    (this.textBoxObj as any).current.value = '';
  };
}

ReactDOM.render(<Default />, document.getElementById('input-container'));



