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

In Dialog the template support is provided to header, content and footer sections. So any text or HTML content can be appending in these sections.

## Header

The Dialog header content can be provided through the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog/#header) property, and it will allow both text and any HTML content as a string.
Also in header, close button is provided as built-in support, and this can be enabled through the [`showCloseIcon`](https://ej2.syncfusion.com/react/documentation/api/dialog/#showcloseicon) property.

## Footer

The Dialog footer can be enabled by adding built-in [`buttons`](https://ej2.syncfusion.com/react/documentation/api/dialog/#buttons) or providing any HTML string through the [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/dialog/#footertemplate).

> The [`buttons`](https://ej2.syncfusion.com/react/documentation/api/dialog/#buttons) and [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/dialog/#footertemplate) properties can't be used at the same time.

## Content

The Dialog content can be provided through the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog/#content) property, and it accepts both text and HTML string as content.

The below example demonstrates the usage of header, footer and content template in the Dialog.

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
