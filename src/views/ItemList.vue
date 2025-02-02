<template>
<nav class="navbar bg-body-tertiary">
  <form class="container-fluid justify-content-center py-4">
    <button
      v-for="(item, index) in items"
      :key="index"
      class="btn btn-sm btn-outline-secondary mx-2"
      :class="{ active: activeIndex === index }"
      type="button"
      :aria-pressed="activeIndex === index ? 'true' : 'false'"
      @click="setActive(index)"
    >
      {{ item }}
    </button>
  </form>
</nav>

<div class="container-xxl">
  <div class="my-3">
    
    <div class="row justify-content-center">
      <div class="col-12 my-3 d-flex justify-content-center">
        <div class="card itemcard border border-secondary rounded-2 shadow-sm p-4 d-flex flex-column align-items-start">
          
          <div class="d-flex flex-row gap-5 w-100">
            <!-- 첫 번째 요소 -->
            <div class="d-flex flex-column align-items-center">
              <!-- 이미지 -->
              <img src="../images/discordImage1.png" class="img-fluid rounded-circle mb-3" alt="디스코드 로고 이미지" width="50" height="50">
              <!-- 텍스트 그룹 -->
              <div class="text-start">
                <p class="itemTitle mb-1">아이템이름</p>
                <p class="level-text mb-0 d-flex justify-content-center">Lv.0</p>
              </div>
            </div>

            <!-- 두 번째 요소 -->
            <div class="d-flex flex-column align-items-start">
                <!-- 텍스트 그룹 -->
                <div class="text-start">
                  <p class="itemSubTitle mb-1">내구성 1,000 (100%)</p>
                  <p class="itemSubTitle mb-1">파괴력: 5m10</p>
                  <p class="itemSubTitle mb-1">직업 제한: 공용</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-12 my-3 d-flex justify-content-center">
        <div class="card itemcard border border-secondary rounded-2 shadow-sm p-4 d-flex flex-column align-items-start">
          
          <div class="d-flex flex-row gap-5 w-100">
            <!-- 첫 번째 요소 -->
            <div class="d-flex flex-column align-items-center">
              <!-- 이미지 -->
              <img src="../images/discordImage1.png" class="img-fluid rounded-circle mb-3" alt="디스코드 로고 이미지" width="50" height="50">
              <!-- 텍스트 그룹 -->
              <div class="text-start">
                <p class="itemTitle mb-1">아이템이름</p>
                <p class="level-text mb-0 d-flex justify-content-center">Lv.0</p>
              </div>
            </div>

            <!-- 두 번째 요소 -->
            <div class="d-flex flex-column align-items-start">
                <!-- 텍스트 그룹 -->
                <div class="text-start">
                  <p class="itemSubTitle mb-1">내구성 1,000 (100%)</p>
                  <p class="itemSubTitle mb-1">파괴력: 5m10</p>
                  <p class="itemSubTitle mb-1">직업 제한: 공용</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>
</template>

<script setup>
import { ref } from "vue";

// 버튼 목록
const items = ref(["무기", "방어구", "방패", "투구", "반지", "장신구", "술", "기타"]);

// 현재 활성화된 버튼의 인덱스 (초기값 없음)
const activeIndex = ref(null);

// 버튼 클릭 시 활성화 변경
const setActive = (index) => {
  activeIndex.value = index;
};
</script>

<style>
/* 활성화된 버튼 스타일 */
.btn.active {
  background-color: #6c757d;
  color: white;
  border-color: #6c757d;

}

/* 카드 스타일 */
.itemcard {
  width: 80%; /* 내부 넓이 증가 */
  max-width: 600px; /* 너무 커지지 않도록 제한 */
  padding: 20px 30px; /* 내부 여백 증가 */
  background-color: #f8f9fa; /* 연한 회색 배경 */
  transition: all 0.3s ease-in-out;
  text-align: center; /* 텍스트 중앙 정렬 */
}

/* 반응형: 모바일에서는 더 넓게 */
@media (max-width: 768px) {
  .card {
    width: 90%; /* 작은 화면에서는 더 넓게 */
    padding: 20px; /* 내부 여백 조정 */
  }
}

/* 호버 시 효과 */
.itemcard:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 아이템 제목 스타일 */
.itemTitle {
  font-size: 1.1rem;
  font-weight: bold;
  color: #343a40; /* 다크 그레이 */
}

.itemSubTitle {
  font-size: 1.0rem;
  font-weight: bold;
  color: #343a40; /* 다크 그레이 */
}

/* 레벨 텍스트 스타일 */
.level-text {
  font-size: 0.9rem;
  color: #6c757d; /* 중간 회색 */
}
</style>