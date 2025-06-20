{ /* Import the BlockEditor.*/ }
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDom from 'react-dom';

{ /* To render BlockEditor. */ }
export default class App extends React.Component {
        render() {
            return (
                <div id='container'>
                    <BlockEditorComponent ></BlockEditorComponent>
                </div>
            );
        }
    }
ReactDom.render(<App />, document.getElementById('element'));