import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { PivotViewComponent, ExcelExport, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';

function App() {
    let pivotObj;
    var names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther',
        'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
    var city = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'Austin',
        'San Francisco', 'Columbus', 'Washington', 'Portland', 'Oklahoma', 'Las Vegas', 'Virginia', 'St. Louis', 'Birmingham'];
    var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
    var status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing'];
    var time = 0;
    var data = function (count) {
        var result = [];
        for (var i = 0; i < count; i++) {
            result.push({
                TaskID: i + 1,
                Engineer: names[Math.round(Math.random() * names.length)] || names[0],
                City: names[Math.round(Math.random() * city.length)] || city[0],
                Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
                Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
                Rating: hours[Math.round(Math.random() * rating.length)] || rating[0],
                Status: status[Math.round(Math.random() * status.length)] || status[0]
            });
        }
        time = new Date().getTime();
        return result;
    };

    let dataSourceSettings = {
        dataSource: data(10000),
        expandAll: false,
        rows: [{ name: 'TaskID' }, { name: 'Status' }],
        columns: [{ name: 'Designation' }],
        values: [{ name: 'Estimation' }, { name: 'Rating' }]
    };

    function exportComplete(args) {
        pivotObj.hideWaitingPopup();
    }

    function btnClick() {
        pivotObj.excelExport();
    }

    return (
        <div>
            <div className="col-md-9"> <PivotViewComponent ref={(d) => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}
                allowExcelExport={true} enableVirtualization={true} exportComplete={exportComplete.bind(this)}>
                <Inject services={[ExcelExport]} /></PivotViewComponent>
            </div>
            <div className='col-lg-3 property-section'>
                <ButtonComponent cssClass='e-primary' onClick={btnClick.bind(this)}>Export</ButtonComponent>
            </div>
        </div>);

};
export default App;

