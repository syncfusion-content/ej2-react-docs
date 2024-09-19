{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { Browser, getComponent } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let changeColor: boolean = true;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }

    function shapeChanging(args: any) {
        if (changeColor && args.action == "insert" && args.currentShapeSettings?.type === 'FreehandDraw') {
            args.currentShapeSettings.strokeColor = 'red';
            changeColor = false;
        }
    }
    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} shapeChanging={shapeChanging} >
        </ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}