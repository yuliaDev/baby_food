<template>
    <header>
        <div class="header-container">
            <div class="header-container__logo">
                <img src="images/header-logo.png">
            </div>
            <ul class="header__nav">
                <li class="header__nav-item"><a href="#">Головна</a></li>
                <li class="header__nav-item"><a href="#">Каталог</a></li>
                <li class="header__nav-item"><a href="#">Спосіб доставки</a></li>
                <li class="header__nav-item"><a href="#">Контакти</a></li>
            </ul>

            <div class="header__icons">
                <img src="images/magnifying-glass.png" width="25" height="24" alt="" class="header__icons-item">
                <img src="images/phone-call.png" width="25" height="31" alt="" class="header__icons-item">
                <img src="images/shopping-cart.png" width="30" height="29" alt="" class="header__icons-item">
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "HeaderComponent"
    }
</script>

<style>
    header {
        margin: 15px;
    }

    .header-container {
        width: 100%;
        max-width: 1140px;
        min-height: 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: auto;
    }

    .header-container__logo {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-item-align: self-start;
        align-self: self-start;
    }

    .header__nav {

        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 2;
        -ms-flex: 2;
        flex: 2;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        text-transform: uppercase;
        color: black;
        font-weight: 300;
        font-size: 16px;
    }

    .header__nav-item {
        margin: 20px 10px 0 10px;
    }

    .header__icons {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .header__icons-item {
        margin: 20px 0 0 20px;
    }

    @media (min-width: 768px) {
        .header-container {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-align: end;
            -ms-flex-align: end;
            -ms-grid-row-align: flex-end;
            align-items: flex-end
        }
    }
</style>