{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    byteArray;
    imageEditorCreated = () => {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        } else {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    };
    saveImage = () => {
        const imageData = this.imgObj.getImageData();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
        canvas.toBlob((blob) => {
            if (blob) {
                const reader = new FileReader();
                reader.readAsArrayBuffer(blob);
                reader.onloadend = () => {
                    this.byteArray = new Uint8Array(reader.result);
                };
            }
        }, 'image/png');
    };
    loadImage = () => {
        if (this.byteArray) {
            const blob = new Blob([this.byteArray], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            this.imgObj.open(url);
        }
    };

    render() {
        return (
            <div className='e-img-editor-sample'>
                <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated}></ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Save Byte[]' onClick={this.saveImage} />
                    <ButtonComponent cssClass='e-primary' content='Load Byte[]' onClick={this.loadImage} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('image-editor'));

{% endraw %}