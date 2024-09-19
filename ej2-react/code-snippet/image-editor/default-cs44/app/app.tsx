{% raw %}


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
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }
    function getBlob(): void {
        const imageEditor: any = getComponent(document.getElementById('image-editor'), 'image-editor');
        let imageData = imageEditor.getImageData();
        let canvas = document.createElement('canvas');
        let ctx: any = canvas.getContext('2d');
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
        canvas.toBlob(function(blob){
            blobUrl = URL.createObjectURL(blob);// For getting blob.
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
                    <ButtonComponent cssClass='e-primary' content='Blob' onClick = {getBlob}/>
                    <ButtonComponent cssClass='e-primary' content='Open' onClick = {btnClick}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}