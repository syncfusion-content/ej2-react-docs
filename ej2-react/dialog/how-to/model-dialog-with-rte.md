---
layout: post
title: Modal dialog with Rich Text Editor in React Dialog component | Syncfusion
description: Learn here all about rendering a modal dialog with the Rich Text Editor component in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Modal dialog with Rich Text Editor 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Modal dialog with Rich Text Editor in React Dialog component

This section explains how to render a modal dialog with the Rich Text Editor (RTE) component. When a modal dialog contains the Rich Text Editor component, the editor's toolbar may not render properly because the dialog container and wrapper elements are initially hidden with `display: none`. This prevents the toolbar from calculating its correct offset width. To resolve this issue, use the `refreshUI` method on the Dialog `open` event to properly initialize the editor after the dialog becomes visible.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs1" %}