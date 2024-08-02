import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PivotViewComponent, Inject, Toolbar } from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
function App() {
    let dataSourceSettings = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };

    let pivotObj;
    const toolbarOptions = '#template';

    function ondataBound() {
        const dataSource = JSON.parse(pivotObj.getPersistData()).dataSourceSettings;
        const a = document.getElementById('save');
        const mime_type = 'application/octet-stream';
        a.setAttribute('download', 'pivot.JSON');
        a.href = 'data:' + mime_type + ';base64,' + btoa(JSON.stringify(dataSource) || '');
        document.getElementById('files').addEventListener('change', readBlob, false);
    }

    function readBlob() {
        const files = document.getElementById('files').files;
        const file = files[0];
        let start = 0, stop = 0;
        if (file && file.size) {
            stop = file.size - 1;
        }
        const reader = new FileReader();
        reader.onloadend = function(evt) {
            if (evt.target.readyState == FileReader.DONE) {
                pivotObj.dataSourceSettings = JSON.parse(evt.target.result);
            }
        };
        if (file) {
            const blob = file.slice(start, stop + 1);
            reader.readAsBinaryString(blob);
        }
        document.getElementById('files').value = '';
    }

    return (
        <div>
            <PivotViewComponent
                id='PivotView'
                ref={d => pivotObj = d}
                dataSourceSettings={dataSourceSettings}
                width={'100%'}
                height={350}
                showToolbar={true}
                toolbarTemplate={toolbarOptions}
                dataBound={ondataBound.bind(this)}
            >
                <Inject services={[Toolbar]} />
            </PivotViewComponent>
            <div id='template'>
                <label htmlFor="files" className="e-btn-icon e-open-report e-icons icon-container">
                    <input
                        id="files"
                        type="file"
                        className="file-input"
                        onChange={readBlob}
                    />
                    <span className="icon-text">Open</span>
                </label>
                <a id="save" className="e-btn-icon e-save-report e-icons icon-container">
                    <span className="icon-text">Save</span>
                </a>
            </div>
        </div>
    );
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
