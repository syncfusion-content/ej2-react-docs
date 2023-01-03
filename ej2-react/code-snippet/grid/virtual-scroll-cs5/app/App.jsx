import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, VirtualScroll, Edit, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { dataSource } from './virtualData';
function App() {
    const data = dataSource();
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const rules = { required: true };
    return (<GridComponent dataSource={data} height={300} enableVirtualization={true} enableColumnVirtualization={true} pageSettings={{ pageSize: 50 }} editSettings={editOptions} toolbar={toolbarOptions}>
            <Inject services={[VirtualScroll, Edit, Toolbar]}/>
            <ColumnsDirective>
                <ColumnDirective field='SNo' headerText='S.No' width='120' isPrimaryKey={true} validationRules={rules}/>
                <ColumnDirective field='FIELD1' headerText='Player Name' width='140' editType='dropdownedit' validationRules={rules}/>
                <ColumnDirective field='FIELD2' headerText='Year' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD3' headerText='Stint' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD4' headerText='TMID' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD5' headerText='LGID' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD6' headerText='GP' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD7' headerText='GS' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD8' headerText='Minutes' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD9' headerText='Points' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD10' headerText='oRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD11' headerText='dRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD12' headerText='Rebounds' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD13' headerText='Assists' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD14' headerText='Steals' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD15' headerText='Blocks' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD16' headerText='Turnovers' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD17' headerText='PF' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD18' headerText='fgAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD19' headerText='fgMade' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD20' headerText='ftAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD21' headerText='ftMade' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD22' headerText='ThreeAttempted' width='150' textAlign='Right'/>
                <ColumnDirective field='FIELD23' headerText='ThreeMade' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD24' headerText='PostGP' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD25' headerText='PostGS' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD26' headerText='PostMinutes' width='120' textAlign='Right'/>
                <ColumnDirective field='FIELD27' headerText='PostPoints' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD28' headerText='PostoRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD29' headerText='PostdRebounds' width='130' textAlign='Right'/>
                <ColumnDirective field='FIELD30' headerText='PostRebounds' width='130' textAlign='Right' editType='numericedit' validationRules={rules}/>
            </ColumnsDirective>
            </GridComponent>);
}
;
export default App;
