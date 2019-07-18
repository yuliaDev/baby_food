<template>
    <aside>
        <div v-for="(category, id) in categories" :key="id" class="filter__category-block">
            <button @click="toggle(category)" :class="['filter__category', {openable : category.subcategories}]">
                <span class="filter__category-name" :class="{ active: category.show }">{{category.name}}</span>
                <div v-if="category.subcategories" class="filter__category-toggle"> {{ category.show ? '–' : '+' }}
                </div>
                <div v-else class="filter__category-toggle">
                    <input class="radio" type="radio" name="category" :id='category+id' value="Назва">
                    <label :for='category+id'></label>
                </div>
            </button>

            <div v-show="category.show">
                <ul>
                    <li v-for="(subcategory,index) in category.subcategories" class="filter__subcategory" :key="index">
                        <div>{{subcategory}}</div>
                        <div>
                            <input class="radio" type="radio" :name="category.id" :id='subcategory+index'
                                   value="Назва">
                            <label :for='subcategory+index'></label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="filter__price-block">
            <div class="filter__price-title">Ціна</div>

            <vue-slider v-model="value"
                        :railStyle="rail"
                        :tooltip="'always'"
                        :tooltipPlacement="'bottom'"
                        :process="process"
                        :width="200"
                        :min="14" :max="78"
                        :min-range="1"
                        class="range-slider">
                <template #dot>
                    <button class="custom-dot"></button>
                </template>
                <template #tooltip="{ value }">
                    <div class="custom-tooltip">
                        <span class="custom-tooltip__value">{{ value }}</span> грн
                    </div>
                </template>
            </vue-slider>


            <div class="filter__price-center">
                <button class="filter__price-btn">Застосувати фільтр</button>
            </div>

            <div :class="{closed: close}">
                <div class="filter__price-x_container">
                    <button class="filter__price-x" @click="close = !close">X</button>
                </div>
                <div class="filter__price-description">
                Якщо Ви вже настроїли усі фільтри, то натисніть кнопку і товари на сторінці оновляться,
                або продовжуйте вибір і натисніть на кнопку у будь-який момент.
                </div>
            </div>
        </div>

    </aside>
</template>

<script>
    export default {
        name: "FilterComponent",
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
                    },
                    {
                        id: 5,
                        name: 'Акції'
                    },
                    {
                        id: 6,
                        name: 'Хіти продаж'
                    },
                    {
                        id: 7,
                        name: 'Новинки'
                    }
                ],

                value: [35, 78],
                process: dotsPos => [
                    [dotsPos[0], dotsPos[1], {backgroundColor: '#d1d1d1'}]
                ],
                rail: {backgroundColor: 'white', border: '1px solid #d1d1d1'}


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
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        color: #333333;
        margin: 10px 25px;
    }

    .radio {
        vertical-align: top;
        margin: 0 3px 0 0;
        width: 10px;
        height: 10px;
    }

    .radio + label {
        cursor: pointer;
    }

    .radio:not(checked) {
        position: absolute;
        opacity: 0;
    }

    .radio:not(checked) + label {
        position: relative;
        padding: 0 0 0 20px;
    }

    .radio:not(checked) + label:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 26px;
        height: 14px;
        border-radius: 12px;
        background: transparent;
        border: 1px solid #d0d0d0;
    }

    .radio:not(checked) + label:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 16px;
        height: 16px;
        border-radius: 10px;
        background: #d0d0d0;
        transition: all .2s;
    }

    .radio:checked + label:before {
        background: transparent;
        border: 1px solid #8eb52b;
    }

    .radio:checked + label:after {
        left: 12px;
        background: #8eb52b;
    }

    .filter__price-block {
        width: 255px;
        background-color: #f6f6f6;
        padding-top: 5px;
        padding-bottom: 30px;
    }

    .filter__price-title {
        margin: 15px 20px;
        font-size: 18px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
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
        margin: 5px;
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

    .range-slider {
        margin: 20px auto 40px 15px;
    }

    .custom-dot {
        width: 18px;
        height: 18px;
        background-color: #8eb52b;
        border-radius: 50%;
    }

    .custom-tooltip {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        color: #8eb52b;
        font-size: 14px;
    }

    .custom-tooltip__value {
        font-size: 18px;
        margin: auto 5px;
    }

</style>