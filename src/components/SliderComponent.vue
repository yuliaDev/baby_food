<template>

    <div class="slider__container">
        <div class="slider__text">Проглянуті товари</div>
        <div class="slider">

        <swiper :options="swiperOption" ref="mySwiper">

            <swiper-slide  v-for="(product, id) in products" :key="id">
                <product-card-component :item="product"/>
            </swiper-slide>

            <div class="swiper-button-prev" slot="button-prev">
                <img src="images/left-arrow_active.png"/>
            </div>

            <div class="swiper-button-next" slot="button-next">
                <img src="images/right-arrow_active.png"/>
            </div>

        </swiper>
        </div>
    </div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    import ProductCardComponent from "./ProductCardComponent";

    export default {
        name: "SliderComponent",
        data() {
            return {
                products: [
                    {
                        id: 1,
                        offer: 0,
                        img: 'images/products/hipp_juice_apple_raspberry_200ml.png',
                        title: 'Сік HIPP яблуко малина, 200 мл',
                        stock: 1,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    },
                    {
                        id: 2,
                        offer: 1,
                        img: 'images/products/hipp_juice_multifruit_200ml_9062300102793_images_2111993814-2.png',
                        title: 'Сік HIPP морква, 200 мл',
                        stock: 1,
                        rating: 0,
                        votes: 2,
                        price: '24.00'
                    },
                    {
                        id: 3,
                        offer: 1,
                        img: 'images/products/images-2.png',
                        title: 'Компот Marmaluzi із яблук, 200 мл',
                        stock: 0,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    },
                    {
                        id: 4,
                        offer: 0,
                        img: 'images/products/klsjkl-f1I.png',
                        title: 'Bebivita із яблук, 200 мл',
                        stock: 1,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    },
                    {
                        id: 5,
                        offer: 2,
                        img: 'images/products/bebivita_sok_1867-E72.png',
                        title: 'Bebivita яблуко-виноград, 200 мл',
                        stock: 1,
                        rating: 1,
                        votes: 34,
                        price: '19.00'
                    },
                    {
                        id: 6,
                        offer: 0,
                        img: 'images/products/fndfn-2Dl.png',
                        title: 'Bebivita абрикос 200 мл',
                        stock: 0,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    },
                    {
                        id: 7,
                        offer: 2,
                        img: 'images/products/hipp_juice_apple_grape_200ml_9062300102472_images_2111994507.png',
                        title: 'Сік HIPP яблуко-виноград, 200 мл',
                        stock: 1,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    },
                    {
                        id: 8,
                        offer: 0,
                        img: 'images/products/hipp_juice_apple_200ml_9062300102731_images_2111992036.png',
                        title: 'Сік HIPP яблуко, 200 мл',
                        stock: 1,
                        rating: 0,
                        votes: 0,
                        price: '24.50'
                    },
                    {
                        id: 9,
                        offer: 1,
                        img: 'images/products/hipp_nectar_plum_200ml_9062300102687_images_2111994598.png',
                        title: 'Сік HIPP слива-груша, 200 мл',
                        stock: 0,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    },
                    {
                        id: 10,
                        offer: 0,
                        img: 'images/products/hipp_juice_apple_raspberry_200ml.png',
                        title: 'Компот Marmaluzi із яблук, 200 мл',
                        stock: 1,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    },
                    {
                        id: 11,
                        offer: 0,
                        img: 'images/products/hipp_juice_multifruit_200ml_9062300102793_images_2111993814-2.png',
                        title: 'Компот Marmaluzi із яблук, 200 мл',
                        stock: 1,
                        rating: 0,
                        votes: 0,
                        price: '19.00'
                    },
                    {
                        id: 12,
                        offer: 0,
                        img: 'images/products/1665bv_thm.png',
                        title: 'Bebivita мультіфрукт 200 мл',
                        stock: 0,
                        rating: 5,
                        votes: 2,
                        price: '19.00'
                    }
                ],
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    slidesPerView: 4,
                    setWrapperSize: true,
                    grabCursor: true,
                }
            }
        },

        components: {
            ProductCardComponent,
            swiper,
            swiperSlide
        }

    }
</script>

<style>
    .slider__container {
        display: none;
        max-width: 1190px;
        margin: 100px auto auto auto;
    }

    .slider__text {
        width: 100%;
        margin: 25px;
        font-size: 24px;
    }

    .slider {
        height: 400px;
    }

    .swiper-button-next, .swiper-button-prev {
        background: transparent;

    }

    @media (min-width: 1200px) {
        .slider__container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
        }

    }
</style>