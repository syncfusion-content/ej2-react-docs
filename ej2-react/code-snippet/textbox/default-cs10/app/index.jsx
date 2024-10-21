import * as React from "react";
import * as ReactDOM from "react-dom";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
export default class App extends React.Component {
    render() {
        return (<div>
                <TextBoxComponent placeholder="Enter Name" enabled={false}/>
            </div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('input-container'));
