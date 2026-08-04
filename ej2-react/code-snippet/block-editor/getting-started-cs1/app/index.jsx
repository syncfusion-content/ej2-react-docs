// Import the BlockEditor.
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../styles.css';
function App() {
    return (
        <BlockEditorComponent id="block-editor"></BlockEditorComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('container'));