import { RangeNavigatorComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
class App extends React.Component {
    render() {
        return <RangeNavigatorComponent id="charts"/>;
    }
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
