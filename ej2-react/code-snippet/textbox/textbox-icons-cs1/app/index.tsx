import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
export default class Default extends React.Component {
    public textBoxObj = React.createRef();
    public textBoxObj1 = React.createRef();
    public textBoxObj2 = React.createRef();
    public textBoxObj3 = React.createRef();
    public textBoxObj4 = React.createRef();
    public textBoxObj5 = React.createRef();
    public oncreate() {  
        this.textBoxObj.current.addIcon('append', 'e-icons e-input-popup-date');
    }
    public oncreated() {  
        this.textBoxObj1.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }
    public oncreateHandle() {  
        this.textBoxObj2.current.addIcon('append', 'e-icons e-input-down');
        this.textBoxObj2.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }
    public ontextcreate() {  
        this.textBoxObj3.current.addIcon('append', 'e-icons e-input-popup-date');
    }
    public ontextcreated() {  
        this.textBoxObj4.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }
    public ontextcreateHandle() {  
        this.textBoxObj5.current.addIcon('append', 'e-icons e-input-down');
        this.textBoxObj5.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }

    public render() {
        return (<div>

    <h4> TextBox with icons </h4>

    <TextBoxComponent
        id='default'
        placeholder="Enter Date"
        ref={this.textBoxObj}
        created={this.oncreate}
    />

    <TextBoxComponent
        id='textboxObj'
        placeholder="Enter Date"
        ref={this.textBoxObj1}
        created={this.oncreated}
    />

    <TextBoxComponent
        id='textObj'
        placeholder="Enter Date"
        ref={this.textBoxObj2}
        created={this.oncreateHandle}
    />

    <h4> Floating label with icons </h4>

    <TextBoxComponent
        id='floatdefault'
        placeholder="Enter Date"
        floatLabelType="Auto"
        ref={this.textBoxObj3}
        created={this.ontextcreate}
    />

    <TextBoxComponent
        id='floattextboxObj'
        placeholder="Enter Date"
        floatLabelType="Auto"
        ref={this.textBoxObj4}
        created={this.ontextcreated}
    />

    <TextBoxComponent
        id='floattextObj'
        placeholder="Enter Date"
        floatLabelType="Auto"
        ref={this.textBoxObj5}
        created={this.ontextcreateHandle}
    />
        </div>);
    } 
}
ReactDOM.render(<Default />, document.getElementById('input-container'));