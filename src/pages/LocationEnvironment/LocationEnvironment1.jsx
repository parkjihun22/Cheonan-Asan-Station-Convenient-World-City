import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "천안아산역 생활권 중심<br />미래 가치가 기대되는 핵심 입지",
    contentText:
      "천안·아산 주요 생활권을 가깝게 누리는 중심 입지<br />역세권 중심의 편리한 이동과 생활 환경 기대",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 접근성<br />안심 가능한 생활 케어 환경",
    contentText:
      "주요 의료시설 및 생활 편의시설 접근 용이<br />일상과 응급 상황 대응에 편리한 생활 환경",
  },
  {
    img: section2Image3,
    titleText: "사통팔달 교통 여건<br />천안·아산을 잇는 광역 접근성",
    contentText:
      "천안아산역 중심 교통망으로 수도권·전국 이동 편리<br />주요 도로망과 대중교통 이용이 수월한 입지",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 밀집<br />도심 속 원스톱 라이프",
    contentText:
      "대형 쇼핑·마트·문화시설 등 풍부한 생활 인프라<br />일상 편의를 높이는 편리한 생활권",
  },
  {
    img: section2Image5,
    titleText: "실거주 중심 단지 구성<br />총 396실 규모의 프리미엄",
    contentText:
      "생활 동선과 공간 활용을 고려한 단지 구성<br />e편한세상 브랜드 가치로 완성되는 주거 품격",
  },
  {
    img: section2Image6,
    titleText: "쾌적한 여유와 휴식<br />도심 속 녹지와 함께하는 생활",
    contentText:
      "주변 녹지 및 산책 환경을 누리는 쾌적한 일상<br />도시 인프라와 휴식의 균형을 갖춘 주거 환경",
  },
];


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
    <Helmet>
      <title>천안아산역이편한세상시티 - 입지환경</title>
      <meta
        name="description"
        content="천안아산역이편한세상시티의 입지환경을 소개합니다. 천안아산역 생활권의 교통 접근성과 풍부한 생활 인프라, 쾌적한 주거 환경까지 한눈에 확인하세요."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://www.layershop.kr/LocationEnvironment/intro" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="천안아산역이편한세상시티" />
      <meta property="og:title" content="천안아산역이편한세상시티 - 입지환경" />
      <meta
        property="og:description"
        content="천안아산역 생활권 중심 입지. 교통 접근성과 생활 인프라, 쾌적한 주거 환경을 갖춘 천안아산역이편한세상시티의 입지 가치를 확인하세요."
      />
      <meta property="og:url" content="https://www.layershop.kr/LocationEnvironment/intro" />
      <meta property="og:image" content="https://www.layershop.kr/img/og/location.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="천안아산역이편한세상시티 - 입지환경" />
      <meta
        name="twitter:description"
        content="천안아산역 생활권의 교통 접근성과 풍부한 생활 인프라, 쾌적한 주거 환경을 확인해보세요."
      />
      <meta name="twitter:image" content="https://www.layershop.kr/img/og/location.jpg" />
      <meta name="twitter:url" content="https://www.layershop.kr/LocationEnvironment/intro" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "천안아산역이편한세상시티 - 입지환경",
          "url": "https://www.layershop.kr/LocationEnvironment/intro",
          "description":
            "천안아산역 생활권 중심 입지에 위치한 천안아산역이편한세상시티. 교통·생활 인프라와 쾌적한 주거 환경을 소개합니다.",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "contentUrl": "https://www.layershop.kr/img/og/location.jpg",
            "width": 1200,
            "height": 630
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "홈",
                "item": "https://www.layershop.kr/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "입지환경",
                "item": "https://www.layershop.kr/LocationEnvironment/intro"
              }
            ]
          }
        })}
      </script>
    </Helmet>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        천안아산역이편한세상시티 - 입지환경
      </h1>
      <p className={styles.screenReaderOnly}>
        이 페이지는 천안아산역이편한세상시티의 입지환경을 안내합니다.
        천안아산역 생활권의 교통 접근성과 생활 인프라, 주변 환경 등
        일상 편의를 높이는 입지 가치를 확인하실 수 있습니다.
      </p>

      <div className={styles.textBox}>
        <div>천안아산역 생활권, 편리함을 더한 입지</div>
        <div>교통·생활 인프라를 한눈에 확인하세요</div>
      </div>

      <img
        src={page1}
        className={styles.image2}
        alt="천안아산역 이편한세상시티 입지환경 이미지"
      />



      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 김해 테크노밸리 제일풍경채 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;

