---
layout: post
title: Action buttons in React Card Component | Syncfusion
description: Learn here all about action buttons in Syncfusion Essential React Card component, its elements and more.
control: Action buttons 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Action buttons in React Card Component

You can include Action buttons within the Card and customize them. Action button is a `div` element with `e-card-actions` class followed by button tag or anchor tag within the card root element.

* For adding action buttons you can create button or anchor tag with `e-card-btn` class within the card action element.

```
    <div className = "e-card">
        <div className="e-card-actions">
            <button className="e-card-btn"></button>
            <a href="#"></a>
        </div>
    </div>
```

## Vertical

By default, action buttons positioned in horizontal alignment , and also it can be aligned to show in vertical alignment by adding `e-card-vertical` class.

```
    <div className = "e-card">
        <div className="e-card-actions e-card-vertical">
            <button className="e-card-btn">More</button>
            <a href="#">Share</a>
        </div>
    </div>
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_action_btn-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_action_btn-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_action_btn-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_action_btn-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_action_btn-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_action_btn-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_action_btn-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_action_btn-cs2" %}

## See Also

* [How to integrate other component inside the card](./how-to/integrate-other-component-inside-the-card)
