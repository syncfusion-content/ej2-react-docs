---
layout: post
title: Items in React Ribbon component | Syncfusion
description:  Checkout and learn about Items in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Ribbon Items in ASP.NET Core Ribbon Control

## Built-in Ribbon items

By using the [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCollection/#items) property, the ribbon items type should be specified in the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to define the built-in items.

The following items can be rendered as built in items

| Built-in Ribbon Items | Actions |
|------------------------|---------|
| Button | Renders button as ribbon item.|
| CheckBox | Renders checkbox as ribbon item.|
| DropDown | Renders dropdownbutton as ribbon item.|
| SplitButton | Renders splitbutton as ribbon item.|
| ComboBox | Renders combobox as ribbon item.|
| ColorPicker | Renders color picker as ribbon item.|

### Button

By setting the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `Button` you can render a Button item. You can also customize the button item using the [RibbonButtonSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonButtonSettings) which provides options such as `IconCss`, `Content`, `IsToggle` and more.

#### Toggle Button

The [isToggle](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonButtonSettings/#istoggle) property can be used to define whether the button is a toggle button or not. By default the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Toggle/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Toggle/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Toggle/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Toggle" %}

### CheckBox

By setting the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox` you can render a CheckBox item. You can also customize the CheckBox item using the [RibbonCheckBoxSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/) which provides options such as `LabelPosition`, `Label`, `Checked` and more.

#### CheckBox State

The [checked](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/#checked) property is used to handle the checked and unchecked state. The CheckBox will display a tick mark when it is checked. By default the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/Checked/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/Checked/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/Checked/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/Checked" %}

#### Label and label Position

The [label](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/#label) property can handle the caption for a CheckBox. This helps in reducing the need for manually adding a separate label element. 
The [labelPosition](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/#labelposition) property can be used to alter the position of the label relative to the CheckBox, whether it should appear before or after the CheckBox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/CheckBoxLabelPosition/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/CheckBoxLabelPosition/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/CheckBoxLabelPosition/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/CheckBoxLabelPosition" %}

### DropDown

By setting the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `DropDown` you can render a DropDown item. You can also customize the DropDown item through [RibbonDropDownSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/) which provides options such as `IconCss`, `Content`, `Target` and more.

#### Target

The [target](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#target) property specifies the element selector to be shown in the DropDownButton popup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/DropDownTarget/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/DropDownTarget/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/DropDownTarget/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/DropDownTarget" %}

### SplitButton

By setting the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton` you can render a SplitButton item. You can also customize the SplitButton item through [RibbonSplitButtonSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/) which provides options such as `IconCss`, `Items`, `Target` and more.

#### Target

The [target](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#target) property specifies the element selector to be shown in the SplitButton popup.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/SplitButtonTarget/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/SplitButtonTarget/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/SplitButtonTarget/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/SplitButtonTarget" %}

### ComboBox

By setting the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox` you can render a ComboBox item. You can also customize the ComboBox item through [RibbonComboBoxSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/) which provides options such as `AllowFiltering`, `AutoFill`, `Index`, `SortOrder` and more.

#### Filtering

The [allowfiltering](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#allowfiltering) property provides built-in support for filtering data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found, the value of the `noRecordsTemplate` property will be displayed. By default the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/ComboBoxFiltering/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/ComboBoxFiltering/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/ComboBoxFiltering/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/ComboBoxFiltering" %}

#### Index

The [index](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#index) property can be used to specify the index of the selected item in the combobox.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/ComboBoxIndex/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/ComboBoxIndex/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/ComboBoxIndex/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/ComboBoxIndex" %}

#### SortOrder


The [sortOrder](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#sortorder)property is used to select the order in which the DataSource should be sorted.

`None` - The data source is not sorted.
`Ascending` - The data source is sorted in ascending order.
`Descending` - The data source is sorted in descending order.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/ComboBoxSorting/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/ComboBoxSorting/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/ComboBoxSorting/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/ComboBoxSorting" %}

### ColorPicker


By setting the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker` you can render the ColorPicker item. You can also customize the ColorPicker item through [RibbonColorPickerSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/) which provides options such as `Value`, `Columns`, `ShowButtons` and more.

#### Value

By using the [value](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#value) property you can specify the value color. The value should be a valid hex color code.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/ColorPickerValue/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/ColorPickerValue/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/ColorPickerValue/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/ColorPickerValue" %}

## Custom Ribbon items

The [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property can be set to `Template` to customize ribbon items with non-built-in items. It can be used to define the custom template for the ribbon item, which has the flexibility to create unique and personalized content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/RibbonItemTemplate/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/RibbonItemTemplate/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/RibbonItemTemplate/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/RibbonItemTemplate" %}

## Display Mode

### Display Options 

By setting the [displayOptions](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItemModel/#displayoptions) property you can determines how an item is displayed in different ribbon layouts.

`Auto` - The item is displayed in the classic layout group, simplified layout group, and overflow popup based on the ribbon's overflow state.
`Classic` - The item is displayed only in the classic layout group.
`Overflow` - The item is displayed only in the overflow popup.
`Simplified` - The item is displayed only in the simplified layout group.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/DisplayMode/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/DisplayMode/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/DisplayMode/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/DisplayMode" %}

## Enable or disable items

The [disabled](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItemModel/#disabled) property can be used to disable an item. The item will be disabled and prevents the user interaction when set to `true`. By default the value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/DisabledItem/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/DisabledItem/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/DisabledItem/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/DisabledItem" %}