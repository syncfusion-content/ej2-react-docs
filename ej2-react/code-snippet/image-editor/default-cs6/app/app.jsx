import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';

export default class App extends React.Component {
    render() {
        return (<div id="wrapperDiv">
            <ImageEditorComponent />
        </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));
