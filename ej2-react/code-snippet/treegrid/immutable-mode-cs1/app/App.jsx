{% raw %}
import { ColumnDirective, ColumnsDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Page, Edit } from '@syncfusion/ej2-react-treegrid';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { sampleData2, dataSource1, sampleData } from './datasource';
function App() {
    const pageSettings = { pageSize: 50 };
    const settings = { type: 'Multiple' };
    let immutableInit = true;
    let init = true;
    let normalStart;
    let immutableStart;
    let immutableGrid;
    let normalGrid;
    let topBtn;
    let bottomBtn;
    let deleteBtn;
    let sortBtn;
    let pageBtn;
    let editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Cell'
    };
    const immutableBeforeDataBound = () => {
        immutableStart = new Date().getTime();
    };
    const immutableDataBound = () => {
        let val = immutableInit ? '' : new Date().getTime() - immutableStart;
        document.getElementById("immutableDelete").innerHTML =
            "Immutable rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
        immutableStart = 0;
        immutableInit = false;
    };
    const addTopEvent = () => {
        normalGrid.addRecord(sampleData[0], 0, "Top");
        immutableGrid.addRecord(sampleData[0], 0, "Top");
    };
    const addBottomEvent = () => {
        normalGrid.addRecord(sampleData[0], 0, "Bottom");
        immutableGrid.addRecord(sampleData[0], 0, "Bottom");
    };
    const deleteEvent = () => {
        normalGrid.selectRows([0, 2, 4]);
        immutableGrid.selectRows([0, 2, 4]);
        normalGrid.deleteRecord();
        immutableGrid.deleteRecord();
    };
    const sortEvent = () => {
        let aData = immutableGrid.dataSource.reverse();
        normalGrid.setProperties({ dataSource: aData });
        immutableGrid.setProperties({ dataSource: aData });
    };
    const pageEvent = () => {
        let page = normalGrid.pageSettings.currentPage + 1;
        normalGrid.goToPage(page);
        immutableGrid.goToPage(page);
    };
    const beforeDataBound = () => {
        normalStart = new Date().getTime();
    };
    const dataBound = () => {
        let val = init ? '' : new Date().getTime() - normalStart;
        document.getElementById("normalDelete").innerHTML =
            "Normal rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
        normalStart = 0;
        init = false;
    };
    if (sampleData2.length == 0) {
        dataSource1();
    }
    return (<div>
      <table>
          <tbody>
            <tr>
              <td>
                <span id="immutableDelete"></span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="normalDelete"></span>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <ButtonComponent ref={topBtn} cssClass='e-info' onClick={addTopEvent}>Add row at top</ButtonComponent>
                  <ButtonComponent ref={bottomBtn} cssClass='e-info' onClick={addBottomEvent}>Add row at bottom</ButtonComponent>
                  <ButtonComponent ref={deleteBtn} cssClass='e-info' onClick={deleteEvent}>Delete 5 rows</ButtonComponent>
                  <ButtonComponent ref={sortBtn} cssClass='e-info' onClick={sortEvent}>Sort Task ID</ButtonComponent>
                  <ButtonComponent ref={pageBtn} cssClass='e-info' onClick={pageEvent}>Paging</ButtonComponent>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span><b>Immutable Grid</b></span>
                <TreeGridComponent ref={immutable => { immutableGrid = immutable; }} treeColumnIndex={1} childMapping='subtasks' dataSource={sampleData2} height='350' selectionSettings={settings} enableImmutableMode={true} allowPaging={true} pageSettings={pageSettings} beforeDataBound={immutableBeforeDataBound} dataBound={immutableDataBound} editSettings={editOptions}>
                <ColumnsDirective>
                    <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
                    <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
                    <ColumnDirective field='priority' headerText='Priority' width='90'/>
                    <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
                </ColumnsDirective>
                   <Inject services={[Page, Edit]}/>
                </TreeGridComponent>
              </td>
              <td>
                <span><b>Normal Grid</b></span>
                <TreeGridComponent ref={normal => { normalGrid = normal; }} treeColumnIndex={1} childMapping='subtasks' dataSource={sampleData2} allowPaging={true} height='350' pageSettings={pageSettings} selectionSettings={settings} beforeDataBound={beforeDataBound} editSettings={editOptions} dataBound={dataBound}>
                <ColumnsDirective>
                    <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
                    <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
                    <ColumnDirective field='priority' headerText='Priority' width='90'/>
                    <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
                </ColumnsDirective>
                   <Inject services={[Page, Edit]}/>
                </TreeGridComponent>
              </td>
            </tr>
          </tbody>
        </table></div>);
}
;
export default App;
{% endraw %}