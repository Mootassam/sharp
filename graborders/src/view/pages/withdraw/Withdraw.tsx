import React, { useCallback, useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import authSelectors from "src/modules/auth/authSelectors";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import InputFormItem from "src/shared/form/InputFormItem";
import actions from "src/modules/transaction/form/transactionFormActions";
import authActions from "src/modules/auth/authActions";
const schema = yup.object().shape({

  amount: yupFormSchemas.integer(i18n("withdraw.withdrawamount"), {
    required: true,
    min: 20,
  }),
  withdrawPassword: yupFormSchemas.string(i18n("withdraw.Withdrawpassword"), {
    required: true,
  }),

});

function Withdraw() {
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();


  const refreshItems = useCallback(async () => {
    try {
      // Await the refresh action to ensure it completes
      await dispatch(authActions.doRefreshCurrentUser());
    } catch (error) {
      console.error("Error during refreshing items:", error);
      // Optionally handle error state or show an error message to the user
    }
  }, [dispatch]);

  const onSubmit = async ({ amount, withdrawPassword }) => {
    const values = {
      status: `${i18n("text.pending")}`,
      date: new Date(),
      user: currentUser ? currentUser.id : null,
      type: `${i18n("text.withdraw")}`,
      amount: amount,
      vip: currentUser,
      withdrawPassword: withdrawPassword,
    };
    await dispatch(actions.doCreate(values));
    await refreshItems();
  };

  useEffect(() => { }, [currentUser, refreshItems]);

  const [initialValues] = useState({
    amount: "",
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues,
  });

  return (
    <div>
      <SubHeader title={`${i18n("text.withdraw")}`} path="/" />
      <div className="withdraw__page">
        <div className="withdraw__content">
          <div className="withdraw__header">
            <h3 className="hall" style={{ paddingTop: 0 }}>
              {i18n("withdraw.withdrawamount")}
            </h3>

            <span style={{ color: "white", fontSize: "14px" }}>
              {i18n("withdraw.withdrawamount")} : {currentUser?.balance?.toFixed(2) || 0}
            </span>
          </div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <InputFormItem
                  type="text"
                  name="amount"
                  placeholder={i18n("withdraw.withdrawamount")}
                  className="input__withdraw"
                />
                <div className="number__click">
                  <h3 className="hall" style={{ paddingTop: 0 }}>
                    {i18n("withdraw.Withdrawpassword")}:
                  </h3>
                  <InputFormItem
                    type="text"
                    name="withdrawPassword"
                    placeholder={i18n("withdraw.Withdrawpassword")}
                    className="input__withdraw"
                  />
                </div>
                <button className="confirm" type="submit">
                  {i18n("buttons.confirm")}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>

        <div className="withdraw__rules">
          <div className="rules__title">{i18n("withdraw.rules")}</div>
          <ul className="rules__list">
            <li>
              (1) {i18n("withdraw.rule1")}
            </li>
            <li>
              (2) {i18n("withdraw.rule2")}
            </li>
            <li>
              (3) {i18n("withdraw.rule3")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
