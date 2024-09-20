{% raw %}
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
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
    saveBlob(args) {
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
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Save Blob' onClick={this.saveBlob.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}