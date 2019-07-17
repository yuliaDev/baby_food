<template>
    <footer>

        <div class="footer-container">
            <div class="footer__col">
                <img src="images/footer-logo.png">
            </div>

            <div class="footer__col">
                <ul>
                    <li class="footer__nav-item"><a href="#">Спосіб доставки</a></li>
                    <li class="footer__nav-item"><a href="#">Каталог</a></li>
                    <li class="footer__nav-item"><a href="#">Контакти</a></li>
                    <li class="footer__nav-item"><a href="#">Новинки</a></li>
                </ul>
            </div>
            <div class="footer__col">
                <ul>
                    <li class="phone"><span class="phone-code">(067) </span>056 45 55</li>
                    <li class="phone-question">Передзвонити Вам?</li>
                </ul>
            </div>
            <div class="footer__col">
                <ul class="footer__col_schedule">
                    <li class="footer__schedule">
                        <img src="images/clock.png" class="clock"><div>Графік роботи:</div>
                    </li>
                    <li class="footer__working-hours">пн-пт 09:00-18:00</li>
                </ul>
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style>
    footer {
        width: 100%;
        min-height: 146px;
        background-color: #555555;
        color: #ffffff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .footer-container {
        width: 100%;
        max-width: 1140px;
        margin: 30px 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .footer__col {
        margin: 10px 15px;
    }

    .footer__nav-item {
        font-size: 16px;
        color: #ffffff;
    }

    .footer__nav-item a {
        color: #ffffff;
    }

    .phone {
        font-size: 20px;
        font-weight: 600;
    }

    .phone-code {
        font-weight: 300;
    }

    .phone-question {
        font-size: 16px;
        text-decoration: underline;
    }

    .footer__col_schedule {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-grid-column-align: center;
        justify-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-line-pack: center;
        align-content: center;
    }

    .footer__working-hours {
        font-size: 16px;
        text-transform: uppercase;
        margin: 5px;
    }

    .footer__schedule {
        width: 140px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 5px;
    }

    .clock {
        margin: 5px;
    }

    @media (min-width: 768px) {
        .footer-container {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }
        .footer__col_schedule {
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
        }
    }

    @media (min-width: 576px) {

        .footer-container {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }
    }
</style>