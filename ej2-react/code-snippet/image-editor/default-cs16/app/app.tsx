{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let toolbar = ['Annotate', "Line", "Rectangle", "Text", 'ZoomIn', 'ZoomOut', {text: 'Custom'}];
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }

    function toolbarItemClicked(args): void {
         if(args.item.text == "Custom") {
            imgObj.rotate(90);
        }
    }

    return (
        <div id="wrapperDiv">
            <ImageEditorComponent toolbar={toolbar} ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]} toolbarItemClicked={toolbarItemClicked}/>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}