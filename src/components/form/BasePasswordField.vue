<script setup>
import { Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import ShowHidePassword from "../register/ShowHidePassword.vue";
import PasswordStrength from "../register/PasswordStrength.vue";

const props = defineProps([
    "name",
    "label",
    "placeholder",
    "showStrength",
    "showIcon",
    "modelValue",
    "inputClass",
    "gap"
]);

const emit = defineEmits(["update:modelValue"]);

const showPassword = ref(false);

const togglePassword = () => {
    showPassword.value = !showPassword.value;
};

const handleInput = (e, field) => {
    field.onChange(e);
    emit("update:modelValue", e.target.value);
};
</script>

<template>
    <div class="flex flex-col" :class="gap ? `gap-${gap}` : 'gap-2'">
        <label :for="name">{{ label }}</label>
        <Field :name="name" :validate-on-input="true" :validate-on-blur="true" v-slot="{ field }">
            <div class="relative">
                <slot name="icon" />
                <input :id="name" :type="showPassword ? 'text' : 'password'" :placeholder="placeholder"
                    :value="field.value" class="form-control w-full" @input="(e) => handleInput(e, field)"
                    @blur="field.onBlur" :class="inputClass" @copy.prevent @cut.prevent @paste.prevent
                    @contextmenu.prevent />
                <div class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer" v-if="field.value"
                    @click="togglePassword">
                    <ShowHidePassword :showPassword="showPassword" :field="field" v-if="showStrength || showIcon" />
                </div>
            </div>
            <PasswordStrength v-if="showStrength" :password="field.value" />
        </Field>
        <ErrorMessage :name="name" class="errorMessage" />
    </div>
</template>