{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    function fileOpen(args: any) {
        let file = (args).fileDetails;
        if (file.isFile) {
            args.cancel = true;
            if (file.size <= 0 ) { file.size = 10000; }
            let imagePath = (args.fileDetails)._fm_imageUrl;
            imgObj.open(imagePath);
        }
    }
    return (
        <div className='e-img-editor-sample'>
             <FileManagerComponent id="overview_file" ajaxSettings = {{url: hostUrl + "api/FileManager/FileOperations", getImageUrl: hostUrl + "api/FileManager/GetImage", uploadUrl: hostUrl + 'api/FileManager/Upload', downloadUrl: hostUrl + 'api/FileManager/Download'}} fileOpen = {fileOpen} ></FileManagerComponent>
        <ImageEditorComponent ref={(img) => { imgObj = img }} toolbar = {[]} >
        </ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}