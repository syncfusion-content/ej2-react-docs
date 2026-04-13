---
layout: post
title: Change sub menu position in React Menu component | Syncfusion
description: Learn here all about Change sub menu position in Syncfusion React Menu component of Syncfusion Essential JS 2 and more.
control: Change sub menu position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Change sub menu position in React Menu component

The submenu position can be changed by using the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeopen) event. Assign the top and left position where you want to open the submenu to the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeopen) event arguments `args.top` and `args.left` respectively.

In the below sample, the sub menu opens above the parent menu item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/menu/position-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/menu/position-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/menu/position-cs1" %}

>> For custom positioning, set both `top` and `left` position in the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeopen) event.