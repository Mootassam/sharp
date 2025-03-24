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
  email: yupFormSchemas.string(i18n("inputs.username"), {
    required: true,
  }),

  password: yupFormSchemas.string(i18n("inputs.password"), {
    required: true,
  }),

  newPasswordConfirmation: yupFormSchemas
    .string(i18n("inputs.newPasswordConfirmation"), {
      required: true,
    })
    .oneOf([yup.ref("password"), null], i18n("auth.passwordChange.mustMatch")),
  phoneNumber: yupFormSchemas.string(i18n("inputs.phoneNumber"), {
    required: true,
  }),
  withdrawPassword: yupFormSchemas.string(
    i18n("inputs.withdrawPassword"),
    {
      required: true,
    }
  ),
  invitationcode: yupFormSchemas.string(i18n("inputs.invitationcode"), {
    required: true,
  }),

  rememberMe: yupFormSchemas.boolean(i18n("inputs.rememberMe")),
});

function Signup() {
  const dispatch = useDispatch();

  const loading = useSelector(selectors.selectLoading);

  const [initialValues] = useState({
    email: "",
    password: "",
    phoneNumber: "",
    withdrawPassword: "",
    invitationcode: "",
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

  const onSubmit = ({
    email,
    password,
    phoneNumber,
    withdrawPassword,
    invitationcode,
  }) => {
    dispatch(
      actions.doRegisterEmailAndPassword(
        email,
        password,
        phoneNumber,
        withdrawPassword,
        invitationcode
      )
    );
  };
  return (
    <>
      <GlobalStyle />
      <div className="auth__page">
        <div className="auth__header header__signup ">
        <img src="/images/Login/logo.svg"  alt="" className="non-scrolled-logo" width="200" height="76" />

          <h1 className="auth__title">Sign up</h1>
   
        </div>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="__position__relative"
          >
            <div className="auth__form __">
              <InputFormItem
                type="text"
                name="email"
                placeholder={i18n("inputs.username")}
                className="auth__input"
                externalErrorMessage={externalErrorMessage}
              />

              <InputFormItem
                type="text"
                name="phoneNumber"
                placeholder={i18n("inputs.phoneNumber")}
                className="auth__input"
              />

              <InputFormItem
                type="password"
                name="withdrawPassword"
                placeholder={i18n("inputs.withdrawPassword")}
                className="auth__input"
              />

              <InputFormItem
                type="password"
                name="password"
                placeholder={i18n("inputs.password")}
                className="auth__input"
              />

              <InputFormItem
                type="password"
                name="newPasswordConfirmation"
                autoComplete="new-password"
                placeholder={i18n("inputs.confirmPassword")}
                className="auth__input"
              />

              <InputFormItem
                type="text"
                name="invitationcode"
                placeholder={i18n("inputs.invitationcode")}
                className="auth__input"
                externalErrorMessage={externalErrorMessage}
              />
            </div>

            <div className="auth__bottom">
              <button className="auth__button" disabled={loading} type="submit">
                <ButtonIcon loading={loading} />
                <span>{i18n("buttons.signup")}</span>
              </button>
              <Link to="/auth/signin" className="remove__ligne">
                <span className="auth__link">{i18n("text.haveaccount")}</span>
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

export default Signup;
