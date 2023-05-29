{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
//import DataManager related classes
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createSpinner, showSpinner } from '@syncfusion/ej2-react-popups';
function App() {
    React.useEffect(() => {
        componentDidMount();
    }, []);
    //bind the DataManager instance to dataSource property
    let data = new DataManager({
        url: "//js.syncfusion.com/ejServices/Wcf/Northwind.svc/",
        crossDomain: true
    });
    //map the appropriate columns to fields property
    let fields = { id: "ProductID", text: "ProductName" };
    let spinnerInstance = null;
    //bind the Query instance to query property
    let query = new Query()
        .from("Products")
        .select("ProductID,ProductName")
        .take(10);
    function componentDidMount() {
        if (spinnerInstance) {
            createSpinner({
                target: spinnerInstance
            });
            showSpinner(spinnerInstance);
        }
    }
    function onActionComplete() {
        if (spinnerInstance)
            spinnerInstance.style.display = "none";
    }
    return (<div>
      <ListViewComponent id="list" dataSource={data} fields={fields} query={query} showHeader={true} headerTitle="Product Name" actionComplete={onActionComplete.bind(this)}/>
      <div ref={spinner => {
            spinnerInstance = spinner;
        }} id="spinner"/>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}