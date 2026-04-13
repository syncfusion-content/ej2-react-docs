{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {TreeViewComponent, NodeExpandEventArgs } from '@syncfusion/ej2-react-navigations';
import {enableRipple} from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
enableRipple(true);

function App() {

   // Data source for TreeView component
   let Countries: { [key: string]: Object }[]= [
    { id: 1, name: 'India', hasChild: true },
    { id: 2, pid: 1, name: 'Assam' },
    { id: 3, pid: 1, name: 'Bihar' },
    { id: 4, pid: 1, name: 'Tamil Nadu' },
    { id: 6, pid: 1, name: 'Punjab' },
    { id: 7, name: 'Brazil', hasChild: true },
    { id: 8, pid: 7, name: 'Paraná' },
    { id: 9, pid: 7, name: 'Ceará' },
    { id: 10, pid: 7, name: 'Acre' },
    { id: 11, name: 'France', hasChild: true },
    { id: 12, pid: 11, name: 'Pays de la Loire' },
    { id: 13, pid: 11, name: 'Aquitaine' },
    { id: 14, pid: 11, name: 'Brittany' },
    { id: 15, pid: 11, name: 'Lorraine' },
    { id: 16, name: 'Australia', hasChild: true },
    { id: 17, pid: 16, name: 'New South Wales' },
    { id: 18, pid: 16, name: 'Victoria' },
    { id: 19, pid: 16, name: 'South Australia' },
    { id: 20, pid: 16, name: 'Western Australia' },
    { id: 21, name: 'China', hasChild: true },
    { id: 22, pid: 21, name: 'Guangzhou' },
    { id: 23, pid: 21, name: 'Shanghai' },
    { id: 24, pid: 21, name: 'Beijing' },
    { id: 25, pid: 21, name: 'Shantou' }
   ]

    let field:Object ={  dataSource: Countries, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild' };
    let newData: any;
    let treeObj: TreeViewComponent;

    function onNodeExpand(args: NodeExpandEventArgs): void {
        if (args.isInteracted && args.node.querySelector('li') === null){
            let id: any = parseInt(args.node.getAttribute("data-uid"));
            let childData: any =  new DataManager(newData).executeLocal(new Query().where(treeObj.fields.parentID, 'equal', id, false));
            treeObj.addNodes(childData, args.node,null)
        }
    }

    function onCreate(){
        newData = treeObj.fields.dataSource;
        // Selects the first level nodes alone
        let resultData = new DataManager(treeObj.getTreeData()).executeLocal(new Query().where(treeObj.fields.parentID, 'equal', null, false));
        let name = [];
        for (let i = 0; i < resultData.length; i++){
            name.push(resultData[i][treeObj.fields.text]);
        }
        name.sort();
        let arr = [];
        for (let j = 0; j < name.length; j++) {
            let sortedData = new DataManager(treeObj.getTreeData()).executeLocal(new Query().where(treeObj.fields.text, 'equal', name[j], false));
            let childData =  new DataManager(newData).executeLocal(new Query().where(treeObj.fields.parentID, 'equal', parseInt(sortedData[0][treeObj.fields.id]), false));
            arr.push(sortedData[0]);
        }
        // Renders treeview with sorted Nodes
        changeDataSource(arr);
        treeObj.dataBind();
    }

     function changeDataSource(data: any){
        treeObj.fields = {
            dataSource: data, id: 'id', text: 'name', parentID: 'pid', hasChildren: 'hasChild'
        }
    }
    return (
      <div className = 'control-pane'>
        <div className='control-section'>
        <div className='control_wrapper'>
            {/* Render TreeView */}
            <TreeViewComponent fields={field} ref={(treeview) => { treeObj = treeview as TreeViewComponent; }} created={onCreate.bind(this)} nodeExpanding={onNodeExpand.bind(this)} />
        </div>
        </div>
      </div>
    )
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}