{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { FileManagerComponent } from '@syncfusion/ej2-react-filemanager';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";
    fileOpen(args) {
        let file = (args).fileDetails;
        if (file.isFile) {
            args.cancel = true;
            if (file.size <= 0 ) { file.size = 10000; }
            let imagePath = (args.fileDetails)._fm_imageUrl;
            this.imgObj.open(imagePath);
        }
    }
    render() {
        return (<div className='e-img-editor-sample'>
             <FileManagerComponent id="overview_file" ajaxSettings = {{url: this.hostUrl + "api/FileManager/FileOperations", getImageUrl: this.hostUrl + "api/FileManager/GetImage", uploadUrl: this.hostUrl + 'api/FileManager/Upload', downloadUrl: this.hostUrl + 'api/FileManager/Download'}} fileOpen = {this.fileOpen.bind(this)} ></FileManagerComponent>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px">
            </ImageEditorComponent>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}