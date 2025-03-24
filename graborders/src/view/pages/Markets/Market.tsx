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
import { i18n } from "../../../i18n";

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
        "https://m.media-amazon.com/images/S/pv-target-images/e517ef1200967f6a07bad241d66d0c59a2941e54110fcd7ed4926a9d83cdc636.jpg",
      rating: 7,
    },
    {
      images:
        "https://m.media-amazon.com/images/M/MV5BMTc2Mzg0NjA2N15BMl5BanBnXkFtZTcwOTc5NjQzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 8,
    },
    {
      images:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQCT9i0V7Ihj2aX0jyVdwAD0zfGlBexc0UJjvUW7ZgK5n1Fipc",
      rating: 9,
    },
    {
      images:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQP0OM70mTj4VVIbAqoDaqiNWVcZZyCR_bdxTaAH6bcYT8Yjshb",
      rating: 6,
    },
    {
      images:
        "https://contentserver.com.au/assets/491602_p11214341_p_v8_ap.jpg",
      rating: 7,
    },
    {
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcsf2bpo5cKHGk4HRob4v6M0IFiyZdPuRGXUvxHiHhDdAOYh7",
      rating: 8,
    },
    {
      images:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQyXUYxbm9XUVlE-o4cAr0wDA0eKQSfYELT2dlX2QE9vbMo5uqo",
      rating: 9,
    },
    {
      images:
        "https://www.movienewsletters.net/photos/255415R1.jpg",
      rating: 6,
    },
  ];

  const commingsoon=[   {
    images:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS7BVyY3gGvbkvGInfa6HMVTlHuaIC2WgSfWPZM6kb-YlWB8Vl0",
    rating: 9,
  },
  {
    images:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSR6pgVhfkZKNEgcYj1W480V2rFeF1Yov8M5O2b0CSC7L4Mdgkj",
    rating: 6,
  },
  {
    images:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQNjatfQ7yNx3Ejq1snXteHf9TeOUmaaWjxlXnssAI6y2IE138x",
    rating: 9,
  },
  {
    images:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAfbQzvGKy0oUKX3tKXOKirveHpqNU8fUxWNq6ghdDDLxeYxfw",
    rating: 6,
  },
{
  images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY59I424U0u2l7NTPHGcUpPXav1171niuHUgOcUis6V0jBDOqY",
  rating:8,
}, {
  images:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fizNzdu8Tjdouj3avaO4QmsHRHpQNHC4mG7NewjcVlVdJWpA",
  rating:7
},
{images:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTydSg0y6PPK5IyVCEa8aUKgPSLBE4c7XYFR3G8aQNL61o99Knb", 
rating:8},{images:'https://m.media-amazon.com/images/M/MV5BZjBiMDZjMzMtYzRjYS00ODc0LTlmNDEtYjQxYjJkYjdhODdkXkEyXkFqcGc@._V1_.jpg',rating:7}]
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
            {i18n("text.sponsor")}
            </span>
          </div>
        </div>
      </div>

      <div className="cinema__title">
        <h2>{i18n("app.title")}</h2>
      </div>

      <img
        data-v-1faac035=""
        src="/images/home/movie.gif"
        className="full-width"
      ></img>

      <div className="showing__films">
        <div className={`comming__soon ${now ==='now' ? 'under__linge' : ''}`} onClick={() => setNow("now")} >{i18n("text.showingnow")}</div>
        <div className={`comming__soon ${now ==='soon' ? 'under__linge' : ''}`} onClick={() => setNow("soon")}>{i18n("text.comingsoon")}</div>
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
