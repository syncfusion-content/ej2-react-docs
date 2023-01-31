{% raw %}
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    numericInstance;
    numericValue = 0;
    constructor(props) {
        super(props);
        this.onCreate = this.onCreate.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    // prevents nullable value during initialization
    onCreate() {
        if (this.numericInstance.value == null) {
            this.numericInstance.value = 0;
            this.numericInstance.dataBind();
        }
    }
    onBlur(args) {
        if (args.value == null) {
            this.numericInstance.value = 0;
            this.numericInstance.dataBind();
        }
    }
    render() {
        return (<NumericTextBoxComponent id="numeric" value={this.numericValue} ref={(numeric) => { this.numericInstance = numeric; }} created={this.onCreate} blur={this.onBlur}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('numeric1'));
{% endraw %}