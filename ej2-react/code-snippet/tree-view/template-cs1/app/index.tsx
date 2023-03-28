


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {enableRipple} from '@syncfusion/ej2-base';
enableRipple(true);
import {TreeViewComponent} from '@syncfusion/ej2-react-navigations';

function App() {

let employees: { [key: string]: Object }[] = [
   { id: 1, name: 'Steven Buchanan', eimg: '10', job: 'CEO', hasChild: true, expanded: true },
        { id: 2, pid: 1, name: 'Laura Callahan', eimg: '2', job: 'Product Manager', hasChild: true },
        { id: 3, pid: 2, name: 'Andrew Fuller', eimg: '7', job: 'Team Lead', hasChild: true },
        { id: 4, pid: 3, name: 'Anne Dodsworth', eimg: '1', job: 'Developer' },
        { id: 5, pid: 1, name: 'Nancy Davolio', eimg: '4', job: 'Product Manager', hasChild: true },
        { id: 6, pid: 5, name: 'Michael Suyama', eimg: '9', job: 'Team Lead', hasChild: true },
        { id: 7, pid: 6, name: 'Robert King', eimg: '8', job: 'Developer ' },
        { id: 8, pid: 7, name: 'Margaret Peacock', eimg: '6', job: 'Developer' },
        { id: 9, pid: 1, name: 'Janet Leverling', eimg: '3', job: 'HR' },
];
let fields: Object = { dataSource: employees,  id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
let cssClass:string = "custom";
function nodeTemplate(data:any): JSX.Element {
    return (
      <div>
        <img className='eimage' src={`./../template-cs1/${data.eimg}.png`} alt='${data.eimg}'/>
        <div className='ename'>{data.name}</div>
        <div className='ejob'>{data.job}</div>
      </div>
        )
    }
  return (
      // specifies the tag for render the TreeView component
      <TreeViewComponent fields={fields} cssClass={cssClass} nodeTemplate={nodeTemplate}/>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



