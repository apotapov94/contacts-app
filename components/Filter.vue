<template>
    <div class="filter func-block">
        <h3>Фильтр</h3>
        <div class="inputs">
            <div class="input-block">
                <input type="text" placeholder="Имя" v-model="nameInput"
                    @keydown.down="toggleVariant('down')" 
                    @keydown.up="toggleVariant()" 
                    @keydown.enter="setVariant()" 
                    @input="deboundedSearchContacts"
                >
                <ul v-if="search.results.value" class="variants">
                    <li @click="setVariant(contact)" :class="index == activeVariant ? 'active' : ''" v-for="(contact, index) in search.results.value">{{ contact.Name }}</li>
                </ul>
            </div>
            <div @click="resetFilter" class="contacts-item__control-btn btn btn-type-b">Сброс</div>
        </div>
        
    </div>
</template>

<script setup>
    const emit = defineEmits(['getContact', 'resetFilter'])
    const nameInput = ref('');
    let activeVariant = ref(0);
    const search = reactive({ results: [] })
    async function searchContacts(){
        if(nameInput.value !== ''){
            $fetch("/api/contacts-search", {
                method: 'POST',
                body: {
                    term: nameInput.value
                }
            }).then(data=>{
                search.results.value = data;       
            })
        } else {
            search.results.value = [];
        }
        

    }
    function toggleVariant(mode = 'up'){

        if(search.results.value){
            if(mode == 'down'){
                console.log('down')
                if(activeVariant.value < search.results.value.length - 1){
                    activeVariant.value++;
                } else if(activeVariant.value == search.results.value.length - 1){
                    activeVariant.value = 0;
                }
            } else if(mode == 'up') {
                console.log('up')
                if(activeVariant.value > 0){
                    activeVariant.value--;
                } else if(activeVariant.value == 0){
                    activeVariant.value = search.results.value.length - 1;
                }
            }
        }
    }
    function resetFilter(){
        nameInput.value = '';
        search.results.value = [];
        emit('resetFilter')
    }
    function setVariant(contact){
        let curContact;
        if(contact){
            curContact = contact;
        } else{
            curContact = search.results.value[activeVariant.value];
        }
        nameInput.value = curContact.Name;
        emit('getContact', curContact.ID); 
        search.results.value = [];
        console.log(curContact.Name);
        
    }

    function debounce(callee, timeoutMs) {
        return function perform(...args) {
            let previousCall = this.lastCall

            this.lastCall = Date.now()

            if (previousCall && this.lastCall - previousCall <= timeoutMs) {
            clearTimeout(this.lastCallTimer)
            }

            this.lastCallTimer = setTimeout(() => callee(...args), timeoutMs)
        }
    }
    
const deboundedSearchContacts = debounce(searchContacts, 250)

</script>