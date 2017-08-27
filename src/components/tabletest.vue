<template>
    <div>
        <div class="single">
            <Radio v-model="single">Radio</Radio>
        </div>
        <div class="example">
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage() }}"</p>
        </div>
        <div id="watch-example">
            <p>
                Ask me a yes/no question:
                <input v-model="question" />
            </p>
            <p>{{answer}}</p>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
    name: "tabletest",
    data() {
        return {
            single: false,
            message: 'Hello',
            question: '',
            answer: 'I cannot give you an answer until you ask a question!'
        }
    },
    watch: {
        question: function(newQusetion) {
            this.answer = 'Waiting for you to stop typing...';
            this.getAnswer()
        }
    },
    methods: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        },
        getAnswer: _.debounce(function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function(error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        },
            // 这是我们为用户停止输入等待的毫秒数
            500
        )
    }
}
</script>


