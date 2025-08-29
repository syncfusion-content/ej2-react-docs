---
layout: post
title: Ribbon Items in React Ribbon component | Syncfusion
description:  Checkout and learn about Items in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Items in the React Ribbon Component

The Ribbon component renders various built-in items by defining them within the `RibbonItemsDirective` tag. Each item's functionality is determined by its `type` property, as defined in the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItemType/) API. By default, an item's type is `Button`.

## Built-in Items

You can render the built-in Ribbon items by using the [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCollection/#items) property, to specify the [type](https://ej2.syncfusion.com/vue/documentation/api/ribbon/ribbonItemModel/#type) property.

The following table describes the available built-in items and their functions:

| Built-in Ribbon Item | Action |
|----------------------|---------|
| Button | Renders a clickable button. |
| CheckBox | Renders a checkbox for binary selection. |
| DropDown | Renders a dropdown button with a popup list. |
| SplitButton | Renders a button with a primary action and a secondary dropdown list. |
| ComboBox | Renders a combo box for selection from a list of options. |
| ColorPicker | Renders a color picker for color selection. |
| GroupButton | Renders a group of related buttons. |

### Button items

To render a `Button` item, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `Button`. You can customize its appearance and behavior using the [RibbonButtonSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonButtonSettings/), which includes options like `iconCss`, `content`, and `isToggle`.

#### Toggle button

The [isToggle](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonButtonSettings/#istoggle) property can be used to define whether the button act as a toggle button or not. By default, the value is `false`.

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

### CheckBox Items

To render a `CheckBox`, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `CheckBox`. Customize it using the [RibbonCheckBoxSettings](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/), which provides options for `label`, `labelPosition`, and `checked` state.

#### Checkbox state

You can use the [checked](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/#checked) property is used to handle the checked or unchecked state. By default, the value is `false`.

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

#### Defining label

You can use the [label](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#label) property to add a caption for the CheckBox. The label position can be set `Before` or `After`, by using the [labelPosition](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettingsModel/#labelposition) property. By default, the labelPosition is `After`.

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

### DropDown Button Items

To render a `DropDownButton`, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `DropDown`. Customize it using the [RibbonDropDownSettingsModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettingsModel/), which includes `items`, `iconCss`, `content`, and a `target` for the popup content.

#### Target

The [target](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#target) property specifies the element selector for the content to be displayed in the DropDownButton popup.

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

#### Customize Dropdown Button Item

Apply a custom CSS class to style dropdown items using the [beforeItemRender](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event.

The following sample showcases how to customize a specific dropdown item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/DropDownCustomItem/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/DropDownCustomItem/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/DropDownCustomItem/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/DropDownCustomItem" %}

#### Create Dropdown Popup On-Demand

Set the [createPopupOnClick](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#createpopuponclick) property to `true` to create the popup only when the dropdown is opened, optimizing performance.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/DropDownPopup/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/DropDownPopup/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/DropDownPopup" %}

### Split Button Items

To render a `SplitButton`, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `SplitButton`. Customize it with the [RibbonSplitButtonSettingsModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettingsModel/), which provides options like `iconCss`, `items`, and `target`.

#### Target

The [target](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#target) property specifies the element selector to be displayed in the SplitButton popup.

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

### ComboBox Items

To render a `ComboBox` item, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `ComboBox`. You can configure it using the [RibbonComboBoxSettingsModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettingsModel/), which provides options such as `allowFiltering`, `autoFill`, `index`, `sortOrder` and more.

#### Filtering

You can use the [allowFiltering](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettingsModel/#allowfiltering) property to filter the data items. The filtering operation is initiated automatically, as soon as you start typing characters. If no match is found the value of the `noRecordsTemplate` property will be displayed. By default, the value is `false`.

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

You can use the [index](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#index) property to get or set the selected item in the combobox.

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


You can use the [sortOrder](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#sortorder)property to specify the order in which the DataSource should be sorted.

<table>
  <tr>
    <td>`None`</td>
    <td>The data source is not sorted.</td>
  </tr>
  <tr>
    <td>`Ascending`</td>
    <td>The data source is sorted in ascending order.</td>
  </tr>
  <tr>
    <td>`Descending`</td>
    <td>The data source is sorted in descending order.</td>
  </tr>
</table>

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

### Colorpicker items

To render a `ColorPicker`, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `ColorPicker`. Customize it using the [RibbonColorPickerSettingsModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettingsModel/), which includes properties like `value`, `columns`, and `showButtons`.

#### Value

You can use the [value](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettingsModel/#value) property to specify the color value. The value should be specified as Hex code.

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

### GroupButton Items

To render a `GroupButton`, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `GroupButton`. Configure its items and selection behavior using the [RibbonGroupButtonSettingsModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonSettingsModel/).

#### Items

You can render the groupbutton items by using [items](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItem/) property. You can also customize the groupbutton items through [RibbonGroupButtonItemModel](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItemModel/), which provides options such as [content](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItemModel/#content), [iconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItemModel/#iconcss), [selected](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItemModel/#selected) and more.

#### Item content

You can use the [content](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItemModel/#content) property to define the text content for the groupbutton.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonItemSize } from "@syncfusion/ej2-react-ribbon";

function App() {
    
  const groupButtonItem: RibbonGroupButtonSettingsModel = {
    items: [
        { iconCss: 'e-icons e-align-left', content: 'Align Left' },
        { iconCss: 'e-icons e-align-center',content: 'Align Center' }, 
        { iconCss: 'e-icons e-align-right',content: 'Align Right' }, 
        { iconCss: 'e-icons e-justify',content: 'Justify' }
    ]
  }

  return (
      <RibbonComponent id="ribbon">
          <RibbonTabsDirective>
              <RibbonTabDirective header="Home" >
                  <RibbonGroupsDirective>
                      <RibbonGroupDirective header="Paragraph"> 
                          <RibbonCollectionsDirective>
                              <RibbonCollectionDirective>
                                  <RibbonItemsDirective>
                                      <RibbonItemDirective type="GroupButton" allowedSizes={RibbonItemSize.Medium} groupButtonSettings={ groupButtonItem }>
                                      </RibbonItemDirective>
                                  </RibbonItemsDirective>
                              </RibbonCollectionDirective>
                          </RibbonCollectionsDirective>
                      </RibbonGroupDirective>
                  </RibbonGroupsDirective>
              </RibbonTabDirective>
          </RibbonTabsDirective>
      </RibbonComponent>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

#### Icon only

You can use the [iconCss](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItemModel/#iconcss) property to customize the groupbutton icon. If the `iconCss` property is not defined, the groupbutton will not be rendered.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonIcon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonIcon/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/RibbonGroupButtonIcon/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/RibbonGroupButtonIcon" %}

#### Selection

You can use the [selected](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItemModel/#selected) property to select the groupbutton item initally. When set to `true`, the button will be selected. By default the `selected` property is false.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonSelected/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonSelected/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/RibbonGroupButtonSelected/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/RibbonGroupButtonSelected" %}

#### Single selection

You can set the [selection](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonSelection/) property value as `RibbonGroupButtonSelection.Single` to make one selection at a time. It automatically deselects the previous choice when a different item is clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonSingle/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonSingle/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/RibbonGroupButtonSingle/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/RibbonGroupButtonSingle" %}

#### Multiple selection

You can set the [selection](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonSelection/) property value as `RibbonGroupButtonSelection.Multiple` to select more than one button at a time. Users can select a button one by one to select multiple buttons.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonMultiple/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonMultiple/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/RibbonGroupButtonMultiple/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/RibbonGroupButtonMultiple" %}

#### Groupbutton in simplified mode layout

In simplified mode, the groupbutton will be rendered as a dropdownbutton. The dropdownbutton icon will be updated based on the button item selected. The initial button icon will be the set, if none of the buttons are selected.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonSimplified/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ribbon/RibbonGroupButtonSimplified/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ribbon/RibbonGroupButtonSimplified/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ribbon/RibbonGroupButtonSimplified" %}

## Custom Items

To create custom Ribbon items, set the [type](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#type) property to `Template`. This allows you to render any HTML content or non-built-in components, offering maximum flexibility.

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

## Item Display Options

Use the [displayOptions](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#displayoptions) property to control in which Ribbon layouts an item appears.

| Option | Description |
|------------|----------------------------------------------------------------------|
| `Auto` | (Default) The item is displayed in all layouts. |
| `Classic` | The item is displayed only in the classic layout. |
| `Simplified` | The item is displayed only in the simplified layout. |
| `Overflow` | The item is displayed only in the overflow popup. |

### Display items in Classic only

To display the items only in the classic layout group, set the mode as `DisplayMode.Classic` in the [displayOptions](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#displayoptions) property.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, DisplayMode } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" displayOptions={DisplayMode.Classic} buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

### Display items in Simplified only

To display the items only in the simplified layout group, set the mode as `DisplayMode.Simplified` in the [displayOptions](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#displayoptions) property.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, DisplayMode } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" displayOptions={DisplayMode.Simplified} buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

### Display items in Overflow popup only

To display the items only in the overflow, set the mode as `DisplayMode.Overflow` in the [displayOptions](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#displayoptions) property.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, DisplayMode } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" displayOptions={DisplayMode.Overflow} buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

## Enable or Disable Items

Use the [disabled](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonItem/#disabled) property to enable or disable a Ribbon item. When set to `true`, the item becomes non-interactive.

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