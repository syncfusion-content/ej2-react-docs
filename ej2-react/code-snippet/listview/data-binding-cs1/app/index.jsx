import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
function App() {
    let data = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='list' dataSource={data}></ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
