{% raw %}
import { ImageEditorComponent, FrameType, FrameLineStyle } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('flower.png');
        }
        else {
            this.imgObj.open('bridge.png');
        }
    }
    matClick() {
        this.imgObj.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    bevelClick() {
        this.imgObj.drawFrame(FrameType.Bevel, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    lineClick() {
        this.imgObj.drawFrame(FrameType.Line, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    insetClick() {
        this.imgObj.drawFrame(FrameType.Inset, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    hookClick() {
        this.imgObj.drawFrame(FrameType.Hook, 'red', 'blue', 20, 20, 20, 20, FrameLineStyle.Solid, 1);
    }
    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img; }} created={this.imageEditorCreated.bind(this)} toolbar = {[]}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Mat' onClick={this.matClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Bevel' onClick={this.bevelClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Line' onClick={this.lineClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Inset' onClick={this.insetClick.bind(this)}/>
                        <ButtonComponent cssClass='e-primary' content='Hook' onClick={this.hookClick.bind(this)}/>
                    </div>
                </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
{% endraw %}