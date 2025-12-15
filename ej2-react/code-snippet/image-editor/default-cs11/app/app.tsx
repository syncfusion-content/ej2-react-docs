import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    function fitWidth(): void {
        imgObj.zoom(1); // Reset zoom to original size before applying Fit Width
        const containerWidth: number = imgObj.upperCanvas.width;
        const { width: oldWidth }: { width: number }  = imgObj.getImageDimension();
        let imageWidth: number = oldWidth, zoomFactor: number = 0.1, newZoom: number = 1;
        while (imageWidth < containerWidth) {
            newZoom++;
            imageWidth = oldWidth * (1 + zoomFactor);
            zoomFactor += 0.1;
        }
        imgObj.zoom(newZoom);
    }
    function fitHeight(): void {
        imgObj.zoom(1); // Reset zoom to original size before applying Fit Height
        const containerHeight: number = imgObj.upperCanvas.height;
        const { height: oldHeight }: { height: number } = imgObj.getImageDimension();
        let imageHeight: number = oldHeight, zoomFactor: number = 0.1, newZoom: number = 1;
        while (imageHeight < containerHeight) {
            newZoom++;
            imageHeight = oldHeight * (1 + zoomFactor);
            zoomFactor += 0.1;
        }
        imgObj.zoom(newZoom);
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} ></ImageEditorComponent>
            <div style={{ marginTop: '10px' }}>
                <ButtonComponent cssClass='e-primary' content='Fit Width' onClick={fitWidth} />
                <ButtonComponent cssClass='e-primary' content='Fit Height' onClick={fitHeight} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));