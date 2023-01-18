---
layout: post
title: Getting started with React Maps component | Syncfusion
description:  Checkout and learn about Getting started with React Maps component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you the steps required to create a map and demonstrate the basic usage of the maps component.

You can explore some useful features in the Maps component using the following video.

{% youtube "https://www.youtube.com/watch?v=kwE6ikF7QYQ" %}

## Dependencies

Below is the list of minimum dependencies required to use the Maps.

```javascript
|-- @syncfusion/ej2-react-maps
    |-- @syncfusion/ej2-maps
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-svg-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-pdf-export
|-- @syncfusion/ej2-react-base
```

## Installation and Configuration

To get started with the React application, [create-react-app](https://github.com/facebookincubator/create-react-app) can be used to setup the application. To install **create-react-app** run the following command.

```sh
npm install -g create-react-app
```

To create basic React application, run the following command.

<div class='jsx'>

```sh
create-react-app quickstart
```

</div>

Now, the application is created in the **quickstart** folder. Run the following command one-by-one to navigate to the **quickstart** folder, and install the required **npm** packages.

```sh
cd quickstart

npm install
```

> In the **quickstart** application, the Syncfusion component is added in the JavaScript file.

### Creating a React application with TypeScript

To create React application with TypeScript, use the following command.

<div class='jsx'>

```sh
create-react-app quickstart --template typescript
```

</div>

Now, the application is created in the **quickstart** folder. Run the following command one-by-one to navigate to the **quickstart** folder, and install the required **npm** packages.

```sh
cd quickstart

npm install
```

### Adding Syncfusion packages

All the available Essential JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. To install Maps package, use the following command.

```sh
npm install @syncfusion/ej2-react-maps --save
```

### Add Map to the Project

Now, the Maps component can be added in the application. To initialize the Maps component in the React application, import the Maps component in the **src/App.js** or **src/App.tsx** as per the application. Please use the below code to include the Maps component in the application.

```ts
import React from 'react';
import { MapsComponent } from '@syncfusion/ej2-react-maps';

export function App() {
   return (<MapsComponent id="maps" />);
}

const root = ReactDOM.createRoot(document.getElementById('maps'));
root.render(<App />);
```

As we didn't specify shapeData to the maps, no shape will be rendered and only an empty SVG element is appended to the maps container.

### Run the application

The Maps component is now included in the **quickstart** application. Use the following command to run the application.

```
npm start
```

## Module Injection

Maps component are segregated into individual feature-wise modules. In order to use a particular feature,
you need to inject its feature services using `Inject` tag.  Find the modules available in maps and its description as follows.

* Annotations - Inject this provider to use annotations feature.
* Bubble - Inject this provider to use bubble feature.
* DataLabel - Inject this provider to use data label feature.
* Highlight - Inject this provider to use highlight feature.
* Legend - Inject this provider to use legend feature.
* Marker - Inject this provider to use marker feature.
* MapsTooltip - Inject this provider to use tooltip series.
* NavigationLine - Inject this provider to use navigation lines feature.
* Selection - Inject this provider to use selection feature.
* Zoom - Inject this provider to use zooming and panning feature.

For this application we are going to use tooltip, data label and legend features of the maps.
Now import the MapsTooltip, DataLabel and Legend modules from maps package and inject it into the
Maps component using `Inject` tag with required services.



```ts

import { Maps, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
import * as React from 'react';
import { MapsComponent } from '@syncfusion/ej2-react-maps';

export function App() {
   return (<MapsComponent id="maps">
        <Inject services={[DataLabel, Legend, MapsTooltip]} />
    </MapsComponent>);
  }

const root = ReactDOM.createRoot(document.getElementById('maps'));
root.render(<App />);

```

```ts
import { Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-maps';
import * as React from 'react';
import { MapsComponent } from '@syncfusion/ej2-react-maps';
export function App() {
    return (<MapsComponent id="maps">
        <Inject services={[DataLabel, Legend, MapsTooltip]}/>
    </MapsComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('maps'));
root.render(<App />);
```

## Render shapes from GeoJSON data

This section explains how to bind GeoJSON data to the map.



```ts

let usMap: Object =
{
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "iso_3166_2": "MA", "name": "Massachusetts", "admin": "United States of America" }, "geometry": { "type": "MultiPolygon", "coordinates": [ [ [ [ -70.801756294617277, 41.248076234530558 ]] ] ] }
        }
    ]
    //https://ej2.syncfusion.com/react/documentation
};

```

```ts
let usMap = {
    "type": "FeatureCollection",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
        { "type": "Feature", "properties": { "iso_3166_2": "MA", "name": "Massachusetts", "admin": "United States of America" }, "geometry": { "type": "MultiPolygon", "coordinates": [[[[-70.801756294617277, 41.248076234530558]]]] }
        }
    ]
    //https://ej2.syncfusion.com/react/documentation
};
```

Elements in the maps will get rendered in the layers. So add a layer collection to the maps by using [`layers`](../api/maps/#layers) property.
Now bind the GeoJSON data to the [`shapeData`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#shapedata) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs33" %}

## Bind data source to map

The following properties in layers are used for binding data source to map.

* [`dataSource`]
* [`shapeDataPath`]
* [`shapePropertyPath`]

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#datasource) property takes collection value as input. For example, the list of objects can be provided as input. This data is further used in tooltip, data label, bubble, legend and in color mapping.

The [`shapeDataPath`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#shapedatapath) property used to refer the data ID in dataSource. Where as, the [`shapePropertyPath`](https://ej2.syncfusion.com/react/documentation/api/maps/layerSettingsModel/#shapepropertypath) property is used to refer the column name in shapeData to identify the shape. Both the properties are related to each other. When the values of the shapeDataPath property in the dataSource property and the value of shapePropertyPath in the shapeData property match, then the associated object from the dataSource is bound to the corresponding shape.

The JSON object "electionData" is used as data source below.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs34/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs34/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs34" %}

>Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Apply Color Mapping

The Color Mapping feature supports customization of shape colors based on the underlying value of shape received from bounded data.
Specify the field name from which the values have to be compared for the shapes in [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property in [`shapeSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/).

Specify color and value in [`colorValuePath`](https://ej2.syncfusion.com/react/documentation/api/maps/shapeSettingsModel/#colorvaluepath) property. Here '#D84444' is specified for 'Trump' and '#316DB5' is specified for 'Clinton'.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs35/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs35/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs35" %}

> Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Add Title for Maps

You can add a title using [`titleSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/titleSettingsModel/) property to the map to provide quick
information to the user about the shapes rendered in the map.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs36/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs36/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs36" %}

> Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Enable Legend

You can show legend for the maps by setting true to the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel/#visible)property in [`legendSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/legendSettingsModel/) object and by injecting the `Legend`
service using `Inject` tag.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs37/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs37/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs37" %}

> Note: Refer the value of the data source of [`world-map.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/world_map1260719407) and [`data.ts`](https://www.syncfusion.com/downloads/support/directtrac/general/ze/data445116385) here.

## Add Data Label

You can add data labels to show additional information of the shapes in map. This can be achieved by
setting [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel/#visible) property to true in the [`dataLabelSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/dataLabelSettingsModel/) object and by injecting `DataLabel` service using `Inject` tag.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs38/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs38/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs38" %}

## Enable Tooltip

The tooltip is useful when you cannot display information by using the data labels due to space constraints.
You can enable tooltip by setting the [`visible`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/#visible) property as true in [`tooltipSettings`](https://ej2.syncfusion.com/react/documentation/api/maps/tooltipSettingsModel/) object and by injecting `MapsTooltip` service using `Inject` tag.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/maps/default-map-cs39/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/maps/default-map-cs39/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/maps/default-map-cs39" %}