<template>
    <div>
        <div
                id="on"
                @click="switched(true)"
                :class="{active: value}"
                data-toggle="tooltip" data-placement="top" title="Wypełnij w przypadku firmy"
                
                >Firma
                </div>
        <div
                id="off"
                @click="switched(false)"
                :class="{active: !value}"
                data-toggle="tooltip" data-placement="top" title="Wypełnij w przypadku osoby prywatnej"
                >Osoba prywatna</div>
    </div>
</template>

<script>
    export default {
            props: ['value'],
            methods: {
                switched(isOn) {
                    this.$emit('input', isOn);

                }
            }
        
    }
</script>

<style scoped>
    #on, #off {
        width: 300px;
        height: 20px;
        background-color: rgb(224, 223, 223);
        padding: 2px;
        display: inline-block;
        margin: 10px -2px;
        box-sizing: content-box;
        cursor: pointer;
        text-align: center;
    }

    #on:hover, #on.active {
        background-color: rgb(119, 114, 179);
    }

    #off:hover, #off.active {
        background-color: rgb(119, 114, 179);
    }
</style>