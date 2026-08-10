---
layout: post
title: How to add a link to a Toolbar item in React | Syncfusion
description: Add a clickable hyperlink as a Syncfusion React Toolbar item by setting the command type to Input and binding an anchor element.
control: Add link to toolbar item 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add a link to a Toolbar item in React

You can add link inside Toolbar using React **template**. Follow the below guidelines for add link as template in Toolbar.

* Declare a template within the function which returns jsx element. If the template does not need any arguments, then no need to pass the properties.

* Assign the function as value for the **template** option of toolbar item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/toolbar/toolbar-link-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/toolbar/toolbar-link-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/toolbar/toolbar-link-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/toolbar/toolbar-link-cs1" %}