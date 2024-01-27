<template>
    <div id="app">
        <CalculatorPanel></CalculatorPanel>
    </div>
</template>

<script>
import CalculatorPanel from './main/CalculatorPanel'

export default {
    components: { CalculatorPanel }
}
</script>

<style>
    body {
        margin: 0;
    }

    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: #fff;
        background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73));
    }
</style>