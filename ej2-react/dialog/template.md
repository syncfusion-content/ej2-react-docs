---
layout: post
title: Template in React Dialog | Syncfusion
description: Customize the React Dialog header, footer, and content using template properties that accept plain text or HTML strings for full control over dialog layout.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Dialog

The Dialog supports templating for the header, content, and footer sections. Text and HTML content can be appended to these sections through template properties.

## Header

The Dialog header content is provided through the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog#header) property, which accepts both text and HTML content as a string or a React node/function (JSX) for full control over the header layout. A built-in close button can be enabled via the [`showCloseIcon`](https://ej2.syncfusion.com/react/documentation/api/dialog#showcloseicon) property.

## Footer

The Dialog footer can be enabled using the built-in [`buttons`](https://ej2.syncfusion.com/react/documentation/api/dialog#buttons) collection or by providing any HTML string/React node through the [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/dialog#footertemplate).

> The [`buttons`](https://ej2.syncfusion.com/react/documentation/api/dialog#buttons) and [`footerTemplate`](https://ej2.syncfusion.com/react/documentation/api/dialog#footertemplate) properties can't be used at the same time.

## Content

The Dialog content is provided through the [`content`](https://ej2.syncfusion.com/react/documentation/api/dialog#content) property, which accepts both text and HTML strings, or by placing child JSX elements directly inside the `<DialogComponent>`.

The following example demonstrates the usage of header, footer, and content templates in the Dialog. In the example, the header is set via a React function returning JSX, the footer is set through the `footerTemplate` property returning JSX, and the content is added as child JSX elements within the `DialogComponent`.

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
