import './form-input.styles.scss'

const FormInput = ({ label, inputOptions }) => {
	return (
		<div className="group">
        <input className="form-input" {...inputOptions} />
        {/* //if label exists, render label. && is a conditional when there is no else involved*/}
			{label && (

				<label
					className={`${
						inputOptions.value.length ? 'shrink' : ''
					} form-input-label`}
				>
					{label}
				</label>
			)}
           
		</div>
	);
};

export default FormInput;
