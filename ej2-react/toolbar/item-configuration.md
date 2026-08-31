---
layout: post
title: Item Configuration in React Toolbar | Syncfusion
description: Add Buttons, DropDownButtons, Separators, and Input controls to the Syncfusion React Toolbar and align them with align and overflow.
control: Item configuration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Item Configuration in React Toolbar

The Toolbar can be rendered by defining an array of [`items`](https://ej2.syncfusion.com/react/documentation/api/toolbar/index-default#items). Items can be constructed with the following built-in command types or item template.

## Button

`Button` is the default command [`type`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#type), and it can be rendered by using the [`text`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#text) property.
Properties of the button command type:

| Property | Description |
| ------------ | ------------- |
| [`type`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#type) | Specifies the command type of the Toolbar item. Allowed values: `Button` (default), `Separator`, `Input`. |
| [`text`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#text) | The text to be displayed for the button. |
| [`id`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#id) | The ID of the button to be rendered. If the ID is not given, an auto ID is generated. |
| [`prefixIcon`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#prefixicon) | Defines the class used to specify an icon for the button. The icon is `positioned before` the text if text is available or a button with only the icon is rendered. |
| [`suffixIcon`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#suffixicon) | Defines the class used to specify an icon for the button. The icon is `positioned after` the text if text is available. If both [`prefixIcon`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#prefixicon) and [`suffixIcon`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#suffixicon) are specified, only `prefixIcon` is considered. |
| [`width`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#width) | Used to set the [`width`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#width) of the button. |
| [`align`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#align) | Specifies the location for aligning Toolbar items. |

## Separator

The `Separator` type separates single or multiple Toolbar commands. The `Separator` item supports the `align` and `overflow` properties, which control its placement and overflow behavior within the Toolbar.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs5" %}

> If `Separator` is added as first or last item, it is not visible.

## Input

The `Input` type is only applicable for adding `template` elements when the [`template`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#template) property is defined as an `object`. Input type creates an `input element` internally that acts as the container for `Syncfusion` input based components.

>Note: Set the toolbar item **type** property value as `Input` only for Input components.

### NumericTextBox

The following example shows how to add a `NumericTextBox` component to the Toolbar.

* Import the `NumericTextBox` module:

```javascript
import { NumericTextBox } from '@syncfusion/ej2-inputs';
```

* Initialize the `NumericTextBox` in the `template` property, with the Toolbar item `type` set to `Input`.

* Related `NumericTextBox` component properties can also be configured, as shown below:

```javascript
new NumericTextBox({ format: 'c2' });
```

### DropDownList

The following example shows how to add a `DropDownList` component to the Toolbar.

* Import the `DropDownList` module:

```javascript
import { DropDownList } from '@syncfusion/ej2-dropdowns';
```

* Initialize the `DropDownList` in the `template` property, with the Toolbar item `type` set to `Input`.

* Related `DropDownList` component properties can also be configured, as shown below:

```javascript
new DropDownList({ width: '100px' });
```

### CheckBox

The following example shows how to add a `CheckBox` component to the Toolbar.

* Import the `CheckBox` module:

```javascript
import { CheckBox } from '@syncfusion/ej2-buttons';
```

* Initialize the `CheckBox` in the `template` property, with the Toolbar item `type` set to `Input`.

* Related `CheckBox` component properties can also be configured, as shown below:

```javascript
new CheckBox({ label: 'Checkbox', checked: true });
```

### RadioButton

The following example shows how to add a `RadioButton` component to the Toolbar.

* Import the `RadioButton` module:

```javascript
import { RadioButton } from '@syncfusion/ej2-buttons';
```

* Initialize the `RadioButton` in the `template` property, with the Toolbar item `type` set to `Input`.

* Related `RadioButton` component properties can also be configured, as shown below:

```javascript
new RadioButton({ label: 'Radio', name: 'default', checked: true });
```

The above steps apply to all `Syncfusion` input-based components.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs6/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs6" %}

## Enabling tab key navigation in Toolbar

The [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) property of a Toolbar item is used to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) property allows you to switch between items using the Tab and Shift+Tab keys as well.

To use the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) property, you need to set it for each Toolbar item that you want to enable tab key navigation. The [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) property should be set to a positive integer value. A value of 0 or a negative value will disable tab key navigation for the item.

**Scenario 1 - Positive `tabIndex` values:** To enable tab key navigation for two Toolbar items with a specific order, you can use the following code:

```tsx
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

const ReactApp = () => {
  return (
    <ToolbarComponent id='toolbar'>
      <ItemsDirective>
        <ItemDirective text="Item 1" tabIndex={1} />
        <ItemDirective text="Item 2" tabIndex={2} />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);
```

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) values.

**Scenario 2 - `tabIndex` set to 0:** If you set the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) values. For example:

```tsx
import { ItemDirective, ItemsDirective, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

const ReactApp = () => {
  return (
    <ToolbarComponent id='toolbar'>
      <ItemsDirective>
        <ItemDirective text="Item 1" tabIndex={0} />
        <ItemDirective text="Item 2" tabIndex={0} />
      </ItemsDirective>
    </ToolbarComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('toolbar'));
root.render(<ReactApp />);
```

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

Example:

Here is an example of how you can use the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/toolbar/item#tabindex) property to enable tab key navigation for a Toolbar component:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-cs7" %}

With the above code, the user can switch between the Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated based on the element order.

## See Also

* [How to set item wise custom template](./how-to/set-item-wise-custom-template)
