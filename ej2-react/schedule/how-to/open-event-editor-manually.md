---
layout: post
title: Open event editor manually in React Schedule component | Syncfusion
description: Learn here all about Open event editor manually in Syncfusion React Schedule component of Syncfusion Essential JS 2 and more.
control: Open event editor manually 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open event editor manually in React Schedule component

## Open Editor Window externally

Schedule allows user to manually open the event editor on specific time or on certain events using `openEditor` method as shown below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-open-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-open-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-open-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-open-cs1" %}

## Open editor window on single click

By default, Scheduler Editor window will open when double clicking the cells or appointments. You can also open the editor window with single click by using `openEditor` method in `eventClick` and `cellClick` events of scheduler and setting false to `showQuickInfo`. The following example shows how to open editor window on single click of cells and appointments.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/schedule/editor-open-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/schedule/editor-open-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/schedule/editor-open-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/schedule/editor-open-cs2" %}
