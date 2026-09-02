---
layout: post
title: Entity Relationship Diagram in React Diagram | Syncfusion®
platform: ej2-react
description: Build Entity Relationship Diagrams in React Diagram using entity nodes, field rows, and relationship connectors.
control: ERDiagram
documentation: ug
domainurl: ##DomainURL##
---


# Entity Relationship Diagram in React Diagram

An Entity Relationship (ER) diagram is a visual representation of a database structure. It displays entities (such as tables), their attributes (such as columns), and the relationships between those entities. In the Syncfusion® React Diagram component, ER diagrams can be created by configuring nodes with [ErShapeModel](https://ej2.syncfusion.com/react/documentation/api/diagram/erShapeModel) and connectors with [ErConnectorShapeModel](https://ej2.syncfusion.com/react/documentation/api/diagram/erConnectorShapeModel).

ER entity nodes are added to the [nodes](https://ej2.syncfusion.com/react/documentation/api/diagram#nodes) property, and ER relationships are defined as connectors and added to the [connectors](https://ej2.syncfusion.com/react/documentation/api/diagram#connectors) property.

## ER diagram elements

An ER diagram is built using the following main elements:

* **Entities** - Represent database tables or objects, such as Customer, Order, or Product.
* **Fields** - Represent columns or attributes inside an entity, such as CustomerID, Name, or Email.
* **Relationships** - Represent the association between two entities.

## Creating ER entity nodes

An ER entity node represents a database entity, such as a table or object. It appears as a box that displays the entity name in the header and its fields as rows. The node shape can be defined by setting the [type](https://ej2.syncfusion.com/react/documentation/api/diagram/shape#type) property to **Er**.

N> Before using ER shapes, inject the `ErDiagrams` module by placing `<Inject services={[ErDiagrams]} />` inside the `<DiagramComponent>`. This module must be registered for ER entities, fields, and relationship connectors to render.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/erDiagram/er-diagram-1" %}

### Configure the entity header

The header is the top section of an ER entity node that displays the entity name. The header appearance can be customized using the [header](https://ej2.syncfusion.com/react/documentation/api/diagram/erShapeModel#header) property.

| ER Header Property | Description |
|---|---|
| [annotation](https://ej2.syncfusion.com/react/documentation/api/diagram/erHeaderModel#annotation) | Defines the text content displayed in the header. |
| [height](https://ej2.syncfusion.com/react/documentation/api/diagram/erHeaderModel#height) | Defines the height of the header area in pixels. |
| [style](https://ej2.syncfusion.com/react/documentation/api/diagram/erHeaderModel#style) | Defines style properties such as fill color, text color, and font settings. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-header/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-header/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/erDiagram/er-diagram-header" %}

N> If no header is specified, a default header is automatically added to the ER entity node with the default style and height.

### Define entity fields

Fields represent the columns or attributes of an entity. They can be defined using the [fields](https://ej2.syncfusion.com/react/documentation/api/diagram/erShapeModel#fields) property. Each field can display information such as the field name, data type, and key constraints, including primary key, foreign key, unique, and not null.

| ER Field Property | Description |
|---|---|
| [id](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#id) | Defines the unique identifier for the field within the entity. |
| [name](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#name) | Defines the display name of the field. |
| [dataType](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#dataType) | Defines the data type of the field, such as **INT**, **VARCHAR(255)**, or **BOOLEAN**. |
| [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#isprimarykey) | Indicates whether the field is the primary key of the entity. |
| [isForeignKey](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#isforeignkey) | Indicates whether the field is a foreign key that references another entity. |
| [constraints](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#constraints) | Defines additional constraints applied to the field. Accepts one or more [ErFieldConstraint](https://ej2.syncfusion.com/react/documentation/api/diagram/erfieldconstraint) values: **NotNull** or **Unique**. |
| [style](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#style) | Defines the visual style of the ER field row. Supports standard shape style properties such as fill, stroke color, stroke width, opacity, and other supported diagram style values. Field-level style values override applicable values from field defaults. |
| [annotation](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#annotation) | Defines text styling for the ER field row. Only annotation [style](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeannotation#style) property is applicable. The annotation [content](https://ej2.syncfusion.com/react/documentation/api/diagram/shapeannotation#content) property is ignored. |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-fields/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-fields/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/erDiagram/er-diagram-fields" %}

N> If no fields are specified, a default single field is automatically added to the ER entity node.

### Add or remove ER fields at runtime

ER fields can be updated after the diagram is rendered by using the [addErField](https://ej2.syncfusion.com/react/documentation/api/diagram#addErField) and [removeErField](https://ej2.syncfusion.com/react/documentation/api/diagram#removeErField) methods. These methods help add new fields to an ER entity node or remove existing fields without recreating the diagram.

The `addErField` method adds a field to an ER entity node.

N> The snippets below use a `diagramInstance` reference. Obtain it by attaching a `ref` to the `<DiagramComponent>` and exposing it, for example:
```
function App() {
  let diagramInstance: DiagramComponent;
  return (
    <DiagramComponent id="container" ref={diag => diagramInstance = diag}
      width={'100%'} height={'400px'} >
      <Inject services={[ErDiagrams]} />
    </DiagramComponent>
  );
}
```

```
let entityNode = diagramInstance.nodes[0];
let newField = {
    id: 'customer_phone',
    name: 'Phone',
    dataType: 'VARCHAR(20)'
};

diagramInstance.addErField(entityNode, newField);
```

To insert the field at a specific position, pass the index as the third argument:

```
diagramInstance.addErField(entityNode, newField, 2);
```

The `removeErField` method removes an existing field from an ER entity node.

```
// Find the field that needs to be removed from the ER entity.
let fieldToRemove = entityNode.shape.fields.find(
    field => field.id === 'customer_phone'
);

if (fieldToRemove) {
    diagramInstance.removeErField(entityNode, fieldToRemove);
}
```

### Configure default field appearance

The [fieldDefaults](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldDefaults) property, nested under the ER entity's [shape](https://ej2.syncfusion.com/react/documentation/api/diagram/erShapeModel) (ErShapeModel), defines the default visual appearance for all fields in an ER entity node. These settings are applied to every field unless they are overridden by individual field-level style settings.

| ER Field Defaults Property | Description |
|---|---|
| [alternateRowColors](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldDefaults#alternaterowcolors) | Defines exactly two colors cycled across field rows in alternating order. Row 0 uses `alternateRowColors[0]`, row 1 uses `alternateRowColors[1]`, row 2 uses `alternateRowColors[0]`, and so on. |
| [height](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldDefaults#height) | Defines the default height of each ER entity field row. |

### Style ER entities and fields

The appearance of ER entities and their fields can be customized using style properties. The node-level [style](https://ej2.syncfusion.com/react/documentation/api/diagram/node#style) property controls the overall ER entity appearance, while individual field [style](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldModel#style) values can override applicable styles for specific field rows.

The snippet below also sets [fieldDefaults](https://ej2.syncfusion.com/react/documentation/api/diagram/erFieldDefaults) (nested under `shape`) to apply common defaults to all fields. For more on `fieldDefaults`, see the [Configure default field appearance](#configure-default-field-appearance) section.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-styling/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-styling/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/erDiagram/er-diagram-styling" %}

N> Field-level styles override applicable node-level and field default styles.

### Track entity field changes

The [erEntityChanged](https://ej2.syncfusion.com/react/documentation/api/diagram#erEntityChanged) event is triggered when ER entity fields are added, removed, or reordered. This event provides the previous and updated entity states, which can be used to track modifications, validate field changes, or synchronize updates with an external data source.

The event handler receives an [IErEntityChangedEventArgs](https://ej2.syncfusion.com/react/documentation/api/diagram/ierEntityChangedEventArgs) object with the following members:

| IErEntityChangedEventArgs Property | Description |
|---|---|
| `diagram` | Returns the instance of the diagram. |
| `element` | The entity node (NodeModel) that changed. |
| `oldValue` | Contains the previous ER entity state before the change, including `fields` (ErFieldModel[]). |
| `newValue` | Contains the updated ER entity state after the change, including `fields` (ErFieldModel[]). |
| `cause` | Indicates the action that triggered the event. Accepts **`'FieldsAdd'`**, **`'FieldsRemove'`**, or **`'FieldsReorder'`**. |
| `state` | Indicates the stage of the operation. Accepts **`'Start'`**, **`'Progress'`**, or **`'Completed'`**. |
| `cancel` | Set to **`true`** to cancel the entity change. |

```
<DiagramComponent id="container"
  width={'100%'}
  height={'400px'}
  erEntityChanged={(args: IErEntityChangedEventArgs) => {
    if (args.cause === 'FieldsReorder' && args.state === 'Completed') {
      console.log('ER fields reordered successfully.');
    }
  }} >
  <Inject services={[ErDiagrams]} />
</DiagramComponent>
```

## Creating ER relationships

Relationships define how one ER entity is connected to another entity. In the Diagram control, relationships are created using ER connectors. They are rendered as lines with multiplicity symbols at the connector ends. The connector shape can be defined by setting the [type](https://ej2.syncfusion.com/react/documentation/api/diagram/connectorshape#type) property to **Er**.

| ER Connector Shape Property | Description |
|---|---|
| [type](https://ej2.syncfusion.com/react/documentation/api/diagram/erConnectorShapeModel#type) | Defines the connector shape type as `'Er'`. Default: **`'Er'`**. |
| [relationship](https://ej2.syncfusion.com/react/documentation/api/diagram/erConnectorShapeModel#relationship) | Defines whether the relationship is identifying or non-identifying. Accepts **`'Identifying'`** or **`'NonIdentifying'`**. |
| [sourceMultiplicity](https://ej2.syncfusion.com/react/documentation/api/diagram/erConnectorShapeModel#sourcemultiplicity) | Defines the Crow's Foot multiplicity rendered at the source end of the ER connector. |
| [targetMultiplicity](https://ej2.syncfusion.com/react/documentation/api/diagram/erConnectorShapeModel#targetmultiplicity) | Defines the Crow's Foot multiplicity rendered at the target end of the ER connector. |

The following snippet shows a connector with an identifying relationship between two ER entities:

```
const relationship = {
  id: 'customer_order',
  sourceID: 'Customer',
  targetID: 'Order',
  shape: {
    type: 'Er',
    relationship: 'Identifying',
    sourceMultiplicity: { type: 'One' },
    targetMultiplicity: { type: 'OneOrMany' }
  }
};
```

To render a non-identifying relationship instead, set `relationship` to `'NonIdentifying'`:

```
shape: {
  type: 'Er',
  relationship: 'NonIdentifying',
  sourceMultiplicity: { type: 'ZeroOrMany' },
  targetMultiplicity: { type: 'ZeroOrOne' }
}
```

### Define relationship multiplicity

Multiplicity defines how many instances of one entity can be associated with instances of another entity. In ER diagrams, multiplicity is represented using Crow's Foot symbols at the source and target ends of a connector.

The [sourceMultiplicity](https://ej2.syncfusion.com/react/documentation/api/diagram/erConnectorShapeModel#sourcemultiplicity) and [targetMultiplicity](https://ej2.syncfusion.com/react/documentation/api/diagram/erConnectorShapeModel#targetmultiplicity) properties accept an [ErMultiplicityModel](https://ej2.syncfusion.com/react/documentation/api/diagram/erMultiplicityModel) with the following property:

| ER Multiplicity Property | Description |
|---|---|
| [type](https://ej2.syncfusion.com/react/documentation/api/diagram/erMultiplicityModel#type) | Defines the Crow's Foot multiplicity symbol rendered at the connector end. Accepts one of the [ErMultiplicityTypes](https://ej2.syncfusion.com/react/documentation/api/diagram/erMultiplicityTypes) values listed in the table below. Default: **`'One'`**. |

| Multiplicity Type | Meaning | Example | Image |
|---|---|---|---|
| **One** | Represents a single participation marker. | A customer has one primary account. | ![One Multiplicity](./images/er-diagram-images/cardinality-one.png) |
| **OneAndOnlyOne** | Represents mandatory participation of exactly one instance. | A user must have exactly one profile. | ![OneAndOnlyOne Multiplicity](./images/er-diagram-images/cardinality-one-and-only-one.png) |
| **Many** | Represents multiple instances. | A customer can have many orders. | ![Many Multiplicity](./images/er-diagram-images/cardinality-many.png) |
| **ZeroOrOne** | Represents zero or one instance. | An employee may have zero or one manager badge. | ![ZeroOrOne Multiplicity](./images/er-diagram-images/cardinality-zero-or-one.png) |
| **OneOrMany** | Represents one or more instances. | A department must have one or more employees. | ![OneOrMany Multiplicity](./images/er-diagram-images/cardinality-one-or-many.png) |
| **ZeroOrMany** | Represents zero or more instances. | A customer may have zero or more wish list items. | ![ZeroOrMany Multiplicity](./images/er-diagram-images/cardinality-zero-or-many.png) |

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-cardinality/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/erDiagram/er-diagram-cardinality/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/erDiagram/er-diagram-cardinality" %}

## See also

* [How to add nodes to the symbol palette](./symbol-palette)
* [How to customize the connector appearance](./connector-customization)
* [How to perform nodes interaction](./nodes-interaction)