import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    toolbar = [
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
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
    toolbarItemClicked(args) {
        if (args.item.id === 'rotate-left') {
            this.imgObj.rotate(-90);
        } else if (args.item.id === 'rotate-right') {
            this.imgObj.rotate(90);
        } else if (args.item.id === 'save') {
            this.imgObj.export('PNG');
        }
    };

    render() {
        return (
            <div className='e-img-editor-sample'>
                <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbar={this.toolbar} toolbarItemClicked={this.toolbarItemClicked.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('image-editor'));