import { Field, Form, Formik } from "formik";
import s from "./AuthRegForm.module.css";
import * as React from "react";



type Values = {
	email: string;
	password: string;
	confirmPassword: string;
};

const AuthRegForm = () => {
	const initialValues: Values = {
		email: "test@example.com",
		password: "qwerty",
		confirmPassword: "qwerty",
	};
	const handleSubmit = (values: Values) => {
		console.log(values)
	}

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			onSubmit={handleSubmit}
		>
			{({
				handleSubmit,
				status,
				setFieldValue,
			}) => {

				return (
					<Form onSubmit={handleSubmit} className={s.formContainer}>
						<div className={s.inputContainer}>
							<div className={s.input}>
								<Field name={"email"} placeholder={"Email or Mobile"} />
							</div>
							<div className={s.input}>
								<Field name={"password"} placeholder={"Password"} />
							</div>

									<div className={s.input}>
										<Field
											name={"confirmPassword"}
											placeholder={"Confirm Password"}
										/>
									</div>

							<div className={s.error}>
								{status && status}
							</div>

						</div>

							<div className={s.checkBoxContainer}>
								<Field
									id="customCheckbox"
									type={"checkbox"}
									name={"useSocialNetworks"}
									className={s.checkbox}
									onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
										const checked = event.currentTarget.checked;
										setFieldValue("useSocialNetworks", checked ? 1 : 0);
									}}
								/>
								<label htmlFor="customCheckbox" className={s.checkboxLabel}>
									Use social networks
								</label>
							</div>

						<div className={s.buttonContainer}>
							<button>LOg</button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default AuthRegForm;
