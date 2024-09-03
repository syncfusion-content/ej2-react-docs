---
layout: post
title: Resize the Syncfusion React Grid in various dimensions
description: Learn here all about Resize the grid in various dimension in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Resize the grid in various dimension 
documentation: ug
domainurl: ##DomainURL##
---

# Resize the grid in various dimension in React Grid component

The Syncfusion React Grid component offers a friendly way to resize the grid, allowing you to adjust its width and height for improved data visualization.

To resize the grid externally, you can use an external button to modify the width of the parent element that contains the grid. This will effectively resize the grid along with its parent container.

The following example demonstrates how to resize the grid on external button click based on input. 

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs'
import * as React from 'react';
import { data } from './datasource';

function App() {
    let widthTextBox;
    let heightTextBox;
    const onExternalResize = () => {
        const parentDiv = document.getElementById('parent');
        parentDiv.style.width = widthTextBox.element.value + 'px';
        parentDiv.style.height = heightTextBox.element.value + 'px';
    }
    return (<div>
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter the width:</label>
            <NumericTextBoxComponent ref={widthText => widthTextBox = widthText} min={400} max={650} placeholder='400' step={5} width={120}></NumericTextBoxComponent>
        </div>
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter the height:</label>
            <NumericTextBoxComponent ref={heightText => heightTextBox = heightText} min={200} max={600} placeholder='200' step={5} width={120}></NumericTextBoxComponent>
        </div>
        <ButtonComponent style={{ margin: "5px 0 5px 5px" }} cssClass="e-outline" onClick={onExternalResize}>Resize</ButtonComponent>
        <div id='parent'>
            <GridComponent dataSource={data} height='100%' >
                <Inject services={[Resize]} />
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='150' maxWidth='200' textAlign='Right'></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
                </ColumnsDirective>
            </GridComponent></div></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Resize } from '@syncfusion/ej2-react-grids';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs'
import * as React from 'react';
import { data } from './datasource';

function App() {
    let widthTextBox: NumericTextBoxComponent | null;
    let heightTextBox: NumericTextBoxComponent | null;
    const onExternalResize = () => {
        const parentDiv = document.getElementById('parent');
        (parentDiv as HTMLElement).style.width = (widthTextBox as NumericTextBoxComponent).element.value + 'px';
        (parentDiv as HTMLElement).style.height = (heightTextBox as NumericTextBoxComponent).element.value + 'px';
    }
    return (<div>
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter the width:</label>
            <NumericTextBoxComponent ref={widthText => widthTextBox = widthText} min={400} max={650} placeholder='400' step={5} width={120}></NumericTextBoxComponent>
        </div>
        <div>
            <label style={{ padding: "30px 17px 0 0" }}>Enter the height:</label>
            <NumericTextBoxComponent ref={heightText => heightTextBox = heightText} min={200} max={600} placeholder='200' step={5} width={120}></NumericTextBoxComponent>
        </div>
        <ButtonComponent style={{ margin: "5px 0 5px 5px" }} cssClass="e-outline" onClick={onExternalResize}>Resize</ButtonComponent>
        <div id='parent'>
            <GridComponent dataSource={data} height='100%' >
                <Inject services={[Resize]} />
                <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' width='150' maxWidth='200' textAlign='Right'></ColumnDirective>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'></ColumnDirective>
                    <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
                    <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' />
                </ColumnsDirective>
            </GridComponent></div></div>)
};
export default App;
{% endraw %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/grid-resize/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/grid-resize/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/grid-resize" %}

