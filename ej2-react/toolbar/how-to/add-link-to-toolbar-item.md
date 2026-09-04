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

You can add a link inside the React Toolbar using a React `template`. Follow the guidelines below to add a link as a template in the React Toolbar.

1. Declare a template within a function that returns a JSX element. The template can receive the item's data object as an argument (e.g., `props` containing the React toolbar item); if the template does not need any arguments, there is no need to pass any properties.

2. Assign the function as the value for the `template` option of the React toolbar item, for example `<ItemDirective template={linkTemplate} />`.

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