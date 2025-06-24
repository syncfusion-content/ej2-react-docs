import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    toolbar = ['Annotate', "Line", "Rectangle", "Text", 'ZoomIn', 'ZoomOut', { text: 'Custom' }];
    toolbarItemClicked (args) {
        if (args.item.text === 'Custom') {
            this.imgObj.rotate(90);
        }
    }
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }
    render() {
        return (<div className='e-img-editor-sample'>
                <ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" toolbar={this.toolbar} created={this.imageEditorCreated.bind(this)} toolbarItemClicked={this.toolbarItemClicked.bind(this)}>
                </ImageEditorComponent>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));