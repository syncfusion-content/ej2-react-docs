import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { renewableEnergy } from './datasource';
function App() {
    function cellTemplate(props) {
        return (<span className="tempwrap sb-icon-neutral pv-icons"></span>);
    }
    let dataSourceSettings = {
        dataSource: renewableEnergy,
        expandAll: true,
        enableSorting: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
        formatSettings: [{ name: 'ProCost', format: 'C0' }],
        rows: [
            { name: 'Year', caption: 'Production Year' }
        ],
        columns: [
            { name: 'EnerType', caption: 'Energy Type' },
            { name: 'EneSource', caption: 'Energy Source' }
        ],
        values: [
            { name: 'ProCost', caption: 'Revenue Growth' }
        ],
        filters: []
    };
    let pivotObj;
    return (<PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings} cellTemplate={cellTemplate.bind(this)} dataBound={trend.bind(this)}></PivotViewComponent>);
    function trend() {
        let cTable = [].slice.call(document.getElementsByClassName("e-table"));
        let colLen = pivotObj.pivotValues[3].length;
        let cLen = cTable[3].children[0].children.length;
        let rLen = cTable[3].children[1].children.length;
        let rowIndx;
        for (let k = 0; k < rLen; k++) {
            if (pivotObj.pivotValues[k] && pivotObj.pivotValues[k][0] !== undefined) {
                rowIndx = (pivotObj.pivotValues[k][0]).rowIndex;
                break;
            }
        }
        let rowHeaders = [].slice.call(cTable[2].children[1].querySelectorAll('td'));
        let rows = pivotObj.dataSourceSettings.rows;
        if (rowHeaders.length > 1) {
            for (let i = 0, Cnt = rows; i < Cnt.length; i++) {
                let fields = {};
                let fieldHeaders = [];
                for (let j = 0, Lnt = rowHeaders; j < Lnt.length; j++) {
                    let header = rowHeaders[j];
                    if (header.className.indexOf('e-gtot') === -1 && header.className.indexOf('e-rowsheader') > -1 && header.getAttribute('fieldname') === rows[i].name) {
                        var headerName = rowHeaders[j].getAttribute('fieldname') + '_' + rowHeaders[j].textContent;
                        fields[rowHeaders[j].textContent] = j;
                        fieldHeaders.push(rowHeaders[j].textContent);
                    }
                }
                if (i === 0) {
                    for (let rnt = 0, Lnt = fieldHeaders; rnt < Lnt.length; rnt++) {
                        if (rnt !== 0) {
                            let row = fields[fieldHeaders[rnt]];
                            let prevRow = fields[fieldHeaders[rnt - 1]];
                            for (let j = 0, ci = 1; j < cLen && ci < colLen; j++, ci++) {
                                let node = cTable[3].children[1].children[row].childNodes[j];
                                let prevNode = cTable[3].children[1].children[prevRow].childNodes[j];
                                let ri = undefined;
                                let prevRi = undefined;
                                if (node) {
                                    ri = node.getAttribute("index");
                                }
                                if (prevNode) {
                                    prevRi = prevNode.getAttribute("index");
                                }
                                if (ri && ri < [].slice.call(pivotObj.pivotValues).length) {
                                    if (pivotObj.pivotValues[prevRi][ci].value > pivotObj.pivotValues[ri][ci].value &&
                                        node.querySelector('.tempwrap')) {
                                        let trendElement = node.querySelector('.tempwrap');
                                        trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-loss');
                                    }
                                    else if (pivotObj.pivotValues[prevRi][ci].value < pivotObj.pivotValues[ri][ci].value &&
                                        node.querySelector('.tempwrap')) {
                                        let trendElement = node.querySelector('.tempwrap');
                                        trendElement.className = trendElement.className.replace('sb-icon-neutral', 'sb-icon-profit');
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
