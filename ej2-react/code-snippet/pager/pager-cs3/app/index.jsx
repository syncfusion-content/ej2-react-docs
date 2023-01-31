import * as React from "react";
import * as ReactDOM from "react-dom";
import { PagerComponent } from '@syncfusion/ej2-react-grids';
class App extends React.Component {
    render() {
        return <PagerComponent pageSize={8} totalRecordsCount={20} pageCount={3}>
        </PagerComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('pager'));
