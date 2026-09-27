---
layout: post
title: Templates in React Form Renderer component | Syncfusion
description: Learn how to display templates in the React Form Renderer component to integrate third-party components within forms.
platform: ej2-react
control: Templates
documentation: ug
domainurl: ##DomainURL##
---

# Templates in React Form Renderer component

Templates can be displayed in the Form Renderer control to render third-party components within a form.

This section explains how to use templates in the Form Renderer component.

## Adding Templates

Templates can be added to a form in Form Renderer by setting the `template` property in `customWidgetSettings`. Map the template to a specific form field type by using the `type` property in `customWidgetSettings`.

`customWidgetSettings` is an array property, so you can render any number of templates in the form.

The `setFieldValue` method is used to set the value of a form field programmatically. When templates are assigned, this method can be used to pass the value set in the third-party component to the Form Renderer control.

```tsx
import { useRef } from 'react';
import { FormRendererComponent, type Schema } from '@syncfusion/ej2-react-form-renderer';

const formSchema: Schema = {
	"version": "0.1.0",
	"properties": {
		"emailAddress": {
			"id": "textbox_1785491685456_167",
			"name": "emailAddress",
			"type": "string",
			"label": "Email Address",
			"textboxType": "email",
			"required": true,
			"placeholder": "Enter your email",
			"widget": "textbox",
		},
		"password": {
			"id": "textbox_1785491685456_537",
			"name": "password",
			"type": "string",
			"label": "Password",
			"textboxType": "password",
			"required": true,
			"minLength": 6,
			"placeholder": "Enter your password",
			"widget": "textbox"
		},
		"rememberMe": {
			"id": "checkbox_1785491685456_262",
			"name": "rememberMe",
			"type": "boolean",
			"label": "Remember Me",
			"widget": "checkbox"
		},
		"submit": {
			"id": "submit_button_initial",
			"name": "defaultFormsubmit",
			"type": "button",
			"label": "Submit",
			"buttonType": "submit",
			"widget": "button",
			"style": "primary",
			"disabled": false
		}
	},
	"layout": [
		{
			"type": "field",
			"propertyId": "emailAddress"
		},
		{
			"type": "field",
			"propertyId": "password"
		},
		{
			"type": "field",
			"propertyId": "rememberMe"
		},
		{
			"type": "field",
			"propertyId": "submit"
		}
	],
	"settings": {
		"name": "Untitled Form"
	}
};

export default function App() {
	const formRendererRef = useRef<FormRendererComponent | null>(null);

	function inputTemplate(data: any) {
		const { fieldData } = data;

		return (
			<input
				type={fieldData.textboxType ?? 'text'}
				id={fieldData.id}
				name={fieldData.name}
				placeholder={fieldData.placeholder}
				className="custom-input e-input"
				onChange={(event) => {
					formRendererRef.current?.setFieldValue(fieldData.id, event.target.value);
				}}
				onBlur={(event) => {
					formRendererRef.current?.setFieldValue(fieldData.id, event.target.value);
				}}
			/>
		);
	}

	return (
		<div id="formrenderer">
			<FormRendererComponent
				ref={formRendererRef}
				schema={formSchema}
				customWidgetSettings={[
					{ type: 'textbox', template: inputTemplate }
				]}
			/>
		</div>
	);
}

```

## Adding a template to a single or specific field

You can also map a template to a single form field by using the `fieldName` and `templateId` properties.

* `fieldName` - This property uses the **name** value of the form field in the schema. If the field name in the schema matches this property during form rendering, the corresponding template is rendered.

* `templateId` - If the form field in the schema has a **templateId** property, assign the same value to this property. This maps the template to the corresponding form field.

> In this case, the `type` property is not required.

```tsx
import { useRef } from 'react';
import { FormRendererComponent, type Schema } from '@syncfusion/ej2-react-form-renderer';

const formSchema: Schema = {
	"version": "0.1.0",
	"properties": {
		"emailAddress": {
			"id": "textbox_1785491685456_167",
			"name": "emailAddress",
			"type": "string",
			"label": "Email Address",
			"textboxType": "email",
			"required": true,
			"placeholder": "Enter your email",
			"widget": "textbox",
			"templateId": "email-template"
		},
		"password": {
			"id": "textbox_1785491685456_537",
			"name": "password",
			"type": "string",
			"label": "Password",
			"textboxType": "password",
			"required": true,
			"minLength": 6,
			"placeholder": "Enter your password",
			"widget": "textbox",
			"templateId": "password-template"
		},
		"rememberMe": {
			"id": "checkbox_1785491685456_262",
			"name": "rememberMe",
			"type": "boolean",
			"label": "Remember Me",
			"widget": "checkbox"
		},
		"submit": {
			"id": "submit_button_initial",
			"name": "defaultFormsubmit",
			"type": "button",
			"label": "Submit",
			"buttonType": "submit",
			"widget": "button",
			"style": "primary",
			"disabled": false
		}
	},
	"layout": [
		{
			"type": "field",
			"propertyId": "emailAddress"
		},
		{
			"type": "field",
			"propertyId": "password"
		},
		{
			"type": "field",
			"propertyId": "rememberMe"
		},
		{
			"type": "field",
			"propertyId": "submit"
		}
	],
	"settings": {
		"name": "Untitled Form"
	}
};

export default function App() {
	const formRendererRef = useRef<FormRendererComponent | null>(null);

	function inputTemplate(data: any) {
		const { fieldData } = data;

		return (
			<input
				type={fieldData.textboxType ?? 'text'}
				id={fieldData.id}
				name={fieldData.name}
				placeholder={fieldData.placeholder}
				className="custom-input e-input"
				onChange={(event) => {
					formRendererRef.current?.setFieldValue(fieldData.id, event.target.value);
				}}
				onBlur={(event) => {
					formRendererRef.current?.setFieldValue(fieldData.id, event.target.value);
				}}
			/>
		);
	}

	function passwordTemplate(data: any) {
		const { fieldData } = data;

		return (
			<input
				type="password"
				id={fieldData.id}
				name={fieldData.name}
				placeholder={fieldData.placeholder}
				className="custom-input e-input"
				onChange={(event) => {
					formRendererRef.current?.setFieldValue(fieldData.id, event.target.value);
				}}
				onBlur={(event) => {
					formRendererRef.current?.setFieldValue(fieldData.id, event.target.value);
				}}
			/>
		);
	}

	return (
		<div id="formrenderer">
			<FormRendererComponent
				ref={formRendererRef}
				schema={formSchema}
				customWidgetSettings={[
					{ fieldName: 'emailAddress', template: inputTemplate }
					 // if adding templates using `templateId`
					// { templateId: 'password-template', template: passwordTemplate }
				]}
			/>
		</div>
	);
}

```