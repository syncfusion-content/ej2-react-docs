import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
export default class Default extends React.Component {

public render() {
   return (<div>
    <TextBoxComponent
        id='default'
        placeholder="Input with warning"
        cssClass="e-warning"
    />
    <TextBoxComponent
            id='textboxes'
            placeholder="Input with error"
            cssClass="e-error"
    />
    <TextBoxComponent
            id='textbox'
            placeholder="Input with success"
            cssClass="e-success"
    />
</div>
);
}
}

ReactDOM.render(<Default />, document.getElementById('input-container'));


