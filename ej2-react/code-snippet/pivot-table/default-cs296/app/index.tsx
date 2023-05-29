{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    PivotViewComponent, IDataOptions, Inject, Toolbar, ToolbarArgs
} from '@syncfusion/ej2-react-pivotview';
import { pivotData } from './datasource';
function App() {
  let dataSourceSettings: IDataOptions = {
    columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
    dataSource: pivotData as IDataSet[],
    filters: [],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }]
  };
  let pivotObj: PivotViewComponent;
  let toolbarOptions: any = ['Expand/Collapse'];

   function beforeToolbarRender(args: ToolbarArgs): void {
        args.customToolbar.splice(12, 0, {
            prefixIcon: 'e-tool-expand e-icons', tooltipText: 'Expand/Collapse',
            click: toolbarClicked.bind(this),
        });
    }
    function toolbarClicked(args: any): void {
        pivotObj.dataSourceSettings.expandAll = !pivotObj.dataSourceSettings.expandAll;
    }
  
    return (<PivotViewComponent id='PivotView' ref={d => pivotObj = d} dataSourceSettings={dataSourceSettings} width={'100%'} height={350} gridSettings={{ columnWidth: 140 }} showToolbar={true} displayOption={{ view: 'Both' }} toolbar={toolbarOptions} toolbarRender={beforeToolbarRender.bind(this)}><Inject services={[Toolbar]} /></PivotViewComponent>);
};
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}