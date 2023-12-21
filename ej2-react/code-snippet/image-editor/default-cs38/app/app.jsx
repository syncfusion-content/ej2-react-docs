{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    fontFamily = { default: 'Arial', items: [{id: 'arial', text: 'Arial'}, {id: 'brush script mt', text: 'Brush Script MT'},
    {id: 'papyrus', text: 'Papyrus'}, {id: 'times new roman', text: 'Times New Roman'}, {id: 'courier new', text: 'Courier New'}] };
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('flower.png');
        }
        else {
            this.imgObj.open('bridge.png');
        }
    }

    render() {
        return (<div className='e-img-editor-sample'>
                <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} fontFamily = {this.fontFamily}></ImageEditorComponent>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}