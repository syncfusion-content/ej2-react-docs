import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let base64String: any;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    function setImage(): void {
        if (base64String) {
            imgObj.open(base64String);
        }
    }

    function saveImage(args: any): void {
        let imageData = imgObj.getImageData();
        const canvas = document.createElement('canvas');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        // Get the 2D rendering context of the canvas
        const context: any = canvas.getContext('2d');
        // Put the ImageData onto the canvas
        context.putImageData(imageData, 0, 0);
        // Convert the canvas content to a Base64 encoded URL
        base64String = canvas.toDataURL();
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Save Image' onClick = {saveImage}/>
                    <ButtonComponent cssClass='e-primary' content='Load base64 Image' onClick = {setImage}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));