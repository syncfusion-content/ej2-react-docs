import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    return (
        <div>
            <SkeletonComponent id="skeletonCircleMedium" shape='Circle' width="48px"></SkeletonComponent>
            <SkeletonComponent id="skeletonSquareMedium" shape="Square" width="48px"></SkeletonComponent>
            <br /><SkeletonComponent id="skeletonTextSmall" width="20%" height='15px'></SkeletonComponent><br />
            <SkeletonComponent style={{float: 'left'}} id="skeletonRectangleMedium" shape="Rectangle" width="20%" height='35px'></SkeletonComponent>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
