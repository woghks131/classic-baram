<template>
    <nav class="navbar bg-light">
        <div class="container-xxl d-flex justify-content-evenly">
            <a class="navbar-brand fs-3 fw-bold d-inline-flex p-2" href="#">
                <img src="../images/navlogo.png" alt="Logo" width="30" height="44" class="d-inline-block align-text-top">
                클바지지
            </a>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="돼지굴" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="btn-group">
                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    바람의나라 클래식
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">바람의나라 클래식</a></li>
                    <li><a class="dropdown-item" href="#">옛날바람</a></li>
                </ul>

                <button type="button" class="btn btn-primary" style="margin-left: 10px;">로그인</button>
            </div>
        </div>
    </nav>
    <nav class="navbar navbar-expand-sm navbar-light bg-light ">
        <div class="container-fluid justify-content-center">
            <ul class="navbar-nav">
				<li class="nav-item">
					<router-link to="/" class="nav-link">거래소</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">그룹 찾기</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">아이템</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">조합</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">마법</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">사냥터&몬스터</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">맵</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">단축키</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">계산기</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">패치 노트</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">문파</router-link>
				</li>
                <li class="nav-item">
					<router-link to="/" class="nav-link">이벤트</router-link>
				</li>
			</ul>
		</div>
    </nav>
</template>
<script>
    export default {
        name: 'commonHeader'
    }
</script>
<style>
nav .navbar-nav a.router-link-exact-active {
  color: #42b983 !important;
}

nav .navbar-nav a.nav-link {
  font-weight: bold;
  color: #2c3e50 !important;
}
</style>