<template>
    <div class="sort-row">
        <h1>Соки та напої</h1>
        <div class="sort-block">
            <div class="sort-block__selects">
                <select class="select-sort">
                    <option>Сортування:</option>
                </select>
                <select class="select-numb">
                    <option>16</option>
                </select>
            </div>
            <div class="sort-block__menu-icons">
                <div><img src="images/menu.png" alt=""></div>
                <div><img src="images/list.png" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SortComponent"
    }
</script>

<style>
    .sort-row {
        width: 100%;
        max-width: 1140px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: auto;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    h1 {
        font-size: 24px;
        font-weight: 600;
        margin: 15px;
    }


    .sort-block {
        width: 320px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin: 15px;
    }
    .sort-block__selects{
        width: 225px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    .sort-block__menu-icons {
        width: 65px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    select {
        height: 30px;
        border: 1px solid #999999;
        border-radius: 4px;
        background: transparent;
    }

    .select-sort {
        width: 150px;
    }

    .select-numb {
        width: 54px;
    }
</style>