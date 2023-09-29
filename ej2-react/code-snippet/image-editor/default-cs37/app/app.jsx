{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    toolbar = [];
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('flower.png');
        }
        else {
            this.imgObj.open('bridge.png');
        }
    }
    btnClick() {
        let dimension = imgObj.getImageDimension();
        this.imgObj.drawImage('flower.png', dimension.x, dimension.y, 100, 80, true, 0);
    }
    render() {
        return (<div className='e-img-editor-sample'>
                <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbar = {this.toolbar}></ImageEditorComponent>
                <div>
                    <ButtonComponent cssClass='e-primary' content='Add Image' onClick={this.btnClick.bind(this)}/>
                </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}