{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    function zoomInClick(): void {
        imgObj.zoom(.1); // Zoom in
    }
    function zoomOutClick(): void {
        imgObj.zoom(-.1); // Zoom out
    }
    function panClick(): void {
        imgObj.zoom(.1); // Zoom in
        imgObj.pan(true);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated}>
        </ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Zoom In' onClick = {zoomInClick}/>
                <ButtonComponent cssClass='e-primary' content='Zoom Out' onClick = {zoomOutClick}/>
                <ButtonComponent cssClass='e-primary' content='PAn' onClick = {panClick}/>
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}