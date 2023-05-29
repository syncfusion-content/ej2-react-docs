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

The toolbar items can be customized using the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#toolbarsettings) API and [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/file-manager/#toolbarclick) events.

The following example shows adding a custom item in the toolbar.

The new toolbar button is added using [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#toolbarsettings). The [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/file-manager/#toolbarclick) event is used to add an event handler to the new toolbar button.

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