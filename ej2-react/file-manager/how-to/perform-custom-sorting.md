---
layout: post
title: Perform custom sorting in React File Manager | Syncfusion
description: Learn how to perform custom sorting in the React File Manager for the Large Icons view and Details view columns, with examples for natural sorting.
control: File Manager
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to perform custom sorting in React File Manager

The File Manager component provides a way to customize the default sort action for the LargeIconsView by defining the [sortComparer](https://ej2.syncfusion.com/react/documentation/api/file-manager#sortcomparer) property and for sorting individual columns in the DetailsView by defining the [sortComparer](https://ej2.syncfusion.com/react/documentation/api/file-manager/column#sortcomparer) property in the [columns](https://ej2.syncfusion.com/react/documentation/api/file-manager/column) property.

>Note: To achieve natural sorting like Windows Explorer, you can import the `SortComparer` function from the `'@syncfusion/ej2-react-filemanager'`. If you want to perform your own custom sorting, you can define your own `SortComparer` function.

The following example demonstrates how to define custom sort comparer function to achieve natural sorting behavior for the LargeIconsView and name column in DetailsView.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/customsorting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/customsorting-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/customsorting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/customsorting-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/customsorting-cs1" %}