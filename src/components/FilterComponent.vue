<template>
    <aside>
        <div v-for="(category, id) in categories" :key="id" class="filter__category-block">
            <button @click="toggle(category)" class="filter__category openable">
                <span class="filter__category-name" :class="{ active: category.show }">{{category.name}}</span>
                <div class="filter__category-toggle"> {{ category.show ? '–' : '+' }}</div>
            </button>

            <div v-show="category.show">
                <ul>
                    <li v-for="(subcategory,index) in category.subcategories" class="filter__subcategory" :key="index">
                        {{subcategory}}
                    </li>
                </ul>
            </div>
        </div>

        <ul class="filter__category">
            <span class="filter__category-name">Акції</span>
        </ul>
        <ul class="filter__category"><span class="filter__category-name">Хіти продаж</span></ul>
        <ul class="filter__category"><span class="filter__category-name">Новинки</span></ul>
        <div class="filter__price-block">
            <div class="filter__price-title">Ціна</div>
            <div class="filter__price-center">

                <button class="filter__price-btn">Застосувати фільтр</button>
            </div>

            <div :class="['filter__price-description', {closed: close}]">
                <div class="filter__price-x_container">
                    <button class="filter__price-x" @click="close = !close">X</button>
                </div>
                Якщо Ви вже настроїли усі фільтри, то натисніть кнопку і товари на сторінці оновляться,
                або продовжуйте вибір і натисніть на кнопку у будь-який момент.
            </div>
        </div>

    </aside>
</template>

<script>
    export default {
        name: "Filter",
        data() {
            return {
                close: false,
                categories: [
                    {
                        id: 1,
                        name: 'Бренди',
                        show: true,
                        subcategories: [
                            'Hipp', 'Gerber', 'Jaffa', 'Hipp', 'Gerber', 'Jaffa'
                        ]
                    },
                    {
                        id: 2,
                        name: 'Вік',
                        show: false,
                        subcategories: [
                            'від 0 до 3 міс', 'від 3 до 6 міс', 'від 6 міс до 1 року', 'з 1 до 3х років', 'старше 3х років'
                        ]
                    },
                    {
                        id: 3,
                        name: 'Тип товара',
                        show: false,
                        subcategories: [
                            'Сік', 'Компот'
                        ]
                    },
                    {
                        id: 4,
                        name: 'Властивості товара',
                        show: false,
                        subcategories: [
                            '200 мл', '1 л'
                        ]
                    }
                ]

            }
        },
        methods: {
            toggle(category) {
                category.show = !category.show

            },
        }

    }
</script>

<style>
    aside {
        width: 255px;
        margin: 15px;
    }

    .filter__category-block {
        margin: 4px auto;
    }

    .filter__category {
        height: 40px;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        color: #333333;
        cursor: pointer;
    }

    .filter__category:hover {
        color: #8eb52b;
    }

    .filter__category.openable {
        background-color: #f6f6f6;
    }

    .filter__category-name {
        margin-left: 25px;

    }

    .filter__category-name.active {
        color: #8eb52b;
    }

    .filter__category-toggle {
        margin-right: 25px;
        font-size: 25px;
        color: #333333;
    }

    .filter__subcategory {
        font-size: 14px;
        color: #333333;
        margin: 10px 25px;
    }

    .filter__price-block {
        width: 255px;
        background-color: #f6f6f6;
        padding-top: 5px;
        padding-bottom: 30px;
    }

    .filter__price-title {
        margin: 25px;
        font-size: 18px;
    }

    .filter__price-center {
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
    }

    .filter__price-x_container {
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
    }

    .filter__price-btn {
        width: 178px;
        height: 36px;
        background-color: #8eb52b;
        border: none;
        border-radius: 10px;
        color: #ffffff;
        font-size: 16px;
        font-weight: 400;
    }

    .filter__price-x {
        margin: 0 15px;
        text-align: right;
        color: #999999;
        background-color: transparent;
    }

    .filter__price-description {
        margin: 0 20px;
        font-size: 12px;
        color: #999999;
    }

    .closed {
        display: none;
    }
</style>