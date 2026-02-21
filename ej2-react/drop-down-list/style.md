---
layout: post
title: Style in React Drop down list component | Syncfusion
description: Learn here all about Style in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Style 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style in React Drop down list component

The following content provides the exact CSS structure that can be used to modify the control's appearance based on the user preference.

## Customizing the appearance of wrapper element

Use the following CSS to customize the appearance of wrapper element.

```css
.e-ddl.e-input-group.e-control-wrapper .e-input {
    font-size: 20px;
    font-family: emoji;
    color: #ab3243;
    background: #32a5ab;
}
```

## Customizing the dropdown icon’s color

Use the following CSS to customize the dropdown icon’s color.

```css
.e-ddl.e-input-group .e-input-group-icon,.e-ddl.e-input-group.e-control-wrapper .e-input-group-icon:hover {
    color: #bb233d;
    font-size: 13px;
}
```

## Customizing the focus color

Use the following CSS to customize the focusing color of input element.

```css
.e-ddl.e-input-group.e-control-wrapper.e-input-focus::before, .e-ddl.e-input-group.e-control-wrapper.e-input-focus::after {
    background: #c000ff;
}
```

## Customizing the outline theme's focus color

Use the following CSS to customize the focusing color of outline theme.

```css
.e-outline.e-input-group.e-input-focus:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus.e-control-wrapper:hover:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled):not(.e-float-icon-left),.e-outline.e-input-group.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled),.e-outline.e-input-group.e-control-wrapper.e-input-focus:not(.e-success):not(.e-warning):not(.e-error):not(.e-disabled) {
    border-color: #b1bd15;
    box-shadow: inset 1px 1px #b1bd15, inset -1px 0 #b1bd15, inset 0 -1px #b1bd15;
}
```

## Customizing the disabled component’s text color

Use the following CSS to customize the text color when the component is disabled.

```css
.e-input-group.e-control-wrapper .e-input[disabled] {
    -webkit-text-fill-color: #0d9133;
}
```

## Customizing the float label element's focusing color

Use the following CSS to customize the focusing color of float label element.

```css
.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::before,.e-float-input.e-input-group:not(.e-float-icon-left) .e-float-line::after,.e-float-input.e-control-wrapper.e-input-group:not(.e-float-icon-left) .e-float-line::after {
    background-color: #2319b8;
}

.e-ddl.e-lib.e-input-group.e-control-wrapper.e-float-input.e-input-focus .e-float-text.e-label-top {
    color: #2319b8;
}
```

## Customizing the color of the placeholder text

Use the following CSS to customize the text color of placeholder.

```css
.e-ddl.e-input-group input.e-input::placeholder {
    color: red;
}
```

## Customizing the background color of focus, hover, and active items

Use the following CSS to customize the background color of focused, hovered, and active items.

```css
.e-dropdownbase .e-list-item.e-item-focus, .e-dropdownbase .e-list-item.e-active, .e-dropdownbase .e-list-item.e-active.e-hover, .e-dropdownbase .e-list-item.e-hover {
    background-color: #1f9c99;
    color: #2319b8;
}
```

## Customizing the appearance of pop-up element

Use the following CSS to customize the appearance of popup element.

```css
.e-dropdownbase .e-list-item, .e-dropdownbase .e-list-item.e-item-focus {
    background-color: #29c2b8;
    color: #207cd9;
    font-family: emoji;
    min-height: 29px;
}
```

## Adding mandatory asterisk to placeholder and float label

Add a mandatory asterisk `(*)` to the placeholder and float label using the <b>.e-input-group.e-control-wrapper.e-float-input .e-float-text::after</b> CSS class.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/asterisk-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/asterisk-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/asterisk-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/asterisk-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/asterisk-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/asterisk-cs4" %}