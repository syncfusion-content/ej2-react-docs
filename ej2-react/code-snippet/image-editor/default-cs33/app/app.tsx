{% raw %}


import { ImageEditorComponent, ToolbarEventArgs } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    let toolbar = ['Annotate' , 'Finetune' , 'Filter' , 'Confirm' , 'Reset' , 'Save', 'ZoomIn', 'ZoomOut'];
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {toolbar}>
            </ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}