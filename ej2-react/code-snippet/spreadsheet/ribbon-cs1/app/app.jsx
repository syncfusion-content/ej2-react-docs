{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { select } from '@syncfusion/ej2-base';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    created() {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:F1');
        // Hiding the `Insert` from ribbon.
        this.spreadsheet.hideRibbonTabs(['Insert']);
        // Set disabled state to `View` ribbon tab.
        this.spreadsheet.enableRibbonTabs(['View'], false);
        // Adding the `Help` ribbon tab at the last index.
        // Specify the ribbon tab header text in last optional argument(`insertBefore`) for inserting new tab before any existing tab.
        this.spreadsheet.addRibbonTabs([{ header: { text: 'Help' }, content: [{ text: 'Feedback', tooltipText: 'Feedback',
                        click: () => { } }] }]);
        // Hiding the unwanted toolbar items from `Home` by specifying its index.
        this.spreadsheet.hideToolbarItems('Home', [0, 1, 2, 4, 14, 15, 21, 24]);
        // Set disable state to `Underline`, 'Wrap text` toolbar items from `Home` by specifying the item id.
        this.spreadsheet.enableToolbarItems('Home', [`${this.spreadsheet.element.id}_underline`, `${this.spreadsheet.element.id}_wrap`], false);
        // Set disable state to `Protect Sheet` toolbar item from `Data` by mentioning its index.
        this.spreadsheet.enableToolbarItems('Data', [0], false);
        // Adding the new `Custom Formulas` toolbar item under `Formulas` tab for adding custom formulas.
        this.spreadsheet.addToolbarItems('Formulas', [{ type: 'Separator' }, {
                text: 'Custom Formulas', tooltipText: 'Custom Formulas',
                // You can set click handler for each new custom toolbar item
                click: () => {
                    // You can add custom formulas here.
                }
            }]);
        // Adding new custom item `Import` after the existing `Open` item. By default, new item will add after the specified item.
        this.spreadsheet.addFileMenuItems([{ text: 'Import', iconCss: 'e-open e-icons' }], 'Open');
        // Adding new custom item `Export As` after the existing `Save As` item.
        // Set `insertAfter` optional argument as `false` for adding new item before the specified item.
        this.spreadsheet.addFileMenuItems([{
                text: 'Export As', iconCss: 'e-save e-icons', items: [{ text: 'XLSX', iconCss: 'e-xlsx e-icons' },
                    { text: 'XLS', iconCss: 'e-xls e-icons' }, { text: 'CSV', iconCss: 'e-csv e-icons' }]
            }], 'Save As', false);
    }
    ;
    fileMenuBeforeOpen() {
        // Because the file menu items are created dynamically, you need to perform the hide or show and enable/disable operations
        // under filemenu before open event.
        // Hiding the `Save As` and `Open` item.
        this.spreadsheet.hideFileMenuItems(['Save As', 'Open']);
        // Set disable state to `New` item. You can perform any file menu items customization by specifying the item id,
        // if it has more than one same item text. Set the last argument `isUniqueId` as true for using the item id.
        this.spreadsheet.enableFileMenuItems([`${this.spreadsheet.element.id}_New`], false, true);
    }
    fileMenuItemSelect(args) {
        // Custom file menu items select handler
        switch (args.item.text) {
            case 'Import':
                select(`#${this.spreadsheet.element.id}_fileUpload`, this.spreadsheet.element).click();
                break;
            case 'XLSX':
                this.spreadsheet.save({ saveType: 'Xlsx' });
                break;
            case 'XLS':
                this.spreadsheet.save({ saveType: 'Xls' });
                break;
            case 'CSV':
                this.spreadsheet.save({ saveType: 'Csv' });
                break;
        }
    }
    render() {
        return (<div>
        <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.created.bind(this)} fileMenuBeforeOpen={this.fileMenuBeforeOpen.bind(this)} fileMenuItemSelect={this.fileMenuItemSelect.bind(this)} showFormulaBar={false} showSheetTabs={false} allowInsert={false} allowDelete={false} allowMerge={false} openUrl="https://services.syncfusion.com/react/production/api/spreadsheet/open" saveUrl="https://services.syncfusion.com/react/production/api/spreadsheet/save">
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>
                   </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}