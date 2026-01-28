import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "59A", key: "59A" },
    { title: "59B", key: "59B" },
    { title: "84A", key: "84A" },
    { title: "114", key: "114" },
  ];

  const vrUrls = {
    "59A": "https://xn--9i1bjk9yu0i1yj45dd2aj6f5vocwcq6c89qkimfzhbjb.com/vr/tour1.html",
    "59B": "https://xn--9i1bjk9yu0i1yj45dd2aj6f5vocwcq6c89qkimfzhbjb.com/vr2/59b/index.html",
    "84A": "https://xn--9i1bjk9yu0i1yj45dd2aj6f5vocwcq6c89qkimfzhbjb.com/vr/tour3.html",
    "114": "https://xn--9i1bjk9yu0i1yj45dd2aj6f5vocwcq6c89qkimfzhbjb.com/vr2/114/index.html",
  };





  const [selectedType, setSelectedType] = useState("59A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
    <Helmet>
      <title>천안아산역이편한세상시티 - E-모델하우스 VR 투어</title>
      <meta
        name="description"
        content="천안아산역이편한세상시티 E-모델하우스를 온라인에서 체험하세요. VR 가상 투어와 전용 59·74·84·114㎡ 평면도 및 인테리어를 생생하게 확인할 수 있습니다."
      />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href="https://www.layershop.kr/FloorPlan/Emodel" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="천안아산역이편한세상시티" />
      <meta property="og:title" content="천안아산역이편한세상시티 - E-모델하우스 VR 체험" />
      <meta
        property="og:description"
        content="천안아산역이편한세상시티 E-모델하우스에서 세대별 구조와 인테리어를 VR로 직접 체험하세요. 온라인으로도 생생한 주거 공간 확인 가능."
      />
      <meta property="og:url" content="https://www.layershop.kr/FloorPlan/Emodel" />
      <meta property="og:image" content="https://www.layershop.kr/img/og/emodel.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="E-모델하우스 VR 투어 미리보기" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="천안아산역이편한세상시티 E-모델하우스 VR 투어" />
      <meta
        name="twitter:description"
        content="59·74·84·114㎡ 세대별 구조와 인테리어를 VR로 체험하세요. 천안아산역이편한세상시티 E-모델하우스 온라인 공개."
      />
      <meta name="twitter:image" content="https://www.layershop.kr/img/og/emodel.jpg" />
      <meta name="twitter:url" content="https://www.layershop.kr/FloorPlan/Emodel" />

      {/* JSON-LD 구조화 데이터 */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "천안아산역이편한세상시티 - E-모델하우스",
          "url": "https://www.layershop.kr/FloorPlan/Emodel",
          "description":
            "천안아산역이편한세상시티 E-모델하우스를 온라인에서 편리하게 체험해보세요. 59·74·84·114㎡ 세대별 평면도 및 VR 가상투어 지원.",
          "primaryImageOfPage": {
            "@type": "ImageObject",
            "contentUrl": "https://www.layershop.kr/img/og/emodel.jpg",
            "width": 1200,
            "height": 630
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.layershop.kr/" },
              { "@type": "ListItem", "position": 2, "name": "E-모델하우스", "item": "https://www.layershop.kr/FloorPlan/Emodel" }
            ]
          }
        })}
      </script>
    </Helmet>




      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>천안아산역이편한세상시티- E-모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
