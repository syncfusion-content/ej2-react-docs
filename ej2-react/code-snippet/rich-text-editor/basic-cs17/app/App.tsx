


/**
 * Rich Text Editor - Localization Sample
 */
import { L10n } from '@syncfusion/ej2-base';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

L10n.load({
  'de-DE': {
    'richtexteditor': {
      align: "ausrichten",
      alignments: "Alignments",
      alternateHeader: "Alternatieve tekst",
      alttext: "alternativer Text",
      backgroundColor: "Hintergrundfarbe",
      bold: "fett",
      browse: "Blader",
      caption: "Bildbeschriftung",
      clearAll: "Alles",
      clearFormat: "Klar Format",
      copy: "Kopieren",
      createLink: "Link einfügen",
      cut: "schneiden",
      dialogCancel: "Annuleer",
      dialogInsert: "invoegen",
      dialogUpdate: "Bijwerken",
      dimension: "Größe",
      display: "Anzeige",
      editLink: "Edit link",
      fontColor: "Wählen Sie die Farbe",
      fontName: "Wählen Sie Schriftfamilie",
      fontSize: "Wählen Sie Schriftgröße",
      formats: "Formats",
      fullscreen: "Vollbild",
      image: "Bild einfügen",
      imageAlternateText: "Alternatieve tekst",
      imageCaption: "onderschrift",
      imageDeviceUploadMessage: "Klik hier om te uploaden",
      imageHeader: "Voeg afbeelding in",
      imageHeight: "Hoogte",
      imageLinkHeader: "U kunt ook een link van internet opgeven",
      imageSizeHeader: "Afbeeldingsgrootte",
      imageUploadMessage: "Zet hier een afbeelding neer of klik om te uploaden",
      imageUrl: "URL",
      imageWidth: "Breedte",
      indent: "Einzug",
      insertLink: "Link einfügen",
      insertcode: "Code eingeben",
      italic: "kursiv",
      justifyCenter: "Text-Zentrum",
      justifyFull: "rechtfertigen",
      justifyLeft: "Ausrichten von Text links",
      justifyRight: "Ausrichten von Text rechts",
      linkHeader: "Link invoegen",
      linkOpenInNewWindow: "Open de link in een nieuw venster",
      linkText: "Displaytekst",
      linkTooltipLabel: "tooltip",
      linkWebUrl: "Webadres",
      lowerCase: "Kleinbuchstaben",
      maximize: "Maximieren",
      minimize: "minimieren",
      openLink: "Open link",
      orderedList: "Geordnete Liste einfügen",
      outdent: "Einzug verkleinern",
      paste: "Paste",
      preview: "Vorschau",
      print: "Drucken",
      redo: "Wiederherstellen",
      remove: "Löschen",
      removeLink: "fjern Hyperlink",
      replace: "ersetzen",
      sourcecode: "Quellcode",
      strikethrough: "Durchgestrichen",
      subscript: "index",
      superscript: "Überschrift",
      underline: "unterstreichen",
      undo: "lösen",
      unorderedList: "Legen Sie ungeordnete Liste",
      upperCase: "Großbuchstaben",
      viewside: "Seite anzeigen",
      zoomIn: "hineinzoomen",
      zoomOut: "Rauszoomen",
      formatsDropDownParagraph: "Absatz",
      formatsDropDownCode: "Kodex",
      formatsDropDownQuotation: "Zitat",
      formatsDropDownHeading1: "Überschrift 1",
      formatsDropDownHeading2: "Überschrift 2",
      formatsDropDownHeading3: "Überschrift 3",
      formatsDropDownHeading4: "Überschrift 4",
      fontNameSegoeUI: "Segoe UI",
      fontNameArial: "Arial",
      fontNameGeorgia: "Georgia",
      fontNameImpact: "Einschlag",
      fontNameTahoma: "Tahoma",
      fontNameTimesNewRoman: "Mal Neu römisch",
      fontNameVerdana: "Verdana"
    }
  }
});

function App() {
    return (
      <RichTextEditorComponent  height={450} locale={'de-DE'}>
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
          Users can format their content using standard toolbar commands.</p>
        <p><b>Key features:</b></p>
        <ul>
          <li>
            <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
          </li>
          <li>
            <p>Capable of handling markdown editing.</p>
          </li>
          <li>
            <p>Contains a modular library to load the necessary functionality on demand.</p>
          </li>
          <li>
            <p>Provides a fully customizable toolbar.</p>
          </li>
          <li>
            <p>Provides HTML view to edit the source directly for developers.</p>
          </li>
          <li>
            <p>Supports third-party library integration.</p>
          </li>
          <li>
            <p>Allows preview of modified content before saving it.</p>
          </li>
          <li>
            <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
          </li>
          <li>
            <p>Contains undo/redo manager.</p>
          </li>
          <li>
            <p>Creates bulleted and numbered lists.</p>
          </li>
        </ul>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
}

export default App;



