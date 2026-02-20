---
layout: post
title: Components in React Inplace editor component | Syncfusion
description: Learn here all about Components in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Components 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Components in React Inplace editor component

The In-place Editor renders various components based on the [type](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#type) property. It includes built-in components and injectable components. To use injectable components, inject the required modules into the In-place Editor. By default, the `type` property is set to `Text`, which renders the `TextBox` component.

The following table lists injectable components and built-in components with their corresponding types.

| **Injectable Components** | **Built in Components** |
|-----------------------|---------------------|
| [AutoComplete](../auto-complete/)  (`AutoComplete`)        | [TextBox](../textbox/)  (`Text`)             |
| [ComboBox](../combo-box/)  (`ComboBox`)              | [DatePicker](../datepicker/)  (`Date`)        |
| [MultiSelect](../multi-select/)   (`MultiSelect`)        | [DateTimePicker](../datetimepicker/)   (`DateTime`)     |
| [TimePicker](../timepicker/)   (`Time`)         | [DropDownList](../drop-down-list/)  (`DropDownList`)      |
| [DateRangePicker](../daterangepicker/)   (`DateRange`)       | [MaskedTextBox](../maskedtextbox/)   (`Mask`)      |
| [Slider](../slider/)   (`Slider`)             | [NumericTextBox](../numerictextbox/)   (`Numeric`)    |
| [Rte](../rich-text-editor/)     (`RTE`)              |                     |
| [ColorPicker](../color-picker/)    (`Color`)       |                     |

The following samples demonstrate built-in and injectable In-place Editor components.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/components-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/components-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/components-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/components-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/components-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/components-cs2" %}

## Model configuration

Customize component properties and events through the In-place Editor [model](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#model) property.

In the following code, the [type](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#type) is set to `Date`, and `DatePicker` properties are configured through the [model](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#model) property to customize the [DatePicker](https://ej2.syncfusion.com/react/documentation/api/datepicker) component in the In-place Editor.

```ts
    public model = { showTodayButton: true, placeholder: 'Select Date' };
```

`[src/app/app.ts]`

`[Class-component]`

```ts

import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public model = { showTodayButton: true, placeholder: 'Select Date' };
  public value = new Date('04/12/2018');
  public render() {
    return (
     <InPlaceEditorComponent id='element' model={this.model} type='Date' value={this.value}/>
    );
  }
}

export default App;

```

`[src/app/app.ts]`

`[Functional-component]`


```ts

import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';
import './App.css';

function App (){
  let model = { showTodayButton: true, placeholder: 'Select Date' };
  let value = new Date('04/12/2018');

    return (
     <InPlaceEditorComponent id='element' model={model} type='Date' value={value}/>
    );

}

export default App;

```

## See Also

* [Built-in Components](./components/#list-of-components)