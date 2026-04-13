---
layout: post
title: Implementing Ctrl+s Shortcut for Value Updates | Syncfusion
description: Learn here all about Update value in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Implementing Ctrl+s Shortcut for Value Updates
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Implementing Ctrl+s Shortcut for Value Updates in React Rich Text Editor Component

To implement this functionality, you bind a `keydown` event to the Rich Text Editor content and capture the <kbd>Ctrl</kbd> + <kbd>s</kbd> key press using its keyCode.

In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#value) property and then you can save the content in the required database using the same.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs24/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs24/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs24" %}

`[functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs25/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs25/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs25" %}