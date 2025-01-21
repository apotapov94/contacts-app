<template>
    <div v-if="editMode == true" class="contacts-item active">
        <div class="contacts-item__cell contacts-item__id">{{contact.ID}}</div>
        <div class="contacts-item__cell contacts-item__name"><input v-model="fields.name" :placeholder="contact.Name"></div>
        <div class="contacts-item__cell contacts-item__phone"><input v-model="fields.phone" :placeholder="contact.Phone"></div>
        <div class="contacts-item__cell contacts-item__email"><input v-model="fields.email" :placeholder="contact.Email"></div>
        <div class="contacts-item__cell contacts-item__controls">
            <div @click="saveChanges" class="contacts-item__control-btn btn btn-type-a">Сохранить</div>
        </div>
    </div>
    <div v-else class="contacts-item">
        <div class="contacts-item__cell contacts-item__id">{{contact.ID}}</div>
        <div class="contacts-item__cell contacts-item__name">{{contact.Name}}</div>
        <div class="contacts-item__cell contacts-item__phone">{{contact.Phone}}</div>
        <div class="contacts-item__cell contacts-item__email">{{contact.Email}}</div>
        <div class="contacts-item__cell contacts-item__controls">
            <div @click="changeEditMode()" class="contacts-item__control-btn btn btn-type-b">Редактировать</div>
            <div @click="$emit('deleteItem', contact.ID)" class="contacts-item__control-btn btn btn-type-c">Удалить</div>
        </div>
    </div>
</template>

<script setup>
    
    const emit = defineEmits(['saveChanges'])
    let editMode = ref(false);

    const props = defineProps({
        contact: Object
    })


    function changeEditMode(){
        editMode.value = true;
    }
    function saveChanges(){
        emit('saveChanges', {id: props.contact.ID, data: fields});
        editMode.value = false;
    }
    

    const fields = reactive({ 
        name: props.contact.Name,
        phone: props.contact.Phone,
        email: props.contact.Email
    })
</script>

