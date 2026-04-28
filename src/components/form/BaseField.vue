<script setup>
import { Field, ErrorMessage } from "vee-validate";

const props = defineProps([
    "name",
    "label",
    "type",
    "placeholder",
    "id",
    "inputClass",
    "gap",
    "as"
]);
</script>

<template>
    <div class="flex flex-col" :class="gap ? `gap-${gap}` : 'gap-2'">
        <label :for="id || name">
            {{ label }}
        </label>
        <div class="relative w-full">
            <Field :as="as || 'input'" :name="name" :validate-on-input="true" :validate-on-blur="true"
                :type="type || 'text'" :id="id || name" :placeholder="placeholder" class="form-control w-full m-0"
                :class="inputClass" />
            <slot name="icon" />
        </div>
        <ErrorMessage :name="name" class="errorMessage" />
    </div>
</template>
