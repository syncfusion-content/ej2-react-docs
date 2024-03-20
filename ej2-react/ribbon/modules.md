---
layout: post
title: Modules in React Ribbon component | Syncfusion
description:  Checkout and learn about Modules in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Modules in Ribbon component

The following modules are available in Ribbon. If the module injection type is **selective**, manual injection is required to extend the Ribbon's functionality.

| Module | Description | Module Injection Type |
|------|-------------|------|
| `RibbonButton` | To use the built-in button as a ribbon item. | default |
| `RibbonCheckBox` | To use the built-in checkbox as a ribbon item.| default |
| `RibbonDropDown` | To use the built-in dropdown button as a ribbon item.| default |
| `RibbonSplitButton` | To use the built-in split button as a ribbon item.| default |
| `RibbonComboBox` | To use the built-in combobox as a ribbon item. | default |
| `RibbonGroupButton` | To use the built-in groupbutton as a ribbon item. | default |
| `RibbonColorPicker` | Inject this module to use the built-in colorpicker as a ribbon item.| selective |
| `RibbonGallery` | Inject this module to use the gallery as a ribbon item.| selective |
| `RibbonFileMenu` | Inject this module to use the file menu feature.| selective |
| `RibbonBackstage` | Inject this module to use the backstage view feature.| selective |
| `RibbonContextualTab` | Inject this module to use the contextual tab feature.| selective |
| `RibbonKeyTip` | Inject this module to use the keytip feature.| selective |

These modules should be injected into the Ribbon using the `Inject` directive.

{% tabs %}
{% highlight ts tabtitle="index.jsx" %}
{% raw %}

import { RibbonFileMenu, RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
<RibbonComponent id="ribbon" fileMenu={{ visible: true, menuItems: fileOptions}}>
    // Render Tabs here
    <Inject services={[RibbonFileMenu, RibbonColorPicker]} />
</RibbonComponent>

{% endraw %}
{% endhighlight %}
{% endtabs %}