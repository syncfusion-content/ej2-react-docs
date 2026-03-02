---
layout: post
title: Add link to a button in React Button component | Syncfusion
description: Learn here all about Add link to a button in Syncfusion React Button component of Syncfusion Essential JS 2 and more.
control: Add link to a button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Add link to a button in React Button component

The Button can be styled to appear as a link by using the `e-link` class through the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/button#cssclass) property. Link navigation is handled in the Button's click event using `window.open()` method.

The following example demonstrates how to add navigation functionality to a Button:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/button/default-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/button/default-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/button/default-cs2" %}