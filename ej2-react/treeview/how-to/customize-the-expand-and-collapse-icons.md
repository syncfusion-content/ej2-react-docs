---
layout: post
title: How to customize expand/collapse icons in React | Syncfusion
description: Replace the default expand and collapse icons on the Syncfusion React TreeView with custom icon CSS via expandIcon and collapseIcon.
control: Customize the expand and collapse icons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to customize expand/collapse icons in React

You can customize React Tree View expand and collapse icons by applying a custom CSS class to the React Tree View component using the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/treeview/#cssclass)&nbsp;property and then overriding the default icon styles. Refer to the sample to customize expand/collapse icons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tree-view/basic-cs9/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tree-view/basic-cs9/app/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.html" %}
{% include code-snippet/tree-view/basic-cs9/index.html %}
{% endhighlight %}
{% highlight ts tabtitle="style.css" %}
{% include code-snippet/tree-view/basic-cs9/style.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/tree-view/basic-cs9" %}