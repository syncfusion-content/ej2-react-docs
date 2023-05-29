import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    return (<div>
        <div id="skeletonCard">
            <div className='cardProfile'>
                <SkeletonComponent id='cardProfile' shape='Circle' width="60px"></SkeletonComponent>
            </div>
            <div className="cardinfo">
                <SkeletonComponent id="text1" width="30%" height='15px'></SkeletonComponent><br />
                <SkeletonComponent id="text2" width="15%" height='15px'></SkeletonComponent>
            </div>
            <div className="cardContent">
                <SkeletonComponent id="cardImage" shape="Rectangle" width="100%" height='150px'></SkeletonComponent>
            </div>
            <div className="cardoptions">
                <SkeletonComponent id="rightOption" shape="Rectangle" width="20%" height='32px'></SkeletonComponent>
                <SkeletonComponent id="leftOption" shape="Rectangle" width="20%" height='32px'></SkeletonComponent>
            </div>
        </div>
      </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
