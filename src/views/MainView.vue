<template>
    <div class="container">
        <!-- 검색 영역 -->
        <div id="searchDiv" class="my-5">
            <img src="../images/mainlogo.png" class="img-thumbnail my-fw-normal my-5" alt="메인 로고" width="92" height="120">
            <p class="fs-4 fw-bold text-secondary">클래식바람 지지</p>
            <p class="fw-normal text-secondary">바람의나라 클래식 거래소, 파티, 정보</p>

            <form class="d-flex justify-content-center my-5" role="search">
                <input class="form-control me-2 w-25" type="search" placeholder="돼지굴" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

            <p class="fw-normal">
                <a href="#" class="text-decoration-none text-decoration-underline">디스코드 로그인이나 메시지가 안될때</a>
            </p>
        </div>
        <!-- 검색 영역 끝 -->
            
        <!-- 이벤트 영역 -->
        <div class="my-5">
            <p class="fs-4 fw-bold"><a href="#" class="text-decoration-none text-secondary">이벤트</a></p>

            <div class="py-1">
                <div class="row row-cols-1 ">
                    <div class="col  my-3 d-flex justify-content-center">
                        <div class="border border-secondary rounded-2 d-flex flex-row cardDiv">

                            <div class="flex-shrink-0 p-2 d-flex align-items-center cardImage">
                                <img src="../images/event1.png" class="img-fluid"  alt="이벤트 이미지">
                            </div>

                            <p class="d-flex align-items-center mb-0 mx-3" >[세시마을] 정월 대보름 이벤트(1/29 ~ 2/22)</p>
                            
                        </div>
                    </div>

                    <div class="col  my-3 d-flex justify-content-center">
                        <div class="border border-secondary rounded-2 d-flex flex-row cardDiv">

                            <div class="flex-shrink-0 p-2 d-flex align-items-center cardImage">
                                <img src="../images/event2.png" class="img-fluid"  alt="이벤트 이미지">
                            </div>

                            <p class="d-flex align-items-center mb-0 mx-3" >[세시마을] 설날 이벤트(1/29 ~ 2/22)</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 이벤트 영역 끝 -->

        <!-- 문파모집 영역 -->
        <div class="my-5">


        </div>
        <!-- 문파모집 영역 끝 -->

        <!-- 실시간 아이템 시세 영역 -->
        <div>

        </div>
        <!-- 실시간 아이템 시세 영역 끝 -->

        <!-- 실시간 거래 목록 영역 -->
        <div>

        </div>
        <!-- 실시간 거래 목록 영역 끝 -->
    </div>
</template>
<style>
.cardDiv {
    padding:10px 30px; 
    width: 40% !important;
}
.cardImage {
    width: 60px; 
    height: 60px;
}

</style>