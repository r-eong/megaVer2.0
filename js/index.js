

// 헤더

// nav 좌측 메뉴 모달
// SITEMAP 버튼
let sitemapBtn = document.querySelector('.sitemapBtn');
// SITEMAP 모달
let sitemapModal = document.querySelector('.modal');
// 검색 버튼
let searchBtn = document.querySelector('.searchBtn');
// 검색 모달
let searchModal = document.querySelector('.search_modal');

// SITEMAP 버튼 클릭
sitemapBtn.addEventListener('click', () => {
    let btnActive = sitemapBtn.classList.toggle('active');
    sitemapModal.classList.toggle('active', btnActive);

    // SITEMAP 열릴 때 검색 모달 닫기
    if (btnActive) {
        searchBtn.classList.remove('active');
        searchModal.classList.remove('active');
    }
});

// 검색 버튼 클릭
searchBtn.addEventListener('click', () => {
    let btnActive = searchBtn.classList.toggle('active');
    searchModal.classList.toggle('active', btnActive);

    // 검색 열릴 때 SITEMAP 모달 닫기
    if (btnActive) {
        sitemapBtn.classList.remove('active');
        sitemapModal.classList.remove('active');
    }
})
// 검색모달 안 - 예매율순, 메가박스 관객순
let rankTabs = document.querySelectorAll('.rank_tab');
let rankPanels = document.querySelectorAll('.rank_panel');

rankTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 모든 탭/패널 초기화
    rankTabs.forEach(t => t.classList.remove('active'));
    rankPanels.forEach(p => p.classList.remove('active'));

    // 현재 탭 활성화
    tab.classList.add('active');
    let targetId = tab.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  })
})

// 포스터 이미지 마우스오버
document.querySelectorAll('.rank_item').forEach(item => {
    // 현재 패널의 포스터 이미지
    let poster = item.querySelector('img');
    // 영화 제목 리스트
    let titles = item.querySelectorAll('li a');
    // 마지막 본 포스터 기억
    // let lastPoster = poster.src;

  // 영화 제목과 포스터 경로
  let posterImg = {
    '극장판 체인소 맨:레제편': 'img/rBGmxIIt5wLgjk1nEQr84Crh2Fvxhn4o_316.jpg',
    '보스': 'img/pA2JOhoGAwagQk8O7qmng8TfLEJqGH6k_316.jpg',
    '어쩔수가없다': 'img/FRNqKt4pbztmQXaLMu2ZIGP43ebJ9F8i_316.jpg',
    '투모로우바이투게더 브이알 콘서트:하트 어택': 'img/bmxMM15FzEffCjy5MJqNMGv1IjNKMIiT_316.jpg',
    '원 배틀 애프터 어나더': 'img/R33T0Ge5B0mf7snaCOz2JIfBpmPGke2c_316.jpg',
    'F1 더 무비': 'img/hWiZN7PP9G18jB18bS2BfyOTRDPpJH0m_316.jpg',
    '극장판 귀멸의 칼날:무한성편': 'img/GP7LkwFxSvP5uWfeV3MZLcoYGOSnXfbu_316.jpg',
    '좀비딸': 'img/GCFwvyXNbZTEogfoCW4TQNLiBNc5l6Hy_316.jpg',
    '진격의 거인 완결편 더 라스트 어택': 'img/t1aws8JYeDCKaCbRntA8oalmQ2UW33ua_316.jpg',
    '하얼빈': 'img/voFgSlrB9J2LLJqj7p6L6Zx03X3qFf6O_316.jpg'
  };

  // 영화 제목에  연결
  titles.forEach(title => {
    title.addEventListener('mouseover', () => {
        // 영화 제목 읽기
        let name = title.textContent.trim();
        for(let key in posterImg){
            if (name.includes(key)){
                // 이미지 변경
                poster.src = posterImg[key];
                // 마지막 본 포스터 저장
                // lastPoster = posterImg[key];
                break;
            }
        }
    });

    // 마우스를 떼도 마지막으로 이미지 그대로
  });
});


// ---------------------------------------------------------------

// 섹션2
// 슬라이드
// 왼쪽사진
let photo01 = document.getElementById('photo01');
// 오른쪽사진
let photo02 = document.getElementById('photo02');

// 슬라이드 바
let activeBar = document.querySelectorAll('.sliderPage span');

// 앞으로
let prevBtn = document.getElementById('prevBtn');
// 뒤로
let nextBtn = document.getElementById('nextBtn');
// 재생/정지 버튼
let playPauseBtn = document.getElementById('playPauseBtn');
// 슬라이드 번호
let slideCount = document.getElementById('slideCount');

// 현재 보여지는 슬라이드 인덱스 번호(0부터 시작)
let current = 0;
// playPauseBtn.length 를 total 변수로 지정
let total = activeBar.length;
// 지금 현재 슬라이드가 재생중인지, 정지중인지 상태를 저장하는 변수
// true를 지정해서 현재 재생중을 표현
let isPlay = true;
// setInterval() 함수를 이용하여 반복적으로 이미지가 변경되도록 지정
let timer;

// 자동으로 이미지 변경
function slideShow(current){
  // 이미지 변경
  // 왼쪽 이미지
  photo01.src = `img/originalticketTEXT_0${current + 1}.jpg`;
  // 오른쪽 이미지
  photo02.src = `img/originalticket_0${current + 1}.jpg`;
  // 슬라이드 번호
  slideCount.textContent = `\u00A0\u00A0${current + 1} / 6`;
  // console.log(photo01.src);

  // acvie 삭제/추가
  for(let i=0; i<total; i++){
    activeBar[i].classList.remove('active');
  }
  activeBar[current].classList.add('active');
}

// 5초마다 이미지 자동으로 변경
function autoSlide(){
  timer = setInterval(() => {
    current = (current + 1) % total;
    slideShow(current);
    photo01.classList.toggle('activeUP');
  }, 5000)
}

// 앞/뒤 버튼
prevBtn.addEventListener('click', () => {
  current = (current - 1 + total) % total;
  slideShow(current);
})
nextBtn.addEventListener('click', () => {
  current = (current + 1) % total;
  slideShow(current);
})

// 슬라이드 정지 함수
function stopSlide(){
  clearInterval(timer);
}

slideShow(current);
autoSlide();

// 재생/정지 버튼 함수
playPauseBtn.addEventListener('click', () => {
  if(isPlay){
    // 정지동작
    stopSlide();
    playPauseBtn.src = 'img/btn-benefit-slider-play.png';
  }else{
    // 재생동작
    autoSlide();
    playPauseBtn.src = 'img/btn-benefit-slider-pause.png';
  }
  isPlay = !isPlay;
})

// 슬라이드 하단 광고, 우측 광고 포스터 자동 변경
let adBenefit01 = document.getElementById('adBenefit01');
let adBenefit02 = document.getElementById('adBenefit02');

let adMovieImg = document.getElementById('adMovieImg');

let adCurrent = 0;
let adTotal = activeBar.length-3;

function ad_slideShow(adCurrent){
  // 이미지 변경
  // 하단 광고
  adBenefit01.src = `img/banner_${adCurrent + 1}.jpg`;
  adBenefit02.src = `img/advertisement_${adCurrent + 1}.jpg`;
  // 우측 광고
  adMovieImg.src = `img/poster_${adCurrent + 1}.jpg`;
}

function adSlide(){
  timer = setInterval(() => {
    adCurrent = (adCurrent + 1) % adTotal;
    ad_slideShow(adCurrent);
  }, 10000)
}
ad_slideShow(adCurrent);
adSlide();


// 섹션4
// 스와이프될 이미지
let swipe = document.querySelector('.swipe');
// 이전버튼
let slidePrev = document.getElementById('slidePrev');
// 다음버튼
let slideNext = document.getElementById('slideNext');

// 다음버튼 - 오른쪽으로
slideNext.addEventListener('click',() => {
  swipe.scrollBy({
    left: 187,
    behavior: 'smooth'
  })
})
// 이전버튼 - 왼쪽으로
slidePrev.addEventListener('click',() => {
  swipe.scrollBy({
    left: -187,
    behavior: 'smooth'
  })
})



// ---------------------------------------------------------------

// 푸터

// 오버레이
let overlay = document.querySelector('.overlay');

// 극창 찾기
// 극장찾기 버튼
let theaterSearchBtn = document.querySelector('.theater_search_btn');
// 극장찾기 모달
let theaterSearchModal = document.querySelector('.theater_search_modal');

// 버튼 클릭시 모달 켜기
theaterSearchBtn.addEventListener('click', () => {
    theaterSearchModal.classList.toggle('active');
    overlay.classList.add('active');
})
// x버튼 누를시 모달 닫기
function closeTheaterModal(){
    theaterSearchModal.classList.remove('active');
    overlay.classList.remove('active');
}



// ---------------------------------------------------------------

// 모달
// 이미지
let modalImg = document.getElementById('modalImg');
// 재생/정지 버튼
let modalPause = document.getElementById('modalPause');
// 슬라이드 동그라미
let modal_active = document.querySelectorAll('.slide-nav span');

let modalCurrent = 0;
let modalTotal = modal_active.length;

let modalisPlay = true;
// setInterval() 함수를 이용하여 반복적으로 이미지가 변경되도록 지정
let modaltimer;

// 이미지묶음
let modalImgTrans = document.getElementsByClassName('modalImg_trans');

// 자동으로 이미지 변경
function modalSlideShow(modalCurrent){
  // modalImg.classList.remove('fadein');
  // modalImg.classList.add('fadeout');

  // modalsetTimeout(() => {
    // 이미지 변경
    modalImg.src = `img/adModal_${modalCurrent + 1}.jpg`;
    modalImg.classList.toggle('fadein')
    // modalImg.classList.remove('fadeout');
    // modalImg.classList.add('fadein');
  // }, 300)
  
  // acvie 삭제/추가
  for(let i=0; i<modalTotal; i++){
    modal_active[i].classList.remove('modalactive02');
    
  }
  modal_active[modalCurrent].classList.add('modalactive02');
}

// 5초마다 이미지 자동으로 변경
function moadlAutoSlide(){
  modaltimer = setInterval(() => {
    modalCurrent = (modalCurrent + 1) % modalTotal;
    modalSlideShow(modalCurrent);
  }, 5000)
}


// 슬라이드 정지 함수
function moadlStopSlide(){
  clearInterval(modaltimer);
}

modalSlideShow(modalCurrent);
moadlAutoSlide();

// 재생/정지 버튼 함수
modalPause.addEventListener('click', () => {
  if(modalisPlay){
    // 정지동작
    moadlStopSlide();
    modalPause.src = 'img/btn-benefit-slider-play.png';
  }else{
    // 재생동작
    moadlAutoSlide();
    modalPause.src = 'img/btn-benefit-slider-pause.png';
  }
  modalisPlay = !modalisPlay;
})

// x버튼
let xBtn = document.getElementById('xBtn');
let popupModal = document.querySelector('.popupModal');
xBtn.addEventListener('click', () => {
  popupModal.style.display = 'none';
})