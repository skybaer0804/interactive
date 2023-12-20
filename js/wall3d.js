(function () {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = { x: 0, y: 0};
    let maxScrollValue;

    function resizeHandler() {
        // 스크롤 전체 길이 = 문서 전체 길이 - 현재화면 높이
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function() {
        // 스크롤 비율(0 ~ 1) = 현재 스크롤 길이 / 스크롤 전체 길이 
        // scrollY = pageYOffset
        let scrollPer = scrollY / maxScrollValue;
        const zMove =  scrollPer * 980 - 490;
        // hoseElem의 translateZ를 이동 시킴, 비율만큼
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';


        // progress bar
        barElem.style.width = scrollPer * 100 + '%';
    })

    window.addEventListener('mousemove', function(e) {
        // 마우스 위치 비율 계산식
        // 현재 마우스의 X 위치 / 전체 윈도우의 넓이
        // 현재 마우스의 Y 위치 / 전체 윈도우의 높이
        // 0 ~ 1 의 값을 -1 ~ 1의 값으로 변경.
        mousePos.x = -1 + (e.clientX / this.window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / this.window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' + (mousePos.x * 5) + 'deg)';

    })

    window.addEventListener('resize', function() {
        // 화면의 사이즈가 바뀔때마다 스크롤전체 길이 재계산
        resizeHandler();
    })
    // 스크롤 전체길이 값 초기화
    resizeHandler();

})();