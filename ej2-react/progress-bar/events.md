---
layout: post
title: Events in React Progress Bar | Syncfusion
description: Handle React Progress Bar valueChanged and progressCompleted events to respond to progress updates and completion in your app.
control: Events 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events in React Progress Bar

## valueChanged

This event is triggered when the progress value is changed.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-bar/events-cs1" %}

## progressCompleted

This event is triggered when the progress attains the `maximum` value.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/progress-bar/events-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/progress-bar/events-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/progress-bar/events-cs2" %}