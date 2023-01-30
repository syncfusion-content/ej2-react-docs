import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    let uploadObj;
    const path = {
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove',
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save'
    };
    let dropAreaRef;
    function onCreated() {
        uploadObj.dropArea = dropAreaRef;
        uploadObj.dataBind();
    }
    return (<div id='container'>
        <div id='droparea' ref={dropAreaEle => dropAreaRef = dropAreaEle}>
            Drop files here to upload
        </div>
        <div id='uploadfile'>
            <UploaderComponent autoUpload={false} ref={upload => uploadObj = upload} asyncSettings={path} created={onCreated = onCreated.bind(this)}/>
        </div>
      </div>);
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
