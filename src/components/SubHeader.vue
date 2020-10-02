<template>
    <div class="subHeader">
        <div class="container">
            <div class="subHeader__inner">
                <img src="../assets/img/logo.png" alt="" />
                <button class="button button-primary">
                    <img src="../assets/img/menu.png" alt="" />
                    Каталог
                </button>
                <div class="search-block">
                    <input type="text" placeholder="Хочу найти..." />
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#708598" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.5 17.5L13.875 13.875" stroke="#708598" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <button class="button button-add">
                    <img src="../assets/img/list.png" alt="" />
                    <span><figure /></span>
                    Список
                </button>
                <div class="profile-block"><p>A</p></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubHeader',

}
</script>