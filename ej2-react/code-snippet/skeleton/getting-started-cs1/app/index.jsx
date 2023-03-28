import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    return (<SkeletonComponent height='15px'></SkeletonComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
