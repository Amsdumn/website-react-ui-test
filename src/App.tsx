import React, { useEffect, useRef, useState } from 'react';
import { 
  SearchNormal1, 
  ChemicalGlass, 
  Hierarchy2, 
  CloudConnection, 
  ArrowRight,
  Clock,
  Eye,
  Book1, 
} from 'iconsax-react';
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import ButtonHeader from "./components/ButtonHeader";
import ImageCircle from "./components/ImageCircle";
import TextHeader from "./components/TextHeader";
import ProgressBar from './components/ProgressBar';
import FormContact from './components/FormContact';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

interface HeroCoverItem {
  title: string;
  desc: string;
  name: string;
  position: string;
  userImage: string;
  bgImage: string;
  bgColor: string;
}
interface OnlineCoverItem {
  tag: string;
  title: string;
  desc: string;
  name: string;
  position: string;
  userImage: string;
  bgImage: string;
  bgColor: string;
}
interface MyCourseItem {
  title: string;
  desc: string;
  bgImage: string;
  bgColor: string;
  progressData: number;
}
interface ArticleItem {
  intro: string;
  introImage: string;
  title: string;
  desc: string;
  bgColor: string;
  bgImage: string;
  tag: string;
  dateTime: string;
  viewCount: number
}
interface ArticleItem2 {
  intro: string;
  title: string;
  desc: string;
  bgColor: string;
  bgImage: string;
  tag: string;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

const heroCoverItems: HeroCoverItem[] = [
  {
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    desc: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    name: "ณัฐกานต์ สิทธิชัยอนันต์",
    position: "CEO Y.I.M Corporation",
    userImage: "/images/user-img-02.png",
    bgImage: "/images/hero-cover-01.jpeg",
    bgColor: "#002E2AE5"
  },
  {
    title: "Generative ChatGPT: UX Design Edition",
    desc: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    name: "ณัฐกานต์ สิทธิชัยอนันต์",
    position: "CEO Y.I.M Corporation",
    userImage: "/images/user-img-03.png",
    bgImage: "/images/hero-cover-02.jpeg",
    bgColor: "#95FFE5E5"
  },
  {
    title: "UX Accelerator Bundle",
    desc: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    name: "ณัฐกานต์ สิทธิชัยอนันต์",
    position: "CEO Y.I.M Corporation",
    userImage: "/images/user-img-04.png",
    bgImage: "/images/hero-cover-03.jpeg",
    bgColor: "#FCFF8BE5"
  },
]

const onlineCoverItems: OnlineCoverItem[] = [
  {
    title: "ลงทุนหุ้นมั่นใจ ต้องเข้าใจปัจจัยพื้นฐาน",
    tag: "Business",
    desc: "รู้และเข้าใจปัจจัยที่ส่งผลกระทบต่อราคาหุ้น",
    name: "ณัฐกานต์ สิทธิชัยอนันต์",
    position: "CEO Y.I.M Corporation",
    userImage: "/images/user-online-01.png",
    bgImage: "/images/online-img-01.jpeg",
    bgColor: "#FCFF8BE5"
  },
  {
    title: "Progressive Web Application",
    tag: "Data",
    desc: "การพัฒนา Application ด้วยคอนเซ็ปท์ Progressive Web Application (PWA)",
    name: "ปัญจมพงศ์ เสริมสวัสดิ์ศรี",
    position: "Google Developers",
    userImage: "/images/user-online-02.png",
    bgImage: "/images/online-img-02.jpeg",
    bgColor: "#000D2EE5"
  },
  {
    title: "React Hooks in Action",
    tag: "Science",
    desc: "เรียนรู้การเขียน React Hooks แบบ Best Practice",
    name: "วรัทธน์ วงศ์มณีกิจ",
    position: "Co-Founder",
    userImage: "/images/user-online-03.png",
    bgImage: "/images/online-img-03.jpeg",
    bgColor: "#95FFE5E5"
  },
  {
    title: "Generative AI and ChatGPT: Design Thinking Edition",
    tag: "Tech",
    desc: "ปลดล็อกขีดจำกัดการทำงานด้วยพลัง AI",
    name: "ทัศน์พล รัชตะสัมฤทธิ์",
    position: "Software Engineer",
    userImage: "/images/user-online-04.png",
    bgImage: "/images/online-img-04.jpeg",
    bgColor: "#06002EB0"
  },
]

const myCouseItems: MyCourseItem[] = [
  {
    title: 'Generative AI and ChatGPT: Design Thinking Edition',
    desc: 'Generative AI  and ChatGPT: Design Thinking  Edition',
    bgImage: '/images/course-img-01.jpeg',
    bgColor: '#3974CCCC',
    progressData: 0
  },
  {
    title: 'Generative ChatGPT: UX Design Edition',
    desc: 'Generative ChatGPT: UX Design Edition',
    bgImage: '/images/course-img-02.jpeg',
    bgColor: '#2A005FCC',
    progressData: 10
  },
  {
    title: 'เทคนิคการจัดทำบัญชี จัดการภาษี ด้วยเทคโนโลยีดิจิทัล',
    desc: 'เทคนิคการจัดทำบัญชี จัดการภาษี ด้วยเทคโนโลยีดิจิทัล',
    bgImage: '/images/course-img-03.jpeg',
    bgColor: '#00123FCC',
    progressData: 40
  },
  {
    title: 'องค์ประกอบของการเป็นผู้ประกอบการ SME ที่ประสบความสำเร็จ',
    desc: 'องค์ประกอบของผู้ประกอบการ SME ที่ประสบความสำเร็จ',
    bgImage: '/images/course-img-04.jpeg',
    bgColor: '#007077CC',
    progressData: 80
  }
]

const articleItems: ArticleItem[] = [
  {
    intro: 'profit / loss of stocks in the portfolio',
    introImage: '/images/content-icon-01.png',
    title: 'กำไร/ขาดทุนของหุ้นในพอร์ต ต้องดูอย่างไร?',
    desc: 'เมื่อซื้อขายหุ้นแล้วสิ่งหนึ่งที่ขาดไม่ได้ คือ การติดตามดูข้อมูลของหุ้นในพอร์ตลงทุนว่าตอนนี้มีกำไรหรือขาดทุนมากน้อยเท่าใด? ',
    bgColor: '#081631E5',
    bgImage: '/images/content-img-01.jpeg',
    tag: 'Business',
    dateTime: '29 กรกฎาคม 2023',
    viewCount: 240
  },
  {
    intro: 'What is a Data Engineer',
    introImage: '/images/content-icon-02.png',
    title: 'Data Engineer คืออะไร?',
    desc: 'Data Engineer คือคนที่ทำงาน กับหลากหลายเครื่องมือเพื่อรวบรวมข้อมูลจัดการข้อมูลและเปลี่ยนข้อมูลดิบ ให้พร้อมใช้งาน สำหรับทั้ง Data Scientist และ Data Analyst ',
    bgColor: '#002E3DE5',
    bgImage: '/images/content-img-02.jpeg',
    tag: 'Data',
    dateTime: '29 กรกฎาคม 2023',
    viewCount: 240
  }
]

const articleItems2: ArticleItem2[] = [
  {
    intro: 'สารแทนน้ำตาลไม่อันตราย',
    title: 'สารแทนน้ำตาลไม่อันตราย',
    desc: 'สาเหตุที่องค์การอนามัยโลกให้คำแนะนำดังกล่าวมาจากผลการวิจัยล่าสุดที่ชี้ว่าสารแทนน้ำตาลไม่มีประโยชน์ต่อการช่วยลดน้ำหนักหรือลดระดับน้ำตาล',
    bgColor: '#0D2E6DCC',
    bgImage: '/images/content-img-03.jpeg',
    tag: 'Science',
  },
  {
    intro: 'Data Pipelines with Airflow',
    title: 'Data Pipelines with Airflow',
    desc: 'เรียนรู้การสร้าง End-to-End Data Pipelines โดยใช้ Apache Airflow ตั้งแต่อ่านข้อมูล ทำความสะอาด ปรับให้อยู่ในรูปแบบที่เหมาะสม ',
    bgColor: '#151C59CC',
    bgImage: '/images/content-img-04.jpeg',
    tag: 'Tech',
  },
  {
    intro: 'ร่างกายสามารถย้อนวัย “อายุชีวภาพ”',
    title: 'ร่างกายสามารถย้อนวัย “อายุชีวภาพ”',
    desc: 'ความอ่อนเยาว์หรือแก่ชราของเซลล์และอวัยวะมนุษย์นั้น วัดกันด้วย “อายุชีวภาพ” (biological age) ซึ่งอาจจะแตกต่างจากอายุจริง',
    bgColor: '#052D43CC',
    bgImage: '/images/content-img-05.jpeg',
    tag: 'Science',
  }
]

function App() {
  const [panelOpen, setPanelOpen] = useState<boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeHeroIndex, setActiveHeroIndex] = useState<number>(0);
  const splideRef = useRef<Splide | null>(null);

  const { width } = useWindowSize();
  const isDesktopScreen = width >= 1024;

  const handleClickMenuPanel = (panelOpen: boolean) => {
    setPanelOpen(!panelOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setScrollPosition(scrollY);
      if (scrollPosition >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    if (splideRef.current) {
      const splideInstance = splideRef.current.splide;

      if (splideInstance) {
        splideInstance.on('moved', (newIndex) => {
          setActiveHeroIndex(newIndex);
        });
      }

      return () => {
        if (splideInstance) {
          splideInstance.off('moved');
        }
      };
    }
  },[]);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolling' : ''}`}>
        <div className="dynamic-container">
          <div className="dynamic-column">
            <div className="site-logo">
              logo
            </div>
            <Navbar status={true} />
          </div>
          <div className="hidden lg:flex lg:items-center lg:flex-row-reverse lg:gap-4">
            <ButtonHeader />
          </div>
          <div onClick={() => handleClickMenuPanel(panelOpen)} id="hamburger_menu" className={`lg:hidden ${panelOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
      <div className={`site-panel ${panelOpen ? 'w-full visible opacity-100' : 'w-0 opacity-0 invisible'}`}>
        <div className="wrapper">
          <Navbar status={false} />
          <div className="grid gap-y-4">
            <ButtonHeader />
          </div>
        </div>
      </div>
      <main className="site-main">
        <div className="dynamic-container">
          <div className="dynamic-row">
            <div className="lg:w-5/12 lg:pr-8 lg:pb-8">
              <div className="font-[500] text-[14px] text-[#00665E] lg:text-[18px] my-4">
                Lorem Ipsum is simply dummy .
              </div>
              <h1>
                <div className="inline text-[32px] lg:text-[52px]">
                  <span className="text-black font-[600]">
                    learn anytime,
                    anywhere <br></br>
                    with
                  </span>
                  <span className="text-[#00665E] font-[700] inline-block px-4 relative">
                    Lorem
                    <img className="absolute bottom-[-8px] left-0" src="/images/border-line.png" alt="" />
                  </span>
                </div>
              </h1>
              <div className="py-8">
                <form className="relative">
                  <div className="absolute top-[50%] left-[16px] translate-y-[-50%]">
                    <SearchNormal1
                      size={isDesktopScreen ? '24' : '16'}
                      color="#B6B6B6"
                      variant="Outline"
                    />
                  </div>
                  <input className="input-search" type="text" placeholder="ค้นหาหลักสูตร" />
                  <div className="absolute top-0 right-0">
                    <Button
                      typeButton="submit"
                      imagePath=""
                      imageAlt=""
                      label="ค้นหา"
                      labelColor="#ffffff"
                      labelFontSize={isDesktopScreen ? 24 : 16}
                      labelFontWeight={400}
                      bgColor="#A8AD00"
                      paddingX={isDesktopScreen ? 32 : 24}
                      paddingY={10}
                      rounded={8}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="lg:w-7/12">
              <Splide 
                options={{
                  rewind: true,
                  perPage: 2,
                  perMove: 1,
                  gap: '16px',
                  breakpoints: {
                    1024: {
                      perPage: 3,
                    },
                  },
                  arrows: false,
                  pagination: false
                }} 
                aria-label="My Hero Images"
                ref={splideRef}
                hasTrack={ false }
                className="hero-cover"
              >
                <div className="hero-cover__wrapper">
                  <SplideTrack className="hero-cover__track">
                  {heroCoverItems.map((item, index) => (
                    <SplideSlide key={index} className="hero-cover__slide">
                      <div className={`absolute z-[3] ${index === activeHeroIndex ? 'top-0 left-0 p-8 w-full' : 'rotate-[-90deg] p-0 top-[114px] lg:top-[140px] left-[-108px] lg:left-[-90px] w-[280px]'}`}>
                        <h3 className={`font-[700] ${index === activeHeroIndex ? 'text-[20px] text-white lg:text-[32px]' : 'text-[20px] lg:text-[26px] text-black'}`}>
                          {item.title}
                        </h3>
                        {index === activeHeroIndex && (
                        <h4 className="text-white font-[400] text-[16px] lg:text-[24px]">
                          {item.desc}
                        </h4>
                        )}
                      </div>
                      <div className={`absolute bottom-0 left-0 z-[4] w-full ${index === activeHeroIndex ? 'p-8' : 'p-4'} flex items-center`}>
                        <ImageCircle 
                          imagePath={item.userImage} 
                          imageWidth={isDesktopScreen ? 55 : 35} 
                          imageHeight={isDesktopScreen ? 55 : 35} 
                          imageAlt="" 
                        />
                        {index === activeHeroIndex && (
                        <div className="text-white text-[14px] lg:text-[16px] ml-4">
                          <span className="block font-[700]">{item.name}</span>
                          <span className="block font-[400]">{item.position}</span>
                        </div>
                        )}
                      </div>
                      <div className="hero-cover__color" style={{backgroundColor: `${item.bgColor}`}} />
                      <img className="hero-cover__image" src={item.bgImage} alt=""/>
                    </SplideSlide>
                  ))}
                  </SplideTrack>
                </div>
              </Splide>
            </div>
          </div>
        </div>
        <div className="relative py-8 overflow-hidden">
          <div className="absolute left-0 bottom-0">
            <img src="/images/wave-img-01.png" alt="" />
          </div>
          <div className="dynamic-container">
            <TextHeader isDesktop={isDesktopScreen} text='เลือกเรียนตามหัวข้อที่สนใจ' />
            <div className="lg:columns-4 gap-4">
              <div className="choice-card">
                <div className="dynamic-row">
                  <div className="choice-card__icon">
                    <Hierarchy2
                      size={isDesktopScreen ? 38 : 30}
                      color='#A8AD00'
                      variant='Bulk'
                    />
                  </div>
                  <div className="choice-card__title">
                    Data
                  </div>
                </div>
                <div className="dynamic-row">
                  <div className="choice-card__desc">
                    <p>เรียนรู้และฝึกฝนกระบวนการคิด
                    สร้างมูลค่าให้ธุรกิจด้วยข้อมูล</p>
                  </div>
                  <div className="choice-card__button">
                    <button type="button">
                      <ArrowRight
                        size={isDesktopScreen ? 30 : 24}
                        color='#00665E'
                        variant='Bold'
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="choice-card">
                <div className="dynamic-row">
                  <div className="choice-card__icon">
                    <ChemicalGlass
                      size={isDesktopScreen ? 38 : 30}
                      color='#A8AD00'
                      variant='Bulk'
                    />
                  </div>
                  <div className="choice-card__title">
                  Science
                  </div>
                </div>
                <div className="dynamic-row">
                  <div className="choice-card__desc">
                    <p>เรียนรู้และฝึกฝนกระบวนการคิด
                    ด้วยกระบวนการทางวิทยาศาสตร์</p>
                  </div>
                  <div className="choice-card__button">
                    <button type='button'>
                      <ArrowRight
                        size={isDesktopScreen ? 30 : 24}
                        color='#00665E'
                        variant='Bold'
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="choice-card">
                <div className="dynamic-row">
                  <div className="choice-card__icon">
                    <CloudConnection
                      size={isDesktopScreen ? 38 : 30}
                      color='#A8AD00'
                      variant='Bulk'
                    />
                  </div>
                  <div className="choice-card__title">
                    Tech
                  </div>
                </div>
                <div className="dynamic-row">
                  <div className="choice-card__desc">
                    <p>พร้อมเป็นที่ต้องการของตลาดแรงงานด้วยทักษะการเขียนโปรแกรม</p>
                  </div>
                  <div className="choice-card__button">
                    <button type='button'>
                      <ArrowRight
                        size={isDesktopScreen ? 30 : 24}
                        color='#00665E'
                        variant='Bold'
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="choice-card">
                <div className="dynamic-row">
                  <div className="choice-card__icon">
                    <Book1
                      size={isDesktopScreen ? 38 : 30}
                      color='#A8AD00'
                      variant='Bulk'
                    />
                  </div>
                  <div className="choice-card__title">
                  Business 
                  </div>
                </div>
                <div className="dynamic-row">
                  <div className="choice-card__desc">
                    <p>พลิกโฉมธุรกิจในยุคดิจิทัลด้วยการเข้าถึงลูกค้าในช่องทาง และเวลาที่เหมาะ</p>
                  </div>
                  <div className="choice-card__button">
                    <button type='button'>
                      <ArrowRight
                        size={isDesktopScreen ? 30 : 24}
                        color='#00665E'
                        variant='Bold'
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-8">
          <div className="dynamic-container">
            <div className="dynamic-row">
              <div className="order-1 w-full lg:flex-[0_0_50%] lg:max-w-[50%]">
                <TextHeader isDesktop={isDesktopScreen} text='คอร์สของฉัน' />
              </div>
              <div className="order-3 w-full lg:flex-[0_0_50%] lg:max-w-[50%] lg:order-2">
                <div className="flex justify-center items-center my-8 lg:mt-0 lg:justify-end">
                  <button type='button' className='bg-transparent py-[8px] px-[16px] text-[#A8AD00] font-[400] text-[18px] rounded-full border-2 border-[#A8AD00] leading'>
                    ดูทั้งหมด
                  </button>
                </div>
              </div>
              <div className="order-2 w-full lg:w-full lg:order-3">
                <Splide 
                  options={{
                    perPage: 4,
                    perMove: 1,
                    gap: '16px',
                    padding: 0,
                    breakpoints: {
                      768: {
                        perPage: 1,
                        padding: { left: 0, right: 80 },
                      },
                      1024: {
                        padding: { left: 0, right: 80 },
                        perPage: 2,
                      },
                    },
                    arrows: true,
                    pagination: false
                  }} 
                  aria-label="My Hero Images"
                  hasTrack={ false }
                  className=""
                >
                  <div className="course-cover">
                    <SplideTrack className="course-cover__track">
                    {myCouseItems.map((item, index) => (
                      <SplideSlide key={index} className="course-cover__slide">
                        <div className="relative">
                          <div className="course-cover__title">
                            {item.title}
                          </div>
                          <div className="course-cover__color" style={{backgroundColor: `${item.bgColor}`}} />
                          <img className="course-cover__image" src={item.bgImage} alt=""/>
                        </div>
                        <div className="p-4">
                          <p className="font-[400] text-black text-[16px]">{item.desc}</p>
                          <span className="block py-4 mt-8 text-black text-[16px]">
                            เรียนไปแล้ว <b>{item.progressData}%</b>
                          </span>
                          <ProgressBar progress={item.progressData} />
                        </div>
                      </SplideSlide>
                    ))}
                    </SplideTrack>
                  </div>
                </Splide>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-8 overflow-hidden">
          <div className="absolute right-0 top-0">
            <img src="/images/wave-img-02.png" alt="" />
          </div>
          <div className="dynamic-container">
            <div className="dynamic-row">
              <div className="order-1 w-full lg:flex-[0_0_50%] lg:max-w-[50%]">
                <TextHeader isDesktop={isDesktopScreen} text='คอร์สออนไลน์' />
              </div>
              <div className="order-3 w-full lg:flex-[0_0_50%] lg:max-w-[50%] lg:order-2">
                <div className="flex justify-center items-center my-8 lg:mt-0 lg:justify-end">
                  <button type='button' className='bg-transparent py-[8px] px-[16px] text-[#A8AD00] font-[400] text-[18px] rounded-full border-2 border-[#A8AD00] leading'>
                    ดูทั้งหมด
                  </button>
                </div>
              </div>
              <div className="order-2 w-full lg:w-full lg:order-3">
                <Splide
                  options={{
                    perPage: 4,
                    perMove: 1,
                    gap: '16px',
                    padding: 0,
                    breakpoints: {
                      768: {
                        perPage: 1,
                        padding: { left: 0, right: 80 },
                      },
                      1024: {
                        padding: { left: 0, right: 80 },
                        perPage: 2,
                      },
                    },
                    arrows: true,
                    pagination: false
                  }}
                  aria-label="My Hero Images"
                  hasTrack={ false }
                  className="online-cover"
                >
                  <div className="online-cover__wrapper">
                    <SplideTrack className="online-cover__track">
                    {onlineCoverItems.map((item, index) => (
                      <SplideSlide key={index} className="online-cover__slide">
                        <div className={`online-cover__top`}>
                          <span className="inline-block mb-4 text-[#7B7B7B] text-[16px] font-[400] rounded-full border-2 border-[#7B7B7B] py-[8px] px-[16px]">
                            {item.tag}
                          </span>
                          <h3 className={`font-[700] text-[24px] lg:text-[24px] mb-4 ${index % 2 ? ' text-white' : 'text-black'}`}>
                            {item.title}
                          </h3>
                          <h4 className={`${index % 2 ? 'text-white' : 'text-black'} font-[400] text-[20px] lg:text-[20px]`}>
                            {item.desc}
                          </h4>
                        </div>
                        <div className={`online-cover__bottom`}>
                          <ImageCircle 
                            imagePath={item.userImage} 
                            imageWidth={isDesktopScreen ? 45 : 25} 
                            imageHeight={isDesktopScreen ? 45 : 25} 
                            imageAlt="" 
                          />
                          <div className={`${index % 2 ? 'text-white' : 'text-black'} text-[14px] lg:text-[16px] ml-2`}>
                            <span className="block font-[700]">{item.name}</span>
                            <span className="block font-[400]">{item.position}</span>
                          </div>
                        </div>
                        <div className="online-cover__color" style={{backgroundColor: `${item.bgColor}`}} />
                        <img className="online-cover__image" src={item.bgImage} alt=""/>
                      </SplideSlide>
                    ))}
                    </SplideTrack>
                  </div>
                </Splide>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-8 overflow-hidden">
          <div className="absolute left-0 top-0">
            <img src="/images/wave-img-03.png" alt="" />
          </div>
          <div className="dynamic-container">
            <div className="dynamic-row">
              <div className="order-1 w-full lg:flex-[0_0_50%] lg:max-w-[50%]">
                <TextHeader isDesktop={isDesktopScreen} text='บทความและข่าวสารล่าสุด' />
              </div>
              <div className="order-3 w-full lg:flex-[0_0_50%] lg:max-w-[50%] lg:order-2">
                <div className="flex justify-center items-center my-8 lg:mt-0 lg:justify-end">
                  <button type='button' className='bg-transparent py-[8px] px-[16px] text-[#A8AD00] font-[400] text-[18px] rounded-full border-2 border-[#A8AD00] leading'>
                    ดูทั้งหมด
                  </button>
                </div>
              </div>
              <div className="order-2 w-full lg:w-full lg:order-3">
                <div className="dynamic-row">
                  <div className="w-full lg:flex-[0_0_50%] lg:max-w-[50%]">
                    {articleItems.map((item, index) => (
                      <div key={index} className={`${index === 0 ? 'mb-4 lg:flex' : 'hidden lg:flex'} lg:h-[50%] items-end bg-white rounded-[17px]`}>
                        <div className="relative w-full h-full lg:flex-[0_0_40%] lg:max-w-[40%]">
                          <div className='absolute top-0 left-0 w-full h-full rounded-t-[17px] lg:rounded-tr-none lg:rounded-l-[17px]' style={{backgroundColor: `${item.bgColor}`}}></div>
                          <img className='w-full h-full rounded-t-[17px] lg:rounded-tr-none lg:rounded-l-[17px]' src={item.bgImage} alt='' />
                          <div className='absolute top-0 left-0 w-full h-full p-4'>
                            <h3 className='font-[700] text-[20px] lg:text-[26px] text-white uppercase leading-snug px-10 lg:px-0'>
                              {item.intro}
                            </h3>
                          </div>
                          <div className={`${index % 2 ? 'bottom-10' : 'bottom-0'} absolute left-[50%] translate-x-[-50%] lg:w-full`}>
                            <img src={item.introImage} alt='' />
                          </div>
                        </div>
                        <div className="w-full h-full lg:flex-[0_0_60%] lg:max-w-[60%] p-4">
                          <span className="inline-block mb-4 text-[#00665E] text-[16px] font-[400] rounded-full border-2 border-[#00665E] py-[8px] px-[16px]">
                            {item.tag}
                          </span>
                          <h3 className={`font-[700] text-[20px] lg:text-[20px] mb-4 text-black`}>
                            {item.title}
                          </h3>
                          <h4 className={`text-black font-[400] text-[16px] mb-8 lg:text-[16px]`}>
                            {item.desc}
                          </h4>
                          <div className="flex items-center">
                            <Clock
                              size="24"
                              color="#6A6A6A"
                              variant="Outline"
                            />
                            <span className="block ml-2 text-[16px] font-[400] text-[#6A6A6A]">
                              {item.dateTime}
                            </span>
                          </div>
                          <div className="flex items-center mt-4">
                            <Eye
                              size="24"
                              color="#6A6A6A"
                              variant="Outline"
                            />
                            <span className="block ml-2 text-[16px] font-[400] text-[#6A6A6A]">
                              เข้าชม {item.viewCount} ครั้ง
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hidden w-full lg:block lg:flex-[0_0_50%] lg:max-w-[50%] pl-4">
                    {articleItems2.map((item, index) => (
                      <div key={index} className={`${index === 0 ? 'mt-0' : 'mt-4'} bg-white h-[32.5%] relative flex rounded-[17px] shadow-sm shadow-slate-100`}>
                        <div className='w-5/12 relative'>
                          <div 
                            className='
                              absolute top-0 left-0 
                              w-full h-full 
                              rounded-t-[17px] 
                              lg:rounded-tr-none 
                              lg:rounded-l-[17px]
                            ' 
                            style={{backgroundColor: `${item.bgColor}`}}
                          />
                          <img className='w-full h-full object-cover rounded-l-[17px]' src={item.bgImage} alt='' />
                          <div className='p-4 text-center absolute top-0 left-0 z-[2] w-full h-full flex items-center justify-center'>
                            <h3 className='font-[700] text-[20px] lg:text-[26px] text-white uppercase leading-snug px-10 lg:px-0'>
                              {item.intro}
                            </h3>
                          </div>
                        </div>
                        <div className='w-7/12 flex items-center justify-center'>
                          <div className='p-4'>
                            <span className="inline-block mb-4 text-[#00665E] text-[16px] font-[400] rounded-full border-2 border-[#00665E] py-[8px] px-[16px]">
                              {item.tag}
                            </span>
                            <h3 className={`font-[700] text-[20px] lg:text-[20px] mb-4 text-black`}>
                              {item.title}
                            </h3>
                            <h4 className={`text-black font-[400] text-[16px] mb-8 lg:text-[16px]`}>
                              {item.desc}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative py-8 overflow-hidden">
          <div className="absolute right-0 bottom-0">
            <img src="/images/wave-img-04.png" alt="" />
          </div>
          <div className="dynamic-container">
            <div className="dynamic-row">
              <div className="order-1 w-full lg:flex-[0_0_50%] lg:max-w-[50%]">
                <TextHeader isDesktop={isDesktopScreen} text='ตั้งกระทู้คำถาม' />
              </div>
            </div>
            <div className='shadow-sm shadow-[#0000000A] rounded-[24px] bg-white p-8'>
              <FormContact />
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-[#00665E]'>
        <div className='dynamic-container'>
          <div className='flex items-center justify-center lg:justify-start py-8 border-b border-[#C1C7CD]'>
            <span className='block font-[700] text-white text-[24px] lg:text-[64px]'>LOGO</span>
          </div>
          <div className='lg:flex gap-4 py-10 border-b border-[#C1C7CD]'>
            <div className='lg:w-3/12 py-4'>
              <div className='font-[700] text-white text-[20px] text-center lg:text-left'>คอร์สของเรา</div>
              <ul className='font-[400] text-white text-[16px] text-center lg:text-left'>
                <li className='py-2'>Data</li>
                <li className='py-2'>Science</li>
                <li className='py-2'>Tech</li>
                <li className='py-2'>Business</li>
              </ul>
            </div>
            <div className='lg:w-3/12 py-4'>
              <div className='font-[700] text-white text-[20px] text-center lg:text-left'>เกี่ยวกับเรา</div>
              <ul className='font-[400] text-white text-[16px] text-center lg:text-left'>
                <li className='py-2'>สอนกับเรา</li>
                <li className='py-2'>ติดต่อสอบถามเพิ่มเติม</li>
                <li className='py-2'>แจ้งปัญหาเกี่ยวกับระบบ</li>
                <li className='py-2'>ช่องทางการร้องเรียน</li>
              </ul>
            </div>
            <div className='lg:w-3/12 py-4'>
              <div className='font-[700] text-white text-[20px] text-center lg:text-left'>ความปลอดภัย</div>
              <ul className='font-[400] text-white text-[16px] text-center lg:text-left'>
                <li className='py-2'>Privacy Policy</li>
                <li className='py-2'>Terms and Conditions</li>
                <li className='py-2'>Data Protection Policy Six</li>
                <li className='py-2'>Cookie Policy</li>
              </ul>
            </div>
            <div className='lg:w-3/12 py-4'>
              <div className='font-[700] text-white text-[20px] text-center lg:text-left'>Lorem Ipsum is simply dummy text of the printing .</div>
              <ul className='font-[400] text-white text-[16px] text-center lg:text-left'>
                <li className='py-2'>199 ม.6 ต.ทุ่งสุขลา อ.ศรีราชา จ.ชลบุรี 20230</li>
              </ul>
              <div className='mt-8 font-[700] text-white text-[20px] text-center lg:text-left'>ติดต่อเรา</div>
              <ul className='flex justify-center lg:justify-start items-center gap-4 font-[400] text-white text-[16px] text-center lg:text-left'>
                <li className='py-2'>
                  <img src="/images/ic-yt.png" alt='' />
                </li>
                <li className='py-2'>
                  <img src="/images/ic-fb.png" alt='' />
                </li>
                <li className='py-2'>
                  <img src="/images/ic-tw.png" alt='' />
                </li>
                <li className='py-2'>
                  <img src="/images/ic-ig.png" alt='' />
                </li>
                <li className='py-2'>
                  <img src="/images/ic-in.png" alt='' />
                </li>
              </ul>
            </div>
          </div>
          <div className='lg:flex gap-4 lg:py-8 py-4'>
            <div className='w-full lg:w-6/12'>
              <div className='lg:text-left text-center font-[400] text-white text-[14px] lg:text-[16px]'>
              Y.I.M Corporation @ 2023. All rights reserved.
              </div>
            </div>
            <div className='w-full lg:w-6/12'>
              <div className='lg:text-right text-center font-[400] text-white text-[14px] lg:text-[16px]'>
              0-3835-4580-4 , 0-3835-2611-6
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
