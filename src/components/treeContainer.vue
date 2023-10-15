<template>
    <div>
        <div class="menuBody">
            <h5 v-if="layoutClass == 'layoutBody'" class="mt-4">عمومی</h5>
        </div>
        <div class="menu">
            <TreeView :node="treeData" :layoutClass="layoutClass" />
            <div class="logOut">
                <b-icon-box-arrow-right></b-icon-box-arrow-right><span v-if="layoutClass == 'layoutBody'"> خروج </span>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.menuBody {
    display: flex;
    width: 100%;

    h5 {
        width: 100%;
        font-size: 16px;
        margin-bottom: 0px;
        padding: 14px 14px 14px 20px;
        color: white;
        font-weight: 500;
        margin-top: 10px;
    }
}

.menu {
    padding: 14px 14px 14px 20px;
    color: #ffffff;

    .logOut {
        padding: 14px 14px 14px 20px;
        color: #607d8b;
        display: flex;
        align-items: center;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;

        span {
            color: white;
            margin-right: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 5px;
        }

        &:active {
            border-right: 3px solid #1976d2;
            color: #1976d2;

            span {
                color: #1976d2;
                margin-right: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 5px;
            }

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

            span {
                color: #1976d2;
                margin-right: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 5px;
            }

            .b-icon.bi {
                display: inline-block;
                overflow: visible;
                vertical-align: -0.15em;
                color: #1976d2;

            }
        }

    }
}
</style>
<script setup>
import TreeView from './treeView.vue';
import { ref } from 'vue'
const props = defineProps({
    layoutClass: String,
});
const treeData = ref({
    name: 'فایل ها',
    children: [
        { name: "فایل ها" },
        {
            name: "child2"
        },
        {
            name: "child3",
            children: [
                {
                    name: "sub child"
                }
            ]
        }
    ]
},
    {

    })
</script>
