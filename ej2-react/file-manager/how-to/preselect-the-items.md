---
layout: post
title: Preselect the items in React File Manager component | Syncfusion
description: Learn here all about Preselect the items in Syncfusion React File Manager component of Syncfusion Essential JS 2 and more.
control: Preselect the items 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Preselect the items in React File Manager component

You can preselect the items in the File Manager component by utilizing the [fileLoad](https://ej2.syncfusion.com/react/documentation/api/file-manager/#fileload) event. The required file and folder names must be stated in the declared string array variable. In the event handler, we have to assign the array of file and folder names to the [selectedItems](https://ej2.syncfusion.com/react/documentation/api/file-manager/#selecteditems) property.

The following example shows how to preselect the items.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/preselect-items-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/preselect-items-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/preselect-items-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/preselect-items-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/preselect-items-cs1" %}