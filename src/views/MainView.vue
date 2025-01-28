<template>
    <div class="container-xxl">
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
                        <div class="border border-secondary rounded-2 d-flex align-items-center flex-row cardDiv w-50">

                            <div class="flex-shrink-0 p-2 d-flex align-items-center cardImage">
                                <img src="../images/event1.png" class="img-fluid"  alt="이벤트 이미지">
                            </div>

                            <p class="d-flex align-items-center mb-0 mx-3 fw-bold">[세시마을] 정월 대보름 이벤트(1/29 ~ 2/22)</p>
                            
                        </div>
                    </div>

                    <div class="col  my-3 d-flex justify-content-center">
                        <div class="border border-secondary rounded-2 d-flex align-items-center flex-row cardDiv w-50">

                            <div class="flex-shrink-0 p-2 d-flex align-items-center cardImage">
                                <img src="../images/event2.png" class="img-fluid"  alt="이벤트 이미지">
                            </div>

                            <p class="d-flex align-items-center mb-0 mx-3 fw-bold">[세시마을] 설날 이벤트(1/29 ~ 2/22)</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 이벤트 영역 끝 -->

        <!-- 문파모집 영역 -->
        <div class="my-5">
            <p class="fs-4 fw-bold"><a href="#" class="text-decoration-none text-secondary">문파 모집</a></p>

            <div class="col  my-3 d-flex justify-content-center ">
                <div class="w-50">
                    <p class="fs-6 fw-bold"><a href="#" class="d-flex flex-row-reverse text-decoration-none text-secondary">더보기</a></p>
                </div>
            </div>

            <div class="col  my-3 d-flex justify-content-center ">
                <div class="border border-secondary rounded-2 d-flex  align-items-center flex-row cardDiv w-50 ">

                    <div class="flex-shrink-0 p-2 d-flex align-items-center cardImage">
                        <img src="../images/guild1.jpeg" class="img-fluid "  alt="문파 이미지">
                    </div>

                    <p class="d-flex align-items-center mb-0 mx-1 fw-bold guildTitle">팔달산</p>

                    <p class="d-flex align-items-center mb-0 mx-3 guildTitle">팔달산 문파에서 문파원 모집합니다 50/100 5만점</p>
                    
                    <div class="d-flex align-items-end flex-column mb-0 mx-3" style="width: 50px; height: 113px;">
                        <p class="guildTitle">99분전</p>
                        <img src="../images/discordImage1.png" class="img-fluid rounded-5"  alt="디스코드 로고 이미지" width="33px;" height="33px;">
                        <p class="guildTitle pt-2">아이디</p>
                    </div>
                </div>
            </div>

            <div class="col  my-3 d-flex justify-content-center ">
                <div class="border border-secondary rounded-2 d-flex align-items-center flex-row cardDiv w-50 ">

                    <div class="flex-shrink-0 p-2 d-flex align-items-center cardImage">
                        <img src="../images/guild1.jpeg" class="img-fluid "  alt="문파 이미지">
                    </div>

                    <p class="d-flex align-items-center mb-0 mx-1 fw-bold guildTitle">팔달산</p>

                    <p class="d-flex align-items-center mb-0 mx-3 guildTitle">팔달산 문파에서 문파원 모집합니다 50/100 5만점</p>
                    
                    <div class="d-flex align-items-end flex-column mb-0 mx-3" style="width: 50px; height: 113px;">
                        <p class="guildTitle">99분전</p>
                        <img src="../images/discordImage1.png" class="img-fluid rounded-5"  alt="디스코드 로고 이미지" width="33px;" height="33px;">
                        <p class="guildTitle pt-2">아이디</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 문파모집 영역 끝 -->

        <!-- 실시간 아이템 시세 영역 -->
        <div class="my-5">
            <p class="fs-4 fw-bold"><a href="#" class="text-decoration-none text-secondary">실시간 아이템 시세</a></p>

            <div class="col  my-3 d-flex justify-content-center ">
                <div class="w-50">
                    <p class="fs-6 fw-bold text-secondary d-flex flex-row-reverse">최근 1일</p>
                </div>
            </div>


        </div>
        <!-- 실시간 아이템 시세 영역 끝 -->

        <!-- 실시간 거래 목록 영역 -->
        <div class="my-5">
            <div class="row row-cols-1 row-cols-md-6 g-4"> 
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item1.jpg" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">[이벤트]하급문파비패</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">720전</p>
                            <p class="card-text" style="color:gray">(148건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item2.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">쇠조각</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">59,670전</p>
                            <p class="card-text" style="color:gray">(92건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item3.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">용의비늘</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">341,260전</p>
                            <p class="card-text" style="color:gray">(91건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item4.jpg" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">[이벤트]중급문파비패</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">7,240전</p>
                            <p class="card-text" style="color:gray">(91건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item5.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">장인의돌</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">258,440전</p>
                            <p class="card-text" style="color:gray">(77건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item6.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">팔괘</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">314,410전</p>
                            <p class="card-text" style="color:gray">(59건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item1.jpg" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">[이벤트]하급문파비패</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">720전</p>
                            <p class="card-text" style="color:gray">(148건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item2.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">쇠조각</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">59,670전</p>
                            <p class="card-text" style="color:gray">(92건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item3.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">용의비늘</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">341,260전</p>
                            <p class="card-text" style="color:gray">(91건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item4.jpg" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">[이벤트]중급문파비패</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">7,240전</p>
                            <p class="card-text" style="color:gray">(91건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item5.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">장인의돌</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">258,440전</p>
                            <p class="card-text" style="color:gray">(77건)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 d-flex align-items-center">
                        <img src="../images/items/item6.png" class="card-img-top cardImage mt-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">팔괘</h5>
                            <p class="card-text fw-bold" style="color: dodgerblue">314,410전</p>
                            <p class="card-text" style="color:gray">(59건)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 실시간 거래 목록 영역 끝 -->
    </div>
</template>
<style>
.cardDiv {
    padding:10px 30px; 
}
.cardImage {
    width: 60px; 
    height: 60px;
}

.guildTitle {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}

</style>