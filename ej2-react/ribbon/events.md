---
layout: post
title: Events in React Ribbon component | Syncfusion
description:  Checkout and learn about Events in Syncfusion React Ribbon component of Syncfusion Essential JS 2 and more.
control: Ribbon
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Events

This section describes the ribbon events that will be triggered when appropriate actions are performed. The following events are available in the ribbon component.

## tabSelected

The [tabSelected](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonModel/#tabselected) event is triggered after selecting the tab item.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, TabSelectedEventArgs } from "@syncfusion/ej2-react-ribbon";
function App() {
    function tabSelected ( args: TabSelectedEventArgs) {
        // Your required actions here
    }
    return (
        <RibbonComponent id="ribbon" tabSelected = { tabSelected }>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
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

## tabSelecting

The [tabSelecting](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonModel/#tabselecting) event is triggered before selecting the tab item.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, TabSelectingEventArgs } from "@syncfusion/ej2-react-ribbon";
function App() {
    function tabSelectingEvent ( args: TabSelectingEventArgs) {
        // Your required actions here
    }
    return (
        <RibbonComponent id="ribbon" tabSelecting = { tabSelectingEvent }>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
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

## ribbonCollapsing

The [ribbonCollapsing](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonModel/#ribboncollapsing) event is triggered before collapsing the ribbon.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, ExpandCollapseEventArgs } from "@syncfusion/ej2-react-ribbon";
function App() {
    function ribbonCollapsing ( args: ExpandCollapseEventArgs) {
        // Your required actions here
    }
    return (
        <RibbonComponent id="ribbon" ribbonCollapsing = { ribbonCollapsing }>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
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

## ribbonExpanding

The [ribbonExpanding](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonModel/#ribbonexpanding) event is triggered before expanding the ribbon.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, ExpandCollapseEventArgs } from "@syncfusion/ej2-react-ribbon";
function App() {
    function ribbonExpanding ( args: ExpandCollapseEventArgs) {
        // Your required actions here
    }
    return (
        <RibbonComponent id="ribbon" ribbonExpanding = { ribbonExpanding }>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
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

## launcherIconClick

The [launcherIconClick](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonModel/#launchericonclick) event is triggered when the launcher icon of the group is clicked.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, LauncherClickEventArgs } from "@syncfusion/ej2-react-ribbon";
function App() {
    function launchClick ( args: LauncherClickEventArgs) {
        // Your required actions here
    }
    return (
        <RibbonComponent id="ribbon" launcherIconClick = { launchClick }>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard" showLauncherIcon={true}> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
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

## Button item events

### clicked

The [clicked](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonButtonSettings/#clicked) event is triggered when the button is clicked.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" , clicked: function () { 
                                            // Your required actions here
                                        }}}>
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

### created

The [created](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonButtonSettings/#created) event is triggered when the button is created.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" , created: function () { 
                                            // Your required actions here
                                        }}}>
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

## Checkbox item events

### change

The [change](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/#change) event is triggered when the Checkbox state is changed.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="CheckBox" checkBoxSettings={{ label: "Ruler", checked: false, change: function () { 
                                            // Your required actions here
                                        } }}>
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

### created

The [created](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonCheckBoxSettings/#created) event is triggered once the Checkbox is created.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="CheckBox" checkBoxSettings={{ label: "Ruler", checked: false, created: function () { 
                                            // Your required actions here
                                        } }}>
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

## Colorpicker item events

### change

The [change](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#change) event is triggered while changing the colors.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" colorPickerSettings={{ value: "#123456" ,change: function (args) { 
                                            // Your required actions here
                                        }}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### created

The [created](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#created) event is triggered once the ColorPicker is created.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" colorPickerSettings={{ value: "#123456" ,created: function (args) { 
                                            // Your required actions here
                                        }}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### open

The [open](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#open) event is triggered while opening the ColorPicker popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" colorPickerSettings={{ value: "#123456" ,open: function (args) { 
                                            // Your required actions here
                                        }}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### select

The [select](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#select) event is triggered while selecting the color in picker/palette, when showButtons property is enabled.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" colorPickerSettings={{ value: "#123456" ,select: function (args) { 
                                            // Your required actions here
                                        }}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#beforeclose) event is triggered before closing the ColorPicker popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" colorPickerSettings={{ value: "#123456" ,beforeClose: function (args) { 
                                            // Your required actions here
                                        }}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#beforeopen) event is triggered before opening the ColorPicker popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" colorPickerSettings={{ value: "#123456" ,beforeOpen: function (args) { 
                                            // Your required actions here
                                        }}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}
### beforeTileRender

The [beforeTileRender](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonColorPickerSettings/#beforetilerender) event is triggered while rendering each palette tile.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { RibbonColorPicker, Inject } from "@syncfusion/ej2-react-ribbon";
function App() {
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ColorPicker" colorPickerSettings={{ value: "#123456" ,beforeTileRender: function (args) { 
                                            // Your required actions here
                                        }}}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonColorPicker]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

## ComboBox item events

### change

The [change](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#change) event is triggered when an item in a popup is selected or when the model value is changed by the user.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 3, change: function (args) { 
                                            // Your required action here
                                        } }}>
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

### close

The [close](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#close) event is triggered when the popup is closed.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 3, close: function (args) { 
                                            // Your required action here
                                        } }}>
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

### open

The [open](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#open) event is triggered when the popup is opened.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 3, open: function (args) { 
                                            // Your required action here
                                        } }}>
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

### created

The [created](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#created) event is triggered once the Combobox is created.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 3, created: function (args) { 
                                            // Your required action here
                                        } }}>
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

### filtering

The [filtering](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#filtering) event triggers on typing a character in the Combobox.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 3, filtering: function (args) { 
                                            // Your required action here
                                        } }}>
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

### select

The [select](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#select) event is triggered when an item in the popup is selected.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 3, select: function (args) { 
                                            // Your required action here 
                                        } }}>
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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonComboBoxSettings/#beforeopen) event triggers before opening the popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
function App() {
    const fontStyle: string[] = ["Algerian", "Arial", "Calibri", "Cambria", "Cambria Math", "Courier New", "Candara", "Georgia", "Impact", "Segoe Print", "Segoe Script", "Segoe UI", "Symbol", "Times New Roman", "Verdana", "Windings"];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Font"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="ComboBox" comboBoxSettings={{ dataSource: fontStyle, index: 3, beforeOpen: function (args) { 
                                            // Your required action here 
                                        } }}>
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

## DropDown item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#beforeclose) event is triggered before closing the DropdownButton popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Tables"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", beforeClose: function (args) { 
                                            // Your required action here 
                                        } }}>
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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#beforeopen) event is triggered before opening the Dropdown button popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Tables"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", beforeOpen: function (args) { 
                                            // Your required action here 
                                        } }}>
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

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#beforeitemrender) event is triggered while rendering each popup item of the Dropdown button.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Tables"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", beforeItemRender: function (args) { 
                                            // Your required action here 
                                        } }}>
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

### open

The [open](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#open) event is triggered while opening the Dropdown button popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Tables"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", open: function (args) { 
                                            // Your required action here 
                                        } }}>
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

### close

The [close](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#close) event is triggered while closing the Dropdown button popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Tables"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", close: function (args) { 
                                            // Your required action here 
                                        } }}>
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

### created

The [created](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#created) event is triggered when the DropDown is created.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Tables"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", created: function (args) { 
                                            // Your required action here 
                                        } }}>
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

### select

The [select](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonDropDownSettings/#select) event is triggered while selecting an action item in the Dropdown button popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const tableOptions: ItemModel[] = [{ text: "Insert Table" }, { text: "This device" }, { text: "Convert Table" }, { text: "Excel SpreadSheet" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Tables"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="DropDown" dropDownSettings={{ iconCss: "e-icons e-table", items: tableOptions, content: "Table", select: function (args) { 
                                            // Your required action here 
                                        } }}>
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

## SplitButton item events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeclose) event is triggered before closing the SplitButton popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", beforeClose: function (args) { 
                                            // Your required action here 
                                        }}}>
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

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#beforeopen) event is triggered before opening the SplitButton popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", beforeOpen: function (args) { 
                                            // Your required action here 
                                        }}}>
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

### beforeItemRender

The [beforeItemRender](../api/ribbon/ribbonSplitButtonSettings/#beforeitemrender) event is triggered while rendering each popup item of SplitButton.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", beforeItemRender: function (args) { 
                                            // Your required action here 
                                        }}}>
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

### open

The [open](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#open) event is triggered while opening the SplitButton popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", open: function (args) { 
                                            // Your required action here 
                                        }}}>
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

### close

The [close](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#close) event is triggered while closing the SplitButton popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", close: function (args) { 
                                            // Your required action here 
                                        }}}>
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

### created

The [created](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#created) event is triggered when the SplitButton is created.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", created: function (args) { 
                                            // Your required action here 
                                        }}}>
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

### select

The [select](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#select) event is triggered while selecting an action item in the SplitButton popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", select: function (args) { 
                                            // Your required action here 
                                        }}}>
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

### click

The [click](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonSplitButtonSettings/#click) event is triggered while clicking the primary button in the SplitButton.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective } from "@syncfusion/ej2-react-ribbon";
import { ItemModel } from "@syncfusion/ej2-react-splitbuttons";
function App() {
    const selectOptions: ItemModel[] = [{ text: "Select All" }, { text: "Select Objects" }];
    return (
        <RibbonComponent id="ribbon">
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard"> 
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="SplitButton" splitButtonSettings={{ iconCss: "e-icons e-mouse-pointer", items: selectOptions, content: "Select", click: function (args) { 
                                            // Your required action here 
                                        }}}>
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

## GroupButton item events

### beforeClick

The [beforeClick](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItem/#beforeclick) event is triggered before selecting a button from the groupbutton items.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonGroupButtonSelection , RibbonItemSize } from "@syncfusion/ej2-react-ribbon";

function App() {
    
  const groupButtonMultiple: RibbonGroupButtonSettingsModel = {
        selection: RibbonGroupButtonSelection.Multiple,
      items: [
          { iconCss: 'e-icons e-bold', content: 'Bold', selected: true, beforeClick: () => { 
              // Your required action here
              alert("")
          } },
          { iconCss: 'e-icons e-italic', content: 'Italic', beforeClick: () => { 
              // Your required action here
          } },
          { iconCss: 'e-icons e-underline', content: 'Underline', beforeClick: () => { 
              // Your required action here
          } }, 
          { iconCss: 'e-icons e-strikethrough', content: 'Strikethrough', beforeClick: () => {
              // Your required action here
          } }, { iconCss: 'e-icons e-change-case', content: 'Change Case', beforeClick: () => {
              // Your required action here
          } }
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
                                      <RibbonItemDirective type="GroupButton" allowedSizes={RibbonItemSize.Medium} groupButtonSettings={ groupButtonMultiple }>
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

### click

The [click](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGroupButtonItem/#click) event is triggered when selecting a button from the groupbutton items.

{% raw %}
```ts

import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonGroupButtonSelection , RibbonItemSize } from "@syncfusion/ej2-react-ribbon";

function App() {
    
  const groupButtonSingle: RibbonGroupButtonSettingsModel = {
    selection: RibbonGroupButtonSelection.Single,
    items: [
        {iconCss: 'e-icons e-align-left', content: 'Align Left', selected: true, click: () => { 
            // Your required action here
        }},
        {iconCss: 'e-icons e-align-center',content: 'Align Center', click: () => { 
            // Your required action here
        }}, 
        {iconCss: 'e-icons e-align-right',content: 'Align Right', click: () => {
            // Your required action here
        }}, 
        {iconCss: 'e-icons e-justify',content: 'Justify', click: () => { 
            // Your required action here
        }}
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
                                      <RibbonItemDirective type="GroupButton" allowedSizes={RibbonItemSize.Medium} groupButtonSettings={ groupButtonSingle }>
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

## FileMenu events

### beforeClose

The [beforeClose](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettings/#beforeclose) event is triggered before closing the FileMenu popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective,FileMenuSettingsModel } from "@syncfusion/ej2-react-ribbon";
import { RibbonFileMenu, Inject } from "@syncfusion/ej2-react-ribbon";
import { MenuItemModel } from '@syncfusion/ej2-react-navigations';
function App() {
    const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    const filesettings : FileMenuSettingsModel = {
        menuItems: fileOptions,
        visible: true,
        beforeClose: () => { 
            // Your required action here
        }
    };

    return (
        <RibbonComponent id="ribbon" fileMenu= {filesettings}> 
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonFileMenu]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

### beforeOpen

The [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettings/#beforeopen) event is triggered before opening the FileMenu popup.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective,FileMenuSettingsModel } from "@syncfusion/ej2-react-ribbon";
import { RibbonFileMenu, Inject } from "@syncfusion/ej2-react-ribbon";
import { MenuItemModel } from '@syncfusion/ej2-react-navigations';
function App() {
    const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    const filesettings : FileMenuSettingsModel = {
        menuItems: fileOptions,
        visible: true,
        beforeOpen: () => { 
            // Your required action here
        }
    };

    return (
        <RibbonComponent id="ribbon" fileMenu= {filesettings}> 
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonFileMenu]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettings/#beforeitemrender) event is triggered while rendering each ribbon FileMenu item.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective,FileMenuSettingsModel } from "@syncfusion/ej2-react-ribbon";
import { RibbonFileMenu, Inject } from "@syncfusion/ej2-react-ribbon";
import { MenuItemModel } from '@syncfusion/ej2-react-navigations';
function App() {
    const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    const filesettings : FileMenuSettingsModel = {
        menuItems: fileOptions,
        visible: true,
        beforeItemRender: () => { 
            // Your required action here
        }
    };

    return (
        <RibbonComponent id="ribbon" fileMenu= {filesettings}> 
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonFileMenu]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

### open

The [open](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettings/#open) event is triggered when the FileMenu popup is opened.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective,FileMenuSettingsModel } from "@syncfusion/ej2-react-ribbon";
import { RibbonFileMenu, Inject } from "@syncfusion/ej2-react-ribbon";
import { MenuItemModel } from '@syncfusion/ej2-react-navigations';
function App() {
    const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    const filesettings : FileMenuSettingsModel = {
        menuItems: fileOptions,
        visible: true,
        open: () => { 
            // Your required action here
        }
    };

    return (
        <RibbonComponent id="ribbon" fileMenu= {filesettings}> 
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonFileMenu]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

### close

The [close](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettings/#close) event is triggered when the FileMenu popup is closed.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective,FileMenuSettingsModel } from "@syncfusion/ej2-react-ribbon";
import { RibbonFileMenu, Inject } from "@syncfusion/ej2-react-ribbon";
import { MenuItemModel } from '@syncfusion/ej2-react-navigations';
function App() {
    const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    const filesettings : FileMenuSettingsModel = {
        menuItems: fileOptions,
        visible: true,
        close: () => { 
            // Your required action here
        }
    };

    return (
        <RibbonComponent id="ribbon" fileMenu= {filesettings}> 
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonFileMenu]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

### select

The [select](https://ej2.syncfusion.com/react/documentation/api/ribbon/fileMenuSettings/#select) event is triggered while selecting an item in the ribbon FileMenu.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective,FileMenuSettingsModel } from "@syncfusion/ej2-react-ribbon";
import { RibbonFileMenu, Inject } from "@syncfusion/ej2-react-ribbon";
import { MenuItemModel } from '@syncfusion/ej2-react-navigations';
function App() {
    const fileOptions: MenuItemModel[] = [{ text: "New", iconCss: "e-icons e-file-new", id: "new" },
    { text: "Open", iconCss: "e-icons e-folder-open", id: "Open" },
    { text: "Rename", iconCss: "e-icons e-rename", id: "rename" },
    { text: "Save as", iconCss: "e-icons e-save", id: "save" }]
    const filesettings : FileMenuSettingsModel = {
        menuItems: fileOptions,
        visible: true,
        select: () => { 
            // Your required action here
        }
    };

    return (
        <RibbonComponent id="ribbon" fileMenu= {filesettings}> 
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home">
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Clipboard">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonFileMenu]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));

```
{% endraw %}

## Backstage view events

### backStageItemClick

The [backStageItemClick](https://ej2.syncfusion.com/react/documentation/api/ribbon/backstageItemClickArgs/) event is triggered when backstage item is selected.

{% raw %}
```ts 
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, RibbonBackstage , Inject, BackStageMenuModel } from "@syncfusion/ej2-react-ribbon";

function App() {
    const backstageSettings: BackStageMenuModel = {
        visible: true,
        items: [
            { id: 'home', text: 'Home', iconCss: 'e-icons e-home', content: homeContentTemplate(), backStageItemClick: () => {
                  // Your required action here
          } },
        ],
        backButton: {
            text: 'Close',
        }
    }

    return (
        <RibbonComponent id="backstage-ribbon" backStageMenu={backstageSettings}>
            <RibbonTabsDirective>
                <RibbonTabDirective header="Home" >
                    <RibbonGroupsDirective>
                        <RibbonGroupDirective header="Paragraph">
                            <RibbonCollectionsDirective>
                                <RibbonCollectionDirective>
                                    <RibbonItemsDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-cut", content: "Cut" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-copy", content: "Copy" }}>
                                        </RibbonItemDirective>
                                        <RibbonItemDirective type="Button" buttonSettings={{ iconCss: "e-icons e-paste", content: "Paste" }}>
                                        </RibbonItemDirective>
                                    </RibbonItemsDirective>
                                </RibbonCollectionDirective>
                            </RibbonCollectionsDirective>
                        </RibbonGroupDirective>
                    </RibbonGroupsDirective>
                </RibbonTabDirective>
            </RibbonTabsDirective>
            <Inject services={[RibbonBackstage]} />
        </RibbonComponent>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

## Gallery events

### popupOpen

The [popupOpen](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettings/#popupopen) event is triggered when the gallery popup opens.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery, RibbonGallerySettingsModel, GalleryPopupEventArgs } from '@syncfusion/ej2-react-ribbon';
function App() {
    
    const gallerySettings: RibbonGallerySettingsModel = (
        {
            groups: [{
            header: 'Styles',
            items: [
                {
                    content: 'Normal'
                }, {
                    content: 'No Spacing'
                }, {
                    content: 'Heading 1'
                }, {
                    content: 'Heading 2'
                }
                ]
            }],
            popupOpen: (args: GalleryPopupEventArgs) => {
                // Your required action here
            }
        }
    );

    return (
        <div>
            <RibbonComponent id='ribbon'>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Gallery">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="Gallery" gallerySettings={gallerySettings} >
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonGallery]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### popupClose

The [popupClose](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettings/#popupclose) event is triggered when the gallery popup closes.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery, RibbonGallerySettingsModel, GalleryPopupEventArgs } from '@syncfusion/ej2-react-ribbon';
function App() {
    
    const gallerySettings: RibbonGallerySettingsModel = (
        {
            groups: [{
            header: 'Styles',
            items: [
                {
                    content: 'Normal'
                }, {
                    content: 'No Spacing'
                }, {
                    content: 'Heading 1'
                }, {
                    content: 'Heading 2'
                }
                ]
            }],
            popupClose: (args: GalleryPopupEventArgs) => {
            // Your required action here
            }
        }
    );

    return (
        <div>
            <RibbonComponent id='ribbon'>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Gallery">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="Gallery" gallerySettings={gallerySettings} >
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonGallery]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### itemHover

The [itemHover](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettings/#itemhover) event is triggered when hover over the gallery item.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery, RibbonGallerySettingsModel, GalleryHoverEventArgs } from '@syncfusion/ej2-react-ribbon';
function App() {
    
    const gallerySettings: RibbonGallerySettingsModel = (
        {
            groups: [{
            header: 'Styles',
            items: [
                {
                    content: 'Normal'
                }, {
                    content: 'No Spacing'
                }, {
                    content: 'Heading 1'
                }, {
                    content: 'Heading 2'
                }
                ]
            }],
            itemHover: (args: GalleryHoverEventArgs) => {
            // Your required action here
            }
        }
    );

    return (
        <div>
            <RibbonComponent id='ribbon'>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Gallery">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="Gallery" gallerySettings={gallerySettings} >
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonGallery]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### beforeItemRender

The [beforeItemRender](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettings/#beforeitemrender) event is triggered while rendering each gallery item.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery, RibbonGallerySettingsModel, GalleryItemEventArgs } from '@syncfusion/ej2-react-ribbon';
function App() {
    
    const gallerySettings: RibbonGallerySettingsModel = (
        {
            groups: [{
            header: 'Styles',
            items: [
                {
                    content: 'Normal'
                }, {
                    content: 'No Spacing'
                }, {
                    content: 'Heading 1'
                }, {
                    content: 'Heading 2'
                }
                ]
            }],
            beforeItemRender: (args: GalleryItemEventArgs) => {
            // Your required action here
            }
        }
    );

    return (
        <div>
            <RibbonComponent id='ribbon'>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Gallery">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="Gallery" gallerySettings={gallerySettings} >
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonGallery]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### beforeSelect

The [beforeSelect](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettings/#beforeselect) event is triggered before selecting an item in the Ribbon gallery.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery, RibbonGallerySettingsModel, GalleryBeforeSelectEventArgs } from '@syncfusion/ej2-react-ribbon';
function App() {
    
    const gallerySettings: RibbonGallerySettingsModel = (
        {
            groups: [{
            header: 'Styles',
            items: [
                {
                    content: 'Normal'
                }, {
                    content: 'No Spacing'
                }, {
                    content: 'Heading 1'
                }, {
                    content: 'Heading 2'
                }
                ]
            }],
            beforeSelect: (args: GalleryBeforeSelectEventArgs) => {
            // Your required action here
            }
        }
    );

    return (
        <div>
            <RibbonComponent id='ribbon'>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Gallery">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="Gallery" gallerySettings={gallerySettings} >
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonGallery]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}

### select

The [select](https://ej2.syncfusion.com/react/documentation/api/ribbon/ribbonGallerySettings/#select) event is triggered while selecting an item in the Ribbon Gallery.

{% raw %}
```ts
import * as React from "react";
import * as ReactDom from "react-dom";
import { RibbonComponent, RibbonTabsDirective, RibbonTabDirective, RibbonCollectionsDirective, RibbonCollectionDirective, RibbonGroupsDirective, RibbonGroupDirective, RibbonItemsDirective, RibbonItemDirective, Inject, RibbonGallery, RibbonGallerySettingsModel, GallerySelectEventArgs } from '@syncfusion/ej2-react-ribbon';
function App() {
    
    const gallerySettings: RibbonGallerySettingsModel = (
        {
            groups: [{
            header: 'Styles',
            items: [
                {
                    content: 'Normal'
                }, {
                    content: 'No Spacing'
                }, {
                    content: 'Heading 1'
                }, {
                    content: 'Heading 2'
                }
                ]
            }],
            select: (args: GallerySelectEventArgs) => {
            // Your required action here
            }
        }
    );

    return (
        <div>
            <RibbonComponent id='ribbon'>
                <RibbonTabsDirective>
                    <RibbonTabDirective header='Home'>
                        <RibbonGroupsDirective>
                            <RibbonGroupDirective header="Gallery">
                                <RibbonCollectionsDirective>
                                    <RibbonCollectionDirective>
                                        <RibbonItemsDirective>
                                            <RibbonItemDirective type="Gallery" gallerySettings={gallerySettings} >
                                            </RibbonItemDirective>
                                        </RibbonItemsDirective>
                                    </RibbonCollectionDirective>
                                </RibbonCollectionsDirective>
                            </RibbonGroupDirective>
                        </RibbonGroupsDirective>
                    </RibbonTabDirective>
                </RibbonTabsDirective>
                <Inject services={[RibbonGallery]} />
            </RibbonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />, document.getElementById("element"));
```
{% endraw %}
