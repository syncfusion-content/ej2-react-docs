---
layout: post
title: Detail template in React Grid component | Syncfusion
description: Learn here all about Detail template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Detail template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Detail template in React Grid component

The detail template in the Grid component allows you to display additional information about a specific row in the grid by expanding or collapsing detail content. This feature is useful when you need to show additional data or custom content that is specific to each row in the grid. You can use the [detailTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/#detailtemplate) property to define an HTML template for the detail row. This template can include any HTML element or React component that you want to display as detail content.

Here's an example of using the `detailTemplate` property in the grid component:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
function App() {
    const gridTemplate = (props) => {
        const src = props.EmployeeID + ".png";
        return (<table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: "35%" }}/>
          <col style={{ width: "35%" }}/>
          <col style={{ width: "40%" }}/>
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} style={{ textAlign: "center" }} className="photo">
              <img src={src} alt={props.EmployeeID}/>
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> First Name:</span>
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Postal Code:</span>
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Last Name:</span>
              {props.LastName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Title:</span>
              {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Phone:</span>
              {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Country:</span>
              {props.Country}
            </td>
          </tr>
        </tbody>
      </table>);
    };
    return (<div>
    <GridComponent dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140'/>
        <ColumnDirective headerText='Last Name' width='140' field='LastName'/>
        <ColumnDirective headerText='Title' width='150' field='Title'/>
        <ColumnDirective headerText='Country' width='150' field='Country'/>
      </ColumnsDirective>
      <Inject services={[DetailRow]}/>
    </GridComponent>
  </div>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (
      <table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: "35%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "40%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} style={{ textAlign: "center" }} className="photo">
              <img src={src} alt={props.EmployeeID} />
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> First Name:</span>
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Postal Code:</span>
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Last Name:</span>
              {props.LastName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Title:</span>
              {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Phone:</span>
              {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Country:</span>
              {props.Country}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (<div>
    <GridComponent dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140' />
        <ColumnDirective headerText='Last Name' width='140' field='LastName' />
        <ColumnDirective headerText='Title' width='150' field='Title' />
        <ColumnDirective headerText='Country' width='150' field='Country' />
      </ColumnsDirective>
      <Inject services={[DetailRow]} />
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-template-cs1" %}

## Rendering custom component

The Grid component provides a powerful feature that allows you to render custom components inside the detail row. This feature is helpful when you need to add additional information or functionality for a specific row in the grid.

To render a custom component inside the detail row, you need to define a template using the[detailTemplate](https://ej2.syncfusion.com/react/documentation/api/grid/#detailtemplate)  property and handle the [detailDataBound](https://ej2.syncfusion.com/react/documentation/api/grid/#detaildatabound) event.This template can include any HTML element or React component that you want to display as the detail content.

The `detailDataBound` event is an event that is triggered after a detail row is bound to data. This event provides an object of type [DetailDataBoundEventArgs](https://ej2.syncfusion.com/react/documentation/api/grid/detaildataboundeventargs/) as a parameter.

For example, to render grid inside the detail row, place an HTML div element as the `detailTemplate` and render the DIV element as grid component in the `detailDataBound` event.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-template-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-template-cs2" %}

## Expand by external button

The Grid provides a feature that allows users to expand the detail row of a grid using an external button. By default, detail rows render in a collapsed state, but this feature enables users to view additional details associated with a particular row. 

To achieve expanding the detail row of a grid using an external button, you need to invoke the [expand](https://ej2.syncfusion.com/react/documentation/api/grid/detailRow/#expand) method provided by the **detailRowModule** object of the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid library. This method will expand the detail row of a specific grid row.

Here is an example of how to use the `expand` method to expand a detail row:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid;
  let textBox;
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (
      <table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: "35%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "40%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} style={{ textAlign: "center" }} className="photo">
              <img src={src} alt={props.EmployeeID} />
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> First Name:</span>
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Postal Code:</span>
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Last Name:</span>
              {props.LastName}

            </td>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Title:</span>
              {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Phone:</span>
              {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Country:</span>
              {props.Country}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  const expand = () => {
    grid.detailRowModule.expand(textBox.value);
  }
  return (<div>
    <TextBoxComponent ref={t =>textBox =t} placeholder='Enter the row Index' width="250px" floatLabelType='Auto'></TextBoxComponent>
    <ButtonComponent id='sample' onClick={expand}>Expand</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140' />
        <ColumnDirective headerText='Last Name' width='140' field='LastName' />
        <ColumnDirective headerText='Title' width='150' field='Title' />
        <ColumnDirective headerText='Country' width='150' field='Country' />
      </ColumnsDirective>
      <Inject services={[DetailRow]} />
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  let grid: GridComponent | null;
  let textBox:TextBoxComponent|null;
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (
      <table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: "35%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "40%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} style={{ textAlign: "center" }} className="photo">
              <img src={src} alt={props.EmployeeID} />
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> First Name:</span>
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Postal Code:</span>
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Last Name:</span>
              {props.LastName}

            </td>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Title:</span>
              {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Phone:</span>
              {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Country:</span>
              {props.Country}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  const expand = () => {
    (grid as GridComponent).detailRowModule.expand((textBox as TextBoxComponent).value);
  }
  return (<div>
    <TextBoxComponent ref={t =>textBox =t} placeholder='Enter the row Index' width="250px" floatLabelType='Auto'></TextBoxComponent>
    <ButtonComponent id='sample' onClick={expand}>Expand</ButtonComponent>
    <GridComponent ref={g => grid = g} dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140' />
        <ColumnDirective headerText='Last Name' width='140' field='LastName' />
        <ColumnDirective headerText='Title' width='150' field='Title' />
        <ColumnDirective headerText='Country' width='150' field='Country' />
      </ColumnsDirective>
      <Inject services={[DetailRow]} />
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/detail-template-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/detail-template-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/detail-template-cs1" %}

## Customize detail template icon

The detail template icon in the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid is used to expand or collapse the detail content of a row. By default, the icon represents a right arrow for the collapsed state and a down arrow for the expanded state. If you want to customize this icon, you can achieve it by overriding the following CSS styles:

```css

.e-grid .e-icon-grightarrow::before {
    content: "\e7a9";
}

.e-grid .e-icon-gdownarrow::before {
    content: "\e7fe";
}

```

Here is an example of how to customize the detail template icon:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
function App() {
    const gridTemplate = (props) => {
        const src = props.EmployeeID + ".png";
        return (<table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: "35%" }}/>
          <col style={{ width: "35%" }}/>
          <col style={{ width: "40%" }}/>
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} style={{ textAlign: "center" }} className="photo">
              <img src={src} alt={props.EmployeeID}/>
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> First Name:</span>
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Postal Code:</span>
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Last Name:</span>
              {props.LastName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Title:</span>
              {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Phone:</span>
              {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Country:</span>
              {props.Country}
            </td>
          </tr>
        </tbody>
      </table>);
    };
    return (<div>
    <GridComponent dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140'/>
        <ColumnDirective headerText='Last Name' width='140' field='LastName'/>
        <ColumnDirective headerText='Title' width='150' field='Title'/>
        <ColumnDirective headerText='Country' width='150' field='Country'/>
      </ColumnsDirective>
      <Inject services={[DetailRow]}/>
    </GridComponent>
  </div>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent, DetailRow, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (
      <table className="detailtable" width="100%">
        <colgroup>
          <col style={{ width: "35%" }} />
          <col style={{ width: "35%" }} />
          <col style={{ width: "40%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td rowSpan={4} style={{ textAlign: "center" }} className="photo">
              <img src={src} alt={props.EmployeeID} />
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> First Name:</span>
              {props.FirstName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Postal Code:</span>
              {props.PostalCode}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Last Name:</span>
              {props.LastName}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> Title:</span>
              {props.Title}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Phone:</span>
              {props.HomePhone}
            </td>
          </tr>
          <tr>
            <td>
              <span style={{ fontWeight: "500" }}> City:</span>
              {props.City}
            </td>
            <td>
              <span style={{ fontWeight: "500" }}> Country:</span>
              {props.Country}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (<div>
    <GridComponent dataSource={employeeData} detailTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective field='FirstName' headerText='First Name' width='140' />
        <ColumnDirective headerText='Last Name' width='140' field='LastName' />
        <ColumnDirective headerText='Title' width='150' field='Title' />
        <ColumnDirective headerText='Country' width='150' field='Country' />
      </ColumnsDirective>
      <Inject services={[DetailRow]} />
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs6/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs6/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-template-cs6" %}

## Limitations

Detail template is not supported with the following features:

* Frozen rows and columns
* Immutable mode
* Infinite scrolling
* Virtual scrolling
* Print
* Row template
* Row spanning
* Column spanning
* Lazy load grouping
* State persistence