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
    function rectangleClick(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawRectangle(dimension.x + 10, dimension.y + 60, 150, 70);
        imgObj.drawRectangle(dimension.x + 250, dimension.y + 60, 150, 70, 2, '', '', 0, false, 8);
    }
    function ellipseClick(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawEllipse(dimension.x, dimension.y + 200);
    }
    function lineClick(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawLine(dimension.x + 300, dimension.y + 30);
    }
    function arrowClick(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawArrow(dimension.x + 150, dimension.y + 150, dimension.x + 300, dimension.y + 150, 10);
    }
    function pathClick(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawPath([{ x: dimension.x, y: dimension.y }, { x: dimension.x + 50, y: dimension.y + 50 }, { x: dimension.x + 20, y: dimension.y + 50 }], 8);
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={[]}></ImageEditorComponent>
            <div>
                <ButtonComponent cssClass='e-primary' content='Rectangle' onClick={rectangleClick} />
                <ButtonComponent cssClass='e-primary' content='Ellipse' onClick={ellipseClick} />
                <ButtonComponent cssClass='e-primary' content='Line' onClick={lineClick} />
                <ButtonComponent cssClass='e-primary' content='Arrow' onClick={arrowClick} />
                <ButtonComponent cssClass='e-primary' content='Path' onClick={pathClick} />
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));