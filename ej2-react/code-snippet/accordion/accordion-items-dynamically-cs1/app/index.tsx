import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, ExpandEventArgs, AccordionItemModel } from '@syncfusion/ej2-react-navigations';
// @ts-ignore

let dbFlag: number = 0;
let dynamciAcrdnCount: number = 2;
function ReactApp() {
  let acrdnInstance: AccordionComponent | any;
  let accordion: Object[] = [
    {
      header: ' ASP.NET Razor ',
      content: ' Razor is an ASP.NET programming syntax used to create dynamic web pages with the C# or Visual Basic .NET programming languages. Razor was in development in June 2010 and was released for Microsoft Visual Studio 2010 in January 2011. Razor is a simple-syntax view engine and was released as part of MVC 3 and the WebMatrix tool set. '
    },
    {
      header: ' EmberJS ',
      content: ' EmberJS is an open-source JavaScript web framework, based on the Model–view–viewmodel (MVVM) pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework. '
    },
    {
      header: ' Hypertext Markup Language ',
      content: ' Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. '
    },
    {
      header: ' HTML5 ',
      content: ' HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and current major version of the HTML standard. '
    },
    {
      header: ' JavaScript ',
      content: ' JavaScript (JS) is an interpreted computer programming language. '
    },
    {
      header: ' JSP ',
      content: ' JavaServer Pages (JSP) is a technology that helps software developers create dynamically generated web pages based on HTML, XML, or other document types. Released in 1999 by Sun Microsystems, JSP is similar to PHP and ASP, but it uses the Java programming language. '
    },
    {
      header: ' Perl ',
      content: ' Perl is a family of high-level, general-purpose, interpreted, dynamic programming languages.  Perl was originally developed by Larry Wall in 1987 as a general-purpose Unix scripting language to make report processing easier. '
    },
    {
      header: ' PHP ',
      content: ' PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. Originally created by Rasmus Lerdorf in 1994, the PHP reference implementation is now produced by The PHP Group. PHP originally stood for Personal Home Page, but it now stands for the recursive acronym PHP: Hypertext Preprocessor '
    },
    {
      header: ' Ruby ',
      content: ' Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. It supports multiple programming paradigms, including functional, object-oriented, and imperative. It also has a dynamic type system and automatic memory management. '
    },
    {
      header: ' Typescript ',
      content: ' TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. '
    },
  ];
  return (
    <div className='control-pane'>
      <div className='control-section accordion-control-section'>
        <div className='control Accordion-sample'>
          {/* Render the Accoridon Component */}
          <AccordionComponent expanded={expanded} ref={acrdn => acrdnInstance = acrdn}>
            <AccordionItemsDirective>
              <AccordionItemDirective header='ASP.NET' content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.' />
              <AccordionItemDirective header='ASP.NET Core' content='ASP.NET Core is a free and open-source web framework, and the next generation of ASP.NET, developed by Microsoft and the community. It is a modular framework that runs on both the full .NET Framework, on Windows, and the cross-platform .NET Core.' />
              <AccordionItemDirective header='ASP.NET MVC' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' />
            </AccordionItemsDirective>
          </AccordionComponent>
        </div></div>
    </div>

  );
  function expanded(e: ExpandEventArgs) {
    let Elementindex = document.getElementsByClassName("e-expand-state e-selected e-active")[0];
    if ([].slice.call((e.element as any).parentElement.children).indexOf(e.element) === [].slice.call((e.element as any).parentElement.children).indexOf(Elementindex)) {
      let array: AccordionItemModel[] = accordion as AccordionItemModel[];
      for (let i: number = 0; i < dynamciAcrdnCount; i++) {
        if (dbFlag === array.length) {
          return;
        }
        acrdnInstance.addItem(array[dbFlag], acrdnInstance.items.length);
        ++dbFlag;
      }
    }
  }
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);



