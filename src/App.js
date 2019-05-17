import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CKEditor from 'ckeditor4-react';
import EditorPreview from './components/EditorPreview'

const DEFAULT_TOP_PANEL_HEIGHT  =   42;
const DEFAULT_BOTTOM_PANEL_HEIGHT   =   27;

const CKEDITOR_CONFIG   =   {
    resize_enabled: false,
    height: window.innerHeight - DEFAULT_TOP_PANEL_HEIGHT - DEFAULT_BOTTOM_PANEL_HEIGHT + "px",
    toolbar: [
        {name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike']},
        {name: 'paragraph', items: ['NumberedList', 'BulletedList']},
        {name: 'insert', items: ['Image', 'EqnEditor']},
        {name: 'styles', items: ['Font', 'FontSize']},
        {name: 'colors', items: ['TextColor', 'BGColor']}
    ],
    extraPlugins: ['eqneditor']
};

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: ""
        };

        this.mainEditor = null;
    }

    /**
     * Resize the editor dimension when the window is resized
     */
    resizeEditor() {
        try {
            let topPanelHeight = document.getElementById("cke_1_top").offsetHeight;
            let bottomPanelHeight = document.getElementById("cke_1_bottom").offsetHeight;
            this.mainEditor.editor.resize("100%", window.innerHeight - topPanelHeight - bottomPanelHeight, true);
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        window.addEventListener("resize", () => {
            this.resizeEditor();
        });
    }

    /**
     * Handle CKEditor content changes
     * @param evt
     */
    onEditorChange(evt) {
        this.setState({
            data: evt.editor.getData()
        });
    }

    render() {
        return (
            <div>
                <div className="container editor">
                    <CKEditor
                        data={this.state.data}
                        onChange={(evt) => this.onEditorChange(evt)}
                        config={CKEDITOR_CONFIG}
                        ref={(instance) => this.mainEditor = instance}
                    />
                </div>
                <div className="container preview">
                    <EditorPreview data={this.state.data}/>
                </div>
            </div>
        );
    }
}

export default App;
