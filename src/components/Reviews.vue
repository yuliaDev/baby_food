<template>
    <div>
        <div class="product-card__review">
            <div class="review__side-block">
                <div class="review__name">{{review.name}}</div>
                <star-rating v-model="review.rating"
                             :read-only="true"
                             :show-rating="false"
                             :max-rating="5"
                             inactive-color="#ccc"
                             active-color="rgb(255,134,0)"
                             :star-size="18"/>
            </div>

            <div>
                <div class="review__text">
                    {{review.text}}
                </div>
                <div class="review__reaction">
                    <button class="review__answer arrow">
                        <img src="images/product_card/previous.png" class="review__reaction-img"/>Відповісти
                    </button>
                    <div class="review__likes">
                        <button class="review__answer">
                            <img src="images/product_card/like.png" alt="" class="review__reaction-img">
                            {{review.likes}}
                        </button>
                        <button class="review__answer">
                            <img src="images/product_card/dislike.png" alt="" class="review__reaction-img">
                            {{review.dislikes}}
                        </button>
                    </div>
                </div>
            </div>
            <div class="review__side-block review__date">{{review.date}}</div>
        </div>

        <hr class="review__hr">

    </div>
</template>

<script>
    export default {
        name: "Reviews",
        data() {
            return {}
        },
        props: {
            review: {
                type: Object
            }
        },
    }
</script>

<style>
    .product-card__review {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 55px 24px 24px 24px;
    }

    .review__side-block {
        min-width: 136px;
    }

    .review__name {
        font-size: 24px;
    }

    .review__text {
        font-size: 18px;
    }

    .review__reaction {
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
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .review__date {
        text-align: center;
    }

    .review__answer {
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
        font-size: 16px;
        color: #999999;
        background-color: transparent;
    }

    .review__reaction-img {
        margin: 5px;
    }

    .review__likes {
        min-width: 120px;
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

    .review__answer.arrow {
        text-decoration: underline;
    }

    .review__hr {
        border: none;
        color: #dfdfdf;
        background-color: #dfdfdf;
        height: 1px;
    }

    @media (min-width: 768px) {
        .product-card__review {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }
    }
</style>