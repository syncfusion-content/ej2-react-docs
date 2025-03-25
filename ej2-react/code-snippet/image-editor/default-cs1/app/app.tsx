import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
    function addText(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y, 'Syncfusion');
    }
    function outlineText(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawText(dimension.x + 50, dimension.y + 50, 'Syncfusion', 'Arial', 30, false, false, '', false, 0, '', 'green', 8);
    }
    function bgColour(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawText(dimension.x + 100, dimension.y + 100, 'Syncfusion', 'Arial', 30, false, false, '', false, 0, 'red', '', 0);
    }
    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Add Text' onClick={addText} />
                <ButtonComponent cssClass='e-primary' content='Text Outline' onClick={outlineText} />
                <ButtonComponent cssClass='e-primary' content='Background Colour' onClick={bgColour} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));