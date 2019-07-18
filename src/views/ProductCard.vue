<template>
    <div>
        <div class="product-card__title-container">
            <div class="product-card__title">{{product.title}}</div>
        </div>
        <div class="container">

            <div class="product-card">

                <div class="product-card__col">
                    <img :src="`${product.img[currentIndex]}`"
                         class="product-card__img"/>
                    <div class="dots">
                        <button v-for="(dot, index) in product.img" :key="index" @click="currentIndex = index"
                                :class="['dot', {active: currentIndex===index}]">
                        </button>
                    </div>
                </div>

                <div class="product-card__col">
                    <div class="product-card__info-row">
                        <div class="product-card__info-col"><span class="product-card__price">
                            <span class="product-card__price-amount">{{product.price}}</span> грн</span></div>
                        <div class="product-card__info-col">
                            <div class="product-card__star-rating">
                                <star-rating v-model="product.rating"
                                             :read-only="true"
                                             :show-rating="false"
                                             :max-rating="5"
                                             inactive-color="#ccc"
                                             active-color="rgb(255,134,0)"
                                             :star-size="20">
                                </star-rating>
                                ({{product.votes}})
                            </div>
                        </div>
                    </div>

                    <div class="product-card__info-row">
                        <div class="product-card__info-col">

                            <img src="images/product_card/ok.png" width="29px" height="29px"/>
                            <span class="product-card__stock">В наявності ({{product.stock}})</span>
                        </div>

                        <div class="product-card__info-col product-card__code">Код: {{product.article}}</div>

                    </div>

                    <div class="product-card__select-row">
                        <div class="product-card__info-col">
                            <table class="product-card__select-amount">
                                <th class="product-card__select-amount_th_side">
                                    <button class="btn__change-count" @click="(count===0) ? 0 : (count--)">-</button>
                                </th>
                                <th class="product-card__select-amount_th_center">{{count}}</th>
                                <th class="product-card__select-amount_th_side">
                                    <button class="btn__change-count"
                                            @click="(count=== product.stock) ? product.stock : count++">+
                                    </button>
                                </th>
                            </table>
                        </div>
                        <div class="product-card__info-col">
                            <button class="btn__cart btn_green">В кошик</button>
                        </div>
                    </div>

                    <div class="product-card__info-row">
                        <table class="product-card__table">
                            <tr>
                                <th><img src="images/product_card/truck.png" width="53" height="42"/>
                                    <p>Доставка</p></th>
                                <th class="product-card__table-center-th"><img
                                        src="images/product_card/wallet.png" width="44" height="44"/>
                                    <p>Оплата</p>
                                </th>
                                <th><img src="images/product_card/tag.png" width="41" height="41"/>
                                    <p>Скидки</p>
                                </th>
                            </tr>
                        </table>
                    </div>

                    <div class="product-card__share">

                        <div class="product-card__info-col">Поділитися посиланням:</div>

                        <div class="product-card__info-col">
                            <img src="../../public/images/product_card/facebok.png" class="product-card__social-icon"/>
                            <img src="../../public/images/product_card/googleplus-logo.png"
                                 class="product-card__social-icon"/>
                        </div>
                    </div>

                </div>
            </div>


            <div class="product-card__description">
                {{product.description}}
            </div>

            <hr class="product-card__hr">

            <div class="product-card__reviews">
                <span>Відгук Сік HiPP Яблучно-виноградний з 4 місяців 175 мл</span>
                <button class="btn__send-review btn_green">Написати відгук</button>
            </div>

            <reviews v-for="(review, index) in product.reviews" :review="review" :key="index"></reviews>
        </div>

    </div>
</template>

<script>
    import Reviews from '@/components/Reviews'

    export default {
        name: 'ProductCard',

        data() {
            return {
                count: 1,
                currentIndex: 0,
                product: {
                    article: '34500',
                    title: 'Сік HiPP Яблучно-виноградний з 4 місяців 175 мл',
                    img: [
                        'images/product_card/hipp_juice_apple_grape_200ml.png',
                        'images/product_card/hipp_juice_multifruit_200ml_9062300102793_images_2111993814-2.png',
                        'images/product_card/hipp_juice_apple_200ml.png'
                    ],
                    stock: 250,
                    rating: 5,
                    votes: 2,
                    price: '24',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n' +
                    '\n' +
                    'Еnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    reviews: [
                        {
                            name: 'Генадій',
                            rating: 5,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibend aoreet. Proin gravida dolor sit amet lacus accumsan et viverra justommodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient.',
                            likes: 12,
                            dislikes: 0,
                            date: '17.07.2017'

                        },
                        {
                            name: 'Оксана',
                            rating: 5,
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibend aoreet. Proin gravida dolor sit amet lacus accumsan et viverra justommodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient.',
                            likes: 12,
                            dislikes: 0,
                            date: '17.07.2017'

                        }
                    ]

                },

            }
        },
        components: {
            Reviews
        }
    }
</script>

<style>
    .product-card__title-container {
        max-width: 1170px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: auto;
    }

    .product-card__title {
        font-size: 36px;
        font-weight: bold;
        margin: 15px;
    }

    .product-card {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -ms-grid-row-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin: 15px;
    }

    .product-card__col {
        max-width: 460px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 30px;
    }

    .product-card__img {
        max-width: 460px;
        width: 100%;
        height: auto;
    }

    .dots {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 60px;
    }

    .dot {
        width: 15px;
        height: 15px;
        margin: 10px;
        border-radius: 50%;
        border: solid 1px #cccccc;
        background: none;
    }

    .dot.active {
        background-color: #dcdcdc;
    }

    .product-card__info-row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -ms-grid-row-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .product-card__select-row {
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
        -ms-grid-row-align: center;
        align-items: center;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .product-card__select-amount {
        width: 130px;
        height: 56px;
        border: 1px solid #cccccc;
        border-radius: 10px;
    }

    .product-card__select-amount th {
        font-size: 36px;
        font-weight: 400;
    }

    .product-card__select-amount_th_center {
        border-right: 1px solid #cccccc;
        border-left: 1px solid #cccccc;
        text-align: center;
    }

    .product-card__select-amount_th_side {
        width: 32px;
    }

    .btn__change-count {
        width: 100%;
        height: 100%;
        background-color: transparent;
        font-size: 32px;
        font-weight: 400;
    }

    .btn__change-count:hover {
        color: #8eb52b;
        cursor: pointer;
    }

    .product-card__info-col {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 10px;
    }

    .product-card__price {
        font-size: 30px;
    }

    .product-card__price-amount {
        font-size: 36px;
        font-weight: bold;
    }

    .product-card__star-rating {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 24px;
        color: #cccccc;
    }

    .product-card__stock {
        font-size: 20px;
        color: #8eb52b;
    }

    .product-card__code {
        font-size: 20px;
        color: #999999;
    }

    .btn__cart {
        width: 210px;
        height: 56px;
        font-size: 28px;
    }

    .product-card__table {
        max-width: 445px;
        height: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background-color: #f6f6f6;
        border: 1px solid #dedede;
        border-radius: 20px;
    }

    .product-card__table th {
        font-size: 16px;
        font-weight: 400;
    }

    .product-card__table-center-th {
        border-right: 1px solid #dedede;
        border-left: 1px solid #dedede;
        text-align: center;
    }

    .product-card__share {
        margin: 15px;
        font-size: 18px;
        font-weight: 300;
    }

    .product-card__social-icon {
        width: 35px;
        height: 35px;
        margin: 20px 20px 0 0;
    }

    .product-card__description {
        max-width: 1090px;
        margin: 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        font-size: 20px;
        text-indent: 15px;
    }

    .btn_green {
        background-color: #8eb52b;
        border-radius: 10px;
        color: #ffffff;
    }

    .product-card__info-col {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .product-card__table {
        width: 300px;
        height: 94px;
        display: table;
    }

    .product-card__reviews {
        max-width: 1090px;
        margin: 15px 15px 80px 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 28px;
        font-weight: 300;
    }

    .product-card__hr {
        border: none;
        color: #dfdfdf;
        background-color: #dfdfdf;
        height: 1px;
        margin: 100px 0;
    }

    .btn__send-review {
        width: 285px;
        height: 56px;
        font-size: 24px;
        margin: 15px;
    }

    @media (min-width: 768px) {
        .product-card {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }
        .product-card__col {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }


    }

    @media (min-width: 576px) {
        .product-card__info-row {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }
        .product-card__table {
            width: 445px;
        }
        .product-card__select-row {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }
        .product-card__reviews {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }
    }
</style>