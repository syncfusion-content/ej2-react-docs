import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    preloadFiles = [
        { name: 'Books', size: 500, type: '.png' },
        { name: 'Movies', size: 12000, type: '.pdf' },
        { name: 'Study materials', size: 500000, type: '.docx' },
    ];
    render() {
        return (<UploaderComponent files={this.preloadFiles} asyncSettings={this.path}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
