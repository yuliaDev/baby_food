<template>
    <div id="app">
        <header-component/>
        <breadcrumb/>

        <router-view/>
        <slider-component/>
        <footer-component/>
    </div>
</template>
<script>
    import HeaderComponent from './components/HeaderComponent'
    import Breadcrumb from './components/Breadcrumb'
    import SliderComponent from './components/SliderComponent'
    import FooterComponent from './components/FooterComponent'

    export default {
        components: {
            HeaderComponent,
            Breadcrumb,
            SliderComponent,
            FooterComponent

        }
    }
</script>


<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif;
        font-size: 12px;
        color: #333333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    li {
        list-style: none;
    }

    button {
        border: none;
        outline: none!important;
        cursor: pointer;
        background-color: transparent;
    }

    .container {
        max-width: 1140px;
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
</style>
