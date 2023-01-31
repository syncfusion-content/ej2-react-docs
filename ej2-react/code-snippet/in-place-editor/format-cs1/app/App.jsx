import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    value = new Date('11/23/2018');
    model = { placeholder: 'Select date', format: 'yyyy-MM-dd' };
    render() {
        return (<div id='container'>
            <span className="content-title"> Select date: </span>
            <InPlaceEditorComponent id='element' type='Date' value={this.value} model={this.model}/>
        </div>);
    }
}
export default App;
