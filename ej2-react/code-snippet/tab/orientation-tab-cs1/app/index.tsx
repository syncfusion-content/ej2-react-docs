


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';

function ReactApp() {
  let tabObj: TabComponent;

  let headerText: any = [{ text: "HTML" }, { text: "C Sharp(C#)" }, { text: "Java" }, { text: "VB.Net" },
  { text: "Xamarin" }, { text: "ASP.NET" }, { text: "ASP.NET MVC" }, { text: "JavaScript" }];

  let fields: object = { text: 'text', value: 'value' };

  let headerData: any = [{ 'value': 'top', 'text': 'Top' }, { 'value': 'bottom', 'text': 'Bottom' },
  { 'value': 'left', 'text': 'Left' }, { 'value': 'right', 'text': 'Right' }];

  let orientationData: { [key: string]: Object }[] = [{ 'value': 'scrollable', 'text': 'Scrollable' }, { 'value': 'popup', 'text': 'Popup' }];

  let hdrVal: string = 'top';

  let orientationVal: string = 'scrollable';

  const changeOrientationMode = (e: ChangeEventArgs): void => {
    let placement: string = (document.getElementById('headerPosition') as HTMLSelectElement).value;
    tabObj.headerPlacement = placement as any;
    tabObj.dataBind();
  }

  const changeOverflowMode = (e: ChangeEventArgs): void => {
    let placement: string = (document.getElementById('orientation') as HTMLSelectElement).value;
    tabObj.overflowMode = placement as any;
    tabObj.dataBind();
  }

  function content0() {
    return <div>
      HyperText Markup Language, commonly referred to as HTML, is the standard markup
      language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone
      technology, used by most websites to create visually engaging web pages, user interfaces
      for web applications, and user interfaces for many mobile applications.[1] Web browsers
      can read HTML files and render them into visible or audible web pages. HTML describes
      the structure of a website semantically along with cues for presentation, making it a
      markup language, rather than a programming language.
    </div>;
  }
  function content1() {
    return <div>
      C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.
    </div>;
  }
  function content2() {
    return <div>
      Java is a set of computer software and specifications developed by Sun Microsystems, later acquired by Oracle
      Corporation, that provides a system for developing application software and deploying it in a cross-platform computing
      environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to
      enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to
      provide many features of native applications and can be embedded in HTML pages.
    </div>;
  }
  function content3() {
    return <div>
      The command-line compiler, VBC.EXE, is installed as part of the freeware .NET
      Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version
      is VB 2012, which was released on August 15, 2012.
    </div>;
  }
  function content4() {
    return <div>
      Xamarin is a San Francisco, California based software company created in May
      2011[3] by the engineers that created Mono,[4] Mono for Android and MonoTouch that are
      cross-platform implementations of the Common Language Infrastructure (CLI) and Common
      Language Specifications (often called Microsoft .NET). With a C#-shared codebase,developers
      can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces
      and share code across multiple platforms.[5] Xamarin has over 1 million developers in more
      than 120 countries around the World as of May 2015.
    </div>;
  }
  function content5() {
    return <div>
      ASP.NET is an open-source server-side web application framework designed for web
      development to produce dynamic web pages. It was developed by Microsoft to allow programmers
      to build dynamic web sites, web applications and web services. It was first released in January
      2002 with version 1.0 of the .NET Framework, and is the successor to Microsoft Active Server
      Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing
      programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension
      framework allows ASP.NET components to process SOAP messages.
    </div>;
  }
  function content6() {
    return <div>
      The ASP.NET MVC is a web application framework developed by Microsoft, which implements
      the model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web
      Forms component which is proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web
      API, and ASP.NET Web Pages (a platform using only Razor pages) will merge into a unified MVC 6.
      The project is called ASP.NET vNext.
    </div>;
  }
  function content7() {
    return <div>
      JavaScript (JS) is an interpreted computer programming language. It was originally
      implemented as part of web browsers so that client-side scripts could interact with the
      user, control the browser, communicate asynchronously, and alter the document content that
      was displayed.[5] More recently, however, it has become common in both game development
      and the creation of desktop applications.
    </div>;
  }

  return (
    <div>
      <div className='row' id='header'>
        <label> Header Position </label>
        <div>
          <DropDownListComponent id='headerPosition' dataSource={headerData} fields={fields} value={hdrVal} width={'150'} change={changeOrientationMode} />
        </div>
      </div>
      <div className='row' id='mode'>
        <label> Mode </label>
        <div>
          <DropDownListComponent id='orientation' dataSource={orientationData} fields={fields} value={orientationVal} width={'150'} change={changeOverflowMode} />
        </div>
      </div>
      <br /><br />
      <TabComponent id='default' heightAdjustMode='None' height={150} width='700' ref={tab => tabObj = tab!}>
        <TabItemsDirective>
          <TabItemDirective header={headerText[0]} content={content0} />
          <TabItemDirective header={headerText[1]} content={content1} />
          <TabItemDirective header={headerText[2]} content={content2} />
          <TabItemDirective header={headerText[3]} content={content3} />
          <TabItemDirective header={headerText[4]} content={content4} />
          <TabItemDirective header={headerText[5]} content={content5} />
          <TabItemDirective header={headerText[6]} content={content6} />
          <TabItemDirective header={headerText[7]} content={content7} />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);




