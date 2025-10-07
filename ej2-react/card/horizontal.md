---
layout: post
title: Horizontal in React Card component | Syncfusion
description: Learn here all about Horizontal in Syncfusion React Card component of Syncfusion Essential JS 2 and more.
control: Card 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Horizontal in React Card component

By default, all card elements are aligned vertically in a stacked layout following the natural DOM flow. The horizontal layout provides an alternative arrangement where card elements are positioned side-by-side, creating a more compact and visually engaging presentation for content that benefits from lateral organization.

To achieve horizontal alignment, add the `e-card-horizontal` class to the root card element. This transforms the default vertical layout into a horizontal arrangement where child elements flow from left to right.

## Stacked cards

* An horizontally aligned card can push a specific column to align vertical using `e-card-stacked` class.
This will align the stacked section vertically aligned differentiating from horizontal layout.

Class   | Description
------------ | -------------
`e-card-horizontal` | Aligns card elements horizontally in a side-by-side layout.
`e-card-stacked` | Forces vertical alignment for specific sections within a horizontal layout.

```
        <div className="e-card e-card-horizontal">
            <img src="code1.png" alt="Sample">   --> Aligned horizontally
            <div className="e-card-stacked">         --> Horizontal container
               // Inside this element, all content flows vertically
            </div>
        </div>
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_horizontal-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_horizontal-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_horizontal-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_horizontal-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_horizontal-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_horizontal-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_horizontal-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_horizontal-cs2" %}
