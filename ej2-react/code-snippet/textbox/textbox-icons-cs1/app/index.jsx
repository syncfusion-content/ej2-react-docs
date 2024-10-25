import * as React from "react";
import './index.css';
import * as ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
export default class Default extends React.Component {
    textBoxObj = React.createRef();
    textBoxObj1 = React.createRef();
    textBoxObj2 = React.createRef();
    textBoxObj3 = React.createRef();
    textBoxObj4 = React.createRef();
    textBoxObj5 = React.createRef();
    oncreate = () => {  
        this.textBoxObj.current.addIcon('append', 'e-icons e-input-popup-date');
    }
    oncreated = () => {  
        this.textBoxObj1.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }
    oncreateHandle = () => {  
        this.textBoxObj2.current.addIcon('append', 'e-icons e-input-down');
        this.textBoxObj2.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }
    ontextcreate = () => {  
        this.textBoxObj3.current.addIcon('append', 'e-icons e-input-popup-date');
    }
    ontextcreated = () => {  
        this.textBoxObj4.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }
    ontextcreateHandle = () => {  
        this.textBoxObj5.current.addIcon('append', 'e-icons e-input-down');
        this.textBoxObj5.current.addIcon('prepend', 'e-icons e-input-popup-date');
    }

    render() {
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
