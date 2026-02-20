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
        <span>충청남도 아산시 배방읍 장재리 1749</span>
      </li>
      <li>
        <strong>건축규모</strong>
        <span>지하 6층 ~ 지상 46층, 총 2개동</span>
      </li>
      <li>
        <strong>주택형</strong>
        <span>84㎡ 중심 주거형 설계</span>
      </li>
      <li>
        <strong>규모</strong>
        <span>총 396실</span>
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
            천안아산 생활중심과 학세권을 누리는<br />
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
      title: "광역 교통 중심 입지",
      desc:
        "KTX·SRT 천안아산역 이용 가능한 교통 환경<br/>수도권 및 전국 주요 도시로 빠른 이동성<br/>광역 교통망을 누리는 핵심 입지 프리미엄",
    },
    {
      img: slide2,
      title: "편리한 생활 인프라",
      desc:
        "대형 쇼핑시설과 생활편의시설 인접<br/>문화·외식·여가를 함께 누리는 도심 생활권<br/>일상 만족도를 높이는 원스톱 라이프",
    },
    {
      img: slide3,
      title: "도심 중심 주거 가치",
      desc:
        "천안아산역 생활권의 미래가치 기대 입지<br/>업무·상업·주거가 어우러지는 복합 생활환경<br/>도심 프리미엄을 누리는 핵심 주거 공간",
    },
    {
      img: slide4,
      title: "쾌적한 주거 환경",
      desc:
        "도심 속 여유를 누릴 수 있는 생활 녹지 인접<br/>쾌적한 주거환경과 편리한 도시 인프라 공존<br/>일상 속 힐링이 가능한 주거 입지",
    },
    {
      img: slide5,
      title: "실용적인 평면 설계",
      desc:
        "라이프스타일을 고려한 효율적인 공간 구성<br/>수납과 동선을 강화한 실용 중심 설계<br/>일상 만족도를 높이는 주거 공간 완성",
    },
    {
      img: slide6,
      title: "e편한세상 브랜드 프리미엄",
      desc:
        "DL이앤씨 e편한세상이 제안하는 주거 철학<br/>입주민 중심의 커뮤니티와 스마트 주거 시스템<br/>브랜드 가치가 더해진 프리미엄 라이프",
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
        <div className={styles.preTitle}>BUSINESS</div>
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
