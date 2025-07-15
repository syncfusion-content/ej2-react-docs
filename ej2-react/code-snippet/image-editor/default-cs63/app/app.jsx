import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";


export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
    }

    contains() {
        this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: null, isAspectRatio : true  });
    }
    cover() {
        this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 550, height: 550, isAspectRatio : true  });
    }
    stretch() {
        this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg', true, { backgroundColor: '', width: 330, height: 330, isAspectRatio : false });
    }

    render() {
        return (<div className='e-img-editor-sample'><ImageEditorComponent ref={(img) => { this.imgObj = img; }} width="550px" height="330px" created={this.imageEditorCreated.bind(this)} toolbar={[]} />
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <ButtonComponent cssClass='e-primary' content='Fit to Width (Aspect Ratio)' onClick={this.contains.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Cover (Aspect Ratio)' onClick={this.cover.bind(this)} />
                <ButtonComponent cssClass='e-primary' content='Stretch / Shrink' onClick={this.stretch.bind(this)} />
            </div>
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));