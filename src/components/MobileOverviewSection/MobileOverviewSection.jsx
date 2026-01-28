// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
      <li>
        <strong>사업명</strong>
        <span>천안아산역이편한세상시티</span>
      </li>
      <li>
        <strong>대지위치</strong>
        <span>충청남도 아산시 배방읍 장재리 176-5번지 외</span>
      </li>
      <li>
        <strong>건축규모</strong>
        <span>지하 6층 ~ 지상 29층, 3개동</span>
      </li>
      <li>
        <strong>주택형</strong>
        <span>84㎡ 중심 (오피스텔)</span>
      </li>
      <li>
        <strong>실수</strong>
        <span>총 1,329실</span>
      </li>
    </ul>
    ),
  },

  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            청주 생활중심과 학세권을 누리는<br />
            천안아산역이편한세상시티 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "트리플 역세권 교통 중심",
      desc:
        "KTX·SRT 천안아산역 도보 이용<br/>지하철 1호선 아산역·BRT 정류장 인접<br/>광역 접근성과 도심 교통의 최중심 입지",
    },
    {
      img: slide2,
      title: "원스톱 생활 인프라",
      desc:
        "모다아울렛과 브릿지로 직접 연결(예정)<br/>갤러리아백화점·트레이더스 등 대형 쇼핑시설 밀집<br/>천안아산 도심의 풍부한 생활환경",
    },
    {
      img: slide3,
      title: "랜드마크 복합단지",
      desc:
        "지하 6층~지상 29층, 총 1,329실 오피스텔<br/>상업시설 결합 스트리트형 복합 설계<br/>도심 프리미엄을 담은 하이엔드 타워",
    },
    {
      img: slide4,
      title: "자연과 함께하는 주거",
      desc:
        "운천천 수변공원과 생활녹지 인접<br/>쾌적한 일상을 누리는 친환경 입지<br/>자연과 도시의 균형 있는 조화",
    },
    {
      img: slide5,
      title: "다양한 특화 평면",
      desc:
        "84㎡ 중심, 효율적 동선과 수납 특화 설계<br/>라이프스타일에 맞춘 공간 구성<br/>실용성과 품격을 갖춘 주거공간",
    },
    {
      img: slide6,
      title: "DL이앤씨 프리미엄 브랜드",
      desc:
        "이편한세상 브랜드의 고품격 설계 철학<br/>입주민을 위한 커뮤니티와 스마트 시스템<br/>브랜드가치를 담은 하이엔드 주거복합단지",
    },
  ];


  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
