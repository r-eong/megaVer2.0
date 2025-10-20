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

// 인원수 선택 버튼
// 결과 출력할 위치
let people = document.querySelectorAll('.people');
// 버튼

// 오버레이
let overlay = document.querySelector('.overlay');
// 모달창
let modal_base = document.querySelector('.p_modal');

// -
let people_count= [0,0,0,0];
let modal_text = document.querySelector('.md_p');
let result = 0;

function minusBtn(minusIndex){
    // 전체 취소
    if(people_count[minusIndex] <= select_count && people_count[minusIndex] > 0){

        offBtnNo.classList.add('active');
        modal_text.innerHTML = `선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?`;
        modal_base.classList.add('active');
        overlay.classList.add('active');
            
    }else if( people_count[minusIndex] > 0){
        remain_person--;
        console.log('remainperson 감소: '+  remain_person);
        people_count[minusIndex]--;


    }
    seatSetF() 
    seatAddEventF()
    people[minusIndex].innerHTML = people_count[minusIndex];

    }
function plusBtn(plusIndex){
    // 8명 선택
    if(remain_person+select_count <=7){
        people_count[plusIndex]++;
        remain_person++;
        seatSetF()
        seatAddEventF()
    
    people[plusIndex].innerHTML = people_count[plusIndex];

    // 경로 1이상 선택 안내창
    if(plusIndex === 2){
        console.log('플러스: '+plusIndex);
        console.log('플러스2: '+people[plusIndex].textContent);
        if(people_count[plusIndex] === 1){
            
            modal_text.innerHTML = `◆ 경로 : 만 65세 이상(신분증) <br/><br/>
            경로요금은 만65세 이상 고객에게만 적용되며, 상영관 입장시 
            본인신분증을 제시해 주시기 바랍니다(*미지참시 입장 제한)
            <br/><br/>
            *경로선택 시 추가 할인이 제한될 수 있습니다`;
            
            modal_base.classList.add('active');
            overlay.classList.add('active');
        }
    }
    }else{
        console.log(`인원선택은 총 8명까지 가능합니다.`);
        modal_text.innerHTML = `인원선택은 총 8명까지 가능합니다.`;
        modal_base.classList.add('active');
        overlay.classList.add('active');
    }
    // 우대 1이상 선택 안내창
    if(plusIndex === 3){
        console.log('플러스: '+plusIndex);
        console.log('플러스2: '+people[plusIndex].textContent);
        if(people_count[plusIndex] === 1){
            
            modal_text.innerHTML = `※만 65세이상 고객님께서는 [경로]발권 부탁드립니다
            (*지점별 상이)<br/><br/>
            ◆ 우대요금은 장애인 고객에게 적용되며, 상영관 입장 시 본인확인 
            증빙서류를 제시해 주시기 바랍니다.<br/>
            (미지참 시 입장 제한)<br/>
            <br/><br/>
            - 장애인: 복지카드<br/>
            - 국가유공자: 국가유공자증<br/>
            <br/><br/>
            위 항목 외 지점별 우대요금 추가적용 대상은 직원확인 후 발권이 가능합니다.<br/>
            *우대선택 시 추가 할인이 제한될 수 있습니다.<br/>
            *국가유공자증에 한하며, 국가유공자 유족증 등은 할인이 불가합니다.`;
            

            modal_base.classList.add('active');
            overlay.classList.add('active');
        }
    }
    
}

// 취소버튼
let offBtnNo  = document.querySelector('.offBtn_no');

// 닫기 버튼
let offBtnYes = document.querySelector('.offBtn_yes');
// 닫기
    offBtnYes.addEventListener('click',() =>{
        if(offBtnNo.classList.contains('active')){
            offBtnNo.classList.remove('active');
            reset();
        }
        modal_base.classList.remove('active');
        overlay.classList.remove('active');
    })
    offBtnNo.addEventListener('click',() => {
        offBtnNo.classList.remove('active');
        modal_base.classList.remove('active');
        overlay.classList.remove('active');
    })



// 섹션 우측 시간 토글
// 기존 시간
let timeBtn01 = document.querySelector('#timeBtn01');
// on/off 할 선택 가능 시간
let timeBtn02 = document.querySelector('#timeBtn02');

// 토글
timeBtn01.addEventListener('click',() =>{
    timeBtn02.classList.toggle('active');
})

// 관람인원 선택 오버레이/모달
let seatOverlay = document.querySelector('.seat_overlay');
seatOverlay.classList.add('active');
seatOverlay.addEventListener('click', () =>{
    seatOverlay.classList.remove('active');
})

// ---------------------------------------------------------------

// 푸터

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




//상훈 js 코드

// 전역 변수 -------------------------------------------------------------------------

//행, 열 갯수 지정
let maxseat_x = 10; let maxseat_y = 10; 
let seat_selected = []; //선택된 좌석 저장  
let select_count = 0; // 선택된 좌석 수
let remain_person = 0; //남은 인원 

//---------------------------------------------------------------------------------------

//남은 좌석 1 -> true , else -> false
let soloSeatBool = (remain_person) => {
   if(remain_person == 1) return true;
   else if(remain_person > 1) return false;
}


//시작 호출 함수 (좌석 배열 생성)
(function(){
    let main_seat = document.querySelector('.seat_table');
    let seat_html = '';

    //시트 가로 크기만큼 반복
    for(let i = 0; i < maxseat_x; i++){ 
        seat_html += '<tr>'
        // charcodeAt -> 문자 A를 아스키 코드 정수형태로 변형, fromcharCode -> 정수형태의 아스키코드를 문자열로 변형
        let line_text = String.fromCharCode('A'.charCodeAt() + i)
        seat_html += `<td class = 'seat_alpha'>${line_text}</td>`
        //시트 세로 크기만큼 반복 
        for(let j = 0; j< maxseat_y; j++) {seat_html += `<td class='seat_class'></td>`;}
        seat_html += '</tr>';
    }
    main_seat.innerHTML = seat_html;


    //좌석 hover시 이벤트 추가
    (function(){
        //배열에 넣은 seat class 참조
        let seat_array =  document.querySelectorAll('.seat_class');

        //배열의 *열의 시작부분을 제외한* 갯수 만큼 반복
        for(let i=0; i<seat_array.length; i++){
            //현재 칸이 짝수칸이라면 -> 다음칸의 값, 홀수칸이라면 -> 그 전 칸의 값을 가져옴
            let next_array = i%2 == 0 ? seat_array[i+1] : seat_array[i-1]

            //마우스 over시 이벤트 추가
            seat_array[i].addEventListener('mouseover', function mouserOver(){
                if(seat_array[i].textContent != 'x'){ 
                        this.classList.add('selected'); //selected -> css 통한 색변경
                        //1인이 아닐시 -> 다음칸에도 selected 부여
                        if(soloSeatBool(remain_person) == false) next_array.classList.add('selected'); 
                }
            })   
            
            //mouse out시 이벤트 추가
            seat_array[i].addEventListener('mouseout', function mouserOut(){
                //selected class 제거
                this.classList.remove('selected');
                    if(soloSeatBool(remain_person) == false)  next_array.classList.remove('selected');
            }) 
        }
    })()

    //기본 함수 호출
    seatSetF();
    seatAddEventF()
})();

//좌석 선택 함수
function seatSetF(){
    let seat_array =  document.querySelectorAll('.seat_class');

    let total=0;

    for(let i = 0; i < maxseat_x; i++){
        // charcodeAt -> 문자 A를 아스키 코드 정수형태로 변형, fromcharCode -> 정수형태의 아스키코드를 문자열로 변형
        let line_text = String.fromCharCode('A'.charCodeAt() + i)
        for(let j = 0; j< maxseat_y; j++){
                //조건 -> 남은 인원이 1명이고, 홀수칸이며, clicked안된 상태라면 실행
            if( total%2==1 && !(seat_array[total-1].classList.contains('clicked')) && ((soloSeatBool(remain_person) ))){
                //texcontent를 x로 설정
                seat_array[total].textContent = 'x';
                seat_array[total].classList.add('banned'); // <<< 선택불가 css색 변경을 위해 class 추가함!
                //onclik 함수 제거 
                seat_array[total].onclick = function(){};
            }else{
                //좌석 textcontent를 좌석번호로 설정
                seat_array[total].textContent = line_text+Number(j+1);
                seat_array[total].classList.remove('banned');  // <<< 선택불가 css색 변경을 위해 class 추가함!
            }
                total++;
        }
    }
}

function seatAddEventF(){
    resultPrice()
    let seat_array =  document.querySelectorAll('.seat_class');
    // 시트 배열만큼 반복
    for(let i = 0; i<seat_array.length; i++){
        //시트 다음칸 변수
        let next_array = i%2 == 0 ? seat_array[i+1] : seat_array[i-1];

        //onclick 함수 추가
        seat_array[i].onclick = function(){
        //click된 상태라면
        if(this.classList.contains('clicked')){
            //click 클래스 제거
            this.classList.remove('clicked')
            //선택된 시트 좌석 정보 제거 
            seat_selected.splice(seat_selected.indexOf(this.textContent),1);
            
            //만약 다음 class또한 click 되더 있을경우
            if(next_array.classList.contains('clicked')){
                //삭제
                next_array.classList.remove('clicked');
                seat_selected.splice(seat_selected.indexOf(next_array.textContent),1);
                //남은 인원수 증가, 선택 인원 감소
                remain_person++;
                select_count--;
            }
            //남은 인원수 증가, 선택 인원 감소
            remain_person++;
            select_count--;
            //click 함수 호출
            clickF();
        }
        //click 이 아니고, content가 x가 아닐경우
        else if(remain_person != 0 && !(this.textContent == 'x')){
            //click 클래스 추가
            this.classList.add('clicked')
            
            //선택된 시트 배열에 좌석 content값 대입

            if(i%2 == 0) seat_selected.push(this.textContent)
            //만약 1인이 아닐경우        
            if(soloSeatBool(remain_person) == false){
                //다음배열에도 동일한 클래스 추가 및 값 증가
                next_array.classList.add('clicked')
                seat_selected.push(next_array.textContent)  
                select_count++;
                remain_person--;
            }
            if(i%2 == 1) seat_selected.push(this.textContent)
            
            select_count++;
            remain_person--;
            //click함수 호출
            clickF();
            
        }
        //남은 인원이 0 일때
        else if(!(this.textContent == 'x') && select_count+remain_person == 0){
            modal_text.innerHTML = `관람하실 인원을 먼저 선택해주세요.`;
            modal_base.classList.add('active');
            overlay.classList.add('active');
        }else{
            modal_text.innerHTML = `좌석 선택이 완료되었습니다.`;
            modal_base.classList.add('active');
            overlay.classList.add('active');
        }
    }

    }
    
    
}


//클릭 함수

let clickF = () => {

    
    let select_seat = document.querySelectorAll('.select_seat')
    console.log(seat_selected)

    for(let i = 0; i < select_seat.length; i++){
        //테이블 초기화
        if(select_seat[i].classList.contains(`selected`)){
        select_seat[i].classList.remove('selected');
        select_seat[i].textContent = '-';

        }else break;

    }

    for(let i = 0; i < select_count; i++){
        select_seat[i].classList.add('selected');
        select_seat[i].textContent = seat_selected[i]; 
    }
    seatSetF();
    seatAddEventF()

}

function reset(){


    let select_seat = document.querySelectorAll('.select_seat');
    let seat_array =  document.querySelectorAll('.seat_class');

    //메인 좌석 선택 테이블 초기화
    for(let i = 0; i < seat_array.length; i++){
        if(seat_array[i].classList.contains('selected')) seat_array[i].classList.remove('selected');
        if(seat_array[i].classList.contains('clicked')) seat_array[i].classList.remove('clicked');
    }
   

    //선택된 좌석 테이블 초기화 
    for(let i = 0; i < select_seat.length; i++){
    //테이블 초기화
        if(select_seat[i].classList.contains(`selected`)){
            select_seat[i].classList.remove('selected');
            select_seat[i].textContent = '-';
            console.log('a'+select_seat)

        }

    }
    seat_selected = new Array();
    select_seat = new Array()
    select_count = 0;
    remain_person = 0;
    people_count = [0,0,0,0];
    for(let i = 0; i<people.length; i++) people[i].innerHTML = people_count[i];
    seatSetF()
    seatAddEventF()
    resultPrice()
}

function resultPrice(){
    let total_price = document.querySelector('.total_price')
    let div_person = document.querySelector('.div_person')
    let result_price = 0;
    let nextBtn = document.querySelector('#nextBtn');
    let div_result = '　';
    if(remain_person == 0 && select_count != 0){
        
        for(let i=0; i<people_count.length; i++){
            switch(i){
                
                case 0:
                    result_price += people_count[i]*10000 
                    div_result += people_count[i] != 0 ? `성인: ${people_count[i]} ` : '';
                    break;
                case 1:
                    result_price += people_count[i]*8000 
                    div_result += people_count[i] != 0 ? `청소년: ${people_count[i]} ` : '';
                    break;
                case 2:
                    result_price += people_count[i]*5000 
                    div_result += people_count[i] != 0 ? `경로: ${people_count[i]} ` : '';
                    break;
                case 3:
                    result_price += people_count[i]*5000 
                    div_result += people_count[i] != 0 ? `우대: ${people_count[i]} ` : '';
                    break;
            }
        }
        total_price.innerHTML = result_price.toLocaleString('ko-KR') +'원';
        nextBtn.style.backgroundColor = '#3d9dbb';
    }
    else if(select_count !=0){
        total_price.innerHTML = `남은 좌석: ${remain_person}`;
        nextBtn.style.backgroundColor = '#aaaaaa';
    }
    else{
        total_price.innerHTML = result_price.toLocaleString('ko-KR') +'원';
        nextBtn.style.backgroundColor = '#aaaaaa';
    }
        div_person.innerText = div_result;

    
}