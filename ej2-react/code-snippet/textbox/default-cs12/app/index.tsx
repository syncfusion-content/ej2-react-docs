import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import * as React from "react";
import * as ReactDOM from "react-dom";

export default class Default extends React.Component {

public render() {
   return (
    <div>
         <TextBoxComponent placeholder="Enter Date" cssClass="e-corner"/>
    </div>
);
}
}

ReactDOM.render(<Default />, document.getElementById('input-container'));