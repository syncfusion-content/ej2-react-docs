import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
function App() {
    return (<div>
    <ProgressButtonComponent content='Vertical Progress' enableProgress={true} cssClass='e-hide-spinner e-vertical' duration={4000}/>
    <ProgressButtonComponent content='Progress Top' enableProgress={true} cssClass='e-hide-spinner e-progress-top' duration={4000}/>
    <ProgressButtonComponent content='Reverse Progress' enableProgress={true} cssClass='e-hide-spinner e-reverse-progress' duration={4000}/></div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));
