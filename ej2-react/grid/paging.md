---
layout: post
title: Paging in React Grid component | Syncfusion
description: Learn here all about Paging in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Paging 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Paging in React Grid component

Paging provides an option to display grid data in segmented pages, making it easier to navigate through large datasets. This feature is particularly useful when dealing with extensive data sets. 

To enable paging, you need to set the [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid/#allowpaging) property to **true**. This property determines whether paging is enabled or disabled for the grid. When paging is enabled, a pager component rendered at the bottom of the grid, allowing you to navigate through different pages of data.

To use paging, you need to inject the **Page** module into the grid. This service provides the necessary methods and events to handle paging functionality.

Paging options can be configured through the [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings) property. The `pageSettings` object allows you to control various aspects of paging, such as the page size, current page, and total number of records.

> You can achieve better performance by using grid paging to fetch only a pre-defined number of records from the data source.

## Customize the pager options 

Customizing the pager options in the Syncfusion Grid allows you to tailor the pagination control according to your specific requirements. You can customize the pager to display the number of pages using the `pageCount` property, change the current page using `currentPage` property, display the number of records in the grid using the `pageSize` property, and even adjust the page sizes in a dropdown using the `pageSizes` property. Additionally, you can include the current page as a query string in the URL for convenient navigation. 

### Change the page size 

The Syncfusion Grid allows you to control the number of records displayed per page, providing you with flexibility in managing your data. This feature is particularly useful when you want to adjust the amount of data visible to you at any given time. To achieve this, you can utilize the [pageSettings.pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesize) property. This property is used to specify the initial number of records to display on each page. The default value of `pageSize` property is **12**.

The following example demonstrates how to change the page size of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [pageSettings, setPageSettings] = useState();
  let textbox;
  const click = () => {
    const pageSize = { pageSize: textbox.value };
    setPageSettings(pageSize);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter page size:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [pageSettings, setPageSettings] = useState<PageSettingsModel>();
  let textbox: TextBoxComponent | null;
  const click = () => {
    const pageSize: PageSettingsModel = { pageSize: (textbox as TextBoxComponent).value };
    setPageSettings(pageSize);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter page size:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs2" %}

### Change the page count 

The Syncfusion Grid allows you to adjust the number of pages displayed in the pager container. This is useful when you want to manage the number of pages you see while navigating through extensive datasets. The default value of `pageCount` property is **8**.

To change the page count in the Syncfusion Grid, you can utilize the [pageSettings.pageCount](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagecount) property, which defines the number of pages displayed in the pager container.

The following example demonstrates how to change the page count of a Grid using an external button click based on **TextBox** input.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [pageSettings, setPageSettings] = useState();
  let textbox;
  const click = () => {
    const pageCount = { pageCount: textbox.value };
    setPageSettings(pageCount);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter page count:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [pageSettings, setPageSettings] = useState<PageSettingsModel>();
  let textbox: TextBoxComponent | null;
  const click = () => {
    const pageCount: PageSettingsModel = { pageCount: (textbox as TextBoxComponent).value };
    setPageSettings(pageCount);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter page count:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs1" %}

### Change the current page

The Syncfusion Grid allows you to change the currently displayed page, which can be particularly useful when you need to navigate through different pages of data either upon the initial rendering of the grid or update the displayed page based on interactions or specific conditions. The default value of `currentPage` property is **1**.

To change the current page in the Syncfusion Grid, you can utilize the [pageSettings.currentPage](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#currentpage) property, which defines the current page number of the pager.

The following example demonstrates how to dynamically change the current page using an external button click based on **TextBox** input:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [pageSettings, setPageSettings] = useState();
  let textbox;
  const click = () => {
    const currentPage = { currentPage: textbox.value };
    setPageSettings(currentPage);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter current page:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  const [pageSettings, setPageSettings] = useState<PageSettingsModel>();
  let textbox: TextBoxComponent | null;
  const click = () => {
    const currentPage: PageSettingsModel = { currentPage: (textbox as TextBoxComponent).value };
    setPageSettings(currentPage);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enter current page:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs2" %}

### Add current page in URL as a query string 

The Syncfusion Grid allows you to include the current page information as a query string in the URL. This feature is particularly useful for scenarios where you need to maintain and share the state of the grid's pagination.

To add the current page detail to the URL as a query string in the Syncfusion Grid, you can enable the [enableQueryString](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#enablequerystring) property. When this property is set to **true**, it will automatically pass the current page information as a query string parameter along with the URL when navigating to other pages within the grid. 

> By enabling the `enableQueryString` property, you can easily copy the URL of the current page and share it with others. When the shared URL is opened, it will load the grid with the exact page that was originally shared.

In the following example, the [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started) component is added to enable or disable the addition of the current page to the URL as a query string. When the switch is toggled, the [change](https://ej2.syncfusion.com/react/documentation/api/switch/#change) event is triggered and the `enableQueryString` property of the grid is updated accordingly.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid;
  const toggleQueryString = (args) => {
    grid.pageSettings.enableQueryString = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable Query String</label>
    <SwitchComponent change={toggleQueryString}></SwitchComponent>
    <GridComponent dataSource={data} height={265} ref={g => grid = g} allowPaging={true} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid: GridComponent | null;
  const toggleQueryString = (args: ChangeEventArgs) => {
    (grid as GridComponent).pageSettings.enableQueryString = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable Query String</label>
    <SwitchComponent change={toggleQueryString}></SwitchComponent>
    <GridComponent dataSource={data} height={265} ref={g => grid = g} allowPaging={true} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;

{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs3" %}

## Pager template

The pager template in Syncfusion Grid allows you to customize the appearance and behavior of the pager element, which is used for navigation through different pages of grid data. This feature is particularly useful when you want to use custom elements inside the pager instead of the default elements.

To use the pager template, you need to specify the [pagerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#template) property in your Syncfusion Grid configuration. The `pagerTemplate` property allows you to define a custom template for the pager. Within the template, you can access the [currentPage](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#currentpage), [pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesize), [pageCount](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagecount), **totalPage** and **totalRecordCount** values.

The following example demonstrates how to render a **NumericTextBox** component in the pager using the `pagerTemplate` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const change = (args) => {
        grid.pageSettings.currentPage = args.value;
    };
    const template = (pagerData) => {
        return (<div className="e-pagertemplate">
        <div className="col-lg-12 control-section">
            <div className="content-wrapper">
            <NumericTextBoxComponent min={1} max={3} value={pagerData.currentPage} format='###.##' change={change}></NumericTextBoxComponent>
          </div>
        </div>
        <div id="totalPages" className="e-pagertemplatemessage" style={{ marginTop: 8, marginLeft: 30, border: "none", display: "inline-block" }}>
          <span className="e-pagenomsg">
            {pagerData.currentPage} of {pagerData.totalPages} pages ({pagerData.totalRecordsCount} items)
          </span>
        </div>
      </div>);
    };
    return (<GridComponent dataSource={data} allowPaging={true} pageSettings={{ template: template, pageSize: 5 }} ref={g => grid = g}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page]}/>
        </GridComponent>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}


import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Grid, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids'
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const change = (args) => {
         grid.pageSettings.currentPage = args.value;
  }
  const template = (pagerData) => {
    return (
      <div className="e-pagertemplate">
        <div className="col-lg-12 control-section">
            <div className="content-wrapper">
            <NumericTextBoxComponent min={1} max={3} value={pagerData.currentPage} format='###.##' change={change}></NumericTextBoxComponent>
          </div>
        </div>
        <div
          id="totalPages"
          className="e-pagertemplatemessage" style={{ marginTop: 8, marginLeft: 30, border: "none", display: "inline-block"}}>
          <span className="e-pagenomsg">
            {pagerData.currentPage} of {pagerData.totalPages} pages ({pagerData.totalRecordsCount} items)
          </span>
        </div>
      </div>
    );
  }
    return (<GridComponent  dataSource={data} allowPaging={true} pageSettings={{ template: template, pageSize: 5 }} ref={g=> grid = g}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page]}/>
        </GridComponent>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs3" %}

## Pager with page size dropdown

The pager with a page size dropdown in Syncfusion Grid allows you to dynamically change the number of records displayed in the grid. This feature is useful when you want to easily customize the number of records to be shown per page.

To enable the page size Dropdown feature in the Syncfusion Grid, you need to set the [pageSettings.pageSizes](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesizes) property to **true** in the grid configuration. This property configuration triggers the rendering of a dropdown list within the pager, allowing you to select the desired page size. The selected page size determines the number of records displayed on each page of the grid.

The following example that demonstrates how to integrate the page size Dropdown feature by configuring the `pageSizes` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pager-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pager-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs4" %}

> If the pageSizes property is set to a boolean value like 'true' or 'false,' the page size dropdown defaults to an array of strings containing options such as ['All', '5', '10', '15', '20'].

### Customize page size dropdown 

The Syncfusion Grid allows you to customize the default values of the page size dropdown in the pager, allowing you to change the number of records displayed per page. To achieve this, you can define the [pageSizes](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings/#pagesizes) property as an array of string instead of boolean value.

The following example demonstrate how to customize the default values of the pager dropdown using the `pageSizes` property:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/paging-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/paging-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs4" %}

> The pageSizes property can be configured with either an array of strings or a boolean value.

## How to navigate to particular page 

Navigating to a particular page in the Syncfusion Grid is particularly useful when dealing with large datasets. It provides a quick and efficient way to jump to a specific page within the grid.

To achieve page navigation, you can use the [goToPage](https://ej2.syncfusion.com/react/documentation/api/grid#gotopage) method provided by Syncfusion Grid. This method allows you to programmatically navigate to a specific page within the grid.

The following example demonstrates how to dynamically navigate to a particular page using the `goToPage` method triggered by an external button click based on **TextBox** input:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { NumericTextBoxComponent, TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ButtonComponent, CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
import { FormsModule } from '@angular/forms';
function App() {
    let grid;
    let textbox;
    const click = () => {
        (grid.pagerModule).goToPage(textbox.value);
    }
    return (<div>
        <label style={{ padding: "30px 17px 0 0" }}>Select page index:</label>
        <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
        <ButtonComponent onClick={click}>Click button</ButtonComponent>
        <GridComponent dataSource={data} height={265} ref={g => grid = g} allowPaging={true} >
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid: GridComponent | null;
  let textbox: TextBoxComponent | null;
  const click = () => {
    (grid as GridComponent).pagerModule.goToPage((textbox as TextBoxComponent).value);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Select page index:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent onClick={click}>Click button</ButtonComponent>
    <GridComponent dataSource={data} height={265} ref={g => grid = g} allowPaging={true} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs5" %}

## How to get the pager element

You can get pager element in the Syncfusion Grid. This allows you to customize the pager's appearance or behavior to meet the requirements of your application.

[getPager](https://ej2.syncfusion.com/react/documentation/api/grid/#getpager)- This method allows you to obtain a reference to the pager element within the Syncfusion Grid. It returns an HTML element representing the pager.

```ts
  grid.getPager()
```

## Dynamically calculate page size based on element height

You have an option to dynamically calculate the page size of a grid by considering the height of its parent element. This functionality proves invaluable in ensuring that the grid's content remains within the available space, preventing the need for excessive scrolling. It primarily serves the purpose of automatically adjusting the `pageSize` when the height of the grid's parent element changes dynamically. Upon each alteration in the parent element's height, invoking this method will compute the grid's `pageSize` and present the current page records accordingly. This feature effectively addresses situations where a static `pageSize` value does not cater to the varying heights of different parent elements, preventing any unwanted empty spaces within the grid.

To achieve page size calculation based on an element's height in the Grid, you can utilize the [calculatePageSizeByParentHeight](https://ej2.syncfusion.com/react/documentation/api/grid/#calculatepagesizebyparentheight) method. This method calculates the page size based on the height of the parent element.

The following example demonstrates how to calculate the page size based on element height using the `calculatePageSizeByParentHeight` method triggered by a change event based on the **NumericTextBox** input:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';

function App() {
    let grid;
    const [pageSize, setPageSize] = useState()
    const calculatePageSize = ({ value }) => {
        const newValue = { pageSize: grid.calculatePageSizeByParentHeight(value.toString()) };
        setPageSize(newValue);
    }
    return (<div>
        <label style={{ padding: "30px 17px 0 0" }}>Select page size:</label>
        <NumericTextBoxComponent placeholder='select container height' format='####.##' min={150} step={50} width={200} change={calculatePageSize}></NumericTextBoxComponent>
        <GridComponent dataSource={data} ref={g => grid = g} allowPaging={true} pageSettings={pageSize}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import React, { useState } from 'react';
import { data } from './datasource';
import { NumericTextBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-inputs';

function App() {
  let grid: GridComponent | null;
  const [pageSize, setPageSize] = useState<PageSettingsModel>()
  const calculatePageSize = ({ value }: ChangeEventArgs) => {
    const newValue: PageSettingsModel = { pageSize: (grid as GridComponent).calculatePageSizeByParentHeight((value as number).toString()) };
    setPageSize(newValue);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Select page size:</label>
    <NumericTextBoxComponent placeholder='select container height' format='####.##' min={150} step={50} width={200} change={calculatePageSize}></NumericTextBoxComponent>
    <GridComponent dataSource={data} ref={g => grid = g} allowPaging={true} pageSettings={pageSize}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs6" %}

## Render pager at the top of the grid 

The Grid component provides built-in support for rendering a pager at the bottom of the grid by default. However, in certain scenarios, you might want to display the pager at the top of the grid. This can be achieved by utilizing the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#databound) event. This event is triggered when the Grid completes rendering its data. By handling this event, you can customize the rendering of the pager and move it to the top of the Grid.

Here's an example that demonstrates how to render the pager at the top of the grid using the `dataBound` event:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/pager-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/pager-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/pager-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/pager-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/pager-cs5" %}

> During the paging action, the pager component triggers the below three events.
> * The [created](https://ej2.syncfusion.com/react/documentation/api/pager/pagerModel/#created) event triggers when Pager is created.
> * The [click](https://ej2.syncfusion.com/react/documentation/api/pager/pagerModel/#click) event triggers when the numeric items in the pager is clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/react/documentation/api/pager/pagerModel/#dropdownchanged) event triggers when pageSize DropDownList value is selected.

## Pager events 

The Syncfusion Grid component triggers two pager events during paging actions:

[actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid/#actionbegin)-  This event triggered before any paging action (such as changing the page, changing the page size and etc) is initiated. You can use this event to customize or control the behavior of paging actions.

[actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid/#actioncomplete)- This event triggered after a pager action is completed. It provides information about the action, such as the new page number, page size, and the total number of records. You can use this event to perform actions or update the UI after the operation has been executed.

The following example that example demonstrates how to use these events to display notification messages to indicate the current and next page during paging actions in the Syncfusion React Grid:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/paging-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/paging-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/paging-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/paging-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/paging-cs7" %}

## See also

* [Group with Paging](./grouping/grouping#group-with-paging)
* [How to change loading indicator in React Grid](../data-binding/data-binding#loading-animation)