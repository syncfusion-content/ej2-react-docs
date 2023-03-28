---
layout: post
title: Multiple selection in React File manager component | Syncfusion
description: Learn here all about Multiple selection in Syncfusion React File manager component of Syncfusion Essential JS 2 and more.
control: Multiple selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multiple selection in React File manager component

The file manager allows you to select multiple files by enabling the [allowMultiSelection](https://ej2.syncfusion.com/react/documentation/api/file-manager/#allowmultiselection) property (enabled by default). The multiple selection can be done by pressing the `Ctrl` key or `Shift` key and selecting the files. The check box can also be used to do multiple selection. `Ctrl + A` can be used to select all files in the current directory. The [fileSelect](https://ej2.syncfusion.com/react/documentation/api/file-manager/#fileselect) event will be triggered when the items of file manager control is selected or unselected.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/multiselect-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/multiselect-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/multiselect-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/multiselect-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/multiselect-cs1" %}

>Note: The File Manager has support to select files and folders initially or dynamically by specifying their names in [selectedItems](https://ej2.syncfusion.com/react/documentation/api/file-manager/#selecteditems) property.