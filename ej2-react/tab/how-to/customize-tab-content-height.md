---
layout: post
title: How to customize Tab content height in React | Syncfusion
description: Set the Syncfusion React Tab content area height to Auto, Fill, Min, or a fixed pixel value via the heightAdjustMode property.
control: Customize tab content height 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize Tab content height in React

You can change the React Tab content height by using the [`heightAdjustMode`](https://ej2.syncfusion.com/react/documentation/api/tab#heightadjustmode) property. By default, the React Tab content [`heightAdjustMode`](https://ej2.syncfusion.com/react/documentation/api/tab#heightadjustmode) property is set to `Content`.

* **None**: Each React Tab content height is set based on the React Tab height. This value is used only when the React Tab component has the [`height`](https://ej2.syncfusion.com/react/documentation/api/tab#height) property set.
* **Auto**: Each React Tab content height takes the maximum height of all React Tab contents.
* **Content**: Each React Tab content height is set based on its own content.
* **Fill**: Each React Tab content height is set based on the full height of the React Tab's parent element.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/height-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/height-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/height-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/height-cs1" %}