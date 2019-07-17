<template>
    <div class="product">
        <div class="product__offer-circle">
            <img v-if="item.offer===1" src="images/hit.png">
            <img v-if="item.offer===2" src="images/sale.png">
        </div>
        <div class="product__image-container">
            <img class="product__image" :src="`${item.img}`" alt="">
            <div class="product__cart-hover">
                <img src="images/cart.png" alt="">
            </div>
        </div>
        <div class="product__title">{{item.title}}</div>
        <div class="product__info">
            <div v-if="item.stock===1" class="product__info-col product__stock active">В наявності</div>
            <div v-else class="product__info-col product__stock">Нема в наявності</div>
            <div class="product__info-col product__stars-rate">
                <star-rating v-model="item.rating"
                             :read-only="true"
                             :show-rating="false"
                             :max-rating="5"
                             inactive-color="#ccc"
                             active-color="rgb(255,134,0)"
                             :star-size="11">
                </star-rating>
                <span class="product__votes-amount">({{item.votes}})</span>
            </div>
        </div>
        <div class="product__price">{{item.price}} <span class="product__uah">грн</span></div>
    </div>

</template>

<script>
    export default {
        name: "ProductCardComponent",
        data() {
            return {}
        },
        props: {
            item: {
                type: Object,
                required: true
            }
        },
    }
</script>

<style>
    .product {
        width: 255px;
        height: 340px;
        margin: 10px 10px 15px 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        position: relative;
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
        text-align: center;
    }

    .product__offer-circle {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        height: 50px;
        position: absolute;
        width: 100%;
        top: 0;
    }

    .product__image-container {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .product__image {
        margin-top: 50px;
        max-width: 214px;
        width: 100%;
        height: auto;
    }

    .product__cart-hover {
        position: absolute;
        display: none;

    }

    .product__image-container:hover .product__cart-hover {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-delay: 0.15s;
        transition-delay: 0.15s;
    }

    .product__image-container:hover .product__image {
        opacity: 0.1;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=10)";
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-delay: 0.15s;
        transition-delay: 0.15s;
    }

    .product__title {
        height: 50px;
        margin: 5px 15px 0;
        font-size: 18px;
        font-weight: 300;
        text-transform: uppercase;
    }

    .product__stars-rate {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }

    .product__info {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .product__info-col {
        margin: 10px;
    }

    .product__stock {
        font-size: 14px;
        color: #cccccc;
    }

    .product__stock.active {
        color: #8eb52b;
    }

    .product__votes-amount {
        font-size: 11px;
        color: #cccccc;
    }

    .product__price {
        margin: 5px;
        font-size: 24px;
    }

    .product__uah {
        font-size: 18px;
    }
</style>