import { ImageEditorComponent, ToolbarEventArgs } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ItemModel } from '@syncfusion/ej2-navigations';

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    function toolbarUpdating(args: ToolbarEventArgs): void {
        if (args.toolbarType === 'text') {
            args.toolbarItems.push({text: 'custom'})
        }
    }
    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} toolbarUpdating={toolbarUpdating} created={imageEditorCreated}>
            </ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));