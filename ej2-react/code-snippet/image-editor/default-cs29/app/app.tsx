{% raw %}


import { ImageEditorComponent, ImageFinetuneOption } from '@syncfusion/ej2-react-image-editor';
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
    function quickAccessToolbarOpen(args: any): void {
        args.toolbarItems = ['Clone'];
    }

    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} quickAccessToolbarOpen= {quickAccessToolbarOpen} ></ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}