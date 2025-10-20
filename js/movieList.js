// 령경 js 코드 


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

// 섹션

// 영화별 정보
let movieItem = document.querySelectorAll('.movie-item'); 
// 더보기 버튼
let plusContent = document.querySelector('.plus_content span'); 
// 더보기 버튼 화살표 이미지 
let plusContentImg = document.querySelector('.plus_content img'); 

// // 더보기를 누르면 보일 갯수 - 8
let showCount = 8;
// // 처음 보여지는 갯수 - 8 
let currentCount = showCount; 

let isOpen = false;

// 처음엔 8개만 함수
for(let i=0; i<movieItem.length; i++){
  if(i >= showCount){
    movieItem[i].style.display = 'none';
  }
} 
// 더보기 누르면 8개 추가 함수 
plusContent.addEventListener('click', () => {
  // 더보기
  if(!isOpen){
    // 8개씩 더 보이게
    let nextCount = currentCount + showCount;
    for(let i=currentCount; i<nextCount && i<movieItem.length; i++){
      // movieItem이 있을때만
      movieItem[i].style.display = 'block';
    } currentCount += showCount;
    // 전부 열렸을 때 
    if(currentCount >= movieItem.length){ 
      // 접기, 접기 화살표로 변경 
      plusContent.textContent = '접기'; 
      plusContentImg.src = 'img/ico-btn-more-arr-off.png';
       // 펼쳐짐 
       isOpen = true; 
      }
    }else{ 
      // 8개만 남기고 숨김 = 처음상태로
      for(let i=0; i<movieItem.length; i++){
        if(i >= showCount){
          movieItem[i].style.display = 'none'; 
        } 
      } 
      // 버튼을 다시 더보기로 바꿈 
      currentCount = showCount; 
      plusContent.textContent = '더보기'; 
      plusContentImg.src = 'img/ico-btn-more-arr.png'; 
      isOpen = false; 
    } 
  })

// ---------------------------------------------------------------

// 푸터

// 극창 찾기
// 극장찾기 버튼
let theaterSearchBtn = document.querySelector('.theater_search_btn');
// 극장찾기 모달
let theaterSearchModal = document.querySelector('.theater_search_modal');

// 오버레이
let overlay = document.querySelector('.overlay');

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