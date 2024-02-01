---
layout: post
title: React Form validator getting started with Next.js | Syncfusion
description: Check out and learn about how to use Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion React Components 

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion React Form components.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 18.17](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-form`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-form

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-form
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-form.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-form`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-form

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion components to the project.

## Install Syncfusion React packages

Syncfusion React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion React components in the project, install the corresponding npm package.

Here, the React Form components is used in the project. To install the React From components, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm install @syncfusion/ej2-react-inputs @syncfusion/ej2-react-calendars @syncfusion/ej2-react-buttons @syncfusion/ej2-react-dropdowns

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-inputs @syncfusion/ej2-react-calendars @syncfusion/ej2-react-buttons @syncfusion/ej2-react-dropdowns

{% endhighlight %}
{% endtabs %}

## Import Syncfusion CSS styles

Syncfusion React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/), which are available in the installed packages. It’s easy to adapt the Syncfusion React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-react-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-react-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";

.control_wrapper.textbox-form {
  max-width: 400px;
  margin: auto;
  border: 0.5px solid #bebebe;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 36%);
  padding: 1% 4% 2%;
  background: #f9f9f9;
}

.form-title {
  text-align: center;
}

.submitBtn {
  text-align: center;
  margin: 30px;
}

#container {
  margin: 20px auto 0;
  width:450px;
}

.form-group {
  padding-top: 11px;
}

.e-custom-label {
  color: rgba(0, 0, 0, 0.54);
  font-size: 13px;
  font-weight: 500;
  padding-top: 15px;
  padding-bottom: 20px;
}

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/) section.

## Add Syncfusion React component

Follow the below steps to add the React Form components to the Next.js project:

1.Before adding the Form components to your markup, import the From components in the **src/app/page.tsx** file.

{% tabs %}
{% highlight js tabtitle="page.tsx" %}

'use client'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, FormValidator, MaskedTextBoxComponent, UploaderComponent, FormValidatorModel } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

{% endhighlight %}
{% endtabs %}

2.Then, define the Form components in the **src/app/page.tsx** file, as shown below:

{% tabs %}
{% highlight ts tabtitle="page.tsx" %}

'use client'
import { useState, useEffect, useRef, useReducer } from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { TextBoxComponent, FormValidator, MaskedTextBoxComponent, UploaderComponent, FormValidatorModel } from '@syncfusion/ej2-react-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';


let formObject: FormValidator;
export default function Form() {

  const userNameRef = useRef(null);
  const [dateOfBirth, setDateOfBirth] = useState('');
  const initialState = { email: '', password: '' };
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.value };
      default:
        return initialState;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const dateChangeHandler = (event: any) => {
    setDateOfBirth(event.value);
  };
  const update = (field: any) => (event: any) => {
    //update action is dispatched to update the email and password state value
    dispatch({ type: 'update', field, value: event.value });
  };

  // checks the length of mask value and returns corresponding boolean value
  const customFn: (args: { [key: string]: string }) => boolean = (args: { [key: string]: string }) => {
    const argsLength = (args.element as any).ej2_instances[0].value.length;
    return argsLength >= 10;
  };

  useEffect(() => {
    (userNameRef.current as any).focusIn();
    const options: FormValidatorModel = {
      // validation rules
      rules: {
        name: {
          required: [true, '* Please enter your full name'],
        },
        email: {
          required: [true, '* Please enter your email'],
        },
        password: {
          required: [true, '* Please enter your password'],
        },
        mask_value: { 
          numberValue: [customFn, '* Please enter your phone number'] 
        },
        date: {
          required: [true, '* Please enter your date of birth'],
        },
        dropdown: {
          required: [true, '* Please select your gender']
        },
        Address: {
          required: [true, '* Please enter your address']
        }

      },
    };
    // Initialize the form validator
    formObject = new FormValidator('#form1', options);
  }, []);
  const onSubmit = () => {
    formObject.validate();
    if (formObject.validate()) {
      formObject.element.reset();
    }
  };

  const genderData: string[] = ['Male', 'Female', 'Others'];

  return <>
    <div id="container">
      <h2>Syncfusion React From Component</h2>
      <div>
        <div className="control_wrapper" id="control_wrapper">
          <h3 className="form-title">Personal Details</h3>
          <div className="control_wrapper textbox-form">
            <form id="form1" method="post">
              <div className="form-group">
                <TextBoxComponent ref={userNameRef} name="name" value={state.email} change={update('name')} placeholder="Full Name" floatLabelType="Auto" data-msg-containerid="errorForName" />
                <div id="errorForName" />
              </div>
              <div className="form-group">
                <TextBoxComponent type="email" name="email" value={state.email} change={update('email')} placeholder="Email" floatLabelType="Auto" data-msg-containerid="errorForEmail" />
                <div id="errorForEmail" />
              </div>
              <div className="form-group">
                <TextBoxComponent type="password" name="password" value={state.password} change={update('password')} placeholder="Password" floatLabelType="Auto" data-msg-containerid="errorForPassword" />
                <div id="errorForPassword" />
              </div>
              <div className="form-group">
                <DatePickerComponent name="date" value={dateOfBirth as any} change={dateChangeHandler} placeholder="Date of Birth" floatLabelType="Auto" data-msg-containerid="errorForDateOfBirth" />
                <div id="errorForDateOfBirth" />
              </div>
              <div className="form-group">
                <DropDownListComponent name='dropdown' placeholder='Choose a gender' floatLabelType='Auto' dataSource={genderData} data-msg-containerid="errorForGender" />
                <div id="errorForGender" />
              </div>
              <div className="form-group">
                <MaskedTextBoxComponent mask="000-000-0000" id="mask" name="mask_value" placeholder="Phone Number" floatLabelType="Always" data-msg-containerid="errorForPhone" />
                <label className='e-error' htmlFor='mask_value'/>
              </div>
              <div className="form-group">
                <div className="e-float-input">
                  <textarea className="address-field" id="Address" name="Address" />
                  <span className="e-float-line" />
                  <label className="e-float-text e-label-top">Address</label>
                </div>
              </div>
              <div className="form-group">
                <div className="e-float-text e-custom-label">Upload Photo (optional)</div>
                <UploaderComponent name="upload" type="file" multiple={false} data-msg-containerid="errorForUpload" />
              </div>
            </form>
            <div className="submitBtn">
              <ButtonComponent onClick={onSubmit}>Submit</ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

{% endhighlight %}
{% endtabs %}

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

To know about the functionality of the react hooks, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/form-validator/react-functional-component).

> [View the NEXT.js Form sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-form).
