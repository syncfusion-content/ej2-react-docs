---
layout: post
title: How to change Sub Menu position in React Menu | Syncfusion
description: Reposition a Syncfusion React Menu sub menu by overriding the `args.top` and `args.left` values in the `beforeOpen` event arguments.
control: Change sub menu position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to change Sub Menu position in React Menu

The submenu position can be changed by using the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeopen) event. Assign the top and left position where you want to open the submenu to the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/menu/#beforeopen) event arguments `args.top` and `args.left` respectively.

In the below sample, the sub menu opens above the parent React menu item.

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