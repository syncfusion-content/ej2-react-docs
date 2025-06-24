import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let byteArray: any;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    function saveImage(): void {
        const imageData = imgObj.getImageData();
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
                    byteArray = new Uint8Array(reader.result as ArrayBuffer);
                };
            }
        }, 'image/png');
    }
    function loadImage(): void {
        if (byteArray) {
            const blob = new Blob([byteArray], { type: 'image/png' });
            const url = URL.createObjectURL(blob);
            imgObj.open(url);
        }
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Save Image' onClick={saveImage} />
                <ButtonComponent cssClass='e-primary' content='Load Image' onClick={loadImage} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));