// Import the TextArea.
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { L10n } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// Load culture for textarea
L10n.load({
    'de-DE': {
       'textarea': {'placeholder': "Geben Sie Ihre Kommentare ein"}
     }
});

// To render TextArea.
function App() {
  
    return (
        <div className='wrap'>
            <TextAreaComponent id="default" locale="de-DE" floatLabelType="Auto"></TextAreaComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('input-container'));
