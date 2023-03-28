import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    return (<SkeletonComponent shape='Circle' width="60px" cssClass='e-customize'></SkeletonComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
