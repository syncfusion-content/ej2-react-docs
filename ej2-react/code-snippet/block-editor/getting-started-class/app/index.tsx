import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the BlockEditor component
        <BlockEditorComponent id="block-editor"></BlockEditorComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));