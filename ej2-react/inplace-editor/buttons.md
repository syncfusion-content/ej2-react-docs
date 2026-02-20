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

The In-place Editor provides save and cancel actions through customizable buttons. The [saveButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#savebutton) and [cancelButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#cancelbutton) properties accept [ButtonModel](https://ej2.syncfusion.com/react/documentation/api/button/buttonModel/) objects for customizing button appearance and behavior.

Control button visibility by setting the [showButtons](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#showbuttons) property to `true` or `false`.

> When buttons are hidden, value submission is handled through alternative methods:

* **[actionOnBlur](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actiononblur)**: Clicking outside the editor triggers the submit action based on this property's configuration.
* **[submitOnEnter](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#submitonenter)**: Pressing the `Enter` key triggers the submit action when this property is set to `true`.

In the following sample, the [content](https://ej2.syncfusion.com/react/documentation/api/button/#content) and [cssClass](https://ej2.syncfusion.com/react/documentation/api/button/#cssclass) properties are assigned to the [saveButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#savebutton) and [cancelButton](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#cancelbutton) properties to customize button appearance. Use the checkbox to dynamically show or hide the buttons.

To prevent a button from rendering in the DOM, pass an empty object `{}` to the `saveButton` or `cancelButton` property.

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