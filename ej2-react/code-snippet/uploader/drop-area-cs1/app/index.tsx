{% raw %}



import * as React from 'react';
import * as ReactDOM from "react-dom";
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

export default class App extends React.Component<{}, {}> {
    public uploadObj: UploaderComponent;
    public path: object = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    }
    private dropAreaRef: HTMLElement;
    public onCreated(): void {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }

    public render(): JSX.Element {
        return (
            <div id='container'>
                <div id='droparea' ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
                Drop files here to upload
                </div>
                <div id='uploadfile'>
                    <UploaderComponent autoUpload={false}  ref = {upload => {this.uploadObj = upload !}} created={this.onCreated = this.onCreated.bind(this)} asyncSettings={this.path} />
                </div>
            </div>);
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}