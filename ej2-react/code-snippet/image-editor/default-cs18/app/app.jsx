{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    toolbarUpdating(args) {
        if (args.toolbarType === 'shapes') {
            args.toolbarItems = ['strokeColor'];
        }
    }
    render() {
        return (<div className='e-img-editor-sample'>
                <ImageEditorComponent ref={(img) => { this.imgObj = img; }} toolbarUpdating={this.toolbarUpdating.bind(this)} created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
                </ImageEditorComponent>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}