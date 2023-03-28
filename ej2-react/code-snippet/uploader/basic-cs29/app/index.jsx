{% raw %}
import { isNullOrUndefined } from '@syncfusion/ej2-base';
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
        let existingFiles = this.uploadObj.getFilesData();
        for (let i = 0; i < args.filesData.length; i++) {
            for (const j of existingFiles) {
                if (!isNullOrUndefined(args.filesData[i])) {
                    if (j.name === args.filesData[i].name) {
                        args.filesData.splice(i, 1);
                    }
                }
            }
        }
        existingFiles = existingFiles.concat(args.filesData);
        args.modifiedFilesData = existingFiles;
        args.isModified = true;
    }
    render() {
        return (<UploaderComponent asyncSettings={this.path} selected={this.onFileSelected = this.onFileSelected.bind(this)} ref={upload => { this.uploadObj = upload; }}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}