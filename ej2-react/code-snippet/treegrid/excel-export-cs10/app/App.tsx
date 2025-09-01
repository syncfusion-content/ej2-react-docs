{% raw %}


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

    let item: string = "Seafood";
    const toolbarOptions: ToolbarItems[] = ['ExcelExport', 'CsvExport'];
    let treegrid: TreeGridComponent;

    const toolbarClick = (args: ClickEventArgs): void => {
          if (treegrid && args.item.text === 'Excel Export') {
              (treegrid as any).excelExport();
          }
          else if (treegrid && args.item.text === 'PDF Export') {
              let exportProperties: PdfExportProperties = {
            pageOrientation: 'Landscape',
        };
              (treegrid as any).pdfExport(exportProperties);
          }
          else if (treegrid && args.item.text === 'CSV Export') {
              (treegrid as any).csvExport();
          }
      }
    //Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
    const excelAggregateQueryCellInfo = (args: any): void => {
        if (args.cell.column.headerText === "Category") {
            args.style.value = "Count of " + item + " : " + args.row.data.category.Custom;

        }
    }
    let listObj: DropDownList;
    const foods: { [key: string]: Object }[] = [
        { food: "Seafood" },
        { food: "Dairy" },
        { food: "Edible" },
        { food: "Crystal" },
    ];

    //Custom aggregate function to calculate the count of items for the selected category.
    const customAggregateFn = (data: any): any => {
        let sampleData: any = data.result ? getObject('result', data) : data;

        let countLength: number;
        countLength = 0;
        if (sampleData !== undefined) {
            sampleData.filter((record: Object) => {
                let data: string = getObject("category", record);
                let value: string = item;
                if (data === value) {
                    countLength++;
                }
            });
        }
        return countLength;
    };
    const custom = (props:any): any => {
        return (
            <span>
                {" "}
                Count of <input type="text" id="customers" /> : {props.Custom}
            </span>
        );
    };
    const dataBound = (): void => {
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
                        item = (listObj as any).value.toString();
                        treegrid.refresh();
                    }, 300);
                },
            });
            listObj.appendTo("#customers");
        })
    };
    return <TreeGridComponent
        dataSource={summaryData} treeColumnIndex={1} childMapping="subtasks"
        height="400" ref={(g:any) => treegrid = g} allowExcelExport={true} dataBound={dataBound}
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


{% endraw %}