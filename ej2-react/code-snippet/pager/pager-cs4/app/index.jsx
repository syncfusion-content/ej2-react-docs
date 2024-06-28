import * as React from "react";
import * as ReactDOM from "react-dom";
import { PagerComponent, PagerDropDown, Pager } from '@syncfusion/ej2-react-grids';
Pager.Inject(PagerDropDown);
class App extends React.Component {
    render() {
        return <PagerComponent totalRecordsCount = {200} pageSize = {10} pageSizes = {[10, 20, 50, 100]}>
        </PagerComponent>
    }
}
;
ReactDOM.render(<App />, document.getElementById('pager'));
