{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    imgObj;
    toolbar = ['Annotate', "Line", "Rectangle", "Circle", "Ellipse", "Arrow", "Path"];
    shapeChanging(args)  {
        if (args.action === 'select') {
            id = args.currentShapeSettings.id;
        }
    }
    btnClick() {
        imgObj.deleteShape(id);
    }
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/products/images/carousel/bee-eater.png');
        }
    }
    render() {
        return (<div id="wrapperDiv">
            <ImageEditorComponent toolbar={this.toolbar} ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbarItemClicked={this.toolbarItemClicked.bind(this)}/>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}