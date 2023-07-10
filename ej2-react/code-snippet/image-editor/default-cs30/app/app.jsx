{% raw %}
import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
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
    btnClick() {
        let dimension = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y);
    }
    undoClick() {
        this.imgObj.undo();
    }
    redoClick() {
        this.imgObj.redo();
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Click' onClick={this.btnClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Undo' onClick={this.undoClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Redo' onClick={this.redoClick.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}