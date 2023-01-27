import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Filter } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const inputStyle = { width: '200px', display: 'inline-block' };
    const onClick = () => {
        const searchText = document.getElementsByClassName('searchtext')[0].value;
        if (treegrid) {
            treegrid.search(searchText);
        }
    };
    return (<div>
    <div className='e-float-input' style={inputStyle}>
        <input type="text" className="searchtext"/>
        <span className="e-float-line"/>
        <label className="e-float-text">Search text</label>
    </div>
    <ButtonComponent id='search' onClick={onClick}>Search</ButtonComponent>
    <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='220' ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
            <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Filter]}/>
        </TreeGridComponent></div>);
}
;
export default App;
