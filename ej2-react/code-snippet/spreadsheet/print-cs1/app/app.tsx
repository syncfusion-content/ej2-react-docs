


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, protectSheet, ProtectSettings } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { budgetData, salaryData, printElement, isPrint } from './datasource';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';
import { createElement, print, getComponent } from '@syncfusion/ej2-base';

export default class App extends React.Component<{}, {}> {
       public spreadsheet: SpreadsheetComponent;
       public items: ItemModel[] = [
        {
            text: "Print"
        },
        {
            text: "Print All"
        }];
       public dataBound(): void{
        if (isPrint) {
            printElement.querySelector(".e-sheet-content").innerHTML += document
                .querySelector(".e-sheet-content").outerHTML;
            let usedRange: UsedRangeModel = this.spreadsheet.getActiveSheet().usedRange;
            let tbody: Element = printElement.querySelector('.e-sheet-content').children[this.spreadsheet.activeSheetIndex].querySelector('tbody');
            for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
                if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
                tbody.getElementsByClassName('e-row')[i].remove();
                }
            }
            let sheets: SheetModel[] = this.spreadsheet.sheets;
            if (sheets.length - 1 === this.spreadsheet.activeSheetIndex) {
                let count: number = printElement.querySelector(".e-sheet-content").childElementCount;
                if (count > 1) {
                for (let i: number = 0; i < count; i++) {
                    (printElement.querySelector('.e-sheet-content').children[i].getElementsByClassName('e-virtualtrack')[0] as HTMLElement).style.height = 'auto';
                    printElement.querySelector('.e-sheet-content').children[i].setAttribute('style', 'page-break-after: always;')
                }
                }
                print(printElement);
                isPrint = false;
                printElement.querySelector(".e-sheet-content").innerHTML = '';
            } else {
                if (sheets[this.spreadsheet.activeSheetIndex + 1]) {
                this.spreadsheet.goTo(sheets[this.spreadsheet.activeSheetIndex + 1].name + "!A1");
                }
            }
        }
    }
   public created(): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        this.spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Salary!A1:D1');
    }
    public itemSelect(args): void {
        let spreadsheet = getComponent(document.getElementById("spreadsheet"), "spreadsheet");
        if (args.item.text === 'Print') {
            printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
                ".e-sheet-content"
            ).outerHTML; //  To add the spreadsheet table
            let usedRange: UsedRangeModel = spreadsheet.getActiveSheet().usedRange;
            let tbody: Element = printElement.querySelector('tbody');
            for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
                if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
                tbody.getElementsByClassName('e-row')[i].remove();
                }
            }
            (printElement.querySelector('.e-sheet-content').children[0].getElementsByClassName('e-virtualtrack')[0] as HTMLElement).style.height = 'auto';
            print(printElement);
            printElement.querySelector(".e-sheet-content").innerHTML = '';
            }
            if (args.item.text === 'Print All') {
            let sheets: SheetModel[] = spreadsheet.sheets;
            if (spreadsheet.activeSheetIndex === 0) {
                printElement.querySelector(".e-sheet-content").innerHTML = document.querySelector(
                ".e-sheet-content"
                ).outerHTML; //  To add the spreadsheet table

                let usedRange: UsedRangeModel = spreadsheet.getActiveSheet().usedRange;
                let tbody: Element = printElement.querySelector('tbody');
                for (let i: number = tbody.getElementsByClassName('e-row').length; i >= 0; i--) {
                if (tbody.getElementsByClassName('e-row')[i] && parseInt(tbody.getElementsByClassName('e-row')[i].getAttribute('aria-rowindex')) > usedRange.rowIndex + 1) {
                    tbody.getElementsByClassName('e-row')[i].remove();
                }
                }

                if (sheets[spreadsheet.activeSheetIndex + 1]) {
                spreadsheet.goTo(sheets[spreadsheet.activeSheetIndex + 1].name + "!A1");
                isPrint = true;
                } else {
                print(printElement);
                printElement.querySelector(".e-sheet-content").innerHTML = '';
                }
            } else {
                if (sheets[0]) {
                spreadsheet.goTo(sheets[0].name + "!A1");
                isPrint = true;
                }
            }
        }
    }
     render() {
        return  ( <div> <DropDownButtonComponent id="element" items={this.items} select={this.itemSelect}> Print </DropDownButtonComponent>
        <SpreadsheetComponent id ='spreadsheet'
                        ref={(ssObj) => { this.spreadsheet = ssObj }} dataBound={this.dataBound.bind(this)} created={this.created.bind(this)}>
                        <SheetsDirective>
                            <SheetDirective name={"Budget"}>
                                <RangesDirective>
                                    <RangeDirective dataSource={budgetData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                            <SheetDirective name={"Salary"}>
                                <RangesDirective>
                                    <RangeDirective dataSource={salaryData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


