{% raw %}


import { select } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let uploadObj: UploaderComponent;
    const path: object = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    }
    let dropAreaRef: HTMLElement;
    function onCreated(): void {
        uploadObj.dropArea = dropAreaRef;
        uploadObj.dataBind();
    }

    function browseClick(args: React.MouseEvent): void {
        const wrapperEle: HTMLElement = select('.e-file-select-wrap button', document) as HTMLElement;
        wrapperEle.click();
        args.preventDefault();
    }

        return (
            <div id='container'>
                <div id='dropArea'>
                    <span id='drop'> Drop files here or <a href="" id='browse' onClick={browseClick=browseClick.bind(this)}><u>Browse</u></a> </span>
                    <UploaderComponent asyncSettings={path}  ref = {upload => {uploadObj = upload!}} created={onCreated = onCreated.bind(this)}/>
                </div>
            </div>
        );
}

ReactDOM.render(<App />, document.getElementById('fileupload'));


{% endraw %}