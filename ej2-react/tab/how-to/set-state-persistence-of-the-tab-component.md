---
layout: post
title: How to set state persistence in Tab in React | Syncfusion
description: Persist the active Syncfusion React Tab item across page reloads by enabling enablePersistence to store state in local storage.
control: Set state persistence of the tab component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to set state persistence in Tab in React

State persistence allows the Tab to retain the current modal value in the browser cookies for state maintenance. This action is handled through the [`enablePersistence`](https://ej2.syncfusion.com/react/documentation/api/tab/#enablepersistence) property which is set to false by default. When it is set to true, some of the Tab component model values will be retained even after refreshing the page.

The following sample demonstrates how to set state persistence of the Tab component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/persistence-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/persistence-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/persistence-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/persistence-cs2" %}
