import { SkeletonComponent } from '@syncfusion/ej2-react-notifications';
import * as React from "react";
import * as ReactDOM from 'react-dom';
function App() {
    return (<div>
      <ul id="skeleton-list" class="e-card">
          <li>
              <div className='cardProfile'>
                  <SkeletonComponent shape="Circle" width="40px" shimmerEffect='Pulse'></SkeletonComponent>
              </div>
              <div>
                  <SkeletonComponent width="60%" height='15px' shimmerEffect='Pulse'></SkeletonComponent><br></br>
                  <SkeletonComponent width="40%" height='15px' shimmerEffect='Pulse'></SkeletonComponent>
              </div>
          </li>
          <li>
              <div className='cardProfile'>
                  <SkeletonComponent shape="Circle" width="40px" shimmerEffect='Pulse'></SkeletonComponent>
              </div>
              <div>
                  <SkeletonComponent width="60%" height='15px' shimmerEffect='Pulse'></SkeletonComponent><br></br>
                  <SkeletonComponent width="40%" height='15px' shimmerEffect='Pulse'></SkeletonComponent>
              </div>
          </li>
      </ul>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
