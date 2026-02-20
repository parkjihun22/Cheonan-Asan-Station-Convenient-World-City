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
        content="천안아산역이편한세상시티 프리미엄을 확인하세요. 천안아산역 생활권의 교통 접근성, 풍부한 생활 인프라, 쾌적한 주거 환경과 커뮤니티로 완성되는 주거 가치를 안내합니다."
      />
      <link rel="canonical" href="https://www.layershop.kr/LocationEnvironment/primium" />
      <meta name="robots" content="index,follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="천안아산역이편한세상시티" />
      <meta property="og:title" content="천안아산역이편한세상시티 - 프리미엄" />
      <meta
        property="og:description"
        content="천안아산역이편한세상시티 프리미엄. 교통 접근성과 생활 인프라, 쾌적한 주거 환경과 커뮤니티로 완성되는 입지 가치를 확인하세요."
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
        content="천안아산역 생활권의 교통 접근성과 생활 인프라, 쾌적한 주거 환경과 커뮤니티로 완성되는 천안아산역이편한세상시티의 프리미엄을 확인하세요."
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
            "천안아산역이편한세상시티 프리미엄: 천안아산역 생활권의 교통 접근성과 생활 인프라, 쾌적한 주거 환경과 커뮤니티로 완성되는 주거 가치를 안내합니다.",
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
      이 페이지는 천안아산역이편한세상시티의 프리미엄 포인트를 안내합니다.
      천안아산역 생활권의 교통 접근성, 생활 인프라, 주거 환경과 커뮤니티 등
      일상 만족도를 높이는 주요 가치를 한눈에 확인하실 수 있습니다.
    </p>

    <div className={styles.textBox}>
      <div>일상을 완성하는 프리미엄 포인트</div>
      <div>천안아산역 생활권의 가치를 확인하세요</div>
      <div>천안아산역이편한세상시티의 기준을 만나보세요</div>
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
