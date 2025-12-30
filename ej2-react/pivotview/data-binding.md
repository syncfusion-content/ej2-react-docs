---
layout: post
title: Data binding in React Pivot Table component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Pivot Table component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Pivot Table component

To get start quickly with Data Binding, you can check on this video:

{% youtube "https://www.youtube.com/watch?v=_sKndiVl5w0" %}

## JSON

The Pivot Table supports JSON data binding by setting the [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#type) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) to `JSON`. Since JSON is the default data type, you can bind JSON data without setting this property.

### Binding JSON data via local

You can bind local JSON data to the Pivot Table by assigning a local variable containing the JSON data to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs23/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs23/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs23/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs23" %}

You can also bind JSON data using the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) with `JsonAdaptor`. In this approach, assign the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) instance containing JSON data to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings). Using [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) is optional for local JSON data binding.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs24/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs24/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs24/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs24" %}

You can also load JSON data from a local *.json file using the file uploader option. After uploading the file, convert the resulting string to JSON data and assign it to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings). The following code example demonstrates this approach.

```javascript
import { IDataSet, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Uploader } from '@syncfusion/ej2-inputs';
import { DataSourceSettingsModel } from '@syncfusion/ej2-pivotview/src/model/datasourcesettings-model';

function App() {
  
  // Step 1: Initialize the file uploader
  let uploadObj: Uploader = new Uploader({
  });
  uploadObj.appendTo('#fileupload');

  let input = document.querySelector('input[type="file"]');
  // Step 2: Add the event listener that triggers when the *.JSON file is uploaded
  input.addEventListener('change', function (e: Event) {
    // Step 3: Initialize the file reader
    let reader: FileReader = new FileReader();
    reader.onload = function () {
      // Step 4: Get the string output and parse it as JSON
      let result: any = JSON.parse(reader.result as string);
      let dataSourceSettings: DataSourceSettingsModel = {
        // Step 5: Bind the JSON result as data source
        dataSource: result
        // Step 6: Provide the appropriate report configuration here
      };
      reader.readAsText((input as any).files[0]);
    };
  });
  let pivotObj: PivotViewComponent;
  return <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} dataSourceSettings={dataSourceSettings}></PivotViewComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

### Binding JSON data via remote

To bind remote JSON data to the Pivot Table, set the endpoint [`URL`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#url) in the [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) property. The [`URL`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#url) property accepts both direct downloadable JSON files (*.json) and web service URLs.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs25/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs25/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs25" %}

## CSV

To bind CSV data, set the [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#type) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) to `CSV`.

> The CSV format is more compact than JSON, using approximately half the size. This reduces bandwidth usage when transferring data to the browser.

### Binding CSV data via local

To bind local CSV data to the Pivot Table, convert the data into a string array and assign it directly to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs26/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs26/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs26" %}

You can also connect CSV data from a local *.csv file to the Pivot Table using the file uploader option. After uploading the file, convert the resulting string to a string array and assign it to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#datasource) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings). The following code example shows how to implement this:

```javascript
import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Uploader } from '@syncfusion/ej2-inputs';

function App() {
  let pivotObj: PivotViewComponent;
  let input: HTMLInputElement;
  let isInitial = true;

  function ondataBound(): void {
    if (isInitial) {
      // Step 1: Initialize the file uploader
      let uploadObj: Uploader = new Uploader();
      uploadObj.appendTo('#fileupload');
      input = document.querySelector('input[type="file"]') as HTMLInputElement;
      // Step 2: Add event listener for CSV file upload
      input.addEventListener('change', loadCSV, false);
      isInitial = false;
    }
  }

  function loadCSV() {
    // Step 3: Initialize the file reader
    const reader: FileReader = new FileReader();
    reader.onload = function () {
      const result: string[][] = [];
      // Step 4: Convert the string output to string array format
      let readerResult: string[] = (reader.result as string).split(/\r?\n|\r/);
      (result as string[][]).push(readerResult[0].split(',').map(function (e) { return e.replace(/ /g, '').replace(/^\"(.+)\"$/, "$1"); }));
      for (let i: number = 1; i < readerResult.length; i++) {
        if (readerResult[i as number] !== '') {
          (result as string[][]).push(readerResult[i as number].split(','));
        }
      }
      pivotObj.dataSourceSettings = {
        // Step 5: Bind the string array as data source
        dataSource: result,
        type: 'CSV',
        // Step 6: Configure the appropriate report settings here
      };
    };
    reader.readAsText(((input as HTMLInputElement).files as FileList)[0]);
    input.value = '';
    (document.querySelector('.e-upload-files') as HTMLElement).remove();
  }

  return (
    <div className='control-pane'>
      <input type="file" id="fileupload" />
      <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} showFieldList={true} dataBound={ondataBound.bind(this)}>
        <Inject services={[FieldList]} />
      </PivotViewComponent>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

### Binding CSV data via remote

Remote CSV data binding allows you to load data directly from external sources without storing large datasets locally, which improves application performance and reduces memory usage.

To bind remote CSV data, set the [`URL`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#url) property under [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) to point to your data source endpoint. The [`URL`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#url) property accepts both direct downloadable CSV files (*.csv) and web service URLs that return CSV data.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs27/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs27/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs27" %}

## Remote Data Binding

Remote data binding allows you to connect your Pivot Table component to data sources that are hosted on remote servers, enabling you to work with data from web services, databases, and other external sources.

To bind remote data, specify the endpoint `url` within [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) along with the appropriate [`adaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors). By default, `DataManager` uses [`ODataAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors#odata-adaptor) for remote data binding.

### Binding with OData services

OData (Open Data Protocol) is a web-based protocol that provides a standard way to create and consume data APIs. You can easily connect your Pivot Table to OData services using the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager), which handles the communication and data retrieval automatically.

The following example demonstrates how to bind the Pivot Table to an OData service:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs28/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs28/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs28" %}

### Binding with OData V4 services

OData V4 services provide enhanced query capabilities and improved performance for data retrieval operations. The OData V4 is an improved version of OData protocols, and the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) can retrieve and consume OData V4 services. For more details on OData V4 services, refer to the [OData documentation](https://docs.oasis-open.org/odata/odata/v4.0/errata03/os/complete/part1-protocol/odata-v4.0-errata03-os-part1-protocol-complete.html#_Toc453752197). To bind OData V4 service, use the [`ODataV4Adaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors#odatav4-adaptor).

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs29/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs29/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs29" %}

### Web API

Web API binding allows you to connect the Pivot Table directly to RESTful web services for dynamic data loading. Users can use [`WebApiAdaptor`](https://ej2.syncfusion.com/react/documentation/data/adaptors#web-api-adaptor) to bind the Pivot Table with Web API created using OData endpoint.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs30/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs30/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs30" %}

### Querying in Data Manager

By default, the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) fetches all records from the data source you have configured. However, you can customize this behavior by applying your own query using the `defaultQuery` property in the Data Manager instance.

The query can include operations such as filtering records based on specific conditions, sorting data in ascending or descending order, or limiting the number of records through paging. When you define these queries, the [`DataManager`](https://ej2.syncfusion.com/documentation/api/data/datamanager) processes them at the data source level, ensuring that only the required data is retrieved and displayed in the Pivot Table.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs31/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs31/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs31" %}

## Mapping

Field mapping allows you to customize how fields appear and behave in the Pivot Table without changing the original data source. You can define field properties such as display names, data types, aggregation methods, and visibility settings using the [`fieldMapping`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#fieldmapping) property within [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings).

The following options are available for field mapping:

**Field identification and display**

* [`name`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#name) - Specifies the field name from your data source.
* [`caption`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#caption) - Sets a user-friendly display name for the field. This display name will appear in the Pivot Table UI instead of the original field name.
* [`dataType`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#datatype) - Specifies the field data type such as 'string', 'number', 'datetime', 'date', or 'boolean'.
* [`groupName`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#groupname) - Groups related fields under a folder name in the field list UI for better organization.

**Aggregation and calculation**

* [`type`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#type) - Defines how values are aggregated in the Pivot Table, such as sum, product, count, average, minimum, or maximum. The default value is **sum**. This option applies only to relational data sources.
* [`baseField`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#basefield) - Specifies a comparison field for aggregate types like "DifferenceFrom", "PercentageOfDifferenceFrom", or "PercentageOfParentTotal".
* [`baseItem`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#baseitem) - Specifies a comparison member within a field for aggregate types like "DifferenceFrom", "PercentageOfDifferenceFrom", or "PercentageOfParentTotal".

**Field positioning and behavior**

* [`axis`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#axis) - Determines where the field appears in the Pivot Table (row, column, value, or filter axis).
* [`showNoDataItems`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#shownodataitems) - Shows all field members in the Pivot Table, even when no data exists at row and column intersections. The default value is **false**. This option applies only to relational data sources.
* [`expandAll`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#expandall) - Expands or collapses all headers for the field in row and column axes. The default value is **false**.
* [`showSubTotals`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#showsubtotals) - Controls the visibility of subtotals for the field in row and column axes. The default value is **true**.

**OLAP-specific options**

* [`isNamedSet`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#isnamedset) - It is to set whether the specified field is named set or not. In general, the named set is a set of dimension members or a set expression (MDX query) to be created as a dimension in the SSAS OLAP cube itself. The default value is **false** and this option is applicable only for OLAP data source.
* [`isCalculatedField`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#iscalculatedfield) - It is to set whether the specified field is a calculated field or not. In general, a calculated field is created from the bound data source or using simple formula with basic arithmetic operators in the Pivot Table. The default value is **false** and this option is applicable only for OLAP data source.

**UI interaction controls**

* [`showFilterIcon`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#showfiltericon) - Controls the visibility of the filter icon on field buttons in the grouping bar and field list. Users can filter field members at runtime using this icon. The default value is **true**.
* [`showSortIcon`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#showsorticon) - Controls the visibility of the sort icon on field buttons in the grouping bar and field list. Users can sort field members in ascending or descending order at runtime. The default value is **true**.
* [`showRemoveIcon`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#showremoveicon) - Controls the visibility of the remove icon on field buttons in the grouping bar and field list. Users can remove fields from the report at runtime. The default value is **true**.
* [`showValueTypeIcon`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#showvaluetypeicon) - Controls the visibility of the value type icon on field buttons in the grouping bar and field list. Users can change the aggregation type for value fields at runtime. The default value is **true**.
* [`showEditIcon`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#showediticon) - Controls the visibility of the edit icon on field buttons in the grouping bar and field list. Users can modify the caption, formula, and format of calculated fields at runtime. The default value is **true**.
* [`allowDragAndDrop`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#allowdraganddrop) - Controls whether field buttons can be dragged in the grouping bar and field list UI. Setting this to **false** prevents users from modifying the current report structure. The default value is **true**.

Field mapping is particularly useful for configuring fields that are not part of your initial pivot report. When a field appears in both the initial report and field mapping, the initial report settings take priority.

> This option applies only to relational data sources.

The following code sample demonstrates how to configure the visibility of field button icons:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs32/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs32/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs32/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs32/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs32" %}

## Values in row axis

You can display value fields in the row axis of the Pivot Table to make your data analysis clear and more accessible. By default, value fields appear in the column axis. To display these fields in the row axis, set the [`valueAxis`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#valueaxis) property to **row**. The default value is **column**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs33/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs33/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs33/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs33/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs33" %}

## Values at different positions

Positioning value fields at specific locations helps create more meaningful data layouts and improves the readability of your Pivot Table. By default, value fields appear at the end of the row or column axis. To place value fields at different positions, use the [`valueIndex`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#valueindex) property and set it to the desired index position. The default value is **-1**, which places fields at the last position. The [`valueIndex`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#valueindex) property works together with the [`valueAxis`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettings#valueaxis) property.

> This option is available only for relational data sources. To enable users to rearrange value fields through the interface, set the [`showValuesButton`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#showvaluesbutton) property to **true** in both the grouping bar and field list UI.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs34/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs34/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs34/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs34" %}

## Show 'no data' items

Display all field items in your Pivot Table, even when they lack data in certain row and column combinations, for a complete view of your data structure. By default, the Pivot Table displays field items only when they contain data in their respective row or column combinations. However, you can show all items, including those without data, by setting the [`showNoDataItems`](https://ej2.syncfusion.com/react/documentation/api/pivotview/fieldoptionsmodel#shownodataitems) property to **true** for the desired fields.

In the following example, the "Country" and "State" field rows are displayed even when they don't have data in all combinations with the "Date" column field.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs35/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs35" %}

## Show value headers always

Ensure value headers remain visible in your Pivot Table at all times, providing consistent column identification even with single value scenarios. The Pivot Table typically hides value headers when displaying only one value. To maintain consistent header visibility regardless of the number of values, set the [`alwaysShowValueHeader`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#alwaysshowvalueheader) property to **true**.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs36/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs36/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs36/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs36/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs36" %}

## Customize empty value cells

Show custom text in cells that contain no data to make your Pivot Table more informative and user-friendly. By default, empty value cells appear blank in the Pivot Table. However, you can display meaningful text in these cells using the [`emptyCellsTextContent`](https://ej2.syncfusion.com/react/documentation/api/pivotview/datasourcesettingsmodel#emptycellstextcontent) property within the [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings). Since this property accepts string values, you can fill empty cells with any text such as "0", "-", "*", "(blank)", or other meaningful indicators. This setting applies to all value fields and can be configured in your code behind.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs37/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs37/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs37/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs37/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs37" %}

## Event

The Pivot Table component provides essential events that help you monitor and control the data binding process. These events give you access to the underlying data and allow you to customize how the pivot engine handles your data.

### Load

The [`load`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#load) event fires before the Pivot Table begins rendering and provides access to key parameters that you can use to customize your data source configuration, apply filters, or modify field settings before the table displays.

**Event Parameters**

The load event provides the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/loadeventargs#datasourcesettings): Defines the current report configuration including data source, rows, columns, values, and filters.
- [`defaultFieldListOrder`](https://ej2.syncfusion.com/react/documentation/api/pivotview/loadeventargs#defaultfieldlistorder): Defines the default field list order that determines how fields appear in the field list panel.
- [`fieldsType`](https://ej2.syncfusion.com/react/documentation/api/pivotview/loadeventargs#fieldstype): Defines the type of specific fields, such as whether they should be treated as numbers, dates, or text.
- [`pivotview`](https://ej2.syncfusion.com/react/documentation/api/pivotview/loadeventargs#pivotview): Defines the Pivot Table instance object that provides access to all component methods and properties.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs38/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs38/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs38/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs38/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs38" %}

### EnginePopulated

The [`enginePopulated`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#enginepopulated) event helps users monitor when the Pivot Table engine has finished processing the data. This allows you to access important details about the table, such as report settings, field list, and processed values, and perform further actions if needed.

When this event triggers, it provides the following parameters:

- [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/enginepopulatedeventargs#datasourcesettings): Contains information about the structure and options applied to the Pivot Table’s data.
- [`pivotFieldList`](https://ej2.syncfusion.com/react/documentation/api/pivotview/enginepopulatedeventargs#pivotfieldlist): Lists all available fields in the Pivot Table, including those used in rows, columns, values, and filters.
- [`pivotValues`](https://ej2.syncfusion.com/react/documentation/api/pivotview/enginepopulatedeventargs#pivotvalues): Presents the aggregated values and results displayed in the table.

Below is an example showing how the [`enginePopulated`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#enginepopulated) event can be used in a React Pivot Table. The code demonstrates how to set up the event and access its details for custom logic.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs39/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs39/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs39/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs39/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs39" %}

### EnginePopulating

The [`enginePopulating`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#enginepopulating) event lets you update the [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#datasourcesettings) before the Pivot Table's engine processes the data. This allows you to modify how your data appears by changing field captions, formatting options, or report configurations right before the table renders. For example, you can adjust column captions or show a message for empty cells. This helps users control how the data will appear in the Pivot Table in a straightforward way.

The [`enginePopulating`](https://ej2.syncfusion.com/react/documentation/api/pivotview/index-default#enginepopulating) event provides an argument that contains the [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/enginepopulatingeventargs#datasourcesettings) property. You can directly edit this property to update fields, labels, or other [`dataSourceSettings`](https://ej2.syncfusion.com/react/documentation/api/pivotview/enginepopulatingeventargs#datasourcesettings) options, ensuring your Pivot Table displays data exactly how you need it. Below is an example showing how to use the `enginePopulating` event in a React Pivot Table:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/pivot-table/default-cs40/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/pivot-table/default-cs40/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/pivot-table/default-cs40/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/pivot-table/default-cs40/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/pivot-table/default-cs40" %}

## See Also

* [Aggregation](./aggregation)
* [Show/Hide Totals](https://ej2.syncfusion.com/react/documentation/pivotview/show-hide-totals)
* [Customize number, date, and time values](./how-to/customize-number-date-and-time-values)
* [Server Side Engine (Optional)](./server-side-pivot-engine)
* [How to customize null values in Pivot Table?](https://support.syncfusion.com/kb/article/14432/how-to-customize-null-values-in-pivot-table)
