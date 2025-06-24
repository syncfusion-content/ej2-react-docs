import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    blobUrl = '';
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    getBlob() {
        let imageData = this.imgObj.getImageData();
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
        canvas.toBlob((blob) => {
            this.blobUrl = URL.createObjectURL(blob);// For getting blob.
        });
    }
    btnClick(url) {
        this.imgObj.open(this.blobUrl);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent id="image-editor" ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Save' onClick={this.getBlob.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Open Blob' onClick = {this.btnClick.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));