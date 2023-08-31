---
layout: post
title: Template in React Treeview component | Syncfusion
description: Learn here all about Template in Syncfusion React Treeview component of Syncfusion Essential JS 2 and more.
control: Template 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Template in React Treeview component

The TreeView component allows you to customize the look of TreeView nodes by using the [nodeTemplate](https://ej2.syncfusion.com/react/documentation/api/treeview#nodetemplate) property. This property accepts either `template string` or HTML element ID.

In the following sample, employee information such as employee photo, name, and designation have been included using the `nodeTemplate` property.

The template expression should be provided inside the `${...}` interpolation syntax.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/template-cs1" %}

 ## Stateless template

For specific needs of the application, users don’t want to re-render the TreeView component during state updates. This can be achieved using the `statelessTemplates` property. It specifies the array of template names where the state value updates need to be ignored. It will increase the performance of the components if users prevent state updates for the templates that are not required.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/template-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/template-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/template-cs2" %}

## See Also

* [How to customize the expand and collapse icons](./how-to/customize-the-expand-and-collapse-icons)
* [How to customize the tree nodes based on levels](./how-to/customize-the-tree-nodes-based-on-levels)