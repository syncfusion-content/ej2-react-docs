{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser, isNullOrUndefined } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let base64String: any;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
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
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}