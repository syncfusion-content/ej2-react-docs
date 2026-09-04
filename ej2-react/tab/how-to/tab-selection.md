---
layout: post
title: How to detect Tab selection in React Tab | Syncfusion
description: React to the user selecting a Syncfusion React Tab item by handling the select event and reading the new selected index.
control: Tab selection 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to detect Tab selection in React Tab

You can detect whether a React Tab was selected by the user or programmatically by reading the `isInteracted` field of the [`selecting`](https://ej2.syncfusion.com/react/documentation/api/tab#selecting) and [`selected`](https://ej2.syncfusion.com/react/documentation/api/tab#selected) event arguments. The field returns `true` when the user changes the React tab through click actions, and `false` when the change is performed programmatically. The following code example demonstrates how to read the React Tab selection state from both events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/tab-cs8/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/tab-cs8/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/tab-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/tab-cs8" %}
