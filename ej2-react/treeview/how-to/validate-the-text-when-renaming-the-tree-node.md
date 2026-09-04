---
layout: post
title: How to validate node text on rename in React | Syncfusion
description: Validate new text in the Syncfusion React TreeView rename editor by handling the nodeEditing event and canceling on invalid input.
control: Validate the text when renaming the tree node 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to validate node text on rename in React

You can validate the tree node text while editing using the [`nodeEditing`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeediting) event of the React Tree View (cancel the edit by setting `args.cancel = true` inside the event). The [`nodeEdited`](https://ej2.syncfusion.com/react/documentation/api/treeview#nodeedited) event fires after a successful rename and can also be used to react to the new value. Following is an example that shows how to validate and prevent empty values in tree node.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/validation-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/validation-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/validation-cs1/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/validation-cs1/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/validation-cs1" %}