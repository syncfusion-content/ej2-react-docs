---
layout: post
title: How to integrate badge into ListView in React Badge | Syncfusion
description: Embed Syncfusion React Badges into ListView items to show notification counts, status, or priority with auto-sized layouts.
control: Badge
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to integrate badge into ListView in React Badge

Badges can be embedded within ListView items to provide visual indicators of status, priority, or notification counts. By combining these components, you create a rich list experience where badges dynamically reflect data changes. The Badge component automatically adjusts its dimensions relative to the parent ListView item, eliminating the need for manual size configuration. Color-coded badges can further enhance clarity by visually representing priority levels or notification types.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/badge/listview-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/badge/listview-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/badge/listview-cs1/index.html %}
{% endhighlight %}
{% highlight html tabtitle="index.css" %}
{% include code-snippet/badge/listview-cs1/index.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/badge/listview-cs1" %}
