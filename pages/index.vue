<template>
    <div class="container">
        <h1>Главная</h1>

        <Filter @resetFilter="onResetFilter" @getContact="(id) => onGetContactByID(id)" />
        <AddContactForm @addContact="(fields) => addContact(fields)" />
        <ContactsList :contacts="filtered.value.length > 0 ? filtered.value : contactsStore.contacts" />
    </div>
</template>

<script setup>
    import { useContactsStore } from '~/stores/contacts';
    
    const contactsStore = useContactsStore();
    let contacts = ref(contactsStore.contacts);
    const filtered = computed(() => {
        return contacts
    })
    onBeforeMount(async () => {
        contactsStore.fetchContacts();
    })
    onUpdated(() => {

    })
    const loading = computed(() => {
        return contactsStore.loading
    })
    function onResetFilter(){
        contacts.value = [];
    }
    function onGetContactByID(id){
        contacts.value = contactsStore.getContactByID(id);
    }

    function addContact(fields){
        contactsStore.addContact(fields);
    }
    
</script>