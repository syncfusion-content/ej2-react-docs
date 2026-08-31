---
layout: post
title: How to customize Toolbar scrollStep in React | Syncfusion
description: Set how many pixels the Syncfusion React Toolbar scrolls per arrow click by configuring the scrollStep property.
control: How to customize toolbar scroll step 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize Toolbar scrollStep in React

The Toolbar supports customizing the scrolling distance when you click the left and right side navigation icons. We can customize the [`scrollStep`](https://ej2.syncfusion.com/react/documentation/api/toolbar/index-default#scrollstep) property to set the scrolling distance. The `scrollStep` property accepts a `number` value (in pixels); the default is `0`. Use a positive integer value that suits your scrolling need (negative or zero values are not recommended as they produce no useful scroll). Note that `scrollStep` only applies when the [`overflowMode`](./responsive-mode.md) is `Scrollable` (the default). Refer to the following steps.

1. Using the Toolbar's `scrollStep` property, pass the required value to customize the scroll step.

```jsx
  <ToolbarComponent scrollStep={50} />
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/scrollstep-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/scrollstep-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/scrollstep-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/scrollstep-cs1" %}