import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component {
    imgObj;
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }

    addText() {
        let dimension = this.imgObj.getImageDimension();
        this.imgObj.drawText(dimension.x, dimension.y, 'Syncfusion');
        const textElement = document.getElementById('text');
        if (textElement) {
            textElement.setAttribute('disabled', 'true');
        }
    }

    bold() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0] && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('bold')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'bold');
            } else {
                shapes[0].fontStyle.push('bold');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    italic() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0] && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('italic')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'italic');
            } else {
                shapes[0].fontStyle.push('italic');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    underline() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0] && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('underline')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'underline');
            } else {
                shapes[0].fontStyle.push('underline');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    strikethrough() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0] && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('strikethrough')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'strikethrough');
            } else {
                shapes[0].fontStyle.push('strikethrough');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    render() {
        return (<div className='e-img-editor-sample'>
            <ImageEditorComponent 
                ref={(img) => { this.imgObj = img; }} 
                height="350px" 
                width="550px" 
                showQuickAccessToolbar={false} 
                created={this.imageEditorCreated.bind(this)} 
                toolbar={[]} 
            />
            <div className="button-group" >
                <button 
                    id="text" 
                    className="e-btn e-primary" 
                    onClick={this.addText.bind(this)}
                >
                    Add Text
                </button>
                <div className="e-btn-group">
                    <input type="checkbox" id="bold" value="bold" onChange={this.bold.bind(this)} />
                    <label className="e-btn" htmlFor="bold">
                        <span className="e-icons e-bold"></span>Bold
                    </label>
                    <input type="checkbox" id="italic" value="italic" onChange={this.italic.bind(this)} />
                    <label className="e-btn" htmlFor="italic">
                        <span className="e-icons e-italic"></span>Italic
                    </label>
                    <input type="checkbox" id="underline" value="underline" onChange={this.underline.bind(this)} />
                    <label className="e-btn" htmlFor="underline">
                        <span className="e-icons e-underline"></span>Underline
                    </label>
                    <input type="checkbox" id="strikethrough" value="strikethrough" onChange={this.strikethrough.bind(this)} />
                    <label className="e-btn" htmlFor="strikethrough">
                        <span className="e-icons e-strikethrough"></span>Strikethrough
                    </label>
                </div>
            </div>
        </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));