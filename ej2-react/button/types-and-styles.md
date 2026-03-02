---
layout: post
title: Types and styles in React Button component | Syncfusion
description: Learn here all about Types and styles in Syncfusion React Button component of Syncfusion Essential JS 2 and more.
control: Types and styles 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Types and styles in React Button component

This section explains the different styles and types of buttons in the Syncfusion Button component.

## Button styles

The Button component provides predefined styles through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/button#cssclass) property. Use these styles to convey different actions and meanings:

| Class | Description |
| -------- | -------- |
| e-primary | Represents a primary action. |
| e-success | Represents a positive action. |
| e-info | Represents an informative action. |
| e-warning | Represents an action requiring caution. |
| e-danger | Represents a negative action. |
| e-link | Styles the button as a hyperlink. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/button-style-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/button-style-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/button-style-cs1" %}

> Predefined button styles provide visual indication only. Ensure button content clearly describes its purpose for users of assistive technologies such as screen readers.
>

## Button types

The Button component provides the following types:

* Basic types
* Flat Button
* Outline Button
* Round Button
* Toggle Button

### Basic types

The basic Button types are explained below.

| Type | Description |
| -------- | -------- |
| Button | Defines a click Button. |
| Submit | This Button submits the form data to the server. |
| Reset |  This Button resets all the controls of the form elements to their initial values. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/basic-types-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/basic-types-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/basic-types-cs1" %}

### Flat Button

A flat button is styled with no background color. To create a flat button, set the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/button#cssclass) property to `e-flat`.

### Outline Button

An outline button has a border with a transparent background. To create an outline button, set the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/button#cssclass) property to `e-outline`.

### Round Button

A round button is shaped like a circle and typically contains an icon representing its action. To create a round button, set the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/button#cssclass) property to `e-round`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/button-type-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/button-type-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/button-type-cs1" %}

### Toggle Button

A toggle button changes between two states. The button is active in the toggled state and can be recognized through the `e-active` class. To create a toggle button, set the [`isToggle`](https://ej2.syncfusion.com/react/documentation/api/button#istoggle) property to `true`. The following example demonstrates how the toggle button text changes between play and pause based on its state:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/toggle-button-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/toggle-button-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/toggle-button-cs1" %}

## Change Button type

To change the default button to a flat button, set the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/button#cssclass) property to `e-flat` and define the button text using the [`content`](https://ej2.syncfusion.com/react/documentation/api/button#content) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/default-cs5/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/default-cs5/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/default-cs5" %}

## Icons

### Button with font icons

The Button can have an icon to provide the visual representation of the action. To place the icon on a Button, set the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/button#iconcss) property with the required icon CSS. By default, the icon is positioned to the left side of the Button. You can customize the icon's position by
using the [`iconPosition`](https://ej2.syncfusion.com/react/documentation/api/button#iconposition) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/icon-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/icon-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/icon-cs1" %}

### Button with SVG image

SVG image can be added to the Button using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/button#iconcss) property.

In the following example, SVG image is added using the iconCss class `e-search-icon` by setting `height` and `width`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/svg-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/svg-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/svg-cs1" %}

> The Essential<sup style="font-size:70%">&reg;</sup> JS 2 provides a set of icons that can be loaded by applying `e-icons` class name to the element. You can also use third party icons on the Button using the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/button#iconcss) property.

## Button size

The two types of Button sizes are default and small. To change the size of the default Button to small Button, set the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/button#cssclass) property to `e-small`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/size-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/size-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/size-cs1" %}

## See Also

* [Customize Button appearance](./how-to/customize-button-appearance)
* [How to create block button](./how-to/create-a-block-button)
* [How to create repeat button](./how-to/repeat-button)