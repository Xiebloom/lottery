<template>
    <div id="choosebox" @click="logout">
        <ul class="boxul">
            <li :key="index" v-for="(item,index) in box" >
                <div class="content" v-bind:class="{active: box[index]}" @click="setActive(index)">
                    {{index+1}}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:['ballsNum'],
    name: 'SingleBox',
    data () {
        return {
            box : new Array(this.ballsNum).fill(false),
            count : 0
        }
    },
    methods:{
        logout () {
            // console.log(this.$route);
        },
        setActive (index) {
            this.$set(this.box,index,!this.box[index])
            this.box[index] === true ? this.count++ : this.count--;
            this.$emit('calculate');       
        }
    }
}

</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    li {
        text-decoration: none;
    }

    #choosebox1 {
        /* 最外层，保证居中 */
        background-color: whitesmoke;
        width: 100%;
        margin: 0 auto;
    }
    .boxul {
        /* flex 父容器 */
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: flex-start;
    }
    .boxul li {
        /* 各小选项 */
        display: inline-block;
        position: relative;
        width: 14.28%;
    }
    .boxul li:before {
        /* 保证各小框为正方形 */
        content: '';
        display: block;
        padding-top: 100%;
    }
    .content {
        /* 存放数字 */
        /* 布局 */
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        /* 大小 */
        width: 30px;
        height: 30px;
        /* 装饰和排版 */
        border: 2px solid tomato;
        border-radius: 50%;
        line-height: 30px;
        background-color: white;
        /* 文字 */
        font-weight: 700;
        color: tomato;
        /* 动画 */
        transition: all 0.5s ease;
    }

    .content.active
    {
        background-color: tomato;
        color: white;
    }

</style>