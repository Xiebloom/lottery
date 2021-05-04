<template>
    <div>
        <SingleBox :ballsNum="ballNum1" ref="box1" @calculate="cal()"></SingleBox>
        <hr @click="test()" >
        <SingleBox :ballsNum="ballNum2" class="box2" ref="box2" @calculate="cal()"></SingleBox>
        <Footer :money="money" :count="count" @reset="reset()"></Footer>
    </div>
</template>

<script>
import SingleBox from './SingleBox'
import Footer from './Footer'

export default {
    name: 'Model',
    // props:[]
    components: {
        SingleBox,
        Footer
    },
    data () {
        return {
            ballNum1 : Number(this.$route.query.redBall),
            ballNum2 : Number(this.$route.query.blueBall),
            redLimit : Number(this.$route.query.redLimit),
            blueLimit : Number(this.$route.query.blueLimit),
            money: 0,
            count: 0
        }
    },
    methods: {
        test () {
        },
        cal () {
            // console.log(this.$refs.box1.count,this.$refs.box2.count);
            // 一注都没有
            if (this.$refs.box1.count < this.redLimit || this.$refs.box2.count < this.blueLimit) {
                this.count = 0;
                this.money = 2 * this.count;
            }

            // 计算多少注
            else {
                // C(^A,_B) = A * (A-1) * ... * (B+1) / (1 * 2 * ... * (A-B) )
                let count1 = this.$refs.box1.count
                let count2 = this.$refs.box2.count
                let res = 1
                let devider = 1;
                while (count1 > this.redLimit) {
                    res *= count1--;
                    res /= devider++;
                    // console.log(res)
                }
                devider = 1;
                while(count2 > this.blueLimit){
                    res *= count2--;
                    res /= devider++;
                    // console.log(res)
                }  
                this.count = res;
                this.money = 2 * res;
                // count = this.$refs.box1.count
            }
        },
        reset () {
            console.log('reset');
            this.$refs.box1.reset()
            this.$refs.box2.reset()
        }
    },
}
</script>

<style >
    .box2 .content {
        color: skyblue;
        border-color: skyblue;
    }

    .box2 .content.active
    {
        background-color: skyblue ;
        color: white;
    }
</style>