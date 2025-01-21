<template>
    <div class="form func-block">
        <h3>Добавить контакт</h3>
        <div class="inputs">
            <input type="text" v-model="nameInput" placeholder="Имя">
            <input type="text" v-model="phoneInput" placeholder="Телефон">
            <input type="text" v-model="emailInput" placeholder="Email">
            <button @click="submit" class="btn btn-type-a">Добавить</button>
        </div>
    </div>
</template>

<script setup>
    const emit = defineEmits(['addContact'])

    const nameInput = ref('');
    const phoneInput = ref('');
    const emailInput = ref('');

    function formReset(){
        nameInput.value = '',
        phoneInput.value = '',
        emailInput.value = ''
    }

    function submit(){
        let fields = {
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value
        }
        emit('addContact', fields);
        formReset()
    }

</script>