import React, { useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import InputFormItem from "src/shared/form/InputFormItem";
import selector from "src/modules/auth/authSelectors";
const schema = yup.object().shape({

  erc20: yupFormSchemas.string(i18n("inputs.walletaddress"), {
    required: true,
  }),
});
function Wallet() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selector.selectCurrentUser);

  const [initialValues] = useState(() => {
    return {
      erc20: "" || currentUser.erc20,
      walletname: "" || currentUser.walletname,
      usernamewallet: "" || currentUser.usernamewallet,
      balance : currentUser?.balance
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });
  const onSubmit = ({ erc20,  walletname, usernamewallet }) => {
    const values = {
      erc20: erc20,
      walletname: walletname,
      usernamewallet: usernamewallet,
      balance:currentUser.balance
    };
    dispatch(actions.doUpdateProfile(values));
  };
  return (
    <div>
      <SubHeader title={`${i18n("wallet.wallet")}`} path="/profile" />
      <div className="app__wallet">
        <div className="wallet__">
          <h3 className="hall">{`${i18n("wallet.info")}`}</h3>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="wallet__form">
                <div className="form__">
                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>*</span>
                      <span style={{ fontSize: "13px" }}>{`${i18n("wallet.username")}`}</span>
                    </div>
                    <div className="input__div">
                      <InputFormItem
                        type="text"
                        name="usernamewallet"
                        placeholder={i18n("wallet.username")}
                        className="input__"
                      />
                    </div>
                  </div>
                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>*</span>
                      <span style={{ fontSize: "13px" }}>{`${i18n("wallet.walletname")}`}</span>
                    </div>
                    <div className="input__div">
                      <InputFormItem
                        type="text"
                        name="walletname"
                        placeholder={i18n("wallet.walletname")}
                        className="input__"
                      />
                    </div>
                  </div>

                  <div className="form__group">
                    <div className="label__form">
                      <span style={{ color: "red" }}>*</span>
                      <span style={{ fontSize: "13px" }}>{`${i18n("wallet.walletaddress")}`}</span>
                    </div>
                    <div className="input__div">
                      <InputFormItem
                        type="text"
                        name="erc20"
                        placeholder={i18n("wallet.walletaddress")}
                        className="input__"
                      />
                    </div>
                  </div>
                
                </div>

                <button
                  className="confirm"
                  type="submit"
                >
                  {i18n("buttons.submit")}
                </button>
                <span style={{ fontSize: 13,color:"white" }}>
                  <b>{i18n("wallet.note")}:</b> &nbsp;{i18n("wallet.notedesctiption")}
                </span>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
