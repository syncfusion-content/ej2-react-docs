import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { enableRtl } from '@syncfusion/ej2-base';
// Enables Right to left alignment for all components
enableRtl(true);
function App() {
    const data = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];
    return (
    // specifies the tag to render the ListView component
    <ListViewComponent id='list' dataSource={data} showHeader='true' headerTitle='Painting types'></ListViewComponent>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
