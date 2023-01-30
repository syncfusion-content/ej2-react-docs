{% raw %}
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    numericInstance;
    constructor(props) {
        super(props);
        this.onNumericFocus = this.onNumericFocus.bind(this);
    }
    onNumericFocus() {
        this.numericInstance.element.value = this.numericInstance.formattedValue(this.numericInstance.decimals, parseFloat(this.numericInstance.element.value));
    }
    render() {
        return (<NumericTextBoxComponent id="numeric" decimals={2} format={"n2"} ref={(numeric) => { this.numericInstance = numeric; }} value={10} change={this.onNumericFocus} onFocus={this.onNumericFocus}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('numeric1'));
{% endraw %}