---
layout: post
title: Model dialog with rte in React Dialog component | Syncfusion
description: Learn here all about Model dialog with rte in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Model dialog with rte 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Model dialog with rte in React Dialog component

This section explains how to render model dialog with the Rich Text Editor component. when you render model dialog with the Rich Text Editor component, the first row of the content will be hidden because the dialog container and its wrapper elements are styled with display as none. so, the editor’s toolbar does not get proper offset width and rendered above the edit area container. In this scenario, we could use the `refreshUI` method on the Dialog `open` event.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs1" %}