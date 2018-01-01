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
            <h3 v-if="ok">Is Ok</h3>
            <h3 v-else>NO</h3>
            <div v-if="Math.random()>0.5">
                Now you see me.
            </div>
            <div v-else>
                Now you don't.
            </div>
            <div v-if="type=='A'">A</div>
            <div v-else-if="type=='B'">B</div>
            <div v-else-if="type=='C'">C</div>
            <div v-else>NOT A/B/C</div>
            <h1 v-show="showMe">Show Me</h1>
            <ul>
                <li v-for="(item,index) of items" :key="item.message">
                    {{parentMessage}}-{{index}}-{{item.message}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
    name: "tabletest",
    data() {
        return {
            ok: true,
            single: false,
            message: 'Hello',
            question: '',
            answer: 'I cannot give you an answer until you ask a question!',
            type: 'A',
            showMe:true,
            parentMessage: 'Parent',
            items:[
                {
                    message:'AAA'
                },
                {
                    message:'BBB'
                }
            ]
        }
    },
    watch: {
        question: function(newQusetion) {
            this.answer = 'Waiting for you to stop typing...';
        }
    },
    methods: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        }
    }
}
</script>


