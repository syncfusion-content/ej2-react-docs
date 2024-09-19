import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
  public render() {
    return (
        // specifies the tag for render the AI AssistView omponent
        <AIAssistViewComponent id="aiAssistView"></AIAssistViewComponent>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
