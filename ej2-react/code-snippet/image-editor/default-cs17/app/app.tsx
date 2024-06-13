{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('flower.png');
        } else {
            imgObj.open('bridge.png');
        }
    }
    function buttonTemplate(data) {
        return (<ButtonComponent cssClass='e-primary' content='Click'  onClick = {btnClick}/>);
    }

    function btnClick(): void {
        imgObj.freeHandDraw(true);
    }
    return (
        <div className='e-img-editor-sample'>
        <ImageEditorComponent toolbarTemplate={buttonTemplate} ref={(img) => { imgObj = img }} created={imageEditorCreated} toolbar = {[]}/>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}