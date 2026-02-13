---
layout: post
title: React Grid - Row template | Syncfusion
description: Learn here all about row template in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Row template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Row Template in React Grid Component

The row template feature in Grid allows customization of the appearance and layout of rows. This feature displays custom content such as images, buttons, or other controls within the rows.

Enable the row template feature by setting the [rowTemplate](https://ej2.syncfusion.com/react/documentation/api/grid#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

The following example presents employee information with the employee Photo in the first column and other details such as Name, Address, etc. in the second column of each row.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
function App() {
    const gridTemplate = (props) => {
        const src = props.EmployeeID + ".png";
        return (<tr className="templateRow">
      <td className="photo">
        <img src={src} alt={props.EmployeeID}/>
      </td>
      <td className="details">
        <table className="CardTable" cellPadding={3} cellSpacing={2}>
          <colgroup>
            <col style={{ width: "30%"}}/>
            <col style={{ width: "10%" }}/>
          </colgroup>
          <tbody>
            <tr>
              <td className="CardHeader">First Name </td>
              <td>:</td>
              <td>{props.FirstName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Last Name</td>
              <td>:</td>
              <td>{props.LastName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Title</td>
              <td>:</td>
              <td>{props.Title}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>);
    };
    return (<div>
    <GridComponent dataSource={employeeData} rowTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective headerText='Employee Image' width='180' textAlign='Center' field='EmployeeID'/>
        <ColumnDirective headerText='Employee Details' width='300' textAlign='Left' field='FirstName'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';

function App() {
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (<tr className="templateRow">
      <td className="photo">
        <img src={src} alt={props.EmployeeID} />
      </td>
      <td className="details">
        <table className="CardTable" cellPadding={3} cellSpacing={2}>
          <colgroup>
            <col style={{ width: "30%" }} />
            <col style={{ width: "10%" }} />
          </colgroup>
          <tbody>
            <tr>
              <td className="CardHeader">First Name </td>
              <td>:</td>
              <td>{props.FirstName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Last Name</td>
              <td>:</td>
              <td>{props.LastName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Title</td>
              <td>:</td>
              <td>{props.Title}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    );
  }
  return (<div>
    <GridComponent dataSource={employeeData} rowTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective headerText='Employee Image' width='180' textAlign='Center' field='EmployeeID' />
        <ColumnDirective headerText='Employee Details' width='300' textAlign='Left' field='FirstName' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-template-cs3" %}

## Row template with formatting

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> Grid provides the [format](https://ej2.syncfusion.com/react/documentation/api/grid/column#format) property to format the values displayed in each column. When the [rowtemplate](https://ej2.syncfusion.com/react/documentation/api/grid#rowtemplate) feature is used, customized formatting can be applied directly within the template.

Format the values within the row template by defining a global function that handles the formatting logic. This function is invoked inside the template to format the corresponding values.

The following example demonstrates defining a global formatting function for a date column and use it inside a `rowTemplate`:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Internationalization } from '@syncfusion/ej2-base';
import * as React from 'react';
import { employeeData } from './datasource';
let instance = new Internationalization();
function App() {
    const format = (value) => {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    };
    const gridTemplate = (props) => {
        const src = props.EmployeeID + ".png";
        return (<tr className="templateRow">
      <td className="photo">
        <img src={src} alt={props.EmployeeID}/>
      </td>
      <td className="details">
        <table className="CardTable" cellPadding={3} cellSpacing={2}>
          <colgroup>
            <col style={{width: "30%"}}/>
            <col style={{width: "10%"}}/>
          </colgroup>
          <tbody>
            <tr>
              <td className="CardHeader">First Name </td>
              <td>{props.FirstName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Last Name</td>
              <td>{props.LastName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Title</td>
              <td>{props.Title}</td>
            </tr>
            <tr>
              <td className="CardHeader">Birth Date</td>
              <td> {format(props.BirthDate)}</td>
            </tr>
            <tr>
              <td className="CardHeader">Hire Date</td>
              <td>{format(props.HireDate)}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>);
    };
    return (<div>
    <GridComponent dataSource={employeeData} rowTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective headerText='Employee Image' width='180' textAlign='Center' field='EmployeeID'/>
        <ColumnDirective headerText='Employee Details' width='300' textAlign='Left' field='FirstName'/>
      </ColumnsDirective>
    </GridComponent>
  </div>);
}
;
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Internationalization } from '@syncfusion/ej2-base';
import * as React from 'react';
import { employeeData } from './datasource';

let instance: Internationalization = new Internationalization();

interface DateFormat extends Window {
  format?: Function;
}
function App() {
  const format = (value: Date) => {
    return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
  }
  const gridTemplate = (props) => {
    const src = props.EmployeeID + ".png";
    return (<tr className="templateRow">
      <td className="photo">
        <img src={src} alt={props.EmployeeID} />
      </td>
      <td className="details">
        <table className="CardTable" cellPadding={3} cellSpacing={2}>
          <colgroup>
            <col style={{width: "30%" }} />
            <col style={{width: "10%" }}/>
          </colgroup>
          <tbody>
            <tr>
              <td className="CardHeader">First Name </td>
              <td>:</td>
              <td>{props.FirstName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Last Name</td>
              <td>:</td>
              <td>{props.LastName} </td>
            </tr>
            <tr>
              <td className="CardHeader">Title</td>
              <td>:</td>
              <td>{props.Title}</td>
            </tr>
            <tr>
              <td className="CardHeader">Birth Date</td>
              <td>:</td>
              <td> {format(props.BirthDate)}</td>
            </tr>
            <tr>
              <td className="CardHeader">Hire Date</td>
              <td>:</td>
              <td>{format(props.HireDate)}</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    );
  }
  return (<div>
    <GridComponent dataSource={employeeData} rowTemplate={gridTemplate} height='315'>
      <ColumnsDirective>
        <ColumnDirective headerText='Employee Image' width='180' textAlign='Center' field='EmployeeID' />
        <ColumnDirective headerText='Employee Details' width='300' textAlign='Left' field='FirstName' />
      </ColumnsDirective>
    </GridComponent>
  </div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/row-template-cs4" %}

> When using the `rowTemplate` feature in Syncfusion<sup style="font-size:70%">&reg;</sup> Grid, keep in mind that any formatting applied to columns using the `format` property will not work inside the template.

## Render Syncfusion<sup style="font-size:70%">&reg;</sup> control in row template

The Grid renders custom Syncfusion<sup style="font-size:70%">&reg;</sup> controls within the rows of the grid. This feature enables interactive Syncfusion<sup style="font-size:70%">&reg;</sup> controls to display instead of field values in the grid.

Render a Syncfusion<sup style="font-size:70%">&reg;</sup> control in a row template by setting the [rowTemplate](https://ej2.syncfusion.com/react/documentation/api/grid#rowtemplate) property of the Grid component. This property accepts a custom HTML template that defines the layout for each row. 

The following example demonstrates rendering Syncfusion<sup style="font-size:70%">&reg;</sup> controls within a row template:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-template-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-template-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-cs5" %}

## Render Syncfusion<sup style="font-size:70%">&reg;</sup> Chart in row template

The Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component provides flexibility to include custom controls such as Chart within the rows of the Grid. This feature enhances Grid interactivity by displaying graphical representations of data instead of plain text.

Render a Syncfusion<sup style="font-size:70%">&reg;</sup> Chart within a row template of the Grid by utilizing the [rowTemplate](https://ej2.syncfusion.com/react/documentation/api/grid#rowtemplate) property. This property accepts a custom HTML template that specifies the layout for each row, enabling rich data visualization.

The following example demonstrates rendering Syncfusion<sup style="font-size:70%">&reg;</sup> Chart within a row template:

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/row-template-chart/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/row-template-chart/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/row-template-chart/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/row-template-chart/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/grid/row-template-chart" %}

## Limitations

The row template feature offers focused functionality, working seamlessly with a curated set of Grid features. The features listed below are not part of its supported set of features:

* Filtering
* Paging
* Sorting
* Searching
* Rtl
* Export
* Context Menu
* State Persistence
* Selection
* Grouping
* Editing
* Frozen rows and columns
* Virtual and Infinite scrolling
* Column Chooser
* Column Menu
* Detail Row
* Foreignkey column
* Resizing
* Reordering
* Aggregates
* Clipboard
* Adaptive view

## See also

- [Column Template](https://ej2.syncfusion.com/react/documentation/grid/columns/column-template)
- [Header Template](https://ej2.syncfusion.com/react/documentation/grid/columns/column-headers#header-template)
- [Empty Record Template](https://ej2.syncfusion.com/react/documentation/grid/how-to/customize-the-empty-record-template)
