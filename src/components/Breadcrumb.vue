<template>
    <div>
        <hr class="header_hr">

        <div class="container">

            <nav class="breadcrumb">
                <ul>
                    <li><a href="">Головна</a></li>
                    <li><a href="">Каталог</a></li>
                    <li class="breadcrumb_active"><a href="">Соки та напої</a></li>
                </ul>
            </nav>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Breadcrumb"
    }
</script>

<style>
    .header_hr {
        margin: 12px auto;
        border: none;
        color: #8eb52b;
        background-color: #8eb52b;
        height: 1px;
    }

    .breadcrumb {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-item-align: start;
        align-self: flex-start;
        margin: 15px;
    }

    .breadcrumb ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }

    .breadcrumb li:before {
        content: ">";
    }

    .breadcrumb li:first-child:before {
        content: "";
    }

    .breadcrumb li:last-child:before {
        color: #999999;
    }

    .breadcrumb a {
        color: #666666;
        font-size: 14px;
    }

    .breadcrumb_active a {
        color: #999999;
    }

</style>