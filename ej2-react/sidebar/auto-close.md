---
layout: post
title: Auto close in React Sidebar component | Syncfusion
description: Learn here all about Auto close in Syncfusion React Sidebar component of Syncfusion Essential JS 2 and more.
control: Auto close 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Auto close in React Sidebar component

Sidebar often behaves differently on mobile display and differently on desktop display. It has an effective feature that offers to set it in opened or closed state depending on the specified resolution. This is achieved through [mediaQuery](https://ej2.syncfusion.com/react/documentation/api/sidebar#mediaquery) property that allows you to set the Sidebar in an expanded state or collapsed state only in user-defined resolution.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/auto-close-max-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/auto-close-max-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/auto-close-max-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/auto-close-max-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/auto-close-max-cs1" %}

* In this sample,the Sidebar will be in expanded state only in resolution below `400px`.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sidebar/auto-close-min-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sidebar/auto-close-min-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/sidebar/auto-close-min-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/sidebar/auto-close-min-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sidebar/auto-close-min-cs1" %}