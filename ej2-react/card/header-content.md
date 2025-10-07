---
layout: post
title: Header content in React Card component | Syncfusion
description: Learn here all about Header content in Syncfusion React Card component of Syncfusion Essential JS 2 and more.
control: Card 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Header content in React Card component

## Header

The Card component can be created with header title, subtitle, and images. To add a header, create a `div` element with the class `e-card-header`.

The Card provides the following elements and corresponding class definitions to include header content:

Elements   | Description
------------ | -------------
Caption | The wrapper element that includes title and subtitle content.
Image | Supports header images with specified dimensions and positioning.

Class   | Description
------------ | -------------
`e-card-header-caption` | To group the title and subtitle within the header which acts as wrapper.
`e-card-header-title` |  Main title text with in the header.
`e-card-sub-title` | A sub-title within the header.
`e-card-header-image` | To include heading image within the header.
`e-card-corner` | To add rounded corner for the image.

### Adding Title and Subtitle

To add a header to the Card component, create a wrapper `div` element with the `e-card-header-caption` class.

* Place a `div` element with the `e-card-header-title` class inside the header caption for the main title.

* Place a `div` element with the `e-card-sub-title` class inside the header caption element for the subtitle.

### Header Image

The Card header provides an option for adding images within the header section. Images are positioned either before or after the header caption based on the HTML element's position in the header structure.

* Add a header image by creating a `div` element with the `e-card-header-image` class, which can be placed before or after the header caption wrapper element.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-img-con-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-img-con-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-img-con-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-img-con-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-img-con-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-img-con-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-img-con-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-img-con-cs2" %}

## Content

The content section in Card components holds text, images, links, and all possible HTML elements. Content is adaptable within the Card root element and provides flexibility for various content types.

* Create a `div` element with the class `e-card-content`.
* Place the content `div` element within the Card root element or inside any Card inner elements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-img-con-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-img-con-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-img-con-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-img-con-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/card/card_header-img-con-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/card/card_header-img-con-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/card/card_header-img-con-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/card/card_header-img-con-cs4" %}