import s from "./Form.module.css"
import * as React from "react";
import AuthRegForm from "./AuthRegForm.tsx";

const Form:React.FC = () => {

	return (
		<div className={s.wrapper}>
			<div className={s.popupContainer}>
				<div className={s.formContainer}>
					<AuthRegForm  />
				</div>
				<div className={s.socialNetworkContainer}></div>
			</div>
		</div>

	);
};

export default Form;