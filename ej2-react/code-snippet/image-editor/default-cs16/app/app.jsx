import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    toolbar = ['Annotate', "Line", "Rectangle", "Text", 'ZoomIn', 'ZoomOut', { text: 'Custom' }];
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/flower.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/demos/src/image-editor/images/bridge.png');
        }
    }
    toolbarItemClicked(args) {
        if (args.item.text == "Custom") {
            this.imgObj.rotate(90);
        }
    }
    render() {
        return (<div id="wrapperDiv">
            <ImageEditorComponent toolbar={this.toolbar} ref={(img) => { this.imgObj = img; }} height="350px" created={this.imageEditorCreated.bind(this)} toolbarItemClicked={this.toolbarItemClicked.bind(this)}/>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));