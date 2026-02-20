---
layout: post
title: Configuration in React Inplace editor component | Syncfusion
description: Learn here all about Configuration in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Configuration 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Configuration in React Inplace editor component

## Rendering modes

The In-place Editor supports two rendering modes:

* Popup
* Inline

> By default, the component renders in `Popup` mode when opening the editor.

* **Popup mode**: The editable container displays as a tooltip or popover above the element.

* **Inline mode**: The editable container replaces the element directly, without a popup. Specify `mode` as `Inline` to enable this mode.

In the following sample, the In-place Editor renders in `Inline` mode. Dynamically switch modes by changing the dropdown selection.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/modes-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/modes-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/modes-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/modes-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/modes-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/modes-cs2" %}

### Pop-up customization

Customize the popup mode by using the [title](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/#title) and [model](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/#model) properties in the [popupSettings](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/) API.

The popup is rendered using the Essential<sup style="font-size:70%">&reg;</sup> JS 2 React Tooltip component. Customize popup behavior by configuring tooltip properties and events through the [model](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/#model) property of [popupSettings](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/).

> For more details, refer to the Tooltip documentation [section](../tooltip/).

In the following sample, the popup [title](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/#title) and [position](https://ej2.syncfusion.com/react/documentation/api/tooltip/#position) are customized using the [popupSettings](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/) property. The dropdown lists all available tooltip positions. When a dropdown item is selected, the corresponding position value is bound to the [model](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/popupSettings/#model) property and applied to the [Tooltip](../tooltip/) component. Available position options include:

* TopLeft
* TopCenter
* TopRight
* BottomLeft
* BottomCenter
* BottomRight
* LeftTop
* LeftCenter
* LeftBottom
* RightTop
* RightCenter
* RightBottom

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/popup-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/popup-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/popup-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/popup-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/popup-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/popup-cs2" %}

## Event actions for editing

Control when the In-place Editor enters edit mode by configuring the [editableOn](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#editableon) property. By default, `Click` is assigned. The following options are also supported:

* **[Click](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/editableType/)**:  The editor will be opened as single click actions.
* **[DblClick](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/editableType/)**: The editor will be opened as double-click actions and it is not applicable for edit icon.
* **[EditIconClick](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/editableType/)**: Disables the editing of event action of input and allows user to edit only through edit icon.

> In-place Editor get focus by pressing the `tab` key from previous focusable DOM element and then by pressing `enter` key, the editor will be opened.

In the following sample, when switching drop-down item, the selected value assigned to the `editableOn` property. If you changed to `DblClick`, the editor will open when making a double click on the input.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/editable-on-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/editable-on-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/editable-on-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/editable-on-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/editable-on-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/editable-on-cs2" %}

## Action on focus out

Action to be performed when the user clicks outside the container, that means focusing out of editable content and it can be handled by the [actionOnBlur](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actiononblur) property, by default `Submit` assigned. It also has the following options.

* **[Cancel](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/actionBlur/)**: Cancels the editing and resets the old content.
* **[Submit](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/actionBlur/)**: Submits the edited content to the server.
* **[Ignore](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/actionBlur/)**: No action is performed with this type and allows to edit multiple editors.

In the following sample, when switching drop-down item, the selected value assigned to the `actionOnBlur` property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/action-on-blur-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/action-on-blur-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/action-on-blur-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/action-on-blur-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/action-on-blur-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/action-on-blur-cs2" %}

## Display modes

By default, In-place Editor input element highlighted with a dotted underline. To remove dotted underline from input element, add `data-underline="false"` attribute at In-place Editor root element.

In the following sample shows intractable and normal display modes with different samples.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/under-line-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/under-line-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/under-line-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/under-line-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/under-line-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/under-line-cs2" %}

## See Also

* [Disable the editor](./how-to/disable-edit-mode/)
* [Animate the editor during popup mode](./how-to/custom-animation/)