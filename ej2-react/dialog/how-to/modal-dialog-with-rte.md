---
layout: post
title: Modal dialog with Rich Text Editor in React Dialog | Syncfusion
description: Learn here all about rendering a modal dialog with the Rich Text Editor component in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Modal dialog with Rich Text Editor 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Modal dialog with Rich Text Editor in React Dialog component

This section explains how to render a modal dialog with the Rich Text Editor (RTE) component. When a modal dialog contains the Rich Text Editor, the editor's toolbar may fail to render. This happens because the dialog container and wrapper elements are initially hidden with `display: none`. As a result, the toolbar cannot calculate its correct offset width.

To resolve this issue, call the RTE [`refreshUI`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor#refreshui) method in the Dialog [`open`](https://ej2.syncfusion.com/react/documentation/api/dialog#open) event handler. The `open` event fires after the Dialog becomes visible, ensuring the RTE can correctly measure and render its toolbar at that point.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs1" %}
