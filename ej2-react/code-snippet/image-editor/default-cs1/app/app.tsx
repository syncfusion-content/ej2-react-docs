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
        imgObj.drawText(dimension.x, dimension.y);
    }
    function outlineText(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y+100, 'Syncfusion', 'Arial', 70, false, false, '', false, null, '', 'green', 8);
    }
    function bgColour(): void {
        let dimension: any = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y+150, 'Syncfusion', 'Arial', 70, false, false, '', false, null, 'red', '', null);
    }
    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Add Text' onClick = {btnClick}/>
                    <ButtonComponent cssClass='e-primary' content='Text Outline' onClick = {outlineText}/>
                    <ButtonComponent cssClass='e-primary' content='Background Colour' onClick = {bgColour}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}