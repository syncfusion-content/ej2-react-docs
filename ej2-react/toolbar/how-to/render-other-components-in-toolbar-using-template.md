---
layout: post
title: How to embed other components in Toolbar | Syncfusion
description: Embed other React components inside the Syncfusion React Toolbar by assigning a function or string template to an item.
control: Render other components in toolbar using template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to embed other components in Toolbar

You can render other components inside Toolbar using React **template**. Through this, we can add content as other components directly with all functionalities to our Toolbar. Follow the below guidelines for using the other components as template in Toolbar.

* Declare a template within the function returns jsx element. If the template does not need arguments no need to pass the properties.

* Assign the function as value for the template property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/direct-components-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/direct-components-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/direct-components-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/direct-components-cs1" %}