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
    function btnClick(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawRectangle(dimension.x, dimension.y, 200, 100);
        imgObj.drawRectangle(dimension.x + 300, dimension.y, 200, 100, null, '', '', null, null, 8);
        imgObj.drawEllipse(dimension.x, dimension.y);
        imgObj.drawLine(dimension.x, dimension.y);
        imgObj.drawArrow(dimension.x, dimension.y+10, dimension.x+50, dimension.y+10, 10);
        imgObj.drawPath([{x: dimension.x, y: dimension.y}, {x: dimension.x+50, y: dimension.y+50}, {x: dimension.x+20, y: dimension.y+50}], 8);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Click' onClick = {btnClick}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}