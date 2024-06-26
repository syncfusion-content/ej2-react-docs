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
public render(): JSX.Element{
    return (

        <UploaderComponent asyncSettings = {this.path} selected={this.onFileSelected = this.onFileSelected.bind(this)} ref = {upload => {this.uploadObj = upload !}} />);

  }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
