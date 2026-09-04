---
layout: post
title: How to embed other components in Toolbar | Syncfusion
description: Embed other React components inside the Syncfusion React Toolbar by assigning a function or string template to an item.
control: Render other components in toolbar using template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render other components in Toolbar using template

You can render other components inside the React Toolbar using a React `template`. This allows you to add other components directly, with all their functionality, to the React Toolbar. Follow the guidelines below for using other components as a template in the React Toolbar. For general `template` configuration, refer to [template configuration](../template-configuration.md).

1. Declare a template within a function that returns a JSX element. The template can receive the item's data object as an argument (e.g., `props` containing the React toolbar item). If the template does not need arguments, there is no need to pass any properties.

2. Assign the function as the value for the `template` property, for example `<ItemDirective template={contentTemplate} />`.

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