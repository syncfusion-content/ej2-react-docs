{% raw %}


import { ImageEditorComponent, shapeChanging } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let id: string;
    let toolbar = ['Annotate', "Line", "Rectangle", "Circle", "Ellipse", "Arrow", "Path"];
    function shapeChanging(args: shapeChanging): void {
        if (args.action === 'select') {
            id = args.currentShapeSettings.id;
        }
    }
    function btnClick(): void {
        imgObj.deleteShape(id);
    }
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} shapeChanging={shapeChanging} toolbar = {toolbar} showQuickAccessToolbar = {false}>
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