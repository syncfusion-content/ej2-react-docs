{% raw %}


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

export default class App extends React.Component<{}, {}> {
// Uploader component
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
        <div className = 'control-pane'>
            <div className='control-section row uploadpreview'  ref={dropAreaEle => this.dropAreaRef = dropAreaEle!}>
            <div className='col-lg-9'>
            <div className='upload_wrapper'>
                {/* Render Uploader */}
                <UploaderComponent id='fileUpload' type='file' ref = {upload => {this.uploadObj = upload !}}
                asyncSettings = {this.path} created={this.onCreated = this.onCreated.bind(this)}
                />
            </div>
            </div>
            </div>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}