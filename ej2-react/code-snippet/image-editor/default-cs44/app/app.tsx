import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let blobUrl: any;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    function getBlob(): void {
        let imageData = imgObj.getImageData();
        let canvas = document.createElement('canvas');
        let ctx: any = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
        canvas.toBlob((blob) => {
            blobUrl = URL.createObjectURL(blob as any);// For getting blob.
        });
    }

    function btnClick(): void {
        imgObj.open(blobUrl);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent id="image-editor" ref={(img) => { imgObj = img }} created={imageEditorCreated}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Save' onClick = {getBlob}/>
                    <ButtonComponent cssClass='e-primary' content='Open Blob' onClick = {btnClick}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));