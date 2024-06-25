import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import selectors from 'src/modules/vip/list/vipListSelectors';
import Vipactions from "src/modules/vip/list/vipListActions";
import selector from "src/modules/vip/list/vipListSelectors";
import LoadingModal from "src/shared/LoadingModal";
import authSelectors from "src/modules/auth/authSelectors";
import actions from "src/modules/auth/authActions";
import listactions from "src/modules/company/list/companyListActions";
import selectors from "src/modules/company/list/companyListSelectors";

function Market() {
  const dispatch = useDispatch();
  const record = useSelector(selector.selectRows);
  const logorecord = useSelector(selectors.selectRows);
  const loadingImage = useSelector(selectors?.selectLoading);
  const [timemodal, setBigModal] = useState(true);
  const loading = useSelector(selector.selectLoading);
  const [Modal, setShowModal] = useState(false);
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const searchAllCoins = async () => {};

  const [now , setNow] = useState('now')
  interface DataItem {
    image: string;
    title: string;
    Entrylimit: string;
    levellimit: string;
    dailyorder: string;
    comisionrate: string;
  }
  const [selectedItem, setItems] = useState<DataItem | null>(null);

  const currentDate = () => {
    const dubaiTimezone = "Asia/Dubai";
    const options = { timeZone: dubaiTimezone };
    const currentDateTime = new Date().toLocaleString("en-US", options);
    return currentDateTime;
  };

  const dolistCompany = () => {
    dispatch(listactions.doFetch());
  };

  useEffect(() => {
    dolistCompany();
    searchAllCoins();
    dispatch(Vipactions.doFetch());
    currentDate();

    // eslint-disable-next-line
  }, [dispatch]);

  const hideModal = () => {
    setShowModal(false);
  };

  const showModal = (item) => {
    setItems(item);
    setShowModal(true);
  };

  const button__action = [
    {
      icon: "fa-regular fa-building",
      text: "About",
      link: "/company",
    },
    {
      icon: "fa-solid fa-file-contract",
      text: "T&C",
      link: "/tc",
    },
    {
      icon: "fa fa-certificate",
      text: "Certificate",
      link: "/Certificate",
    },
    {
      icon: "fa-solid fa-question",
      text: "FAQs",
      link: "/faqs",
    },
    {
      icon: "fa fa-user-plus",
      text: "Invitation",
      link: "/invitation",
    },
  ];

  const films = [
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEt5Tq-Wlkt8FHmmJA6Tz5YwXqHSG2O6VNw&s",
      rating: 7,
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xBROAxD-BA1nKWFvOGJIpmrGOWmdeIvw8w&s",
      rating: 8,
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSnki6AKC5KJMU9m2uUgi1Hb77B1DIif3T6w&s",
      rating: 9,
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4__s0FQbnMao7bU-vdyPzP0Wc1MozkdZPw&s",
      rating: 6,
    },
  ];

  const commingsoon=[   {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0JT76If8BQ4M3rIn_ImnITCjLXkO4PApaUA&s",
    rating: 9,
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0a8Giv8lr4HcNaNscUZyPw8HFh1-aPAVzQ&s",
    rating: 6,
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvc2EtG3WTc5Gx-gz449ZiWLb7rMiNunmOQw&s",
    rating: 9,
  },
  {
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-NzYFxuW76HicYR3HUiWfylC3SwQar3WFg&s",
    rating: 6,
  },]
  const submit = (item) => {
    const balances =
      parseFloat(currentUser?.balance) - parseFloat(item.levellimit);

    const data = {
      vip: item,
      balance: balances,
    };

    dispatch(actions.doUpdateProfile(data));
  };

  const NewsTicker = ({ text }) => {
    return (
      <div className="news-ticker-container">
        <div className="news-ticker">
          <span>{text}</span>
        </div>
      </div>
    );
  };

  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/sub__heading.png"];

  useEffect(() => {});

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="market__header">
        {!loadingImage &&
          logorecord.map((item) => (
            <img
              src={item?.photo[0]?.downloadUrl}
              alt=""
              className="logo__header"
            />
          ))}
      </div>

      <div className="home__section">
        <div className="advertise__speaker">
          <div>
            <img src="/images/home/bell.png" style={{ width: 180 }} />
          </div>

          <div className="marquee">
            <span>
              Our security is our top priority, and we want to ensure that you
              are protected from any potential risks. Please be aware that we
              will never request you to send money to an unknown address. Before
              making any payments, we kindly ask you to verify the details with
              us first.
            </span>
          </div>
        </div>
      </div>

      <div className="cinema__title">
        <h2>The Highland Cinema</h2>
      </div>

      <img
        data-v-1faac035=""
        src="/images/home/movie.gif"
        className="full-width"
      ></img>

      <div className="showing__films">
        <div className={`comming__soon ${now ==='now' ? 'under__linge' : ''}`} onClick={() => setNow("now")} >showing Now </div>
        <div className={`comming__soon ${now ==='soon' ? 'under__linge' : ''}`} onClick={() => setNow("soon")}>Coming Soon</div>
      </div>

      {now === "now" && <div className="list__film">
        {films.map((item) => <div className="single__film">
          <img src={item.images} alt=""  className="images__show" />
          <div className="star"> <img src="/images/star.png" alt="" style={{width:20}}/> <p style={{fontWeight:"bold"}}>{item.rating}</p></div>
        </div>)}
        
      </div> }
      {now === "soon" && <div className="list__film">
        {commingsoon.map((item) => <div className="single__film">
          <img src={item.images} alt=""  className="images__show" />
          <div className="star"> <img src="/images/star.png" alt="" style={{width:20}}/> <p style={{fontWeight:"bold"}}>{item.rating}</p></div>
        </div>)}
        
      </div>}
    </div>
  );
}

export default Market;
