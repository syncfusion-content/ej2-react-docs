import { ImageEditorComponent, ZoomSettingsModel } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let zoomSettings: ZoomSettingsModel = { maxZoomFactor: 30, minZoomFactor: 0.1 };
    let zoomLevel: number = 1;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }
    function zoomInClick(): void {
        if (zoomLevel < 1) {
            zoomLevel += 0.1;
        } else {
            zoomLevel += 1;
        }
        const value: any = zoomSettings.maxZoomFactor;
        if (zoomLevel > value) {
            zoomLevel = value;
        }
        imgObj.zoom(zoomLevel); // Zoom in
    }
    function zoomOutClick(): void {
        if (zoomLevel <= 1) {
            zoomLevel -= 0.1;
        } else {
            zoomLevel -= 1;
        }
        const value: any = zoomSettings.minZoomFactor;
        if (zoomLevel < value) {
            zoomLevel = value;
        }
        imgObj.zoom(zoomLevel); // Zoom out
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Zoom In' onClick={zoomInClick} />
                <ButtonComponent cssClass='e-primary' content='Zoom Out' onClick={zoomOutClick} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));