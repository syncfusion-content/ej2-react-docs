import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, PDFExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import { pivotData } from './datasource';
function App() {
    let pivotObj;

    let gridSettings = {
        columnWidth: 140,
        pdfQueryCellInfo: function (args) {
            if (args.data && args.data.actualText === 'Sold') {
                if ((args).value < 700) {
                    args.style = {
                        backgroundColor: '#df3800',
                        fontFamily: 'Courier',
                        textPenColor: '#FFFFFF'
                    };
                } else {
                    args.style = {
                        backgroundColor: '#00A45A',
                        fontFamily: 'TimesRoman',
                        textPenColor: '#FFFFFF'
                    };
                }
            }
        }
    };

    let dataSourceSettings = {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
    };

    function btnClick() {
        pivotObj.pdfExport();
    }

    return (
        <div>
            <div className="col-md-9"> <PivotViewComponent ref={(d) => pivotObj = d} id='PivotView' height={350} gridSettings={gridSettings} dataSourceSettings={dataSourceSettings} allowPdfExport={true}>
                <Inject services={[PDFExport]} /></PivotViewComponent>
            </div>
            <div className='col-lg-3 property-section'>
                <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
            </div>
        </div>);

};
export default App;

