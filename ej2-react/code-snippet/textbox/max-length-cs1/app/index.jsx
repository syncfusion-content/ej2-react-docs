// Import the TextBox.
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render TextBox.
function App() {
    return (
        <div className='wrap'>
            <TextBoxComponent id="default" placeholder="Enter your comments" maxLength="20"></TextBoxComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById('input-container'));
