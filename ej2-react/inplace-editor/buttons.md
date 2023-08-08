---
layout: post
title: Buttons in React Inplace editor component | Syncfusion
description: Learn here all about Buttons in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Buttons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Buttons in React Inplace editor component

The In-place Editor has an action for save and cancel using buttons. The [saveButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#savebutton) and [cancelButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#cancelbutton) properties accepts the [ButtonModel](https://ej2.syncfusion.com/react/documentation/api/button/buttonModel/) objects for customizing the save and cancel button properties.

Buttons can be show or hide by setting a boolean value to the [showButtons](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#showbuttons) property.

> Without buttons value actions will be performed by the following way.

* **[actionOnBlur](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actiononblur)**: By clicking out-side of the editor component it will get focus out and perform action based on this property value.
* **[submitOnEnter](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#submitonenter)**: Pressing `Enter` key it performs the submit action, when this property set to `true`.

In the following sample, the [content](https://ej2.syncfusion.com/react/documentation/api/button/#content) and [cssClass](https://ej2.syncfusion.com/react/documentation/api/button/#cssclass) properties of `Button` value assigned to the [saveButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#savebutton) and [cancelButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#cancelbutton) properties to customize its appearance. Also check or uncheck a checkbox buttons render or removed from the editor.

To restrict either save or cancel button rendering into a DOM, simply pass empty object `{}` in the  `saveButton` or `cancelButton` properties.

> For more details about buttons, refer this documentation [section](../button/).

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/show-buttons-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/show-buttons-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/show-buttons-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/show-buttons-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/show-buttons-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/show-buttons-cs2" %}

## See Also

* [In-place editor buttons](./how-to/dynamic-edit-mode/)