---
layout: post
title: Groups in React TextBox component | Syncfusion
description: Learn here all about Groups in Syncfusion React TextBox component of Syncfusion Essential JS 2 and more.
control: Groups
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Groups in React TextBox component

Create an enhanced TextBox with floating labels and icons to improve the visual clarity and user experience of your form inputs. The following sections explain the steps to implement these features.

## Floating label

Add floating labels to your TextBox using the [FloatLabelType](https://ej2.syncfusion.com/react/documentation/api/textbox/#floatlabeltype) property. This property controls how the placeholder text animates when the input is focused or contains a value. Supported values include:

* Never - The placeholder text should not be float ever.
* Always - The placeholder text floats above the TextBox always.
* Auto - The placeholder text floats above the TextBox while focusing or enter a value in TextBox.

`[Class-component]`

```ts
import * as React from "react";
import './App.css';
export default class App extends React.Component<{}, {}> {
    public render() {
      return (
        // element which is going to render the Floating TextBox
        <TextBoxComponent placeholder="Enter Name" floatLabelType="Auto"></TextBoxComponent>
      );
    }
};
```

`[Functional-component]`

```ts
import * as React from "react";
import * as ReactDOM from 'react-dom';
import './App.css';

function App() {
    return (
        // element which is going to render the Floating TextBox
       <TextBoxComponent placeholder="Enter Name" floatLabelType="Auto"></TextBoxComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('input-container'));
```

And refer to the following sections to add the icons to the TextBox.

## With icon and floating label

Create an icon in the TextBox using the [addIcon](https://ej2.syncfusion.com/react/documentation/api/textbox/#addicon) method and enable the float label using the [FloatLabelType](https://ej2.syncfusion.com/react/documentation/api/textbox/#floatlabeltype) property. The user can place the icon on either side of the TextBox by specifying "append" or "prepend" in the [addIcon](https://ej2.syncfusion.com/react/documentation/api/textbox/#addicon) method.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/textbox-icons-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/textbox-icons-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-icons-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/textbox-icons-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/textbox-icons-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-icons-cs2" %}

## With clear button and floating label

The clear button is added to the input for clearing the value given in the TextBox. It is shown only when the input field has a value, otherwise not shown.

You can add the clear button to the TextBox by using [showClearButton](https://ej2.syncfusion.com/react/documentation/api/textbox/#showclearbutton) API in TextBox.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/textbox-component-clearicon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/textbox-component-clearicon-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-component-clearicon-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/textbox-component-clearicon-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/textbox-component-clearicon-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/textbox-component-clearicon-cs2" %}

## Multi-line input with floating label

To create a multiline input using the [multiline](https://ej2.syncfusion.com/react/documentation/api/textbox/#multiline) API, it will act as a TextArea component. You can also resize the rows.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs5" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/textbox/default-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/textbox/default-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/textbox/default-cs6" %}

## See Also

* [How to add floating label to TextBox programmatically](./how-to/add-floating-label-to-textbox-programmatically)
* [Change the floating label color of the TextBox](./how-to/change-the-floating-label-color-of-the-textbox)
* [Change the color of the TextBox based on its value](./how-to/change-the-color-of-the-textbox-based-on-its-value)
