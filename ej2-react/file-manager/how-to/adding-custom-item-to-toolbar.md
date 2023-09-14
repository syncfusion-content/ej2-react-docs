---
layout: post
title: Adding custom item to toolbar in React File manager component | Syncfusion
description: Learn here all about Adding custom item to toolbar in Syncfusion React File manager component of Syncfusion Essential JS 2 and more.
control: Adding custom item to toolbar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to toolbar in React File manager component

You can modify the items displayed in the toolbar by utilizing the [toolbarItems](https://ej2.syncfusion.com/react/documentation/api/file-manager/#toolbaritems) API. To display both default and customized items, it's essential to assign a unique **name** to each item. Additionally, you have the flexibility to alter the default items by adjusting properties such as **tooltipText, iconCss, Text, suffixIcon** and more. This level of customization allows you to tailor the toolbar to your specific requirements and design preferences. The names used in the code example below serve as unique identifiers for default toolbar items, while custom items can be assigned any unique name value to distinguish them from the defaults.

For instance, here's an example of how to add a custom checkbox to the toolbar using the **template** property. Here we have modified the default `New Folder` item and added a custom toolbar item for selection.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/toolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/toolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/toolbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/toolbar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/toolbar-cs1" %}