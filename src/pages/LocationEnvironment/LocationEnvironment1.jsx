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
    titleText: "청주 원도심 개발 중심축<br />미래 가치가 기대되는 핵심 입지",
    contentText:
      "운천주공 재건축을 통한 원도심 주거 환경 개선<br />주변 정비사업과 연계된 생활 인프라 확장 기대",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 접근성<br />안심 가능한 생활 케어 환경",
    contentText:
      "청주의료원 등 주요 의료시설 인접<br />일상 및 응급 상황 대응에 편리한 의료 환경",
  },
  {
    img: section2Image3,
    titleText: "사통팔달 교통 여건<br />청주 전역과 연결되는 중심 입지",
    contentText:
      "청주 1순환로·직지대로 등 주요 도로망 인접<br />중부·경부고속도로 접근 용이한 광역 교통망",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 밀집<br />도심 속 원스톱 라이프",
    contentText:
      "홈플러스, 전통시장, 다양한 상업시설 인접<br />행정·금융·문화 인프라까지 편리하게 누리는 생활권",
  },
  {
    img: section2Image5,
    titleText: "하이엔드 대단지 스케일<br />총 1,618세대 두산위브더제니스",
    contentText:
      "지하 2층~지상 31층, 총 18개동 대단지 구성<br />다채로운 커뮤니티로 완성되는 프리미엄 일상",
  },
  {
    img: section2Image6,
    titleText: "자연과 휴식 인프라<br />도심 속에서 누리는 쾌적한 여유",
    contentText:
      "운천근린공원(조성 예정) 인접한 녹지 환경<br />산책과 휴식을 즐기는 쾌적한 주거 라이프",
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
    content="청주 원도심 중심, 천안아산역이편한세상시티의 입지환경을 소개합니다. 청주 1순환로·직지대로 접근성, 홈플러스·의료시설 등 생활 인프라, 운천근린공원 인접한 녹지환경까지 확인해보세요."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.layershop.kr/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="천안아산역이편한세상시티" />
  <meta property="og:title" content="천안아산역이편한세상시티 - 입지환경" />
  <meta
    property="og:description"
    content="청주 원도심 중심 입지, 광역 교통망과 생활 인프라, 쾌적한 자연환경까지 갖춘 천안아산역이편한세상시티의 입지를 확인하세요."
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
    content="청주 도심 접근성과 풍부한 생활 인프라, 운천근린공원 인접 녹지까지 누리는 입지 가치."
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
        "청주 원도심 중심 입지에 위치한 천안아산역이편한세상시티. 교통·생활·자연 인프라를 모두 갖춘 프리미엄 입지를 소개합니다.",
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
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 천안아산역이편한세상시티사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
