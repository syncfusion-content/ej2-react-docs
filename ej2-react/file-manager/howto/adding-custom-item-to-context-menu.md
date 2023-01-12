---
layout: post
title: Adding custom item to context menu in React File manager component | Syncfusion
description: Learn here all about Adding custom item to context menu in Syncfusion React File manager component of Syncfusion Essential JS 2 and more.
control: Adding custom item to context menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Adding custom item to context menu in React File manager component

The context menu can be customized using the [contextMenuSettings](https://ej2.syncfusion.com/react/documentation/api/file-manager/#contextMenuSettings),[menuOpen](https://ej2.syncfusion.com/react/documentation/api/file-manager/#menuOpen), and [menuClick](https://ej2.syncfusion.com/react/documentation/api/file-manager/#menuClick) events.

The following example shows adding a custom item in the context menu.

The [menuOpen](https://ej2.syncfusion.com/react/documentation/api/file-manager/#menuOpen) event is used to add the new menu item. The [menuClick](https://ej2.syncfusion.com/react/documentation/api/file-manager/#menuClick) event is used to add event handler to the new menu item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/file-manager/contextmenu-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/file-manager/contextmenu-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/file-manager/contextmenu-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/file-manager/contextmenu-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/file-manager/contextmenu-cs2" %}