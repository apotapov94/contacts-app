import { defineStore } from 'pinia'

export const useContactsStore = defineStore('constactsStore', {
    state: () => ({
        contacts: [],
        loading: true
    }),
    actions: {
        async fetchContacts() {
            const data = await $fetch("/api/contacts")  
            if(data){
                this.contacts = data;
            }
            this.setLoading(false);
        },

        setLoading(payload){
            this.loading = payload;
        },
        async addContact(payload){
          this.setLoading(true);
            try {
                $fetch("/api/add-contact", {
                    method: 'POST',
                    body: payload
                }).then(()=>{
                    this.fetchContacts();
                })

            } catch (e) {
                console.log(e)
            }
        },
        async deleteContact(payload){
            this.setLoading(true);
            try {
                $fetch("/api/delete-contact", {
                    method: 'POST',
                    body: {
                        id: payload
                    }
                }).then(()=>{
                    this.fetchContacts();
                })

            } catch (e) {
                this.fetchContacts();
                console.log(e)
            }
        },
        async editContact(payload){
            this.setLoading(true);
            try {
                $fetch("/api/edit-contact", {
                    method: 'POST',
                    body: {
                        id: payload.id,
                        data: payload.data
                    }
                
                }).then(()=>{
                    this.fetchContacts();
                })

                this.setLoading(false);
            } catch (e) {
                
                this.fetchContacts();
                this.setLoading(false);
                console.log(e)
            }
            
          }
    },
    getters: {
        getContactByID: state => id => {
            return state.contacts.filter(contact => contact.ID == id)
        }
    }
})