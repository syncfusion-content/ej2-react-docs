{% raw %}


import { isNullOrUndefined } from '@syncfusion/ej2-base';
import {FileInfo, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  let uploadObj: UploaderComponent;
  const path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  function onFileSelected(args : SelectedEventArgs) : void {
    let existingFiles: FileInfo[] = this.uploadObj.getFilesData();
     for (let i: number = 0; i < args.filesData.length; i++) {
         for(const j of existingFiles) {
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

    return (
        <UploaderComponent asyncSettings = {path} selected={onFileSelected = onFileSelected.bind(this)} ref = {upload => {uploadObj = upload !}} />);
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}