---
layout: post
title: Positions in React Speed Dial | Syncfusion
description: Position the React Speed Dial on the page using the position property. Anchor to the viewport or a target element, and open on hover.
control: Positions 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Positions in React Speed Dial

Position the React Speed Dial component anywhere on the page or within a specific container using the [`position`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#position) property. If a [`target`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#target) element is specified, the React Speed Dial positions itself relative to that container; otherwise, it positions relative to the browser viewport.

The available position values are:
* TopLeft
* TopCenter
* TopRight
* MiddleLeft
* MiddleCenter
* MiddleRight
* BottomLeft
* BottomCenter
* BottomRight

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs1" %}

## Opens items on hover

Auto-open the React Speed Dial action items when the user hovers over the button by enabling the [`opensOnHover`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#opensonhover) property. By default, items only display when the button is clicked. Enabling hover opening provides a more interactive experience where items appear as the user approaches the button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs4/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs4/app/app.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/speed-dial/position-cs4/index.css %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs4" %}

## Programmatically show/hide Speed Dial items

Control React Speed Dial popup visibility through code using the [`show`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#show) and [`hide`](https://ej2.syncfusion.com/react/documentation/api/speed-dial#hide) methods. The `show()` method opens the popup, while `hide()` closes it. This allows you to integrate React Speed Dial opening/closing with other UI events or workflows.

The following example demonstrates how to open and close the action items programmatically on button click.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs2/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs2/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs2" %}

## Programmatically refresh the position

Update the React Speed Dial's position dynamically using the [`refreshPosition`](https://ej2.syncfusion.com/react/documentation/api/speed-dial/#refreshposition) method. Call this method when the target element's position changes (e.g., after window resize or layout changes) to ensure the React Speed Dial repositions correctly relative to its target container.

The following sample demonstrates how to refresh the React Speed Dial position when layout changes.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/speed-dial/position-cs3/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/speed-dial/position-cs3/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/speed-dial/position-cs3" %}
