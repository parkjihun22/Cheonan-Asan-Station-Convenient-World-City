import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


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
      <title>천안아산역이편한세상시티 - 프리미엄</title>
      <meta
        name="description"
        content="천안아산역이편한세상시티 프리미엄을 확인하세요. 총 1,618세대 하이엔드 브랜드 대단지, 청주 원도심 핵심 입지, 생활 인프라와 녹지 환경, 차별화된 커뮤니티로 완성되는 주거 가치를 안내합니다."
      />
      <link rel="canonical" href="https://www.layershop.kr/LocationEnvironment/primium" />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="천안아산역이편한세상시티" />
      <meta property="og:title" content="천안아산역이편한세상시티 - 프리미엄" />
      <meta
        property="og:description"
        content="총 1,618세대 하이엔드 대단지, 청주 원도심 입지와 생활 인프라·녹지·커뮤니티로 완성되는 천안아산역이편한세상시티 프리미엄."
      />
      <meta property="og:url" content="https://www.layershop.kr/LocationEnvironment/primium" />
      <meta property="og:image" content="https://www.layershop.kr/img/og/premium.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="천안아산역이편한세상시티 - 프리미엄" />
      <meta
        name="twitter:description"
        content="하이엔드 브랜드 대단지 프리미엄. 청주 원도심 핵심 입지, 생활 인프라와 녹지, 커뮤니티 특화로 완성되는 천안아산역이편한세상시티."
      />
      <meta name="twitter:image" content="https://www.layershop.kr/img/og/premium.jpg" />
      <meta name="twitter:url" content="https://www.layershop.kr/LocationEnvironment/primium" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "천안아산역이편한세상시티 - 프리미엄",
          "url": "https://www.layershop.kr/LocationEnvironment/primium",
          "description":
            "천안아산역이편한세상시티 프리미엄: 1,618세대 하이엔드 브랜드 대단지. 청주 원도심 입지와 생활 인프라, 녹지 환경, 커뮤니티 특화로 완성되는 주거 가치.",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "contentUrl": "https://www.layershop.kr/img/og/premium.jpg",
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
                "name": "프리미엄",
                "item": "https://www.layershop.kr/LocationEnvironment/primium"
              }
            ]
          }
        })}
      </script>
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="프리미엄" />
    <MenuBar contents={menuContents} />

    <h1 className={styles.screenReaderOnly}>
      천안아산역이편한세상시티 - 프리미엄
    </h1>
    <p className={styles.screenReaderOnly}>
      천안아산역이편한세상시티만의 프리미엄을 만나보세요.
      하이엔드 브랜드에 걸맞은 대단지 스케일과 설계,
      청주 원도심의 중심 입지, 생활 인프라, 자연과 커뮤니티를 모두 갖춘
      차별화된 주거 가치를 경험하실 수 있습니다.
    </p>

    <div className={styles.textBox}>
      <div>프리미엄은 스펙이 아닌, 삶의 기준입니다</div>
      <div>청주 원도심의 중심, 1,618세대 하이엔드 대단지</div>
      <div>천안아산역이편한세상시티에서 완성되는 진짜 프리미엄</div>
    </div>

    <img
      src={page1}
      className={styles.image3}
      alt="천안아산역이편한세상시티 프리미엄 안내 이미지"
    />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
