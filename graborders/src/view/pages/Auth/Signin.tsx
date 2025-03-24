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
import { getLanguages, getLanguageCode } from 'src/i18n';
import actionsLayout from 'src/modules/layout/layoutActions';
import I18nSelect from 'src/view/layout/I18nSelect';
const GlobalStyle = createGlobalStyle`
  body {
    background-image: none !important;
  }
`;
const schema = yup.object().shape({
  email: yupFormSchemas.string(i18n("inputs.username"), {
    required: true,
  }),
  password: yupFormSchemas.string(i18n("inputs.password"), {
    required: true,
  }),
  rememberMe: yupFormSchemas.boolean(i18n("inputs.rememberMe")),
});
function Signin() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false)
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
      <GlobalStyle />
      <div className="auth__page">
        <img src="https://central.lightcinemas.co.uk/pictures/headers/~EDXo9mXn/Family_shot_cinema_0771.jpg" alt="" />

        <div className="icon__images" onClick={() => setShow(!show)}>
          <i className="fa-solid fa-language awesome"></i>
        </div>
        {show && <div className="choose__language">
          <div className="close__translate" onClick={() => setShow(false)}>
            <i className="fa-solid fa-close">
            </i>

          </div>
          <div className="list__language">
            <I18nSelect />


          </div>
        </div>}

        <div className="auth__header">
          <img src="/images/Login/logo.svg" alt="" className="non-scrolled-logo" width="180" />
          <h1 className="auth__title">{i18n("text.signin")}!</h1>
        </div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="auth__form">
              <div className="form__authgroup">
                <InputFormItem
                  type="text"
                  name="email"
                  placeholder={i18n("inputs.username")}
                  className="auth__input"
                  externalErrorMessage={externalErrorMessage}
                />
              </div>
              <div className="form__authgroup">
                <InputFormItem
                  type="text"
                  name="password"
                  placeholder={i18n("inputs.password")}
                  className="auth__input"
                />
              </div>
            </div>

            <div className="auth__bottom">
              <button className="auth__button" disabled={loading} type="submit">
                <ButtonIcon loading={loading} />
                <span>{i18n("buttons.login")}</span>
              </button>
              <Link to="/auth/signup" className="remove__ligne">
                <span className="auth__link">{i18n("text.noaccount")}?</span>
                <label htmlFor="" className="register__now">{i18n("buttons.registerNow")}</label>
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default Signin;
