---
layout: post
title: Column template in React Grid component | Syncfusion
description: Learn here all about Column template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Column template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Column template in React Grid component

Grid component provides a [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) option that allows you to display custom elements in a column instead of the field value. This can be useful when you need to display images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for grid actions like sorting, filtering, editing. It is must to define the `field` property of the column to perform any grid actions.

## Render image in a column

To render an image in a grid column, you need to define a [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) for the column using the template property. The `template` property expects the HTML element or a function that returns the HTML element.

The following example demonstrates how to define a [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) for the **Employee Image** field that displays an image element. The `template` property is set to the HTML element that contains an image tag. You have utilized the `src` and `alt` attributes to the image tag. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/column-template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/column-template-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/column-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/column-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/column-template-cs1" %}

> The [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) option allows to define any HTML content within a column.

## Render hyperlink in a column

The Grid component provides support for rendering hyperlink columns and performing routing on click using the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property. This feature is useful when displaying data that requires a link to another page or website.

The following example demonstrates, hot to render hyperlink column in the Grid using the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property of the `ColumnDirective` tag. To define a `template` for the column,  you can use the `template` method with an `a` tag to create the hyperlink. The onClick function is triggered when the hyperlink is clicked.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid;
  const hyperLinkTemplate = ((props) => {
    return (
      <div><a href='#' onClick={(e) => onClick(e, props.FirstName)}>{props.FirstName}</a></div>
    )
  })
  const onClick = ((event, firstName) => {
    const url = 'https://www.meaningofthename.com/';
    var searchUrl = url + firstName;
    window.open(searchUrl);
  });

  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent ref={g => grid = g} dataSource={employeeData} height={315} >
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' />
            <ColumnDirective field='FirstName' headerText='First Name' width='120' template={hyperLinkTemplate} />
            <ColumnDirective field='LastName' headerText='Last Name' width='80' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: Grid | null;
  const hyperLinkTemplate = ((props: any) => {
    return (
      <div><a href='#' onClick={(e) => onClick(e, props.FirstName)}>{props.FirstName}</a></div>
    )
  })
  const onClick = ((event: any, firstName: any) => {
    const url = 'https://www.meaningofthename.com/';
    var searchUrl = url + firstName;
    window.open(searchUrl);
  });

  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent ref={g => grid = g} dataSource={employeeData} height={315} >
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' />
            <ColumnDirective field='FirstName' headerText='First Name' width='120' template={hyperLinkTemplate} />
            <ColumnDirective field='LastName' headerText='Last Name' width='80' />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/header-template-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/header-template-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/header-template-cs3" %}

> The window.open() method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a grid column instead of a field value.

### Render LineChart component in a column

The [LineChart](https://ej2.syncfusion.com/react/documentation/sparkline/getting-started) component of Syncfusion provides an elegant way to represent and compare data over time. It displays data points connected by straight line segments to visualize trends in data.

In the following example, we rendered the Sparkline Chart component in the Grid column by defining the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
function App() {
  let grid;
  const lineData = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
  ];
  const getSparkData = ((type, count) => {
    if (type === 'line') {
      return lineData[count - 1];
    }
  })

  const ratingTemplate = (() => {
    const length = grid.dataSource.length
    for (let i = 1; i <= length; i++) {
      let spkLine = getSparkData('line', i)
      return (
        <SparklineComponent height='50px' dataSource={spkLine} width='90%' lineWidth={2} valueType='Numeric' fill='#3C78EF' />
      )
    }
  })
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent ref={g => grid = g} dataSource={employeeData} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='100' />
            <ColumnDirective field='FirstName' headerText='FirstName' width='120' />
            <ColumnDirective headerText='Employee Performance Rating' template={ratingTemplate} />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, Grid, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
function App() {
  let grid: Grid | null;
  const lineData: object[] = [
    [0, 6, -4, 1, -3, 2, 5],
    [5, -4, 6, 3, -1, 2, 0],
    [6, 4, 0, 3, -2, 5, 1],
    [4, -6, 3, 0, 1, -2, 5],
    [3, 5, -6, -4, 0, 1, 2],
    [1, -3, 4, -2, 5, 0, 6],
    [2, 4, 0, -3, 5, -6, 1],
    [5, 4, -6, 3, 1, -2, 0],
    [0, -6, 4, 1, -3, 2, 5],
    [6, 4, 0, -3, 2, -5, 1],
  ];
  const getSparkData = ((type: string, count: number) => {
    if (type === 'line') {
      return lineData[count - 1] as number[];
    }
  })

  const ratingTemplate = ((props: any) => {
    const length = (grid as any).dataSource.length
    for (let i: number = 1; i <= length; i++) {
      let spkLine: any = getSparkData('line', i)
      return (
        <SparklineComponent height='50px' dataSource={spkLine} width='90%' lineWidth={2} valueType='Numeric' fill='#3C78EF' />
      )
    }
  })
  return (
    <div>
      <div style={{ padding: '40px 0 0 0' }}>
        <GridComponent ref={g => grid = g} dataSource={employeeData} height={315}>
          <ColumnsDirective>
            <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='100' />
            <ColumnDirective field='FirstName' headerText='FirstName' width='120' />
            <ColumnDirective headerText='Employee Performance Rating' template={ratingTemplate} />
          </ColumnsDirective>
        </GridComponent></div></div>)
}
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs6" %}

### Render ColorPicker component in a column

The [ColorPicker](https://ej2.syncfusion.com/react/documentation/color-picker/getting-started) component of Syncfusion provides a user-friendly way to select colors from a pre-defined color palette or custom colors. It can be used in a variety of scenarios such as picking a theme color or changing the color of an element on a page.

In the following code, we rendered the ColorPicker component in the Grid column by defining the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property.

```
<div>
    <ColorPickerComponent id="color-picker" type="color" mode='Palette' change={change}></ColorPickerComponent>
</div>
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs1" %}

### Render DropDownList component in a column

To render a custom component in a grid column, you need to define a [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) for the column using the `template` property. In the following code, we rendered the [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) component in the **Order Status** column by defining the `template` property.

```
<div>
    <DropDownListComponent value={props.OrderStatus} width="100" dataSource={dropData} popupHeight='150' popupWidth='150' ></DropDownListComponent>
</div>
```
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs2" %}

### Render Chip component in a column

The Grid component provides support for rendering [Chips](https://ej2.syncfusion.com/react/documentation/chips/getting-started) component in a column using the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property. This feature is useful when displaying data that requires a chip component to be rendered in a column.

In the following code, we rendered the Chips component in the Grid **First Name** column by defining the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property.

```
<div>
    <ChipListComponent id='chip' text={props.FirstName}></ChipListComponent>
</div>
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs3" %}

### Render ProgressBar component in a column

The Syncfusion Grid component supports rendering the [Progress Bar](https://ej2.syncfusion.com/react/documentation/progress-bar/getting-started) component within a column using the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property. Displaying the `Progress Bar` component in a grid column allows users to visually track the progress of tasks or operations associated with specific records. This feature is particularly useful for applications involving processes such as data loading, task completion, or other progressive activities.

In the following code, the `Progress Bar` component render in the Grid **Freight** column by defining the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property.

```
<div>
    <ProgressBarComponent id={props.OrderID} type='Linear' height='60'
          value={props.Freight} trackThickness={24} progressThickness='20'></ProgressBarComponent>
</div>
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs8" %}

## Using condition template

The conditional column [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) allows you to display template elements based on specific conditions.

The following example demonstrates how to use the `template` property with the `template` element and add the condition to render the checkbox based on the value of the **Discontinued** field. The **Discontinued** field will render a checkbox in each row for which the value of the **Discontinued** field is **true**. 

```
<div>
    {props.Verified ? (<input type="checkbox" checked />) : (<input type="checkbox" />)}
</div>
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs4" %}

> You can use any template element or custom component instead of the checkbox in the conditional template based on your requirement.

## How to get the row object by clicking on the template element

The Grid component allows you to retrieve the row object of the selected record when clicking on a [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) element. This feature can be useful when you need to perform custom actions based on the selected record.

In the following code, the button element is rendered in the **Employee Data** column and `click` event binding is used to call the **showDetails** method when the template element is clicked. The **showDetails** method is passed the data object as an argument, which allows you to access the selected row object and display it in the dialog popup.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs7/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs7/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs7/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs7/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs7" %}

## Use custom helper inside the template

The Syncfusion Grid allows you to use custom helpers inside the `template` method of a column. This feature allows you to create complex templates that can incorporate additional helper functions that are not available through the default [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) syntax.

To use the custom helper function inside a column template, you must first add the function to the template's context. This can be done by using the let keyword to create a new variable that references the function.

The following example demonstrates how to use a custom helper function inside the [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template) property, using the `template` element for the Freight column.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs5" %}

> Custom helpers can only be used inside the template method of a column.

## Dynamically adding template column

The Syncfusion Grid component allows you to dynamically add template columns at runtime. This capability is particularly useful when the structure of the grid needs to be modified based on individual interactions or other dynamic conditions.

Dynamically adding template columns involves creating and inserting columns with custom templates after the grid has been initialized. This approach provides flexibility in presenting data in a highly customizable manner.

The following example demonstrates how to add template column using external button click. In this example, the **ShipCountry** column with a [Dropdownlist](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) is added in column [template](https://ej2.syncfusion.com/react/documentation/api/grid/column/#template), and an icon is displayed using the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column/#headertemplate) for the **ShipCountry** column. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-cs9/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-cs9/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-cs9/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-cs9/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/template-cs9" %}

## Enhancing Grid performance by enabling or disabling Aria Labels

By default, the Syncfusion React Grid adds custom **aria-label** attributes to template cells by combining the cell value, the "**is template cell**" identifier, and the column header name. These attributes help screen readers provide meaningful context.

If your application doesn’t require screen reader support and includes multiple template columns, Aria labels may impact performance. To improve rendering, you can disable them for all template columns by setting the `enableAriaLabel` property to **false** in the `templateOptions` of those columns. If accessibility is needed, set it to **true** to retain Aria labels.

The example below enables Aria labels for the **Employee Image** column and disables them for the **First Name** column in the Syncfusion React Grid.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-aria-label/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-aria-label/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-aria-label/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-aria-label/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/template-aria-label" %}