{% raw %}



import { isNullOrUndefined } from '@syncfusion/ej2-base';
import {FileInfo, SelectedEventArgs, UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
public uploadObj: UploaderComponent;
  public path: object = {
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
  }
  public onFileSelected(args : SelectedEventArgs) : void {
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

public render(): JSX.Element{
    return (
        <UploaderComponent asyncSettings = {this.path} selected={this.onFileSelected = this.onFileSelected.bind(this)} ref = {upload => {this.uploadObj = upload !}} />);
  }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}