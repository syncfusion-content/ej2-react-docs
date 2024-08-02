import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    PivotViewComponent, IDataOptions, Inject, Toolbar, IDataSet
} from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';

function App() {
    let dataSourceSettings: IDataOptions = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData as IDataSet[],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };

    let pivotObj: PivotViewComponent;
    const toolbarOptions: any = '#template';

    function ondataBound(): void {
        const dataSource = JSON.parse(pivotObj.getPersistData()).dataSourceSettings;
        const a: HTMLAnchorElement = document.getElementById('save') as HTMLAnchorElement;
        const mime_type = 'application/octet-stream'; // text/html, image/png, et c
        a.setAttribute('download', 'pivot.JSON');
        a.href = 'data:' + mime_type + ';base64,' + btoa(JSON.stringify(dataSource) || '');
        (document.getElementById('files') as HTMLInputElement).addEventListener('change', readBlob, false);
    }

    function readBlob(): void {
        const files: FileList = (document.getElementById('files') as HTMLInputElement).files as FileList;
        const file: File = files[0];
        let start: number = 0, stop: number = 0;
        if (file && file.size) {
            stop = file.size - 1;
        }
        const reader: FileReader = new FileReader();
        reader.onloadend = function (evt: ProgressEvent<FileReader>) {
            if ((evt.target as FileReader).readyState == FileReader.DONE) {
                pivotObj.dataSourceSettings = JSON.parse((evt.target as FileReader).result as string);
            }
        };
        if (file) {
            const blob: Blob = file.slice(start, stop + 1);
            reader.readAsBinaryString(blob);
        }
        (document.getElementById('files') as HTMLInputElement).value = '';
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

export default App;
ReactDOM.render(<App />, document.getElementById('root'));
