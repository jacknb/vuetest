<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-ceiling {
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
}

.layout-ceiling-main {
    float: right;
    margin-right: 15px;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}
</style>
<template>
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a href="#">注册登录</a> |
                <a href="#">帮助中心</a> |
                <a href="#">安全中心</a> |
                <a href="#">服务大厅</a>
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo"></div>
        </div>
        <div style="height: 200px"></div>
        <div id="app1">
            <ol>
                <li v-for="todo in todos">{{todo.text}}</li>
            </ol>
        </div>
        <div id="app-5">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">逆转消息</button>
            <input v-model="message" />
        </div>
        <div class="layout-copy">
            2011-2017 &copy; TalkingData
        </div>
    </div>
</template>
<script>
export default {
    name: 'main',
    data() {
        return{
            message:"Hello VUE",
            todos:[
                {
                    text:'javascript'
                },{
                    text:'java'
                },{
                    text:'python'
                }
            ]
        }
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
}
</script>