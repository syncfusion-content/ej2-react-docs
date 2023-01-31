---
layout: post
title: Dynamic edit mode in React Inplace editor component | Syncfusion
description: Learn here all about Dynamic edit mode in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Dynamic edit mode 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Dynamic edit mode in React Inplace editor component

At component initial load, if you want to open editor state without interacting In-place Editor input element, it can be achieved by configuring the [enableEditMode](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#enableeditmode) property to `true`.

In the following sample, editor opened at initial load and when toggling a checkbox, it will remove or open the editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/dynamic-edit-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/dynamic-edit-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/dynamic-edit-cs2" %}