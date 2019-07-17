<template>

    <div class="products">
        <div class="products__list">
            <product-card-component v-for="(product, id) in products" :item="product" :key="id"/>
        </div>
        <!-- pagination -->
        <div class="pagination">
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#" class="dots">...</a>
            <a href="#">21</a>
        </div>
        <!-- end pagination -->
    </div>

    
</template>

<script>
    import ProductCardComponent from '@/components/ProductCardComponent'

    export default {
        name: "ProductsListComponent",
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
                ]
            }
        },
        components: {
            ProductCardComponent
        }
    }
</script>

<style>
    .products {
        width: 100%;
    }

    .products__list {
        margin: 0 15px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .pagination {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin: 10px;
    }

    .pagination a {
        width: 38px;
        height: 38px;
        color: black;
        font-size: 19px;
        text-align: center;
        text-decoration: none;
        -webkit-transition: background-color .3s;
        transition: background-color .3s;
        border: 1px solid #dfdfdf;
        border-radius: 5px;
        margin: 4px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .pagination a.active {
        background-color: #8eb52b;
        color: white;
        border: 1px solid #8eb52b;
    }

    .pagination a.dots {
        background-color: inherit;
        border: none;
    }

    .pagination a:hover:not(.active) {
        background-color: #ddd;
    }

</style>