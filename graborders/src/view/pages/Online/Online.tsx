import React, { useEffect } from "react";
import "../styles/styles.css";
import { useSelector, useDispatch } from "react-redux";
import actions from "src/modules/category/list/categoryListActions";
import selector from "src/modules/category/list/categoryListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import SubHeader from "src/view/shared/Header/SubHeader";
import { i18n } from "../../../i18n";
function Online() {
  const dispatch = useDispatch();
  const record = useSelector(selector.selectRows);
  const loading = useSelector(selector.selectLoading);

  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div>
      <SubHeader title={i18n("cs.cs")} path="/profile" />


      <div className="online__header">
        {i18n("cs.note")}
      </div>

      <div className="contact__list">
        {loading && <LoadingModal />}
        {!loading &&
          record &&
          record.map((item) => (
            <div className="contact__online">
              <div className="list__header">{item?.name} </div>
              <div className="online__image">
                <img
                  src={item?.photo[0]?.downloadUrl}
                  alt=""
                  className="customer__image"
                />
              </div>
              <div className="online__footer">
                {item.type === "whatsApp" ? (
                  <a
                    href={`https://wa.me/${item.number}`}
                    className="number__link"
                    target="_blank"
                  >
                    <div className="contact__now">
                      <i
                        className="fa-brands fa-whatsapp"
                        style={{ fontSize: 18 }}
                      ></i>
                      {i18n("cs.contactnow")}
                    </div>
                  </a>
                ) : (
                  <a
                    href={`https://t.me/${item.number}`}
                    className="number__link"
                    target="_blank"
                  >
                    <div className="contact__now __telegram">
                      <i
                        className="fa-brands fa-telegram"
                        style={{ fontSize: 18 }}
                      ></i>
                      {i18n("cs.contactnow")}
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Online;
