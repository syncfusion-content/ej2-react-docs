import * as React from 'react';
import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';
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
    let dataSourceSettings: DataSourceSettingsModel = {
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        dataSource: pivotData as IDataSet[],
        filters: [],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
    };
    let pivotObj: PivotViewComponent;

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
        const start: number = 0;
        const stop: number = file.size - 1;
        const reader: FileReader = new FileReader();
        reader.onloadend = function (evt: ProgressEvent<FileReader>) {
            if ((evt.target as FileReader).readyState == FileReader.DONE) {
                pivotObj.dataSourceSettings = JSON.parse((evt.target as FileReader).result as string);
            }
        };
        const blob: Blob = file.slice(start, stop + 1);
        reader.readAsBinaryString(blob);
        (document.getElementById('files') as HTMLInputElement).value = '';
    }

    return (<div className='control-pane'><div><style>{SAMPLE_CSS}</style>
        <PivotViewComponent id='PivotView' ref={ (d: PivotViewComponent) => pivotObj = d } dataSourceSettings={dataSourceSettings} width={'100%'} height={350} dataBound={ondataBound.bind(this)}></PivotViewComponent></div>
        <a id="save" className="btn btn-primary">Save</a><div className="fileUpload btn btn-primary"><span>Load</span><input id="files" type="file" className="upload" /></div>
    </div>);
};
export default App;
