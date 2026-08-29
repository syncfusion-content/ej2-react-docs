---
layout: post
title: Customization in React AutoComplete | Syncfusion
description: Style the Syncfusion React AutoComplete by overriding CSS for the wrapper, input, dropdown icon, focus state, and popup list to match your app's theme.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React AutoComplete

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of the wrapper element

Use the following CSS to customize the appearance of the wrapper element.

```css
.e-ddl.e-input-group.e-control-wrapper .e-input {
    font-size: 20px;
    font-family: emoji;
    color: #ab3243;
    background: #32a5ab;
}
```

## Customizing the dropdown icon color

Use the following CSS to customize the dropdown icon color. The dropdown icon is rendered in the input only when the [`showPopupButton`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#showpopupbutton) property is enabled.

```css
.e-ddl.e-input-group .e-input-group-icon,.e-ddl.e-input-group.e-control-wrapper .e-input-group-icon:hover {
    color: #bb233d;
    font-size: 13px;
}
```

## Customizing the focus color

Use the following CSS to customize the focus color of the input element.

```css
.e-ddl.e-input-group.e-control-wrapper.e-input-focus::before, .e-ddl.e-input-group.e-control-wrapper.e-input-focus::after {
    background: #c000ff;
}
```

## Customizing the outline theme focus color

Use the following CSS to customize the focus color of the outline theme.

```css
.e-outline.e-input-group.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus.e-control-wrapper:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled),.e-outline.e-input-group.e-control-wrapper.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) {
    border-color: #b1bd15;
    box-shadow: inset 1px 1px #b1bd15, inset -1px 0 #b1bd15, inset 0 -1px #b1bd15;
}
```

## Customizing the disabled component text color

Use the following CSS to customize the text color when the component is disabled.

```css
.e-input-group.e-control-wrapper .e-input[disabled] {
    -webkit-text-fill-color: #0d9133;
}
```

## Customizing the float label element focus color

Use the following CSS to customize the focus color of the float label element. This CSS applies only when the [`floatLabelType`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#floatlabeltype) property is set (e.g., `auto`, `always`).

```css
.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::after,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::after {
    background-color: #2319b8;
}

.e-ddl.e-input-group.e-control-wrapper.e-float-input.e-input-focus .e-float-text.e-label-top, .e-float-input.e-control-wrapper:not(.e-error).e-input-focus input ~ label.e-float-text {
    color: #2319b8;
}
```

## Customizing the color of the placeholder text

Use the following CSS to customize the text color of the placeholder.

```css
.e-ddl.e-input-group input.e-input::placeholder {
    color: red;
}
```

## Customizing the text selection color

Use the following CSS to customize the selection color of text and background.

```css
.e-ddl.e-input-group input.e-input::selection {
    color: red;
    background: yellow;
}
```

## Customizing the background color of focus, hover, and active items

Use the following CSS to customize the background color of focus, hover, and active items.

```css
.e-dropdownbase .e-list-item.e-item-focus, .e-dropdownbase .e-list-item.e-active, .e-dropdownbase .e-list-item.e-active.e-hover, .e-dropdownbase .e-list-item.e-hover {
    background-color: #1f9c99;
    color: #2319b8;
}
```

## Customizing the appearance of the popup element

Use the following CSS to customize the appearance of the popup element.

```css
.e-dropdownbase .e-list-item, .e-dropdownbase .e-list-item.e-item-focus {
    background-color: #29c2b8;
    color: #207cd9;
    font-family: emoji;
    min-height: 29px;
}
```

## Adding a mandatory asterisk to placeholder and float label

You can add a mandatory `asterisk (*)` to the placeholder and float label by applying the following CSS using the `.e-input-group.e-control-wrapper.e-float-input .e-float-text::after` selector. This requires the [`floatLabelType`](https://ej2.syncfusion.com/react/documentation/api/auto-complete#floatlabeltype) property to be set so the float label element is rendered.

```css
.e-input-group.e-control-wrapper.e-float-input .e-float-text::after {
    content: "*";
    color: red;
}
```

`[Class Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/asterisk-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/asterisk-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/asterisk-cs1" %}

`[Functional Component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/asterisk-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/asterisk-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/asterisk-cs2" %}
