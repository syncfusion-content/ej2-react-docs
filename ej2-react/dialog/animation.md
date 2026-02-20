---
layout: post
title: Animation in React Dialog component | Syncfusion
description: Learn here all about Animation in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Animation 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Animation in React Dialog component

The Dialog can be animated during the open and close actions. Animation properties such as [`delay`](https://ej2.syncfusion.com/react/documentation/api/dialog/animationSettings/#delay), [`duration`](https://ej2.syncfusion.com/react/documentation/api/dialog/animationSettings/#duration), and [`effect`](https://ej2.syncfusion.com/react/documentation/api/dialog/animationSettings/#effect) can be customized using the [animationSettings](https://ej2.syncfusion.com/react/documentation/api/dialog/#animationsettings) property.

<!-- markdownlint-disable MD033 -->
<table>
<tr>
<td>
delay</td><td>
The Dialog animation will start with the mentioned delay</td></tr>
<tr>
<td>
duration</td><td>
Specifies the animation duration to complete with one animation cycle</td></tr>
<tr>
<td>
effect</td><td>
Specifies the animation effects of Dialog open and close actions effect.
<br /><br />
List of supported animation effects:
<br />
'Fade' | 'FadeZoom' | 'FlipLeftDown' | 'FlipLeftUp' | 'FlipRightDown' | 'FlipRightUp' | 'FlipXDown' |
'FlipXUp' | 'FlipYLeft' | 'FlipYRight' | 'SlideBottom' | 'SlideLeft' | 'SlideRight' | 'SlideTop' |
'Zoom'| 'None'
<br /><br />
If the user sets ‘Fade’ effect, then the Dialog will open with ‘FadeIn’ effect and close with ‘FadeOut’ effect
</td></tr>
</table>

In the following sample, the `Zoom` effect is enabled. The Dialog will open with `ZoomIn` and close with `ZoomOut` effects.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/getting-started-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/getting-started-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/getting-started-cs4" %}