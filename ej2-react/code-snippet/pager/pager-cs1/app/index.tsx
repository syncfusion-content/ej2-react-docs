

import * as React from "react";
import * as ReactDOM from "react-dom";
import { PagerComponent } from '@syncfusion/ej2-react-grids';
class App extends React.Component<{}, {}>{
    render() {
        return <PagerComponent totalRecordsCount = {20} pageSize = {1}>
        </PagerComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('pager'));



