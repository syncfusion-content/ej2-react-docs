{% raw %}


import { ImageEditorComponent, FrameType, FrameLineStyle } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }
    function matClick(): void {
        imgObj.drawFrame(FrameType.Mat, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    function bevelClick(): void {
        imgObj.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    function lineClick(): void {
        imgObj.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    function insetClick(): void {
        imgObj.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    function hookClick(): void {
        imgObj.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]}>
        </ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Mat' onClick = {matClick}/>
                    <ButtonComponent cssClass='e-primary' content='Bevel' onClick = {bevelClick}/>
                    <ButtonComponent cssClass='e-primary' content='Line' onClick = {lineClick}/>
                    <ButtonComponent cssClass='e-primary' content='Inset' onClick = {insetClick}/>
                    <ButtonComponent cssClass='e-primary' content='Hook' onClick = {hookClick}/>
                </div>
            </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}