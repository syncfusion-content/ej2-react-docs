---
layout: post
title: Card Image in React Card | Syncfusion
description: Display full-width images, titles, and dividers inside a Syncfusion React Card using the e-card-image and e-card-separator classes.
control: Card
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Card Image in React Card

## Images

The Card component supports including images within its elements. You can add an image as a direct element anywhere inside the card root by adding the `e-card-image` class to a `div` element. Using this class, you can write CSS styles to load images into that element.

> Card images occupy the full width of their parent element by default.

```
    <div className = "e-card">
        <div className="e-card-image">
        </div>
    </div>
```

### Title

Card images support including a title or caption for the image. By default, the title appears over the image in the left-bottom position with an overlay effect.

```
    <div className = "e-card">
        <div className="e-card-image">
            <div className="e-card-title"></div>
        </div>
    </div>
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_img-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_img-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_img-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_img-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_img-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_img-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_img-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_img-cs2" %}

## Divider

Dividers are used to separate elements inside the card. You can add a divider inside the card elements to create visual separation between different sections.

* Place a `div` element with the `e-card-separator` class inside the card element to add a divider between sections.


`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-cs2" %}

## See Also

* [How to customize the card image title position](./how-to/customize-the-card-image-title-position)