import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

export default class Default extends React.Component {
    public textBoxObj = React.createRef();

    public oncreate() {
        (this.textBoxObj.current as any).addIcon('append', 'e-icons e-input-popup-date');
    }

    public render() {
        return (
            <TextBoxComponent
                id='textbox'
                placeholder="Enter Date"
                ref={this.textBoxObj}
                created={this.oncreate}
            />
        );
    }
}

ReactDOM.render(<Default />, document.getElementById('default'));
