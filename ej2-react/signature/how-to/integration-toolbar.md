---
layout: post
title: How to use Signature with Toolbar in React Signature | Syncfusion
description: Wire the React Signature undo, redo, and clear actions to a toolbar by listening to the toolbar change event with canUndo, canRedo, and isEmpty.
control: Integration toolbar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to use Signature with Toolbar in React Signature

Integrate the React Signature component with a toolbar by using the toolbar's `change` event. The [`canUndo`](https://ej2.syncfusion.com/react/documentation/api/signature/#canundo), [`canRedo`](https://ej2.syncfusion.com/react/documentation/api/signature/#canredo), and [`isEmpty`](https://ej2.syncfusion.com/react/documentation/api/signature/#isempty) methods enable or disable the undo, redo, and clear buttons based on state.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/signature/toolbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/signature/toolbar-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/signature/toolbar-cs1" %}
