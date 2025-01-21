<template>
    <div class="container">
        <h1>Главная</h1>
        <Filter @resetFilter="onResetFilter" @getContact="(id) => onGetContactByID(id)" />
        <ContactsList :contacts="filtered.length > 0 ? filtered : contactsStore.contacts" />
    </div>
</template>

<script setup>
    import { useContactsStore } from '~/stores/contacts';
    
    const contactsStore = useContactsStore();
    let contacts = ref([]);
    const filtered = computed(() => {
        return contacts.value
    })
    onBeforeMount(async () => {
        contactsStore.fetchContacts();
    })
    onUpdated(async () => {
        contactsStore.fetchContacts();
    })
    const loading = computed(() => {
        return contactsStore.loading
    })
    function onResetFilter(){
        contacts.value = contactsStore.contacts
    }
    function onGetContactByID(id){
        console.log(contactsStore.getContactByID(id));
        contacts.value = contactsStore.getContactByID(id);
    }

    
</script>