import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
    }
    function contains(): void {
        imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: null, isAspectRatio : true });
    }
    function cover(): void {
        imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: 550, isAspectRatio : true });
    }
    function stretch(): void {
        imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 330, height: 330, isAspectRatio : false });
    }

    return (<div className='e-img-editor-sample'><ImageEditorComponent ref={(img) => { imgObj = img }} width="550px" height="330px" created={imageEditorCreated} toolbar={[]} />
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <ButtonComponent cssClass='e-primary' content='Fit to Width (Aspect Ratio)' onClick={contains} />
                <ButtonComponent cssClass='e-primary' content='Cover (Aspect Ratio)' onClick={cover} />
                <ButtonComponent cssClass='e-primary' content='Stretch / Shrink' onClick={stretch} />
            </div>
        </div>);
}
export default App;

ReactDOM.render(<App />, document.getElementById('image-editor'));