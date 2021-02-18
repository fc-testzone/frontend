var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    },
    async created() {
        const { data } = await axios.get('https://localhost:8080');
    }
})
