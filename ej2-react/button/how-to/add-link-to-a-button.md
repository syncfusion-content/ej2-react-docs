---
layout: post
title: How to add link to a button in React Button | Syncfusion
description: Style a React Button as a hyperlink using the e-link CSS class and handle navigation in the click event with window.open().
control: Add link to a button 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add link to a button in React Button

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