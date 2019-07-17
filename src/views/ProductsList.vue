<template>
    <div class="container">
        <sort-component/>

        <main>
            <filter-component/>
            <products-list-component/>
        </main>

    </div>
</template>

<script>
    import SortComponent from '@/components/SortComponent'
    import FilterComponent from '@/components/FilterComponent'
    import ProductsListComponent from '@/components/ProductsListComponent'

    export default {
        name: 'ProductsList',
        components: {
            SortComponent,
            FilterComponent,
            ProductsListComponent
        }
    }
</script>

<style>
    main {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }

    @media (min-width: 576px) {
        main {
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
        }

    }
</style>
