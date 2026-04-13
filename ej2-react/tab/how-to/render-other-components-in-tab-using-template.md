---
layout: post
title: Render other components in tab using template in React Tab component | Syncfusion
description: Learn here all about Render other components in tab using template in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Render other components in tab using template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Render other components in tab using template in React Tab component

You can render other components inside Tab using React **template**. Through this, we can add content as other components directly with all functionalities to our Tab. Follow the below guidelines for using the other components as template in tab.

* Declare a template within the function returns jsx element. If the template does not need arguments no need to pass the properties.

* Assign the function as value for the template property.

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