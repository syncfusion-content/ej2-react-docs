// Import the Rating.
import { RatingComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render Rating.
function App() {
    function emptyTemplate() {
        return (<img src="https://ej2.syncfusion.com/documentation/code-snippet/rating/png-templates-cs2/star-emptytemplate.png" width="25" height="25" />);
    }
    function fullTemplate() {
        return (<img src="https://ej2.syncfusion.com/documentation/code-snippet/rating/png-templates-cs2/star-fulltemplate.png" width="25" height="25" />);
    }
    return (<div className='wrap'>
          <RatingComponent id='rating' value={4} emptyTemplate={emptyTemplate} fullTemplate={fullTemplate}>
          </RatingComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
