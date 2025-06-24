// Import the BlockEditor.
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render BlockEditor.
function App() {
    
    return (
            <BlockEditorComponent id="block-editor"></BlockEditorComponent>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('container'));