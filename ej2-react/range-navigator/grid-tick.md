---
layout: post
title: Grid and Tick Lines in React Range Navigator | Syncfusion
description: Learn how to show and customize grid and tick lines on the Syncfusion React Range Navigator Component using major tick settings.
control: Grid tick
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Grid and Tick Lines in React Range Navigator

## Grid line customization

The gridlines indicate axis divisions by drawing the chart plot. Gridlines include helpful cues to the user, particularly for large or complicated charts. The `width`, `color`, and `dashArray` of the major gridlines can be customized by using the [`majorGridLines`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#majorgridlines) setting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs20/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs20/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs20" %}

## Tick line customization

Ticklines are the small lines which is drawn on the axis line representing the axis labels. Ticklines will be drawn outside the axis by default. The `width`, `color`, and `dashArray` of the major ticklines can be customized by using the [`majorTickLines`](https://ej2.syncfusion.com/react/documentation/api/range-navigator#majorticklines) setting.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rangenavigator/getting-started-cs21/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rangenavigator/getting-started-cs21/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rangenavigator/getting-started-cs21" %}