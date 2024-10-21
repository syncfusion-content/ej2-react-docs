import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <TextBoxComponent placeholder="Enter Name" enabled={false}/>
            </div>
        )
    }
};
ReactDOM.render(<App />, document.getElementById('input-container'));