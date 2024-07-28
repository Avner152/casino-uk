import { importImages } from "../App";
import casinos from "../json/casino-list.json";
import CasinoItem from "./CasinoItem";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";

export default function CasinoSection() {
  const images = importImages(
    require.context("../assets/logos", false, /\.(png|jpe?g|svg)$/)
  );

  const curDate = new Date();

  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  // const isTablet = useMediaQuery({
  //   query: "(min-width: 768px) and (max-width: 1023px)",
  // });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div>
      <div className={`${!isMobile && "mt-4"} mb-4 tit-n-des`}>
        <h1>
          Top 10 Best Online Casinos -{" "}
          <span className="color-green">
            {curDate.toLocaleString("default", { month: "long" })}{" "}
            {curDate.getFullYear()}
          </span>
        </h1>
        {!isMobile && (
          <span>
            Top UK real money online casinos compared and reviewed. Check our
            list of the most popular British online casinos. Play safely &
            responsibly.
          </span>
        )}
      </div>

      {!isMobile && (
        <div className="d-flex gap-3">
          <div className="d-flex align-items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
              fill="#fff"
            >
              <path
                // style="fill:#41479B;"
                fill="#41479B"
                d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38  c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621  C512,105.443,494.833,88.276,473.655,88.276z"
              />
              <path
                // style="fill:#F5F5F5;"
                fill="#F5F5F5"
                d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276  v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717  c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977  c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"
              />
              <g>
                <polygon
                  // style="fill:#FF4B55;"
                  fill="#FF4B55"
                  points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483    229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517  "
                />
                <path
                  // style="fill:#FF4B55;"
                  fill="#FF4B55"
                  d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31   C13.377,415.157,18.714,418.955,24.793,421.252z"
                />
                <path
                  // style="fill:#FF4B55;"
                  fill="#FF4B55"
                  d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"
                />
                <path
                  // style="fill:#FF4B55;"
                  fill="#FF4B55"
                  d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"
                />
                <path
                  // style="fill:#FF4B55;"
                  fill="#FF4B55"
                  d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"
                />
              </g>
            </svg>
            <span>UK Licensed</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4472 1.10557C12.1657 0.964809 11.8343 0.964809 11.5528 1.10557L3.55279 5.10557C3.214 5.27496 3 5.62123 3 6V12C3 14.6622 3.86054 16.8913 5.40294 18.7161C6.92926 20.5218 9.08471 21.8878 11.6214 22.9255C11.864 23.0248 12.136 23.0248 12.3786 22.9255C14.9153 21.8878 17.0707 20.5218 18.5971 18.7161C20.1395 16.8913 21 14.6622 21 12V6C21 5.62123 20.786 5.27496 20.4472 5.10557L12.4472 1.10557ZM5 12V6.61803L12 3.11803L19 6.61803V12C19 14.1925 18.305 15.9635 17.0696 17.425C15.8861 18.8252 14.1721 19.9803 12 20.9156C9.82786 19.9803 8.11391 18.8252 6.93039 17.425C5.69502 15.9635 5 14.1925 5 12ZM16.7572 9.65323C17.1179 9.23507 17.0714 8.60361 16.6532 8.24284C16.2351 7.88207 15.6036 7.9286 15.2428 8.34677L10.7627 13.5396L8.70022 11.5168C8.30592 11.1301 7.67279 11.1362 7.28607 11.5305C6.89935 11.9248 6.90549 12.5579 7.29978 12.9446L10.1233 15.7139C10.3206 15.9074 10.5891 16.0106 10.8651 15.9991C11.1412 15.9876 11.4002 15.8624 11.5807 15.6532L16.7572 9.65323Z"
                fill="#fff"
              />
            </svg>

            <span>Secure & Trusted</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 64 64"
              strokeWidth="3"
              stroke="#000000"
              fill="#fff"
            >
              <path d="M28.79,44l-9.4-9.4S31.76,5.41,56.77,7C56.77,7,60.25,30.12,28.79,44Z" />
              <path d="M56,16.82a10.87,10.87,0,0,1-6-3.08,11,11,0,0,1-3.11-6.15" />
              <circle cx="42.32" cy="21.44" r="5.48" />
              <path d="M30.61,43.16,30,47.84a.24.24,0,0,0,.33.25l8-3.47A2.32,2.32,0,0,0,39.63,43l1.22-5.83" />
              <path d="M20,33.29l-4.69.6a.23.23,0,0,1-.24-.32l3.46-7.95a2.33,2.33,0,0,1,1.67-1.35l5.82-1.22" />
              <path d="M21.49,36.68c-6.55,2.1-6.88,12.47-6.88,12.47s10.08.11,12.59-6.76" />
              <line
                x1="10.88"
                y1="52.82"
                x2="7.12"
                y2="56.59"
                strokeLinecap="round"
              />
              <line
                x1="10.6"
                y1="45.63"
                x2="7.41"
                y2="48.81"
                strokeLinecap="round"
              />
              <line
                x1="17.94"
                y1="53.11"
                x2="14.76"
                y2="56.3"
                strokeLinecap="round"
              />
            </svg>
            <span>Fast Withdrawals</span>
          </div>
        </div>
      )}
      {casinos.map((casino, k) => (
        <Fade
          key={k}
          direction={!isMobile ? (k % 2 ? "right" : "left") : null}
          delay={isDesktop ? k * 250 : 0}
          cascade
          triggerOnce
        >
          <CasinoItem
            key={k}
            index={k}
            item={casino}
            src={images[`${casino.img}.png`]}
          />
        </Fade>
      ))}
    </div>
  );
}
