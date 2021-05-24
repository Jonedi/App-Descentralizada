<template>
    <v-container>
        <h1 class="text-center  mt-10 my-5">{{ title }}</h1>
        <div class="form-contact">
            <validation-observer
                ref="observer"
                v-slot="{ invalid }"
            >
                <form class="f-contact" @submit.prevent="submit">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Nombre"
                        rules="required|max:15"
                        class="d-flex flex-row"
                    >
                        <v-text-field
                            v-model="contact.name"
                            :counter="15"
                            :error-messages="errors"
                            label="Nombre *"
                            required
                        ></v-text-field>
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="email"
                        rules="required|email"
                        class="d-flex flex-row"
                    >
                        <v-text-field
                            v-model="contact.email"
                            :error-messages="errors"
                            label="Email *"
                            required
                        ></v-text-field>
                    </validation-provider>
                    <validation-provider
                        name="message"
                        class="d-flex flex-row align-start"
                    >
                        <v-textarea label="Mensaje" rows="3" v-model="contact.message"></v-textarea>
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        rules="required"
                        name="checkbox"
                    >
                        <v-checkbox
                            v-model="contact.checkbox"
                            :error-messages="errors"
                            value="1"
                            label="Acepto los términos y condiciones"
                            type="checkbox"
                            required
                        ></v-checkbox>
                    </validation-provider>
                    <div class="btn-form">
                        <v-btn
                            class="mr-4 btn-submit"
                            type="submit"
                            :disabled="invalid"
                        >
                            Enviar
                        </v-btn>
                    </div>
                    <v-alert v-model="alert.state" class="text-center mt-6" :color="alert.color" dark dismissible>
                        {{ alert.message }}
                    </v-alert>
                </form>
            </validation-observer>
            <Metamask />
        </div>
    </v-container>
</template>

<script>
import { required, email, max } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
// import emailjs from 'emailjs-com';
import Metamask from '@/components/Metamask'

setInteractionMode('eager')

extend('required', {
    ...required,
    message: 'El campo {_field_} no puede estar vacío',
})

extend('max', {
    ...max,
    message: '{_field_} No puede tener más de {length} caracteres',
})

extend('email', {
    ...email,
    message: 'Formato de email inválido',
})

export default {
    name: 'SectionHomesStart',
    components: {
        ValidationProvider,
        ValidationObserver,
        Metamask
    },
    data() {
        return {
            title: 'Formulario',
            contact: {
                name: '',
                email: '',
                message: '',
                checkbox: null,
            },
            alert: {
                state: false,
                color: '',
                message: ''
            },
            message: {
                sendSuccess: '* El mensaje ha sido enviado exitosamente',
                sendError: 'No se pudo enviar el mensaje. Vuelve a intentarlo más tarde'
            }
        }
    },
    methods: {
        submit () {
            this.save()
            this.$refs.observer.validate()
        },
        clear () {
            this.name = ''
            this.email = ''
            this.message = ''
            this.checkbox = null
            this.$refs.observer.reset()
        },
    },
    save() {
        this.$refs.observer.validate()
        const templateParams = {
            name: this.contact.name,
            email: this.contact.email,
            phone: this.contact.phone,
            message: this.contact.message
        }
        console.log(templateParams)
        /* emailjs.send('test-service-form','template_beM0usX_testEAL', templateParams, 'user_S1ObAl4R8cizX7FosG2ol')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.templateParams);
            this.alert = {
                state: true,
                color: 'success',
                message: `${this.message.sendSuccess}`
            }
        }, (err) => {
            console.log('FAILED...', err);
            this.alert = {
                state: true,
                color: 'error',
                message: `${this.message.sendError} + codigo + ${err}`
            }
        }); */
    }
}
</script>

<style lang="scss">
.form-contact {
    margin: auto;
    width: 50%;
}
</style>