<script setup>
import { useAPI } from '@/composables/useAPI';
import Dialog from 'primevue/dialog';
import { nextTick, ref, watch } from 'vue';
import { addressesSchema } from '@/validations/adressesSchema.js';
import BaseField from '../form/BaseField.vue';
import { Form } from 'vee-validate';

const props = defineProps({
    visible: Boolean,
    mode: { type: String, default: 'add' },
    data: { type: Object, default: () => ({}) }
});

const emit = defineEmits(['update:visible', 'submit-success']);
const { fetchData } = useAPI();
const formRef = ref(null);

watch(() => props.visible, (newVal) => {
    if (!newVal) return;
    if (props.mode === 'edit' && props.data) {
        nextTick(() => {
            formRef.value?.setValues({
                name: props.data.name || '',
                details: props.data.details || '',
                phone: props.data.phone || '',
                city: props.data.city || '',
            });
        });
    } else {
        nextTick(() => {
            formRef.value?.resetForm();
        });
    }
});

async function handleSubmit(values) {
    if (props.mode === 'edit') {
        await fetchData({ url: `/v1/addresses/${props.data._id}`, method: 'delete' });
        const res = await fetchData({ url: '/v1/addresses', method: 'post', data: values });
        emit('submit-success', {
            mode: 'edit',
            oldId: props.data._id,
            addresses: res?.data
        });
    } else {
        const res = await fetchData({ url: '/v1/addresses', method: 'post', data: values });
        emit('submit-success', { mode: 'add', addresses: res?.data });
    }
    emit('update:visible', false);
}
</script>

<template>
    <Dialog :visible="visible" @update:visible="val => emit('update:visible', val)" modal :unstyled="visible"
        :dismissable-mask="true" :pt="{
            root: { class: 'w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden' },
            mask: { class: 'bg-black/50 backdrop-blur-sm flex items-center justify-center p-4' },
            headerActions: { class: 'hidden' },
        }">
        <!-- HEADER -->
        <template #header>
            <div class="flex items-center justify-between w-full px-7 pt-7">
                <h2 class="text-xl font-bold text-gray-900">
                    {{ props.mode === 'edit' ? 'Edit Address' : 'Add New Address' }}
                </h2>
                <button @click="emit('update:visible', false)"
                    class="cursor-pointer w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors">
                    ✕
                </button>
            </div>
        </template>
        <!-- CONTENT -->
        <div class="p-6 sm:p-8 pt-0">
            <Form ref="formRef" @submit="handleSubmit" :validation-schema="addressesSchema" class="space-y-5">
                <!-- Address Name -->
                <BaseField name="name" label="Address Name" placeholder="e.g. Home, Office" />
                <!-- Full Address -->
                <BaseField name="details" label="Full Address" placeholder="Street, building, apartment..."
                    as="textarea" inputClass="min-h-[100px] resize-none" />
                <!-- Phone and City -->
                <div class="grid grid-cols-2 gap-4">
                    <BaseField name="phone" label="Phone Number" type="tel" placeholder="01xxxxxxxxx" />
                    <BaseField name="city" label="City" placeholder="Cairo" />
                </div>
                <!-- ACTIONS -->
                <div class="flex items-center gap-3 pt-4">
                    <button type="button" @click="emit('update:visible', false)"
                        class="cursor-pointer flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors">
                        Cancel
                    </button>
                    <button type="submit"
                        class="cursor-pointer flex-1 py-3 px-6 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25">
                        {{ props.mode === 'edit' ? 'Save Changes' : 'Add Address' }}
                    </button>
                </div>
            </Form>
        </div>
    </Dialog>
</template>

<style scoped></style>