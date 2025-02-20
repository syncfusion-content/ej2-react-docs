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
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }
    function drawShapes(): void {
        let dimension = imgObj.getImageDimension();
        imgObj.drawRectangle(dimension.x + 10, dimension.y + 10, 150, 70, null, null, 'red');
        imgObj.drawRectangle(dimension.x + 20, dimension.y + 20, 150, 70, null, null, 'red');
        imgObj.drawRectangle(dimension.x + 30, dimension.y + 30, 150, 70, null, null, 'green');
        imgObj.drawRectangle(dimension.x + 40, dimension.y + 40, 150, 70, null, null, 'red');
    }
    function bringForward(): void {
        imgObj.bringForward('shape_3');
    }
    function sendBackward(): void {
        imgObj.sendBackward('shape_3');
    }
    function bringToFront(): void {
        imgObj.bringToFront('shape_3');
    }
    function sendToBack(): void {
        imgObj.sendToBack('shape_3');
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Draw Shapes' onClick={drawShapes} />
                <ButtonComponent cssClass='e-primary' content='Bring Forward' onClick={bringForward} />
                <ButtonComponent cssClass='e-primary' content='Sent Backward' onClick={sendBackward} />
                <ButtonComponent cssClass='e-primary' content='Bring to Front' onClick={bringToFront} />
                <ButtonComponent cssClass='e-primary' content='Send to Back' onClick={sendToBack} />
            </div>
        </div>
    );
}
export default App;

ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}