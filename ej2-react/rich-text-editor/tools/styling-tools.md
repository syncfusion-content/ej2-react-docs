---
layout: post
title: Styling Tools in React Rich Text Editor component | Syncfusion
description: Learn here all about Styling tools in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Styling tools
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Styling Tools in React Rich Text Editor Component

The React Rich Text Editor's styling tools enable customization of font family, size, and colors, enhancing content presentation in a WYSIWYG editor. Configure these tools using the [toolbarSettings.items](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#items) property with `FontName`, `FontSize`, `FontColor`, and `BackgroundColor`. 

## Font family

The Rich Text Editor initializes with a default font family, which inherits the font family of the parent element. You can change the font for selected text using the font family dropdown in the toolbar. When the default font family is selected, the toolbar will display "Font Name". However, for other font families, the toolbar will show the name of the selected font.

To apply a different font style to a specific section of the content, follow these steps:

1. Select the text you want to change.
2. Choose the desired font style from the drop-down menu in the toolbar.

These steps will apply the selected font style to the chosen text, allowing you to customize the appearance of your content easily.

### Built-in font family

You can add the `FontName` tool to the toolbar in the Rich Text Editor toolbar using [toolbarSettings.items](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#items) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/font-family-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/font-family-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/font-family-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/font-family-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/font-family-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/font-family-cs2" %}

The Rich Text Editor comes with a pre-configured set of [fontFamily](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fontfamily) property.

### Custom font family

The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [fontFamily](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fontfamily) property. This allows you to extend the available font options beyond the default selection.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs62/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs62/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs62" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs63/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs63/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs63" %}

### Google font support

To use web fonts in Rich Text Editor, it is not needed for the web fonts to be present in local machine. To add the web fonts to Rich Text Editor, you need to refer the web font links and add the font names in the [fontFamily](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fontfamily) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/how-to-fonts-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/how-to-fonts-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-fonts-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/how-to-fonts-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/how-to-fonts-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/how-to-fonts-cs2" %}

The below font style links are referred in the page.

```ts

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that we have added two Google web fonts (`Roboto` and `Great vibes`) to `RTE`.

## Font size

The Rich Text Editor initializes with a default font size, which inherits the font size of the parent element. You can change the font for selected text using the font size dropdown in the toolbar. When the default font size is selected, the toolbar will display "Font Size". However, for other font sizes, the toolbar will show the name of the selected font.

### Built-in font size

You can add the `FontSize` tool to the toolbar in the Rich Text Editor toolbar using [toolbarSettings.items](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#items) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs60/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs60/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs60" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs61/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs61/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs61" %}

The Rich Text Editor includes a default set of [fontSize](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fontsize) property.

### Custom font size

The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [fontSize](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fontsize) property. This allows you to extend the available font options beyond the default selection.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/custom-font-size-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/custom-font-size-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/custom-font-size-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/custom-font-size-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/custom-font-size-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/custom-font-size-cs2" %}

## Font and background color

You can add the `FontColor` and `BackgroundColor` tool s to the toolbar in the Rich Text Editor using [toolbarSettings.items](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#items) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/font-background-color-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/font-background-color-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/font-background-color-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/font-background-color-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/font-background-color-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/font-background-color-cs2" %}

### Custom font and background color

To apply `font color` or `background color` to selected content in the Rich Text Editor, use the font color and background color tools.

The Rich Text Editor offers custom font and background colors along with the existing list through the [colorCode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/backgroundColor/#colorcode) field of the [fontColor](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#fontcolor) and [backgroundColor](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#backgroundcolor) properties.

Both the `FontColor` and `BackgroundColor` properties offer two modes: `Picker` and `Palette`. The Palette mode provides a predefined set of colors, while the Picker mode includes a color scheme to choose custom colors. You can switch between these options using the [modeSwitcher](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/fontColorModel/#modeswitcher) feature.

We can specify the number of columns in the color palette for both `FontColor` and `BackgroundColor` using the [columns](https://helpej2.syncfusion.com/react/documentation/api/rich-text-editor/backgroundColorModel/#columns) property.

The [default](https://helpej2.syncfusion.com/react/documentation/api/rich-text-editor/backgroundColorModel/#default) property specifies the default `FontColor` and `BackgroundColor` that is applied when no color is explicitly selected by the user. This color will be preselected in the `FontColor` and `BackgroundColor` color palettes and used as the initial highlight color for text.


`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs64/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs64/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs64" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs65/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs65/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs65" %}

### Show recent color

The [showRecentColors](https://helpej2.syncfusion.com/react/documentation/api/rich-text-editor/fontColor/#showrecentcolor) feature in the Rich Text Editor provides quick access to a row of recently used colors displayed below the main palette. This streamlines editing by keeping frequently used colors easily accessible, improving styling efficiency and consistency.

This feature can be enabled separately for the [fontColor](https://helpej2.syncfusion.com/react/documentation/api/rich-text-editor/#fontcolor) and [backgroundColor](https://helpej2.syncfusion.com/react/documentation/api/rich-text-editor/#backgroundcolor) tools, giving flexibility based on formatting needs. It is especially helpful when working with consistent color themes, eliminating the need to repeatedly search through the full palette.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/show-recent-color-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/show-recent-color-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/show-recent-color-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/show-recent-color-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/show-recent-color-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/show-recent-color-cs2" %}