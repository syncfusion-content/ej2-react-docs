{ /* Import the BlockEditor.*/ }
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {
    return (
        <BlockEditorComponent id="block-editor"></BlockEditorComponent>
    );
}

ReactDom.render(<App />, document.getElementById('container'));