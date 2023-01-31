{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    private imgObj: ImageEditorComponent;
    public imageEditorCreated(): void {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
      buttonTemplate(data) {
        return (<ButtonComponent cssClass='e-primary' content='Click'  onClick = {this.btnClick.bind(this)}/>);
    }

    public btnClick(): void {
        this.imgObj.freeHandDraw(true);
    }
    render() {
        return (
            <div className='e-img-editor-sample'>
            <ImageEditorComponent toolbarTemplate={this.buttonTemplate} ref={(img) => { this.imgObj = img }} created={this.imageEditorCreated.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}