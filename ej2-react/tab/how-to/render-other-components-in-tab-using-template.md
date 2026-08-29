---
layout: post
title: How to render other components in Tab in React | Syncfusion
description: Render arbitrary React components inside a Syncfusion React Tab item by assigning a function template to the item.
control: Render other components in tab using template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render other components in Tab in React

You can render other components inside Tab using a React **template**. Through this, you can add content as other components directly with all their functionalities to your Tab. Follow the guidelines below for using other components as a template in the Tab.

* Declare a template within a function that returns a JSX element. If the template does not need arguments, there is no need to pass any properties.

* Assign the function as the value for the template property.

To quickly get started with integrating UI components inside the React Tabs component, you can check out this video:

{% youtube "https://www.youtube.com/watch?v=6NKtKpB8XNI" %}

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/direct-components-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/direct-components-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/direct-components-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/direct-components-cs1" %}

## Passing props

The following code example demonstrates how to use `props` when rendering other components in tab component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/direct-components-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/direct-components-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/direct-components-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/direct-components-cs2" %}