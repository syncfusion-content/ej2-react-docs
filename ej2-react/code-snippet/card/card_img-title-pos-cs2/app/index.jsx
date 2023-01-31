import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from "react";
import { useState } from 'react';
import * as ReactDOM from "react-dom";
function ReactApp() {
    let fields = { text: 'pos', value: 'id' };
    let position = [
        { id: 'bottom-left', pos: 'BottomLeft' },
        { id: 'bottom-right', pos: 'BottomRight' },
        { id: 'top-left', pos: 'TopLeft' },
        { id: 'top-right', pos: 'TopRight' }
    ];
    const [status, setStatus] = useState({ isHorizontal: false, positionClass: 'e-card-bottom-left' });
    function onPositionChange(e) {
        setStatus({ isHorizontal: status.isHorizontal,
            positionClass: 'e-card-' + e.value
        });
    }
    function onDirectionChange(e) {
        const value = (e.checked) ? true : false;
        setStatus({ isHorizontal: value, positionClass: status.positionClass });
    }
    return (<div>
          <br />
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <CheckBoxComponent checked={false} label='Horizontal' change={onDirectionChange.bind(this)}/>
            </div>
            <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
              <DropDownListComponent change={onPositionChange.bind(this)} dataSource={position} fields={fields} placeholder="Select Position" width="300px"/>
            </div>
          </div>
          <br />
          <div id="sample row">
            <div className={'e-card ' + `${(status.isHorizontal) ? 'e-card-horizontal' : ''}`}>
              <div className="e-card-image">
                <div className={'e-card-title ' + `${status.positionClass}`}>Node.Js </div>
              </div>
              <div className="e-card-content">
                Node.js is a wildly popular platform for writing web applications that has revolutionized web development in many ways, enjoying support across the open source community as well as industry.
              </div>
            </div>
          </div>
        </div>);
}
ReactDOM.render(<ReactApp />, document.getElementById("element"));
