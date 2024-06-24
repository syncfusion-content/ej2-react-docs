import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
const SAMPLE_CSS = `
.fileUpload {
    position: relative;
    overflow: hidden;
    margin: 10px;
}
.fileUpload input.upload {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    padding: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}`;
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj;
    function ondataBound() {
        const dataSource = JSON.parse(pivotObj.getPersistData()).dataSourceSettings.dataSource;
        const a = document.getElementById('save');
        const mime_type = 'application/octet-stream'; // text/html, image/png, et c
        a.setAttribute('download', 'pivot.JSON');
        a.href = 'data:' + mime_type + ';base64,' + btoa(JSON.stringify(dataSource) || '');
        document.getElementById('files').addEventListener('change', readBlob, false);
    }
    function readBlob() {
        const files = document.getElementById('files').files;
        const file = files[0];
        const start = 0;
        const stop = file.size - 1;
        const reader = new FileReader();
        reader.onloadend = function (evt) {
            if (evt.target.readyState == FileReader.DONE) {
                pivotObj.dataSourceSettings = JSON.parse(evt.target.result);
            }
        };
        const blob = file.slice(start, stop + 1);
        reader.readAsBinaryString(blob);
        document.getElementById('files').value = '';
    }
    return (<div className='control-pane'>
               <div><style>{SAMPLE_CSS}</style><PivotViewComponent id='PivotView' ref={d => pivotObj = d} dataSourceSettings={dataSourceSettings} width={'100%'} height={350} dataBound={ondataBound.bind(this)}></PivotViewComponent></div><a id="save" class="btn btn-primary">Save</a><div class="fileUpload btn btn-primary"><span>Load</span><input id="files" type="file" class="upload"/></div>
            </div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));