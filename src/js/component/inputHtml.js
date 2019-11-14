import React from "react";
import Quill from "quill";
import PropTypes from "prop-types";

class InputHTML extends React.Component {
	constructor(props) {
		super(props);
		this.elEditor = React.createRef();
		this.inputMsg = null;
	}

	componentDidMount() {
		if (this.elEditor !== undefined && this.inputMsg === null) {
			this.inputMsg = new Quill(this.elEditor.current, this.props.optsQuill);
			this.inputMsg.on("text-change", this.handleOnChange); // NUEVO
		}
	}

	handleOnChange = (delta, oldDelta, source) => {
		// NUEVO
		if (this.props.onChange !== undefined) {
			const newEvent = new CustomEvent("onchange", {
				detail: {
					name: this.props.name,
					value: this.inputMsg.root.innerHTML
				}
			});
			this.props.onChange(newEvent);
		}
	};

	render() {
		return <div ref={this.elEditor} className="input-html" />;
	}
}

InputHTML.defaultProps = {
	name: "input-html", //NUEVO
	optsQuill: {
		debug: "warn", //warn
		placeholder: "Compose an epic...",
		readOnly: false,
		theme: "snow"
	}
};

InputHTML.propTypes = {
	optsQuill: PropTypes.object,
	name: PropTypes.string,
	onChange: PropTypes.func
};

export default InputHTML;
