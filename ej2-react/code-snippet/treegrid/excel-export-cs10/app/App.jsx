
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, AggregatesDirective, TreeGridComponent,AggregateDirective,AggregateColumnsDirective, AggregateColumnDirective } from '@syncfusion/ej2-react-treegrid';
import { Inject, ExcelExport, Toolbar, Aggregate, ToolbarItems, TreeGrid } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './datasource';
import { DropDownList } from '@syncfusion/ej2-react-dropdowns';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { getObject,PdfExportProperties } from '@syncfusion/ej2-grids';

function App() {

    let item = "Seafood";
    const toolbarOptions = ['ExcelExport', 'CsvExport'];
    let treegrid;

    const toolbarClick = (args ) => {
          if (treegrid && args.item.text === 'Excel Export') {
              (treegrid).excelExport();
          }
          else if (treegrid && args.item.text === 'PDF Export') {
              let exportProperties = {
            pageOrientation: 'Landscape',
        };
              (treegrid).pdfExport(exportProperties);
          }
          else if (treegrid && args.item.text === 'CSV Export') {
              (treegrid).csvExport();
          }
      }
    //Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
    const excelAggregateQueryCellInfo = (args) => {
        if (args.cell.column.headerText === "Category") {
            args.style.value = "Count of " + item + " : " + args.row.data.category.Custom;

        }
    }
    let listObj;
    const foods = [
        { food: "Seafood" },
        { food: "Dairy" },
        { food: "Edible" },
        { food: "Crystal" },
    ];

    //Custom aggregate function to calculate the count of items for the selected category.
    const customAggregateFn = (data)=> {
        let sampleData= data.result ? getObject('result', data) : data;

        let countLength;
        countLength = 0;
        if (sampleData !== undefined) {
            sampleData.filter((record) => {
                let data = getObject("category", record);
                let value = item;
                if (data === value) {
                    countLength++;
                }
            });
        }
        return countLength;
    };
    const custom = (props) => {
        return (
            <span>
                {" "}
                Count of <input type="text" id="customers" /> : {props.Custom}
            </span>
        );
    };
    const dataBound = () => {
        setTimeout(() => {
            if (!isNullOrUndefined(listObj)) {
                listObj.destroy();
            }
            listObj = new DropDownList({
                dataSource: foods,
                fields: { value: "food" },
                placeholder: "Select a Category",
                width: "110px",
                value: item,
                change: () => {
                    setTimeout(() => {
                        item = (listObj).value.toString();
                        treegrid.refresh();
                    }, 300);
                },
            });
            listObj.appendTo("#customers");
        })
    };
    return <TreeGridComponent
        dataSource={summaryData} treeColumnIndex={1} childMapping="subtasks"
        height="400" ref={(g) => treegrid = g} allowExcelExport={true} dataBound={dataBound}
        excelAggregateQueryCellInfo={excelAggregateQueryCellInfo} toolbarClick={toolbarClick}
        toolbar={toolbarOptions}
    >
        <ColumnsDirective>
            <ColumnDirective field='ID' headerText='Order ID' width='115' textAlign='Left'></ColumnDirective>
            <ColumnDirective field='Name' headerText='Shipment Name' textAlign='Left' width='230'></ColumnDirective>
            <ColumnDirective field='shipmentDate' headerText='Shipment Date' width='135' textAlign='Right' type='date' format='yMd'></ColumnDirective>
            <ColumnDirective field='category' headerText='Category' width='220' textAlign='Left' minWidth='220' />
            <ColumnDirective field='units' headerText='Units' width='90' textAlign='Right' type='number' />
            <ColumnDirective field='unitPrice' headerText='Unit Price($)' width='100' textAlign='Right' type='number' format='C2' />
            <ColumnDirective field='price' headerText='Price($)' width='100' textAlign='Right' type='number' format='C0' />
        </ColumnsDirective>
        <AggregatesDirective>
            <AggregateDirective showChildSummary={false}>
                <AggregateColumnsDirective>
                    <AggregateColumnDirective
                        columnName="category"
                        type="Custom"
                        customAggregate={customAggregateFn}
                        footerTemplate={custom}
                    >
                        {" "}
                    </AggregateColumnDirective>
                </AggregateColumnsDirective>
            </AggregateDirective>
        </AggregatesDirective>
        <Inject services={[Aggregate, Toolbar, ExcelExport]} />
    </TreeGridComponent>
};
export default App;

