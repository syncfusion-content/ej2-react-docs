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

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides a [template](https://ej2.syncfusion.com/react/documentation/api/grid/column#template) option for displaying custom elements in a column instead of the field value. This is useful for displaying images, buttons, or other custom content within a column.

> When using template columns, they are primarily meant for rendering custom content and may not provide built-in support for grid actions like sorting, filtering, or editing. It is essential to define the `field` property of the column to perform any grid actions.

## Render image in a column

To render an image in a grid column, define a template for the column using the `template` property. The `template` property accepts either an HTML element or a function that returns an HTML element. When using a function-based template, the Grid passes the current row's data as the "props" parameter. This allows accessing field values from the data source directly within the template (e.g., "props.EmployeeID", "props.ImageURL").

The following example demonstrates defining a `template` for the "Employee Image" field that displays an image element. The `template` property is set to a function that returns an HTML element containing an image tag with "src" and "alt" attributes.

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


## Render hyperlink in a column

The Grid component provides support for rendering hyperlink columns and performing navigation on click using the `template` property. This feature is useful when displaying data that requires a link to another page or website. The template function receives the row data as "props", allowing access to field values. In the template, attach event handlers (for example, `onClick`) to trigger custom logic when the element is clicked. The event handler receives the click event and any additional parameters passed to it.

The following example shows a hyperlink column in the Grid where the "hyperLinkTemplate" function returns an anchor tag that calls the `onClick` handler when clicked, opening a URL in a new window.

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

> The `window.open()` method is a built-in JavaScript function that opens a new browser window or tab with the specified URL.

## Render other components in a column

The column template has options to render a custom component in a grid column instead of a field value.

### Render LineChart component in a column

The Syncfusion<sup style="font-size:70%">&reg;</sup> React [LineChart](https://ej2.syncfusion.com/react/documentation/sparkline/getting-started) component is a lightweight sparkline chart used to display data trends. It connects data points with straight line segments to show patterns over time, without axes or labels. To render a sparkline within a template, define a template function that returns the Sparkline component. The chart requires a dataSource array of numeric values, and each grid row will display its own sparkline visualization.

The following example shows a Sparkline in the Grid column. The "lineData" array contains arrays of numbers (one per row), and the template function retrieves the appropriate data array for each row and passes it to the SparklineComponent.

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

<<<<<<< HEAD
The Syncfusion<sup style="font-size:70%">&reg;</sup> [ColorPicker](https://ej2.syncfusion.com/react/documentation/color-picker/getting-started) component provides an intuitive method to select colors from a predefined color palette or custom colors. This component is suitable for scenarios such as picking a theme color or changing element colors on a page.
=======
The Syncfusion<sup style="font-size:70%">&reg;</sup> [ColorPicker](https://ej2.syncfusion.com/react/documentation/color-picker/getting-started) component provides a user-friendly way to select colors from a pre-defined color palette or custom colors. This component is useful for scenarios such as picking a theme color or changing element colors on a page.
>>>>>>> 872db1b5d2947e36facb9c247fbf32aae106285e

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

The Grid component provides support for rendering [DropDownList](https://ej2.syncfusion.com/react/documentation/drop-down-list/getting-started) component in a column using the `template` property. This feature is useful when displaying data that requires selection from predefined options in a column.

The following example shows the DropDownList component in the Grid "Order Status" column.

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

The Grid component provides support for rendering [Chips](https://ej2.syncfusion.com/react/documentation/chips/getting-started) component in a column using the `template` property. This feature is useful when displaying data that requires a chip component to be rendered in a column.

The following example shows the Chips component in the Grid "First Name" column.

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

The Grid component supports rendering the [Progress Bar](https://ej2.syncfusion.com/react/documentation/progress-bar/getting-started) component within a column using the `template` property. The Progress Bar component in a grid column visually tracks the progress of tasks or operations associated with specific records. This feature is useful for applications involving processes such as data loading, task completion, or other progressive activities.

The following example shows the Progress Bar component in the Grid "Freight" column.

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

### Render RadioButton in a column 

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid supports rendering the [RadioButton](https://ej2.syncfusion.com/react/documentation/radio-button/getting-started) within a column using the `template` property. This feature is useful for displaying selection options, such as order statuses, payment methods, or approval choices, within the Grid.

The following example demonstrates rendering a RadioButton in the "Order Status" column of the Grid by defining the `template` property.

```js  
  <RadioButtonComponent label="Pending" name={`radio-${OrderID}`} cssClass="e-success" checked={OrderStatus === "Pending"} />
  <RadioButtonComponent label="Confirmed" name={`radio-${OrderID}`} cssClass="e-success" checked={OrderStatus === "Confirmed"} />
  <RadioButtonComponent label="Shipped" name={`radio-${OrderID}`} cssClass="e-success" checked={OrderStatus === "Shipped"} />
```

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/template-radiobutton/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/template-radiobutton/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/template-radiobutton/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/template-radiobutton/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/template-radiobutton" %}

## Using condition template

The conditional column `template` allows displaying template elements based on specific conditions. This is useful for showing different content depending on the data values in each row. Use the ternary operator ("condition ? trueValue : falseValue") or "if/else" statements to conditionally render elements. The template function receives row data through "props", which can be evaluated to determine what content to display.

The following example demonstrates rendering a checkbox conditionally based on the "Discontinued" field value. The template uses a ternary operator to check if "props.Discontinued" is `true`. If `true`, it renders a checked checkbox; otherwise, it renders an unchecked checkbox. 

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

> Any template element or custom component can replace the checkbox in the conditional template based on specific requirements.

## Getting the row object by clicking on a template element

The Grid component allows retrieving the row object of the selected record when clicking on a `template` element. This capability enables performing custom actions based on the selected record.

The following example demonstrates a button element rendered in the "Employee Data" column with an `onClick` event handler that calls the "showDetails" method. The method receives the complete row data object as a parameter, which provides access to all field values for that record and enables displaying the information in a dialog popup.

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
The Grid supports custom helper functions inside the `template` property of a column. These functions are JavaScript methods that perform specific operations—such as formatting, calculations, or transformations—on row data.

To use a helper function:

- Define the function within the component scope.
- Call the function from inside the template.
- Pass the row data (from props) to the helper function for processing.
- Return the desired output to render in the cell.

The following example shows a custom helper function inside the `template` property that processes field values and returns formatted content for the "Freight" column.

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

> Custom helpers can only be used inside the `template` method of a column.

## Dynamically adding template column

The Grid component supports dynamically adding template columns at runtime. This allows modifying the grid structure after initialization based on UI interactions or other dynamic conditions (for example, adding a new column when a button is clicked). Dynamically adding columns involves creating a new `ColumnDirective` with a `template` and inserting it into the grid's column collection.

The following example demonstrates adding a template column using an external button click. When the button is clicked, a new "Ship Country" column with a Dropdownlist template is added to the grid at runtime. The column uses both the `template` property for the cell content and the [headerTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/column#headertemplate) property to customize the column header.

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

By default, the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid automatically adds custom "aria-label" attributes to template cells. These attributes combine the cell value, the identifier "is template cell", and the column header name. Aria labels are accessibility features that help screen readers understand the content and purpose of cells.

However, in applications with many template columns, these labels can slightly impact rendering performance. To improve performance, disable aria labels for non-critical template columns by setting the `enableAriaLabel` property to `false` in the `templateOptions` of those columns. If accessibility support is required, set it to `true` to retain aria labels.

The following example enables Aria labels for the "Employee Image" column and disables them for the "First Name" column in the Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid.

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