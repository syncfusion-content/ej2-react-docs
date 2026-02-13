---
layout: post
title: React Grid - Paging | Syncfusion
description: Enable paging in Syncfusion React Grid (EJ2) with customizable page size, dropdown, pager template, query string support, navigation, and events.
control: Paging 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Paging in React Grid Component

Paging allows the React Grid to display data in segmented pages instead of loading the entire dataset at once. This greatly improves initial load performance and overall responsiveness especially with large datasets by rendering only the records of the current page.

The paging feature is enabled by importing the `Page` module from `@syncfusion/ej2-react-grids` and injecting it into the grid.

```js
import { GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';

<GridComponent>
  <Inject services={[Page]} />
</GridComponent>
```

## Enable paging

Enable paging by setting the [allowPaging](https://ej2.syncfusion.com/react/documentation/api/grid#allowpaging) property to `true`. This automatically renders a pager at the bottom of the grid for easy navigation between pages.

Use the [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid#pageSettings) property to customize paging options such as page size, current page, and total record count.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/enable-page/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/enable-page/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/enable-page/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/enable-page/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/enable-page" %}

> Paging improves performance by allowing the grid to fetch and display only a predefined number of records from the data source.

## Customize pager options

Customize the pager options in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid using the [pageSettings](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings) object:

- `pageCount`: Number of pages to display in the pager.
- `currentPage`: Denotes the active page.
- `pageSize`: Number of rows displayed per page.
- `pageSizes`:  Displays a `DropDownList` in the pager to select desired page size.
- `enableQueryString`: Include the current page in the URL as a query string parameter for easier navigation and bookmarking.

### Change page size 

The Grid supports adjusting the number of records shown per page for flexible data presentation. The [pageSettings.pageSize](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#pagesize) property defines the initial number of records shown, replacing the default value of "12".

The following example demonstrates modifying the page size dynamically using a textbox value and an external button click:

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
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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

### Change page count

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports customizing the number of page links shown in the pager through the [pageSettings.pageCount](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#pagecount) property. The default value is "8", and it can be adjusted to enhance navigation, especially when handling large datasets.

The example below demonstrates updating the page count dynamically using a textbox value and an external button click:

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
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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

### Change current page

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports programmatic page navigation through the [pageSettings.currentPage](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#currentpage) property. The default value is "1", indicating the first page. This property can be modified during initial rendering or updated later to navigate to a specific page based on interaction.

The following example demonstrates dynamically changing the current page using a textbox value and an external button click:

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
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} allowPaging={true} pageSettings={pageSettings}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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

### Add current page in URL as query string 

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows appending the current page number to the URL by enabling the [enableQueryString](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#enablequerystring) property. When set to `true`, the grid includes the current page as a query string, maintaining pagination state and enabling easy sharing of specific views.

The following example demonstrates toggling this behavior using an [EJ2 Toggle Switch Button](https://ej2.syncfusion.com/react/documentation/switch/getting-started). The switch's [change](https://ej2.syncfusion.com/react/documentation/api/switch#change) event updates the `enableQueryString` property dynamically.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ChangeEventArgs, SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let grid;
  const isQueryEnabled = React.useState(true);
  const toggleQueryString = (args) => {
    grid.pageSettings.enableQueryString = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable Query String</label>
    <SwitchComponent checked={isQueryEnabled} change={toggleQueryString}></SwitchComponent>
    <GridComponent dataSource={data} height={265} ref={g => grid = g} allowPaging={true} pageSettings={{ enableQueryString: true }}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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
  const isQueryEnabled = React.useState(true);
  const toggleQueryString = (args: ChangeEventArgs) => {
    (grid as GridComponent).pageSettings.enableQueryString = args.checked;
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Enable/Disable Query String</label>
    <SwitchComponent checked={isQueryEnabled} change={toggleQueryString}></SwitchComponent>
    <GridComponent dataSource={data} height={265} ref={g => grid = g} allowPaging={true} pageSettings={{ enableQueryString: true }}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports customizing the pager through the [pagerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#template) property, allowing replacement of default pager controls with custom elements.

Within the template, context values such as `currentPage`, `pageSize`, `pageCount`, `totalPage`, and `totalRecordCount` are available for building customized pager layouts.

The example below demonstrates using a [NumericTextBox](https://ej2.syncfusion.com/react/documentation/numerictextbox/getting-started) within the pager via the `pagerTemplate` property.

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
    </GridComponent>
  )
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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a built-in page size dropdown that enables adjusting the number of records displayed per page. This can be enabled by setting the [pageSettings.pageSizes](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#pagesizes) property to `true`.

When enabled, the pager displays a dropdown that allows selecting the preferred page size, and the grid updates immediately based on the selected value.

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

> If the `pageSizes` property is set to a boolean value like `true` or `false` the page size dropdown defaults to an array of strings containing options such as ['All', '5', '10', '15', '20']. The `All` option denotes rendering all data in a single page.

### Customize page size dropdown 

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid allows customizing the page size dropdown by setting the [pageSizes](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings#pagesizes) property as an array of strings. This defines the selectable page size options and controls the number of records displayed per page.

The following example demonstrates configuring custom values for the pager dropdown using the `pageSizes` property:

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

> The `pageSizes` property can be configured with either an array of strings or a boolean value.

## Navigate to particular page

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports programmatic page navigation through the [goToPage](https://ej2.syncfusion.com/react/documentation/api/grid#gotopage) method. This method is useful for quickly accessing a particular page, especially when working with large datasets.

The example below demonstrates navigating to a specific page by using `goToPage` method through an external button click based on textbox input.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}

import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
function App() {
  let grid;
  let textbox;
  const click = () => {
    (grid.pagerModule).goToPage(textbox.value);
  }
  return (<div>
    <label style={{ padding: "30px 17px 0 0" }}>Select page index:</label>
    <TextBoxComponent ref={t => textbox = t} width={120}></TextBoxComponent>
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} ref={g => grid = g} allowPaging={true} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
        <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent></div>
  )
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
    <ButtonComponent id="button" onClick={click}>Click button</ButtonComponent>
    <GridComponent id="grid" dataSource={data} height={265} ref={g => grid = g} allowPaging={true} >
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

The pager element in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid can be obtained using the [getPager](https://ej2.syncfusion.com/react/documentation/api/grid#getpager) method which returns an HTML element representing the pager. This enables customizing the pager's appearance or behavior to meet application requirements.

```ts
  grid.getPager()
```

## Dynamically calculate page size based on element height

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports calculating the pageSize dynamically based on the height of its parent element. This ensures efficient use of available space by adjusting the number of displayed records to prevent unnecessary scrolling or empty areas.

Use the [calculatePageSizeByParentHeight](https://ej2.syncfusion.com/react/documentation/api/grid#calculatepagesizebyparentheight) method to recalculate the page size whenever the parent element's height changes.

The following example demonstrates updating the page size dynamically using the `calculatePageSizeByParentHeight` method:

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
    </GridComponent></div>
  )
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

By default, pager displayed at the bottom of the grid. It is also possible to displaying the pager at the top of the grid. This can be achieved by handling the [dataBound](https://ej2.syncfusion.com/react/documentation/api/grid#databound) event, which triggers after the grid has finished rendering. Within this event, the pager element can be programmatically moved to the top of the grid.

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
> * The [created](https://ej2.syncfusion.com/react/documentation/api/pager#created) event triggers when pager is created.
> * The [click](https://ej2.syncfusion.com/react/documentation/api/pager#click) event triggers when the numeric items in the pager is clicked.
> * The [dropDownChanged](https://ej2.syncfusion.com/react/documentation/api/pager#dropdownchanged) event triggers when `pageSize` DropDownList value is selected.

## Pager events 

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides two primary events for handling paging operations:

- [actionBegin](https://ej2.syncfusion.com/react/documentation/api/grid#actionbegin): Triggered before a paging action occurs, such as changing the page or page size. Use this event to customize or control the behavior of paging actions.

- [actionComplete](https://ej2.syncfusion.com/react/documentation/api/grid#actioncomplete): Triggered after a paging action is completed. It provides details such as the current page number, selected page size, and total record count. Use this event to perform actions or update the UI after the operation has been executed.

The following example demonstrates using these events to display notification messages that indicate the current and upcoming page during paging operations.

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

- [Infinite scrolling](./scrolling/infinite-scrolling)
- [Virtual scrolling](./scrolling/virtual-scrolling)
- [PageSettings API](https://ej2.syncfusion.com/react/documentation/api/grid/pageSettings)
- [Group with Paging](https://ej2.syncfusion.com/react/documentation/grid/grouping/grouping#group-with-paging)
- [How to change loading indicator in React Grid](https://ej2.syncfusion.com/react/documentation/grid/data-binding/data-binding#loading-indicator)