import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false); 
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
			<title>천안아산역이편한세상시티 - 홍보영상</title>
			<meta
				name="description"
				content="천안아산역이편한세상시티 홍보영상으로 단지 설계, 세대 구성, 프리미엄 커뮤니티, 천안·아산 생활 인프라와 초역세권 교통 환경을 생생하게 확인하세요."
			/>
			<link rel="canonical" href="https://www.layershop.kr/Brand/video" />
			<meta name="robots" content="index,follow" />

			{/* OG 태그 */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="천안아산역이편한세상시티" />
			<meta property="og:title" content="천안아산역이편한세상시티 - 홍보영상" />
			<meta
				property="og:description"
				content="천안아산역이편한세상시티 홍보영상: 프리미엄 설계와 커뮤니티, 풍부한 생활 인프라와 천안아산역 초역세권 입지를 영상으로 만나보세요."
			/>
			<meta property="og:url" content="https://www.layershop.kr/Brand/video" />
			<meta property="og:image" content="https://www.layershop.kr/images/og/main.jpg" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="천안아산역이편한세상시티 - 홍보영상" />
			<meta
				name="twitter:description"
				content="프리미엄 단지 설계와 커뮤니티, 천안아산 중심의 생활 인프라와 교통환경을 영상으로 확인하세요."
			/>
			<meta name="twitter:image" content="https://www.layershop.kr/images/og/main.jpg" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />

			{/* SEO 최적화용 H1 */}
			<h1 className={styles.screenReaderOnly}>
			천안아산역이편한세상시티 - 홍보영상
			</h1>

			<p className={styles.screenReaderOnly}>
			천안아산역이편한세상시티의 홍보영상을 통해 프리미엄 단지 설계와
			세대 구성, 커뮤니티 공간과 스마트 라이프스타일을 확인하세요.
			천안아산역 초역세권 입지와 풍부한 생활 인프라까지, 완성도 높은
			주거 가치를 영상으로 만나보실 수 있습니다.
			</p>

			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
			<div>천안아산역, 하이엔드 라이프의 출발점</div>
			<div>천안아산역이편한세상시티를 영상으로 만나보세요</div>
			</div>




			<div className={styles.videoContainer}>
				<YouTube
					videoId=""
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
