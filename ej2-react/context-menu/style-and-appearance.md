---
layout: post
title: Style and Appearance in React Context Menu | Syncfusion
description: CSS class reference for customizing the React Context Menu wrapper, items, icons, carets, and visual states.
control: Context Menu
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in React Context Menu

To customize the appearance of the React Context Menu component, override the relevant default CSS rules provided by the Syncfusion theme. The React Context Menu provides extensive customization options through CSS classes that target specific elements within the component structure. You can customize everything from the overall wrapper to individual menu items, icons, and visual states. You can also generate a custom theme for the component using [`Theme Studio`](https://ej2.syncfusion.com/themestudio/) (Material, Fabric, Bootstrap, Tailwind, and High Contrast base themes are supported).

## Wrapper and list

The following table lists the principal CSS classes for customizing the React Context Menu wrapper, popup list, items, icons, caret, separator, scrollbar, RTL, and visual states.

| CSS Class | Description |
| --- | --- |
| `.e-contextmenu-wrapper` | Customizes the React Context Menu wrapper container. |
| `.e-contextmenu-wrapper ul` | Customizes a popup list (`ul`) of the React Context Menu. |
| `.e-contextmenu-wrapper .e-menu-parent` | Customizes the parent menu list. |
| `.e-contextmenu-wrapper .e-menu-item` | Customizes an individual menu item. |
| `.e-contextmenu-wrapper .e-separator` | Customizes a separator (divider) menu item. |
| `.e-contextmenu-wrapper .e-menu-icon` | Customizes the icon color/size of a menu item (the glyph itself is set on `.e-menu-icon::before`). |
| `.e-contextmenu-wrapper .e-menu-item .e-caret` | Customizes the default submenu caret icon (use `::before` to override the glyph). |
| `.e-contextmenu-wrapper .e-menu-item.e-selected .e-caret::before` | Customizes the caret icon when an item is in the selected state. |
| `.e-contextmenu-wrapper .e-menu-item.e-focused` | Customizes the focus/hover state of a menu item. |
| `.e-contextmenu-wrapper .e-menu-item.e-selected` | Customizes the selected/active state of a menu item. |
| `.e-contextmenu-wrapper .e-menu-item.e-disabled` | Customizes the disabled state of a menu item. |
| `.e-contextmenu-wrapper .e-rtl` | Customizes the React Context Menu when it is rendered in right-to-left (`enableRtl`) mode. |
| `.e-contextmenu-wrapper .e-right` | Customizes a submenu popup that opens to the right side of its parent item. |
| `.e-contextmenu-wrapper .e-scrollbar.e-scroll-vertical` | Customizes the vertical scrollbar that appears when the menu items overflow. |