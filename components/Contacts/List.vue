<template>
    
    
    <div class="contacts-list">
        <div class="contacts-item contacts-list__head">
            <div class="contacts-item__cell contacts-item__id">ID</div>
            <div class="contacts-item__cell contacts-item__name">Имя</div>
            <div class="contacts-item__cell contacts-item__phone">Телефон</div>
            <div class="contacts-item__cell contacts-item__email">Email</div>
        </div>
        <ContactsItem 
            @saveChanges="(data) => contactsStore.editContact(data)"
            @deleteItem="(id) => contactsStore.deleteContact(id)" v-if="contacts" v-for="contact in contacts" :contact="contact" />
    </div>
    
</template>

<script setup>
    import { useContactsStore } from '~/stores/contacts';
    
    const contactsStore = useContactsStore();

    const props = defineProps({
        contacts: Array
    })
</script>