{% raw %}


import {FileInfo, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  let uploadObj: UploaderComponent;
  const path: object = {
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
  }
  function onFileSelected(args : SelectedEventArgs) : void {
    args.filesData.splice(5);
    const filesData : FileInfo[] = this.uploadObj.getFilesData();
    const allFiles : FileInfo[] = filesData.concat(args.filesData);
    if (allFiles.length > 5) {
        for (const i of allFiles) {
            if ((i as any).length > 5) {
                allFiles.shift();
            }
        }
        args.filesData = allFiles;
        args.modifiedFilesData = args.filesData;
    }
    args.isModified = true;
}
    return (
        <UploaderComponent asyncSettings = {path} selected={this.onFileSelected = onFileSelected.bind(this)} ref = {upload => {this.uploadObj = upload !}} />);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}