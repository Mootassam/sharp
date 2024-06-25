import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "../../../i18n";
import { yupResolver } from "@hookform/resolvers/yup";
import InputFormItem from "src/shared/form/InputFormItem";
import selectors from "src/modules/auth/authSelectors";
import ButtonIcon from "src/shared/ButtonIcon";
import styled, { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  body {
    background-image: none !important;
  }
`;

const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("user.fields.username"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("user.fields.password"), {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean(i18n("user.fields.rememberMe")),
});
function Signin() {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading);

  const [initialValues] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  const externalErrorMessage = useSelector(selectors.selectErrorMessage);

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password, rememberMe));
  };
  return (
    <>
    <GlobalStyle/> 
    <div className="auth__page">
      <img src="https://img.mediapro.dev/GV7KpxYf17U_k3cClj2nyidoyyuipzXscf9StQmtrLQ/xl/aHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL2xpY2V1LXByby9hc3NldHMvZWRhMTdiNzctOTk1NC00Yzg2LTkxMmEtNDQ2NTAxMzc1MWY0LmpwZw.jpg" alt=""  />
      <div className="auth__header">
      <img src="/images/company.gif" alt="" className="non-scrolled-logo" width="340" height="76" />

        <h1 className="auth__title"> Welcome Back!</h1>
        <span className="auth__description">
          You have been missed for long time
        </span>
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="auth__form">
            <div className="form__authgroup">
              <InputFormItem
                type="text"
                name="email"
                placeholder={i18n("user.fields.username")}
                className="auth__input"
                externalErrorMessage={externalErrorMessage}
              />
            </div>
            <div className="form__authgroup">
              <InputFormItem
                type="text"
                name="password"
                placeholder={i18n("user.fields.password")}
                className="auth__input"
              />
            </div>
          </div>

          <div className="auth__bottom">
            <button className="auth__button" disabled={loading} type="submit">
              <ButtonIcon loading={loading} />
              <span>Login</span>
            </button>
            <Link to="/auth/signup" className="remove__ligne">
              <span className="auth__link">Don't have an account?</span>
              <label htmlFor="" className="register__now">Register Now</label>
            </Link>
          </div>
        </form>
      </FormProvider>
    </div>
    </>
  );
}

export default Signin;
