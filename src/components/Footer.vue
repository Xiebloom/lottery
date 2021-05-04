<template>
    <footer>
        <span class="dustbin" @click="reset()">X</span>
        <span class="calculation">
            合计{{count}}注，共{{money}}元
        </span>
        <span class="check">$</span>
    </footer>
</template>

<script>
export default {
    name:'Footer',
    props:['count','money'],
    data () {
        return {
            // count : 0,
            // money : 0
        }
    },
    methods : {
        reset () {
            this.$emit('reset')
        }
    }
}
</script>

<style scoped>
    footer {
        display: flex;
        justify-content: space-between;
        background-color: rgb(248, 149, 132);
        height: 45px;
        margin: 10px;
        line-height: 25px;
    }
    span {
        display: inline-block;
        padding: 0 20px 0 23px;
        margin: 10px 0px;
        
    }
    .dustbin {
        border-right: 2px gray solid;
        font-weight: 900;
    }
    .check {
        border-left: 2px gray solid;
        font-weight: 900;        
    }
</style>