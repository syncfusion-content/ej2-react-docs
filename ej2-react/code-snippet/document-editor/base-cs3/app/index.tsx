

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function Default() {
    return (
    <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/" enableToolbar={true} />);
}
export default Default
ReactDOM.render(<Default />, document.getElementById('sample'));



