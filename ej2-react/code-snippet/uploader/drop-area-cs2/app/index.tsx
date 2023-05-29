{% raw %}


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let uploadObj: UploaderComponent;
    const path: object = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    }
    let dropAreaRef: HTMLElement;
    function onCreated(): void {
        uploadObj.dropArea = dropAreaRef;
        uploadObj.dataBind();
    }

        return (
            <div id='container'>
                <div id='droparea' ref={dropAreaEle => dropAreaRef = dropAreaEle!}>
                Drop files here to upload
                </div>
                <div id='uploadfile'>
                    <UploaderComponent autoUpload={false}  ref = {upload => {uploadObj = upload !}} created={onCreated = onCreated.bind(this)} asyncSettings={path} />
                </div>
            </div>);
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}