

import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }
    public render() {
        return (
            <div className="wrap">
            <label> Normal Input </label>
            <TextBoxComponent placeholder="First Name"/>
            <label> Floating Input </label>
            <TextBoxComponent placeholder="Last Name" floatLabelType="Auto"/>
        </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('input-container'));



