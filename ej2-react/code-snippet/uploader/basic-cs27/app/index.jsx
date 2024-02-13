{% raw %}
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    onFileSelected(args) {
        args.filesData.splice(5);
        const filesData = this.uploadObj.getFilesData();
        const allFiles = filesData.concat(args.filesData);
        if (allFiles.length > 5) {
            for (const i of allFiles) {
                if (i.length > 5) {
                    allFiles.shift();
                }
            }
            args.filesData = allFiles;
            args.modifiedFilesData = args.filesData;
        }
        args.isModified = true;
    }
    render() {

        return (<UploaderComponent asyncSettings={this.path} selected={this.onFileSelected = this.onFileSelected.bind(this)} ref={upload => { this.uploadObj = upload; }}/>);

    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}