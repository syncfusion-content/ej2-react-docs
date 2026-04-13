---
layout: post
title: Template in React Dialog component | Syncfusion
description: Learn here all about Template in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Dialog component

The Dialog supports templating for the header, content, and footer sections. Text and HTML content can be appended to these sections through template properties.

## Header

The Dialog header content is provided through the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog/#header) property, which accepts both text and HTML content as a string. A close button is also provided as built-in support and can be enabled through the [`showCloseIcon`](https://ej2.syncfusion.com/react/documentation/api/dialog/#showcloseicon) property.

## Footer

The Dialog footer can be enabled by adding built-in [`buttons`](https://ej2.syncfusion.com/react/documentation/api/dialog/#buttons) or providing any HTML string through the [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/dialog/#footertemplate).

> The [`buttons`](https://ej2.syncfusion.com/react/documentation/api/dialog/#buttons) and [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/dialog/#footertemplate) properties can't be used at the same time.

## Content

The Dialog content is provided through the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog/#content) property, which accepts both text and HTML strings.

The following example demonstrates the usage of header, footer, and content templates in the Dialog.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/template-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/template-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/template-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/template-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/template-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/template-cs2" %}

## See Also

* [How to add an icon to dialog buttons](./how-to/add-an-icons-to-dialog-buttons)
* [How to customize the dialog appearance](./how-to/customize-the-dialog-appearance)
