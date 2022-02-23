(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{399:function(e,t,r){"use strict";r.r(t);var o=r(54),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"生命周期"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("生命周期钩子")]),e._v(" "),r("th",[e._v("组件状态")]),e._v(" "),r("th",[e._v("最佳实践")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("beforeCreate")]),e._v(" "),r("td",[e._v("实例初始化之后，this指向创建的实例，不能访问到data、computed、watch、methods上的方法和数据")]),e._v(" "),r("td",[e._v("常用于初始化非响应式变量")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("created")])]),e._v(" "),r("td",[e._v("实例创建完成，可访问data、computed、watch、methods上的方法和数据，未挂载到DOM，不能访问到$el属性，$ref属性内容为空数组")]),e._v(" "),r("td",[e._v("常用于简单的ajax请求，页面的初始化")])]),e._v(" "),r("tr",[r("td",[e._v("beforeMount")]),e._v(" "),r("td",[e._v("在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数")]),e._v(" "),r("td",[e._v("–            dom渲染的过程中不建议做任何操作")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("mounted")])]),e._v(" "),r("td",[e._v("实例挂载到DOM上，此时可以通过DOM API获取到DOM节点，$ref属性可以访问")]),e._v(" "),r("td",[e._v("常用于获取VNode信息和操作，ajax请求")])]),e._v(" "),r("tr",[r("td",[e._v("beforeupdate")]),e._v(" "),r("td",[e._v("响应式数据更新时调用，发生在虚拟DOM打补丁之前")]),e._v(" "),r("td",[e._v("适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器")])]),e._v(" "),r("tr",[r("td",[e._v("updated")]),e._v(" "),r("td",[e._v("虚拟 DOM 重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作")]),e._v(" "),r("td",[e._v("避免在这个钩子函数中操作数据，可能陷入死循环")])]),e._v(" "),r("tr",[r("td",[r("strong",[e._v("beforeDestroy")])]),e._v(" "),r("td",[e._v("实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例")]),e._v(" "),r("td",[e._v("常用于销毁定时器、解绑全局事件、销毁插件对象等操作")])]),e._v(" "),r("tr",[r("td",[e._v("destroyed")]),e._v(" "),r("td",[e._v("实例销毁后调用，调用后，Vue 实例的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁")]),e._v(" "),r("td",[e._v("–            实例已销毁，什么操作都无效")])])])]),e._v(" "),r("p",[e._v("注意：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("created阶段的ajax请求与mounted请求的区别：前者页面视图未出现，如果请求信息过多，页面会长时间处于白屏状态")])]),e._v(" "),r("li",[r("p",[e._v("不论是created还是beforeMount在它们里面都拿不到真实的dom元素，如果我们需要拿到dom元素就需要在mounted里操作")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("mounted")]),e._v(" 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 "),r("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#vm-nextTick",target:"_blank",rel:"noopener noreferrer"}},[e._v("vm.$nextTick"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("vue2.0之后主动调用$destroy()不会移除dom节点，作者不推荐直接destroy这种做法，如果实在需要这样用可以在这个生命周期钩子中手动移除dom节点")])]),e._v(" "),r("li",[r("p",[e._v("单个组件的生命周期")]),e._v(" "),r("p",[e._v("现根据实际代码执行情况分析：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<template>\n    <div>\n        <h3>单组件</h3>\n        <el-button @click="dataVar += 1">更新 {{dataVar}}</el-button>\n        <el-button @click="handleDestroy">销毁</el-button>\n    </div>\n</template>\n')])])]),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("export default {\n    data() {\n        return {\n            dataVar: 1\n        }\n    },\n    beforeCreate() {\n        this.compName = 'single'\n        console.log(`--${this.compName}--beforeCreate`)\n    },\n    created() {\n        console.log(`--${this.compName}--created`)\n    },\n    beforeMount() {\n        console.log(`--${this.compName}--beforeMount`)\n    },\n    mounted() {\n        console.log(`--${this.compName}--mounted`)\n    },\n    beforeUpdate() {\n        console.log(`--${this.compName}--beforeUpdate`)\n    },\n    updated() {\n        console.log(`--${this.compName}--updated`)\n    },\n    beforeDestroy() {\n        console.log(`--${this.compName}--beforeDestroy`)\n    },\n    destroyed() {\n        console.log(`--${this.compName}--destroyed`)\n    },\n    methods: {\n        handleDestroy() {\n            this.$destroy()\n        }\n    }\n}\n")])])]),r("p",[e._v("初始化组件时，打印：")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://jbcdn2.b0.upaiyun.com/2018/05/2280d01558e6ce57a6a1385360aa0744.jpg",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/6/16333e19bf357e3c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"2361995336-5aea7b8899cd4_articlex"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("当data中的值变化时，打印：")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://jbcdn2.b0.upaiyun.com/2018/05/8c152308ef2d677657e91928679631e2.jpg",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/6/16333e19bf4edd96?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"1592752065-5aea7ba6a829c_articlex"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("当组件销毁时，打印：")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://jbcdn2.b0.upaiyun.com/2018/05/173365fa67312dde8bcadca9ba095b8b.jpg",target:"_blank",rel:"noopener noreferrer"}},[r("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/5/6/16333e19bee46555?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"2939449070-5aea7bb20d1ef_articlex"}}),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("从打印结果可以看出:")]),e._v(" "),r("ol",[r("li",[e._v("初始化组件时，仅执行了beforeCreate/Created/beforeMount/mounted四个钩子函数")]),e._v(" "),r("li",[e._v("当改变data中定义的变量（响应式变量）时，会执行beforeUpdate/updated钩子函数")]),e._v(" "),r("li",[e._v("当切换组件（当前组件未缓存）时，会执行beforeDestory/destroyed钩子函数")]),e._v(" "),r("li",[r("strong",[e._v("初始化和销毁时的生命钩子函数均只会执行一次，beforeUpdate/updated可多次执行")])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);