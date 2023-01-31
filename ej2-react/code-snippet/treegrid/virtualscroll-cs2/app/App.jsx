import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, VirtualScroll } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { dataSource, virtualData } from './datasource';
function App() {
    dataSource();
    return <TreeGridComponent dataSource={virtualData} childMapping='Crew' enableVirtualization={true} enableColumnVirtualization={true} treeColumnIndex={1} height='291'>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Player Jersey' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD1' headerText='Player Name' width='120'></ColumnDirective>
            <ColumnDirective field='FIELD2' headerText='Year' width='100' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD3' headerText='Stint' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD4' headerText='TMID' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD5' headerText='LGID' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD6' headerText='GP' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD7' headerText='GS' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD8' headerText='Minutes' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD9' headerText='Points' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD10' headerText='oRebounds' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD11' headerText='dRebounds' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD12' headerText='Rebounds' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD13' headerText='Assists' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD14' headerText='Steals' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD15' headerText='Blocks' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD16' headerText='Turnovers' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD17' headerText='PF' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD18' headerText='fgAttempted' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD19' headerText='ftAttempted' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD20' headerText='ThreeAttempted' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD21' headerText='ThreeMade' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD22' headerText='PostGP' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD23' headerText='ftMade' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD24' headerText='fgMade' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD25' headerText='ffmade' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD26' headerText='PostGS' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD27' headerText='PostMinutes' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD28' headerText='PostPoints' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD29' headerText='PostoRebounds' width='120' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='FIELD30' headerText='PostdRebounds' width='120' textAlign='Right'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[VirtualScroll]}/>
    </TreeGridComponent>;
}
;
export default App;
