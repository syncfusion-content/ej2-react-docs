import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    render() {
        return (<div className="multiline">
            <label className='label'>Float label type Auto</label>
            <TextBoxComponent multiline={true} placeholder='Enter your address' floatLabelType='Auto'/>
            <label className='label'>Float label type Always</label>
            <TextBoxComponent multiline={true} placeholder='Enter your address' floatLabelType='Always'/>
            <label className='label'>Float label type Never</label>
            <TextBoxComponent multiline={true} placeholder='Enter your address' floatLabelType='Never'/>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('default'));
