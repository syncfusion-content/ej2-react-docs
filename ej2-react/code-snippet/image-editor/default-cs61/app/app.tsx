import { ImageEditorComponent, ToolbarEventArgs } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    const toolbar = [
        {
            id: 'rotate-left',
            prefixIcon: 'e-icons e-anti-clock-wise',
            tooltipText: 'Rotate Left',
            align: 'Left',
        },
        {
            id: 'rotate-right',
            prefixIcon: 'e-icons e-clock-wise',
            tooltipText: 'Rotate Right',
            align: 'Left',
        },
        {
            id: 'annotate',
            prefixIcon: 'e-icons e-annotation',
            tooltipText: 'Annotate',
            align: 'Center',
            disabled: true,
        },
        {
            id: 'save',
            prefixIcon: 'e-icons e-save',
            tooltipText: 'Save',
            align: 'Right',
        },
    ];

    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
    function toolbarItemClicked(args: ToolbarEventArgs): void {
        if (args.item.id === 'rotate-left') {
            imgObj.rotate(-90);
        } else if (args.item.id === 'rotate-right') {
            imgObj.rotate(90);
        } else if (args.item.id === 'save') {
            imgObj.export('PNG');
        }
    }
    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar={toolbar} toolbarItemClicked={toolbarItemClicked}></ImageEditorComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));