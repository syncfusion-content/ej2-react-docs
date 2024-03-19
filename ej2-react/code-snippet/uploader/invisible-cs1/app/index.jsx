{% raw %}
import { createElement } from '@syncfusion/ej2-base';
import { UploaderComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    uploadObj;
    path = {
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove',
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save'
    };
    dropAreaRef;
    previewRef;
    onCreated() {
        this.uploadObj.dropArea = this.dropAreaRef;
        this.uploadObj.dataBind();
    }
    onupload(args) {
        for (const i of args.filesData) {
            const liparentDiv = createElement('div', { className: 'image-list' });
            const liImage = createElement('img', { className: 'image' });
            liparentDiv.appendChild(liImage);
            this.readURL(liImage, i);
            this.previewRef.appendChild(liparentDiv);
        }
        args.cancel = true;
    }
    readURL(liImage, file) {
        const imgPreview = liImage;
        const imageFile = file.rawFile;
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            imgPreview.src = reader.result;
        }, false);
        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    }
    ;
    render() {
        return (<div className='control-pane' ref={dropAreaEle => this.dropAreaRef = dropAreaEle}>
        <div className='control-section row uploadpreview'>
        <div className='col-lg-9'>
        <div className='upload_wrapper'>
        <div id='preview' ref={previewEle => this.previewRef = previewEle}/>
            {/* Render Uploader */}
            <UploaderComponent id='fileUpload' type='file' ref={upload => { this.uploadObj = upload; }} asyncSettings={this.path} selected={this.onupload = this.onupload.bind(this)} locale={'en-US'} allowedExtensions='.png, .jpg, .jpeg' created={this.onCreated = this.onCreated.bind(this)}/>
        </div>
        </div>
        </div>
      </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('fileupload'));
{% endraw %}