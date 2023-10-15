<template>
    <div>
        <div class="nodeBody" :class="expended ? 'nodeBodyRotate' : 'nodeBody'" @click="nodeClicked">
            <div>
                <b-icon-gear-wide-connected v-if="node.children" style="margin-left: 15px;"></b-icon-gear-wide-connected>
                <span v-if="layoutClass == 'layoutBody'">
                    {{ node.name
                    }}
                </span>
            </div>
            <b-icon-chevron-left v-if="layoutClass == 'layoutBody' && node.children"></b-icon-chevron-left>
        </div>
        <div v-if="expended">
            <TreeView v-for="child in node.children" :key="child.name" :node="child" :depth="depth + 1"
                :layoutClass="layoutClass" />
        </div>

    </div>
</template>
<style lang="scss" scoped>
.nodeBody {
    width: 100%;
    font-size: 16px;
    margin-bottom: 0px;
    padding: 14px 14px 14px 20px;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:active {
        border-right: 3px solid #1976d2;
        color: #1976d2;

        .b-icon.bi {
            display: inline-block;
            overflow: visible;
            vertical-align: -0.15em;
            color: #1976d2;

        }
    }

    &:hover {

        // border-right: 3px solid #1976d2;
        color: #1976d2;

        .b-icon.bi {
            display: inline-block;
            overflow: visible;
            vertical-align: -0.15em;
            color: #1976d2;

        }
    }

    .b-icon.bi {
        display: inline-block;
        overflow: visible;
        vertical-align: -0.15em;
        color: #607d8b;

    }
}

.nodeBodyRotate {
    width: 100%;
    font-size: 16px;
    margin-bottom: 0px;
    padding: 14px 14px 14px 20px;
    color: white;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-right: 3px solid #1976d2;
    color: #1976d2;

    .b-icon.bi {
        display: inline-block;
        overflow: visible;
        vertical-align: -0.15em;
        color: #1976d2;

    }

    &:hover {

        // border-right: 3px solid #1976d2;
        color: #1976d2;

    }

    .b-icon.bi {
        display: inline-block;
        overflow: visible;
        vertical-align: -0.15em;
        transform: rotate(-90deg);
        color: #607d8b;
    }
}
</style>
<script setup>
import TreeView from './treeView.vue';
import { ref } from 'vue'
const props = defineProps({
    layoutClass: String,
    node: Object,
    depth: {
        type: Number,
        default: 0
    }
});
var expended = ref(false);
const nodeClicked = () => {
    expended.value = !expended.value
}
</script>