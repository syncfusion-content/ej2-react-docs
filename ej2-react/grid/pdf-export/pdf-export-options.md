---
layout: post
title: PDF export options in React Grid component | Syncfusion
description: Learn here all about PDF export options in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Pdf export options 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# PDF export options in React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the ability to customize PDF export options. This flexibility enables greater control over the exported content and layout to meet specific requirements.

The PDF export action can be customized using the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property. The `pdfExportProperties` property enables exporting the current page records, selected records, or filtered records. Additionally, page alignments can be customized using the `pdfExportProperties` property.

## Export current page records

Exporting the current page in Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid to a PDF document provides the ability to export the currently displayed page records. This feature allows for generating PDF documents that specifically include the content from the current page of the grid.

To export the current page of the grid to a PDF document, set the [exportType](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#exporttype) property to `CurrentPage`.

The following example demonstrates exporting current page to a PDF document when a toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/App.jsx  %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs9" %}

## Export selected records

Exporting only the selected records from the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables generating PDF documents that include only the desired data. This feature provides the flexibility to export specific records that are relevant to specific needs, enabling more focused and targeted PDF exports.

To export only the selected records, utilize the [exportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#datasource) property in the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event.

To export the selected records from the grid to a PDF file, follow these steps:

1. Handle the `toolbarClick` event of the Grid.

2. Retrieve the selected records using the [getSelectedRecords](https://ej2.syncfusion.com/react/documentation/api/grid#getselectedrecords) method.

3. Assign the selected data to the `exportProperties.dataSource `property.

4. Trigger the export operation using the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexport) method.

The following example demonstrates exporting the selected records to a PDF document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/export-filtered-data-cs2" %}

## Export filtered records

Exporting only the filtered records from the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables generating PDF documents that include only the data matching applied filters. This feature is useful for exporting a subset of data based on specific criteria.

This can be achieved by defining the filtered data in the [exportProperties.dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/excelExportProperties#datasource) property before initiating the export.

To export only the filtered data from the grid to a PDF file, follow these steps:

1. Apply the desired filter to the grid data.

2. Get the filtered data using the [getFilteredRecords](https://ej2.syncfusion.com/documentation/api/grid#getfilteredrecords) method.

3. Assign the filtered data to the `exportProperties.dataSource` property.

4. Trigger the export operation using the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexport) method.

The following example demonstrates exporting the filtered records to a PDF document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-filtered-data-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/export-filtered-data-cs3" %}

## Export with hidden columns

Exporting hidden columns in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid enables including hidden columns in the exported PDF document. This feature is useful when columns are hidden in the UI but still need to be included in the exported document.

To export hidden columns of the grid to a PDF file, set the [includeHiddenColumn](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#includehiddencolumn) property to `true` in the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property.

The following example demonstrates exporting hidden columns to a PDF file. In this example, the "ShipCity" column, which is not visible in the UI, is exported to the PDF document. The grid can be exported by changing the `pdfExportProperties.includeHiddenColumn` property based on the switch toggle using the [checked](https://ej2.syncfusion.com/react/documentation/api/switch#checked) property of the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let switchData;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'grid_pdfexport') {
      const exportProperties = {
        includeHiddenColumn: switchData.checked
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Enable or disable includeHiddenColumn property </label>
    <SwitchComponent ref={s => switchData = s}></SwitchComponent>
    <GridComponent id='grid' dataSource={data} allowPaging={true} allowPdfExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='130' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='120' visible={false} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, PdfExport]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, PdfExportProperties } from '@syncfusion/ej2-react-grids';
import { Page, PdfExport, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let switchData: SwitchComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') {
      const exportProperties: PdfExportProperties = {
        includeHiddenColumn: (switchData as SwitchComponent).checked
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (<div>
    <label style={{ padding: "10px 10px" }}>Enable or disable includeHiddenColumn property </label>
    <SwitchComponent ref={s => switchData = s}></SwitchComponent>
    <GridComponent id='Grid' dataSource={data} allowPaging={true} allowPdfExport={true} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='120' />
        <ColumnDirective field='ShipName' headerText='Ship Name' width='130' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='120' visible={false} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, PdfExport]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs10/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs10/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs10" %}

## Show or hide columns while exporting

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the functionality to show or hide columns dynamically during the export process. This feature enables selective display or hiding of specific columns based on requirements.

To show or hide columns based on user interaction during the export process, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event of the Grid component.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/grid/column#visible) property of the column to `true` or `false`.

3. Export the grid to PDF.

4. Handle the [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexportcomplete) event to restore the column visibility to its original state.

In the following example, the "CustomerID" is initially a hidden column in the grid. However, during the export process, the "CustomerID" column is made visible, while the "ShipCity" column is hidden.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs11/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs11" %}

## Show or hide columns while exporting with stacked header

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the ability to control the visibility of columns during export operations. This feature is particularly useful when customizing the data presented in exported files while using stacked headers.

To implement the show or hide columns feature during PDF export in the Grid, follow these steps:

1. Handle the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/grid#toolbarclick) event of the Grid.

2. Update the visibility of the desired columns by setting the [visible](https://ej2.syncfusion.com/react/documentation/api/grid/column#visible) property of the column to `true` or `false`.

3. Export the Grid to PDF document using [pdfExport](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexport) method.

4. Handle the [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexportcomplete) event to restore the column visibility to its original state.

In the following example, the "ShipName" is initially a hidden column in the Grid. However, during the PDF export process, the "ShipName" column is made visible, while the "OrderDate" column is hidden:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-show-hide/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-show-hide/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-show-hide/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-show-hide/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/pdf-export-show-hide" %}

## Change page orientation

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the ability to change the page orientation of the exported PDF document from the default portrait mode to landscape mode. This feature provides the flexibility to adjust the layout and presentation of the exported PDF according to specific needs.

To change the page orientation to landscape for the exported document, set the [pageOrientation](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#pageorientation) property of the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property. 

The supported `pageOrientation` options are:

1. `Landscape`: Exports the grid with a landscape PDF page orientation.

2. `Portrait`: Exports the grid with a portrait PDF page orientation.

The following example demonstrates exporting the grid into PDF document by setting the `pdfExportProperties.pageOrientation` property using the [value](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#value) property of the `DropDownList` component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    let dropDown;
    const toolbar = ['PdfExport'];
    const ddlData = [
        { text: 'Portrait', value: 'Portrait' },
        { text: 'Landscape', value: 'Landscape' },
    ];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            const exportProperties = {
                pageOrientation: dropDown.value
            };
            grid.pdfExport(exportProperties);
        }
    }
    return (
        <div>
            <label style={{ padding: "10px 10px 26px 0" }}> Change the page orientation property: </label>
            <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
            <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
                toolbarClick={toolbarClick} ref={g => grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, PdfExport]} />
            </GridComponent>
        </div>
    );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const ddlData: { [key: string]: Object; }[] = [
    { text: 'Portrait', value: 'Portrait' },
    { text: 'Landscape', value: 'Landscape' },
  ];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties: PdfExportProperties = {
        pageOrientation: (dropDown as DropDownListComponent).value
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the page orientation property: </label>
      <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs12/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs12/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs12" %}

## Change page size

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the ability to customize the page size of the exported PDF document according to requirements. This feature provides the flexibility to adjust the layout and dimensions of the exported PDF to fit different paper sizes or printing needs. 

To customize the page size for the exported document, set the [pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#pagesize) property of the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property to the desired page size. 

Supported `pdfPageSize` are:
* Letter
* Note
* Legal
* A0
* A1
* A2
* A3
* A4
* A5
* A6
* A7
* A8
* A9
* B0
* B1
* B2
* B3
* B4
* B5
* Archa
* Archb
* Archc
* Archd
* Arche
* Flsa
* HalfLetter
* Letter11x17
* Ledger

The following example demonstrates exporting the grid into PDF document by setting the `pdfExportProperties.pageSize` property by using [value](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#value) property of the `DropDownList` component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let dropDown;
  const toolbar = ['PdfExport'];
  const ddlData = [
    { text: 'Letter', value: 'Letter' },
    { text: 'Note', value: 'Note' },
    { text: 'Legal', value: 'Legal' },
    { text: 'A0', value: 'A0' },
    { text: 'A1', value: 'A1' },
    { text: 'A2', value: 'A2' },
    { text: 'A3', value: 'A3' },
    { text: 'A4', value: 'A4' },
    { text: 'A5', value: 'A5' },
    { text: 'A6', value: 'A6' },
    { text: 'A7', value: 'A7' },
    { text: 'A8', value: 'A8' },
    { text: 'B0', value: 'B0' },
    { text: 'B1', value: 'B1' },
    { text: 'B2', value: 'B2' },
    { text: 'B3', value: 'B3' },
    { text: 'B4', value: 'B4' },
    { text: 'B5', value: 'B5' },
    { text: 'Archa', value: 'Archa' },
    { text: 'Archb', value: 'Archb' },
    { text: 'Archc', value: 'Archc' },
    { text: 'Archd', value: 'Archd' },
    { text: 'Arche', value: 'Arche' },
    { text: 'Flsa', value: 'Flsa' },
    { text: 'HalfLetter', value: 'HalfLetter' },
    { text: 'Letter11x17', value: 'Letter11x17' },
    { text: 'Ledger', value: 'Ledger' },
  ];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties = {
        pageSize: dropDown.value
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the page size property: </label>
      <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let dropDown: DropDownListComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const ddlData: { [key: string]: Object; }[] = [
    { text: 'Letter', value: 'Letter' },
    { text: 'Note', value: 'Note' },
    { text: 'Legal', value: 'Legal' },
    { text: 'A0', value: 'A0' },
    { text: 'A1', value: 'A1' },
    { text: 'A2', value: 'A2' },
    { text: 'A3', value: 'A3' },
    { text: 'A4', value: 'A4' },
    { text: 'A5', value: 'A5' },
    { text: 'A6', value: 'A6' },
    { text: 'A7', value: 'A7' },
    { text: 'A8', value: 'A8' },
    { text: 'B0', value: 'B0' },
    { text: 'B1', value: 'B1' },
    { text: 'B2', value: 'B2' },
    { text: 'B3', value: 'B3' },
    { text: 'B4', value: 'B4' },
    { text: 'B5', value: 'B5' },
    { text: 'Archa', value: 'Archa' },
    { text: 'Archb', value: 'Archb' },
    { text: 'Archc', value: 'Archc' },
    { text: 'Archd', value: 'Archd' },
    { text: 'Arche', value: 'Arche' },
    { text: 'Flsa', value: 'Flsa' },
    { text: 'HalfLetter', value: 'HalfLetter' },
    { text: 'Letter11x17', value: 'Letter11x17' },
    { text: 'Ledger', value: 'Ledger' },
  ];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties: PdfExportProperties = {
        pageSize: (dropDown as DropDownListComponent).value
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}> Change the page size property: </label>
      <DropDownListComponent ref={d => dropDown = d} index={0} width={200} dataSource={ddlData}></DropDownListComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs13/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs13/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs13" %}

## Define file name

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the ability to specify a custom file name for the exported PDF document. This feature enables providing a meaningful and descriptive name for the exported file, making it easier to identify and manage the exported data.

To assign a custom file name for the exported document, set the [fileName](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#filename) property of the [pdfExportProperties](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties) property to the desired file name.

The following example demonstrates defining a file name using `pdfExportProperties.fileName` property when exporting to PDF, based on the entered value as the file name. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';

function App() {
    let grid;
    let textBox;
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
            if (textBox.value) {
                const exportProperties = {
                    fileName: textBox.value + '.pdf'
                };
                grid.pdfExport(exportProperties);
            } else {
                const exportProperties = {
                    fileName: 'new.pdf'
                };
                grid.pdfExport(exportProperties);
            }

        }
    }
    return (
        <div>
            <label style={{ padding: "10px 10px 26px 0" }}>Enter file name: </label>
            <TextBoxComponent ref={t => textBox = t} placeholder="Enter file name" width="120"></TextBoxComponent>
            <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
                toolbarClick={toolbarClick} ref={g => grid = g}>
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
                    <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                    <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
                </ColumnsDirective>
                <Inject services={[Toolbar, PdfExport]} />
            </GridComponent>
        </div>
    );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBox: TextBoxComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      if ((textBox as TextBoxComponent).value) {
        const exportProperties: PdfExportProperties = {
          fileName: (textBox as TextBoxComponent).value + '.pdf'
        };
        grid.pdfExport(exportProperties);
      } else {
        const exportProperties: PdfExportProperties = {
          fileName: 'new.pdf'
        };
        grid.pdfExport(exportProperties);
      }

    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}>Enter file name: </label>
      <TextBoxComponent ref={t => textBox = t} placeholder="Enter file name" width="120"></TextBoxComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs14/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs14/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs14" %}

## Enabling horizontal overflow

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the ability to display all defined grid columns on a single page even when the number of columns exceeds the maximum limits for columns in the exported PDF document. This ensures that the exported PDF maintains its readability and comprehensiveness.

This can be achieved by utilizing the [pdfExportProperties.allowHorizontalOverflow](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#allowhorizontaloverflow) property of the grid.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component is added to enable and disable the `pdfExportProperties.allowHorizontalOverflow` property. Based on the switch toggle, the `pdfExportProperties.allowHorizontalOverflow` property is updated using the [checked](https://ej2.syncfusion.com/react/documentation/api/switch#checked) property, and the export action is performed accordingly when the toolbar is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid;
  let switchData;
  const toolbar = ['PdfExport'];
  const toolbarClick = (args) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties = {
        allowHorizontalOverflow: switchData.value
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}>Enable or disable Horizontal Overflow property </label>
      <SwitchComponent ref={s => switchData = s}></SwitchComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='130' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='90' />
          <ColumnDirective field='ShipPostalCode' headerText='Ship PostalCode' width='90' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, PdfExportProperties, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: GridComponent | null;
  let switchData: SwitchComponent | null;
  const toolbar: ToolbarItems[] = ['PdfExport'];
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'Grid_pdfexport') { //'Grid_pdfexport' -> Grid component id + _ + toolbar item name
      const exportProperties: PdfExportProperties = {
        allowHorizontalOverflow: (switchData as SwitchComponent).value
      };
      grid.pdfExport(exportProperties);
    }
  }
  return (
    <div>
      <label style={{ padding: "10px 10px 26px 0" }}>Enable or disable Horizontal Overflow property </label>
      <SwitchComponent ref={s => switchData = s}></SwitchComponent>
      <GridComponent id='Grid' dataSource={data} toolbar={toolbar} allowPdfExport={true}
        toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
          <ColumnDirective field='ShipName' headerText='Ship Name' width='120' />
          <ColumnDirective field='ShipAddress' headerText='Ship Address' width='130' />
          <ColumnDirective field='ShipRegion' headerText='Ship Region' width='90' />
          <ColumnDirective field='ShipPostalCode' headerText='Ship PostalCode' width='90' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]} />
      </GridComponent>
    </div>
  );
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs25/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs25/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs25" %}

## Customizing columns on export

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the ability to customize the appearance of grid columns in exported PDF documents. This feature enables tailoring specific column attributes such as field, header text, and text alignment, ensuring that exported PDFs align perfectly with design and reporting requirements.

To customize the grid columns, follow these steps:

1. Access the [pdfExportProperties.column](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#columns) of the Grid component.

2. Set the `column` object with attributes such as `field`, `headerText`, and `textAlign` to define the desired format.

3. Trigger the PDF export operation to apply the customized column settings.

The following example demonstrates customizing the grid columns when exporting a document. In this scenario, the attributes for different columns have been customized: "OrderID" with `textAlign` set to `Right`, "CustomerID" with `headerText` as "Customer Name", and "Freight" with `textAlign` set to `Center`, which is not rendered in the grid columns.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs19/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs19/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs19/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs19/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs19" %}

## Font and color customization

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component provides the ability to customize the font in the exported PDF document. This feature enables controlling the appearance and styling of the text in the exported file, ensuring consistency with the application's design.

### Default fonts

By default, the Grid uses the `Helvetica` font in the exported document. However, the default font can be changed by utilizing the [pdfExportProperties.theme](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#theme) property. The available default fonts are:

* `Helvetica`
* `TimesRoman`
* `Courier`
* `Symbol`
* `ZapfDingbats`

To change the default font, follow these steps:

1. Access the `pdfExportProperties` of the Grid component.

2. Set the `theme` property to the desired default font.

3. Trigger the PDF export operation.

The following example demonstrates, changing the default font when exporting a document.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs8" %}

### Add custom font

In addition to changing the default font, the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the ability to use a custom font for the Grid header, content, and caption cells in the exported document. This can be achieved by utilizing the [pdfExportProperties.theme](https://ej2.syncfusion.com/react/documentation/api/grid/pdfExportProperties#theme) property.

When using a custom font, it is important to provide the font in a format that can be easily embedded in the exported document. This is typically done by encoding the font file into a base64 string. This base64 encoded font data can then be used within the export settings to ensure the custom font is applied to the exported PDF.

The following example demonstrates the usage of the custom "Algeria" font for exporting the grid. The "base64AlgeriaFont" variable contains the base64 encoded string representing the "Algeria" font file. This encoded font data is used in the PDF export properties to specify the custom font.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="font.jsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/font.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="font.tsx" %}
{% include code-snippet/grid/pdf-export-cs15/app/font.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs15" %}

> `PdfTrueTypeFont` accepts base64 format of the custom font.

## Conditional cell customization

When exporting data from the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid, there is an option to conditionally format the cells in the exported PDF document. This enables customizing the appearance of specific cells based on their values or other criteria.

To implement conditional cell formatting, utilize the [pdfQueryCellInfo](https://ej2.syncfusion.com/react/documentation/api/grid#pdfquerycellinfo) event of the Grid. Within this event, the cell object can be accessed using the `args.cell` property and its properties, such as the background color, can be modified based on desired conditions.

The following example demonstrates customizing the background color of the "Freight" column in the exported PDF document using the "args.cell" and "backgroundColor" properties of the `pdfQueryCellInfo` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pdf-export-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pdf-export-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pdf-export-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pdf-export-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pdf-export-cs7" %}

## Export grid as blob

The Grid offers an option to export the data as a Blob instead of downloading it as a file in the browser. To export the grid as a Blob, set the `isBlob` parameter to `true` in the [pdfExport](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexport) method. The grid returns the promise of a blob in the [pdfExportComplete](https://ej2.syncfusion.com/react/documentation/api/grid#pdfexportcomplete) event.

The following example demonstrates obtaining the blob data of the exported grid by executing the promise in the `pdfExportComplete` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/export-grid-as-blob-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/export-grid-as-blob-cs1" %}