


import { L10n } from '@syncfusion/ej2-base';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

L10n.load({
  'fr-BE': {
    'tab': {
      'closeButtonTitle': "Fermer"
    }
  }
});

function ReactApp() {
  const headerText: any = [{ text: "HTML" }, { text: "C Sharp(C#)" }, { text: "Java" }];

  function content0() {
    return <div>
      HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.
    </div>;
  }
  function content1() {
    return <div>
      C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.
    </div>;
  }
  function content2() {
    return <div>
      Java is a set of computer software and specifications developed by Sun Microsystems, later acquired by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-mobile phones to platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to provide many features of native applications and can be embedded in HTML pages.
    </div>;
  }
  return (
    <TabComponent heightAdjustMode='Auto' locale="fr-BE" showCloseButton={true}>
      <TabItemsDirective>
        <TabItemDirective header={headerText[0]} content={content0} />
        <TabItemDirective header={headerText[1]} content={content1} />
        <TabItemDirective header={headerText[2]} content={content2} />
      </TabItemsDirective>
    </TabComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);



