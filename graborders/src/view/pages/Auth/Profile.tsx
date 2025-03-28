
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import authActions from "src/modules/auth/authActions";
import authSelectors from "src/modules/auth/authSelectors";
import { useHistory } from "react-router-dom"; // Assuming you're using React Router
import actions from "src/modules/record/list/recordListActions";
import selectors from "src/modules/record/list/recordListSelectors";
import Message from "src/view/shared/message";
import ImagesFormItem from "src/shared/form/ImagesFormItems";
import Storage from "src/security/storage";
import { i18n } from "../../../i18n";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import I18nSelect from "src/view/layout/I18nSelect";

const schema = yup.object().shape({
  avatars: yupFormSchemas.images(i18n("inputs.avatars"), {
    max: 1,
  }),
});

function Profile() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false)

  const total = useSelector(selectors.selectTotal);
  const totalperday = useSelector(selectors.selectTotalPerday);

  useEffect(() => {
    const values = {
      status: `${i18n("text.completed")}`,
    };
    dispatch(actions.doCountDay());
    dispatch(actions.doFetch(values, values));
  }, [dispatch]);

  const doSignout = () => {
    dispatch(authActions.doSignout());
  };
  const history = useHistory();

  const goto = (param) => {
    history.push(param);
  };
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const data = [
    {
      icon: "fa-solid fa-clock-rotate-left",
      name: `${i18n("text.taskshistory")}`,
      url: "/order",
    },
    { icon: "fa-solid fa-wallet", name: "Bind Wallet", url: "/wallet" },
    {
      icon: "fa-solid fa-arrow-right-arrow-left",
      name: `${i18n("text.transaction")}`,
      url: "/transacation",
    },
    {
      icon: "fa-solid fa-money-bill-transfer",
      name: `${i18n("text.withdraw")}`,
      url: "/withdraw",
    },
    { icon: "fa-solid fa-user", name: `${i18n("text.profile")}`, url: "/myprofile" },
    { icon: "fa-solid fa-lock", name: `${i18n("text.security")}`, url: "/security" },
  ];
  const referenceCodeRef = useRef<any>(null);

  const copyToClipboard = () => {
    const referenceCode = referenceCodeRef.current.innerText;

    // Check if the browser supports the modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(referenceCode)
        .then(() => {
          Message.success("Copied");
          // You can add any additional logic here, such as showing a success message
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
          // You can handle errors here, such as displaying an error message to the user
        });
    } else {
      // Fallback for browsers that do not support the modern clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = referenceCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      Message.success("Copied");

      // You can add any additional logic here for the fallback mechanism
    }
  };

  const [initialValues] = useState(() => {
    const record = currentUser || {};

    return {
      avatars: record.avatars || [],
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initialValues,
  });
  const onSubmit = (values) => {
    dispatch(authActions.doUpdateProfile(values));


  };

  return (

    <>

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

      <div className="app__profile">
        <div className="profiles__header">
          <div className="header__background"></div>
          <div className="carde__profile">
            <div className="cadre__top">
              <div className="cadre__left">
                <FormProvider {...form}>
                  <form>
                    <ImagesFormItem
                      name="avatars"
                      storage={Storage.values.userAvatarsProfiles}
                      max={1}
                    />
                  </form>
                </FormProvider>
                <div className="left__details">
                  <div className="user__title">
                    {currentUser?.fullName}

                    <img src="/images/check.png" alt="" style={{ width: 30 }} />
                  </div>
                  <div className="my__code">
                    {i18n("text.uid")} : {currentUser?.invitationcode}
                  </div>
                  <div className="small__invitation">
                    <div className="small__inviation__left">
                      <span className="promotion__code">{i18n("text.promotioncode")}:</span>
                      <span ref={referenceCodeRef}> {currentUser?.refcode}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cadre__bottom">
              <div className="">
                <span className="title__cadre">${totalperday}</span>
                <span className="promotion__code">{i18n("text.todayearning")}</span>
              </div>
              <div className="second__cadre"></div>
              <div className="firt__cadre">
                <span className="title__cadre">
                  {" "}
                  ${currentUser?.balance?.toFixed(2) || 0.0}
                </span>
                <span className="promotion__code">{i18n("text.walletamount")}</span>
              </div>
            </div>
            {/* <div className="score">
            <div className="score__right">Credit Score:</div>
            <div className="score__left">
              {currentUser?.score ? currentUser.score : 100}%
            </div>
          </div>
          <div className="bar">
            <div
              className="progress-value"
              style={{
                width: `${currentUser?.score ? currentUser.score : 100}%`,
              }}
            ></div>
          </div> */}

            <div className="assesment__">
              <div className="text__assesment">{i18n("text.creditassesment")}:</div>
              <div className="credit__bar">
                <div
                  className="circle__bar"
                  style={{
                    left: `calc(${currentUser?.score ? currentUser.score : 100
                      }% - 30px)`,
                  }}
                >

                  {currentUser?.score ? currentUser.score : 100}%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile__content">
          <div>
            <label htmlFor="" className="titre">
              {i18n("text.myfinance")}
            </label>
            <div className="detail__section">
              <div className="line__section" onClick={() => goto("/withdraw")}>
                <div className="titre__section">
                  <i className="fa-solid fa-money-check" />
                  <span>{i18n("text.withdraw")}</span>
                </div>
                <div>
                  <i className="fa fa-arrow-right " />
                </div>
              </div>
            </div>


            <div className="detail__section">
              <div className="line__section" onClick={() => goto("/validation")}>
                <div className="titre__section">
                  <i className="fa-solid fa-money-check" />
                  <span>{i18n("text.validation")}</span>
                </div>
                <div>
                  <i className="fa fa-arrow-right " />
                </div>
              </div>
            </div>

          </div>

          <div>
            <label htmlFor="" className="titre">
              {i18n("text.mydetails")}
            </label>
            <div className="detail__section">
              <Link to="/myprofile" className="remove__ligne">
                <div className="line__section border__">
                  <div className="titre__section">
                    <i className="fa-solid fa-user profile__icon"></i>
                    <span>   {i18n("text.profile")}</span>
                  </div>
                  <div>
                    <i className="fa fa-arrow-right " />
                  </div>
                </div>
              </Link>
              <Link to="/wallet" className="remove__ligne">
                <div className="line__section">
                  <div className="titre__section">
                    <i className="fa-solid fa-wallet profile__icon"></i>
                    <span>   {i18n("text.wallet")}</span>
                  </div>
                  <div>
                    <i className="fa fa-arrow-right " />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <label htmlFor="" className="titre">
              {i18n("text.other")}
            </label>
            <div className="detail__section">
              <Link to="/online" className="remove__ligne">
                <div className="line__section border__">
                  <div className="titre__section">
                    <img
                      src="/icons/headset.svg"
                      alt=""
                      style={{ width: 20, color: "white" }}
                    />{" "}
                    <span>   {i18n("text.customersupport")}</span>
                  </div>
                  <div>
                    <i className="fa fa-arrow-right " />
                  </div>
                </div>
              </Link>
              <Link to="/transacation" className="remove__ligne">
                <div className="line__section border__">
                  <div className="titre__section">
                    <i className="fa-solid fa-arrow-right-arrow-left profile__icon"></i>
                    <span>{i18n("text.transaction")}</span>
                  </div>
                  <div>
                    <i className="fa fa-arrow-right " />
                  </div>
                </div>
              </Link>
              <Link to="/order" className="remove__ligne">
                <div className="line__section border__">
                  <div className="titre__section">
                    <i className="fa-solid fa-clock-rotate-left profile__icon"></i>
                    <span>{i18n("text.taskshistory")}</span>
                  </div>
                  <div>
                    <i className="fa fa-arrow-right " />
                  </div>
                </div>
              </Link>
              <Link to="/security" className="remove__ligne">
                <div className="line__section">
                  <div className="titre__section">
                    <i className="fa-solid fa-lock profile__icon"></i>
                    <span>{i18n("text.security")}</span>
                  </div>
                  <div>
                    <i className="fa fa-arrow-right " />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="logout__button" onClick={() => doSignout()}>
          {i18n("buttons.logout")}
        </div>
      </div>

    </>
  );
}

export default Profile;
