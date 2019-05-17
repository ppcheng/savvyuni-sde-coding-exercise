import React, {Component} from 'react';
import PropTypes from 'prop-types';

class EditorPreview extends Component {
    render() {
        return (
            <div className="editor-preview">
                <div className="content" dangerouslySetInnerHTML={ { __html: this.props.data } }></div>
            </div>
        );
    }
}

EditorPreview.defaultProps = {
    data: ''
};

EditorPreview.propTypes = {
    data: PropTypes.string
};

export default EditorPreview;