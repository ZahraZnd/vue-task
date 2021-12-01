const app = Vue.createApp({
    data() {
        return {
            firstName: 'Zahra',
            lastName: 'Zandieh',
            email: 'zahraZandieh@gmail.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/women/34.jpg',
        }
    },
    methods: {
        getUser() {
            this.firstName = 'emad'
            this.lastName = 'arabShahi'
            this.email = 'emadArabShahi@gmail.com'
            this.gender = 'male'
            this.picture = 'https://randomuser.me/api/portraits/men/34.jpg'
        },
    },
})
app.mount('#app')
