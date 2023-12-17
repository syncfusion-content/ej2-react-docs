{% raw %}



import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
//import DataManager related classes
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';
import { createSpinner, hideSpinner, showSpinner} from '@syncfusion/ej2-react-popups';

function App() {
  React.useEffect(()=>{
    componentDidMount();
  },[])

  //Bind the DataManager instance to dataSource property
  let data = new DataManager({
    url: "https://services.syncfusion.com/js/production/api/",
    crossDomain: true
  });

  //Map the appropriate columns to fields property
  let fields = { id: "EmployeeID", text: "FirstName" };
  let spinnerInstance: HTMLElement | null = null;

  //Initialize query with the Query instance to get specified set of data
  let query = new Query()
    .from("ListView")
    .select("EmployeeID,FirstName")
    .take(10);

  function componentDidMount(){
    if (spinnerInstance) {
      createSpinner({
      target: spinnerInstance
      });
      showSpinner(spinnerInstance);
    }
  }

  function onActionComplete() {
    if (spinnerInstance) spinnerInstance.style.display = "none";
  }

  return (
    <div>
      <ListViewComponent
        id="list"
        dataSource={data}
        fields={fields}
        query={query}
        showHeader={true}
        headerTitle="Employees"
        actionComplete={onActionComplete.bind(this)}
      />
      <div
        ref={spinner => {
          spinnerInstance = spinner;
        }}
        id="spinner"
      />
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


{% endraw %}