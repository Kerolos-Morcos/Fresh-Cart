<script setup>
import { Field, ErrorMessage } from "vee-validate";

defineProps([
    "name",
    "label",
    "labelClass"
]);
</script>

<template>
    <div>
        <div class="flex items-center gap-2">
            <Field :name="name" :id="name" type="checkbox" :value="true" class="size-4 accent-primary-600 me-2"
                :validate-on-change="true" :validate-on-blur="true" />
            <label :for="name" :class="labelClass">
                <slot>{{ label }}</slot>
            </label>
        </div>
        <ErrorMessage :name="name" class="errorMessage" />
    </div>
</template>
