const app = Vue.createApp({
    data(){
        return {
            firstName: 'Zahra',
            lastName: 'Zandieh',
            email: 'zahraZandieh@gmail.com',
            gender: 'female',
            picture: 'https://randomuser.me/api/portraits/women/34.jpg',
        }
    }
})
app.mount('#app')
