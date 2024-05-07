

import { ChangeEventArgs as EventArgs, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class ReactApp extends React.Component<{}, { positionClass: string, isHorizontal: boolean }> {
  public fields: object = { text: 'pos', value: 'id' };
  public position: any = [
    { id: 'bottom-left', pos: 'BottomLeft' },
    { id: 'bottom-right', pos: 'BottomRight' },
    { id: 'top-left', pos: 'TopLeft' },
    { id: 'top-right', pos: 'TopRight' }
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      isHorizontal: false,
      positionClass: 'e-card-bottom-left'
    }
  }

  public onPositionChange(e: ChangeEventArgs): void {
    this.setState({
      positionClass: 'e-card-' + e.value
    });
  }

  public onDirectionChange(e: EventArgs): void {
    const value: boolean = (e.checked) ? true : false;
    this.setState({ isHorizontal: value });
  }

  public render() {
    return (
      <div>
        <br />
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <CheckBoxComponent checked={false} label='Horizontal' change={this.onDirectionChange = this.onDirectionChange.bind(this)} />
          </div>
          <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <DropDownListComponent change={this.onPositionChange = this.onPositionChange.bind(this)} dataSource={this.position} fields={this.fields} placeholder="Select Position" width="300px" />
          </div>
        </div>
        <br />
        <div id="sample row">
          <div className={'e-card ' + `${(this.state.isHorizontal) ? 'e-card-horizontal' : ''}`}>
            <div className="e-card-image">
              <div className={'e-card-title ' + `${this.state.positionClass}`}>Node.Js </div>
            </div>
            <div className="e-card-content">
              Node.js is a wildly popular platform for writing web applications that has revolutionized web development in many ways, enjoying support across the open source community as well as industry.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<ReactApp />, document.getElementById("element"));


