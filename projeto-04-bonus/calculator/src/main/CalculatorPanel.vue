<template>
    <div class="calculator">
        <DisplayPanel :value="displayValue" />
        <ButtonPanel label="AC" triple @onClick="clearMemory"/>
        <ButtonPanel label="/" operation @onClick="setOperation"/>
        <ButtonPanel label="7" @onClick="addDigit"/>
        <ButtonPanel label="8" @onClick="addDigit"/>
        <ButtonPanel label="9" @onClick="addDigit"/>
        <ButtonPanel label="*" operation @onClick="setOperation"/>
        <ButtonPanel label="4" @onClick="addDigit"/>
        <ButtonPanel label="5" @onClick="addDigit"/>
        <ButtonPanel label="6" @onClick="addDigit"/>
        <ButtonPanel label="-" operation @onClick="setOperation"/>
        <ButtonPanel label="1" @onClick="addDigit"/>
        <ButtonPanel label="2" @onClick="addDigit"/>
        <ButtonPanel label="3" @onClick="addDigit"/>
        <ButtonPanel label="+" operation @onClick="setOperation"/>
        <ButtonPanel label="0" double @onClick="addDigit"/>
        <ButtonPanel label="." @onClick="addDigit"/>
        <ButtonPanel label="=" operation @onClick="setOperation"/>
        </div>
</template>

<script>
import DisplayPanel from '../components/DisplayPanel.vue'
import ButtonPanel from '../components/ButtonPanel.vue'

export default {
    data: function(){
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    components: { DisplayPanel, ButtonPanel},
    methods: {
        clearMemory(){
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation){
            if(this.current === 0){
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                try {
                    this.value[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch(e){
                    this.$emit('onError', e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        
        },
        addDigit(n){
            if(n === "."  && this.displayValue.includes(".")){
                return
            }
            const clearDisplay = this.displayValue === "0" || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false

            if(n !== "."){
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4,25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>