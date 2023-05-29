import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
class App extends React.Component {
    render() {
        return (<div id='container'>
            <span className="content-title"> Enter your name: </span>
            <InPlaceEditorComponent id='rtlelement' mode='Inline' value='Andrew' enableRtl={true}/>
        </div>);
    }
}
export default App;
