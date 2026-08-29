---
layout: post
title: How to customize Tab scroll step in React Tab | Syncfusion
description: Set how many pixels the Syncfusion React Tab header scrolls per arrow click or swipe by configuring the scrollStep property.
control: Customize tab scroll step 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize Tab scroll step in React Tab

Tab supports customizing the scrolling distance when you click the left and right side navigation icons. Use the [`scrollStep`](https://ej2.syncfusion.com/react/documentation/api/tab#scrollstep) property (in pixels) to set the desired scroll distance. Refer to the following code example.

Pass the required pixel value to the Tab `scrollStep` property to customize the scroll step.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/scrollstep-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/scrollstep-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/scrollstep-cs1" %}