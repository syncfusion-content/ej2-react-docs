import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';

export default class App extends React.Component {
    imgObj;
    state = {
        isTextInserted: false
    };
    imageEditorCreated() {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        }
        else {
            this.imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }

    addText() {
        if (!this.state.isTextInserted) {
            this.setState({ isTextInserted: true });
            let dimension = this.imgObj.getImageDimension();
            this.imgObj.drawText(dimension.x, dimension.y, 'Syncfusion');
        }
    }

    bold() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0]) {
            if (shapes[0].fontStyle?.includes('bold')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'bold');
            } else {
                shapes[0].fontStyle.push('bold');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    italic() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0]) {
            if (shapes[0].fontStyle?.includes('italic')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'italic');
            } else {
                shapes[0].fontStyle.push('italic');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    underline() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0]) {
            if (shapes[0].fontStyle?.includes('underline')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'underline');
            } else {
                shapes[0].fontStyle.push('underline');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    strikethrough() {
        const shapes = this.imgObj.getShapeSettings();
        if (shapes && shapes[0]) {
            if (shapes[0].fontStyle?.includes('strikethrough')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter(item => item !== 'strikethrough');
            } else {
                shapes[0].fontStyle.push('strikethrough');
            }
            this.imgObj.updateShape(shapes[0]);
        }
    }

    render() {
        return (
            <div className='e-img-editor-sample'><ImageEditorComponent ref={(img) => { this.imgObj = img; }} height="350px" width="550px" showQuickAccessToolbar={false} created={this.imageEditorCreated.bind(this)} toolbar={[]} />
                <div class="button-group" >
                    <button id="text" disabled={this.state.isTextInserted} class="e-btn e-primary" onClick={this.addText.bind(this)} >Add Text</button>
                    <div class="e-btn-group">
                        <input type="checkbox" id="bold" value="bold" onClick={this.bold.bind(this)} />
                        <label class="e-btn" for="bold">
                            <span class="e-icons e-bold"></span>Bold
                        </label>
                        <input type="checkbox" id="italic" value="italic" onClick={this.italic.bind(this)} />
                        <label class="e-btn" for="italic">
                            <span class="e-icons e-italic"></span>Italic
                        </label>
                        <input type="checkbox" id="underline" value="underline" onClick={this.underline.bind(this)} />
                        <label class="e-btn" for="underline">
                            <span class="e-icons e-underline"></span>Underline
                        </label>
                        <input type="checkbox" id="strikethrough" value="strikethrough" onClick={this.strikethrough.bind(this)} />
                        <label class="e-btn" for="strikethrough">
                            <span class="e-icons e-strikethrough"></span>Strikethrough
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('image-editor'));