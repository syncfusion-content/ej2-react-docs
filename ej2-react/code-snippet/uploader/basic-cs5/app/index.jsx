import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    path = {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    render() {
        return (<UploaderComponent asyncSettings={this.path}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
