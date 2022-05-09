
<template>
    <h1>test</h1>
</template>

<script lang="ts">
import { setError, setIsLoading } from "@/mixins";

export default {
    name: "AboutView",
    mixins: [setError, setIsLoading],
    created: function () {
        this.setLoading(true)
        this.getTestError()
    },
    data: () => ({
        getDataApiTest: null
    }),
    methods: {
        async getTestError() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/dadsa');
                const errorJson = await response.json();
                this.getDataApiTest = errorJson;

                this.setLoading(false);
            } catch (err) {
                console.error(err);
                console.log({ err });
                const error = {
                    routeParams: this.$route.params,
                    message: err.message,
                    data: "este es un error de prueba desde about",
                    status: this.$route.status,
                }

                this.setApiErr(error)
                this.$router.push({ name: 'Error' })
                this.setLoading(false);
            }
        },
    }
}
</script>