import React from 'react';

const ToggleInput = ({ checked, name, ...rest }) => {

	let InputProps = {...rest};
	if (checked) {
		InputProps.checked = true;
	}
	return (
		<div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
			<input 
			{...InputProps}
			type="checkbox"
			name={name}
			readOnly
			className="custom-control-input"/>
			<label className="custom-control-label" htmlFor={name}></label>
		</div>
	);
};

export default ToggleInput;