(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(3),s=a(9),i=a.n(s),c=a(2),o=a(1),r=a(4),l=a(5),u=a(7),d=a(6),k=a(25),f=a(26),m=(a(14),a(0)),j=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).changeNewTask=function(e){if("1"===e.id)t.setState({textNewTask:e.value});else if("2"===e.id)t.setState({minNewTask:e.value});else{if("3"!==e.id)return;t.setState({secNewTask:e.value})}},t.state={textNewTask:"",minNewTask:"",secNewTask:""},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.addTask,a=this.state,n=a.textNewTask,s=a.minNewTask,i=a.secNewTask,c=function(a){if("Enter"===a.key){var c=60*Number(s)*1e3+1e3*Number(i);if(Number(s)>59||Number(i)>59)return;e(n,c),t.setState({textNewTask:"",minNewTask:"",secNewTask:""})}};return Object(m.jsxs)("header",{className:"header",children:[Object(m.jsx)("h1",{children:"todos"}),Object(m.jsxs)("form",{className:"new-todo-form",children:[Object(m.jsx)("input",{id:1,className:"new-todo",placeholder:"Task",onChange:function(e){return t.changeNewTask(e.target)},onKeyDown:function(t){return c(t)},value:n}),Object(m.jsx)("input",{id:2,class:"new-todo-form__timer",placeholder:"Min",onChange:function(e){return t.changeNewTask(e.target)},onKeyDown:function(t){return c(t)},value:s}),Object(m.jsx)("input",{id:3,class:"new-todo-form__timer",placeholder:"Sec",onChange:function(e){return t.changeNewTask(e.target)},onKeyDown:function(t){return c(t)},value:i})]})]})}}]),a}(n.Component);j.defaultProps={addTask:function(){}};var b=j,O=(a(16),function(t){var e,a=t.description,n=t.created,s=t.onClickTask,i=t.onClickDestroy,c=t.onClickEdit,o=t.view,r=t.id,l=t.completed,u=t.timeWork,d=t.sumTimeWork,k=t.onClickPlay,f=t.onClickPause;e="completed"===l;var j=function(t){var e=parseInt(t/1e3%60),a=parseInt(t/6e4%60);return e=e<10?"0"+e:e,"".concat(a=a<10?"0"+a:a,":").concat(e)}(u+d);return Object(m.jsxs)("div",{className:o,children:[Object(m.jsx)("input",{id:r,className:"toggle",type:"checkbox",checked:e,onChange:s}),Object(m.jsxs)("label",{htmlFor:r,children:[Object(m.jsx)("span",{className:"title",children:a}),Object(m.jsxs)("span",{className:"description",children:[Object(m.jsx)("button",{className:"icon icon-play",onClick:k}),Object(m.jsx)("button",{className:"icon icon-pause",onClick:f}),Object(m.jsx)("span",{className:"time",children:j})]}),Object(m.jsx)("span",{className:"description",children:n})]}),Object(m.jsx)("button",{type:"button",className:"icon icon-edit",onClick:c}),Object(m.jsx)("button",{type:"button",className:"icon icon-destroy",onClick:i})]})});O.defaultProps={description:"",created:"",onClickTask:function(){},onClickDestroy:function(){},onClickEdit:function(){},view:"view",id:0};var p=O,v=(a(17),function(t){var e=t.tasks,a=t.completedTask,n=t.deleteTask,s=t.editTask,i=t.changeEditTask,c=t.handlingEventEdit,o=t.value,r=t.workTaskPlay,l=t.workTaskPause,u=o.text,d=o.id,k=e.map((function(t){var e;return e=d===t.id?u:t.description,Object(m.jsxs)("li",{className:t.class,children:[Object(m.jsx)(p,{description:t.description,created:t.created,onClickTask:function(){return a(t.id)},onClickDestroy:function(){return n(t.id)},onClickEdit:function(){return s(t.id)},view:t.view,id:t.id,completed:t.class,timeWork:t.timeWorkTask,sumTimeWork:t.sumTimeWorkTask,onClickPlay:function(){return r(t.id)},onClickPause:function(){return l(t.id)}}),Object(m.jsx)("input",{type:"text",className:"edit",value:e,onChange:function(e){return i(e.target.value,t.id)},onKeyDown:function(e){return c(e,t.id)},onFocus:function(e){return i(e.target.value,t.id)}},t.id)]},t.id)})),f=Object(m.jsx)("div",{className:"massage",children:"There's no task yet"});return Object(m.jsx)("ul",{className:"todo-list",children:0===e.length?f:k})});v.defaultProps={tasks:[],completedTask:function(){},deleteTask:function(){},editTask:function(){},changeEditTask:function(){},handlingEventEdit:function(){},value:{text:"",id:null}};var h=v,T=(a(18),function(t){var e=t.onClickActive,a=t.onClickCompleted,n=t.onClickAll,s=t.buttonSelected;return Object(m.jsxs)("ul",{className:"filters",children:[Object(m.jsx)("li",{children:Object(m.jsx)("button",{type:"button",className:s[0].class,id:s[0].id,onClick:function(){return n(s[0].id)},children:"All"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{type:"button",className:s[1].class,id:s[1].id,onClick:function(){return e(s[1].id)},children:"Active"})}),Object(m.jsx)("li",{children:Object(m.jsx)("button",{type:"button",className:s[2].class,id:s[2].id,onClick:function(){return a(s[2].id)},children:"Completed"})})]})});T.defaultProps={onClickActive:function(){},onClickCompleted:function(){},onClickAll:function(){},buttonSelected:[{class:"selected",id:0},{class:"",id:1},{class:"",id:2}]};var C=T,N=(a(19),function(t){var e=t.tasks,a=t.buttons,n=t.filtrationActiveTask,s=t.filtrationCompletedTask,i=t.filtrationAllTask,c=t.deleteCompletedTasks,o=e.filter((function(t){return"completed"===t.class})).length,r=e.length-o;return Object(m.jsxs)("footer",{className:"footer",children:[Object(m.jsxs)("span",{className:"todo-count",children:[r," ","items left"]}),Object(m.jsx)(C,{onClickActive:n,onClickCompleted:s,onClickAll:i,buttonSelected:a}),Object(m.jsx)("button",{type:"button",className:"clear-completed",onClick:c,children:"Clear completed"})]})});N.defaultProps={tasks:[],filtrationActiveTask:function(){},filtrationCompletedTask:function(){},filtrationAllTask:function(){},buttons:[],deleteCompletedTasks:function(){}};var x=N,D=(a(20),a(21)),w=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;return Object(r.a)(this,a),(t=e.call(this)).state={taskData:[],buttonData:[{class:"selected",id:Object(f.a)()},{class:"",id:Object(f.a)()},{class:"",id:Object(f.a)()}],taskEdit:{}},t.status={COMPLETED:"completed",EDITING:"editing",VIEW:"view"},t.completedItem=function(e){t.setState((function(a){var n=a.taskData,s=n.findIndex((function(t){return t.id===e})),i=D({completed:!(n[s].class===t.status.COMPLETED)}),r=n[s],l=Object(o.a)(Object(o.a)({},r),{},{class:i}),u=[].concat(Object(c.a)(n.slice(0,s)),[l],Object(c.a)(n.slice(s+1)));return localStorage.setItem("tasks",JSON.stringify(u)),{taskData:u}}))},t.deleteItem=function(e){t.setState((function(t){var a=t.taskData.filter((function(t){return t.id!==e}));return localStorage.setItem("tasks",JSON.stringify(a)),{taskData:a}}))},t.editItem=function(e){t.setState((function(a){var n=a.taskData,s=n.findIndex((function(t){return t.id===e})),i=D({editing:!(n[s].class===t.status.EDITING)}),r=n[s],l=Object(o.a)(Object(o.a)({},r),{},{class:i});return{taskData:[].concat(Object(c.a)(n.slice(0,s)),[l],Object(c.a)(n.slice(s+1)))}}))},t.addItem=function(e,a){if(0!==e.length){var n=t.createItem(e,a);t.setState((function(t){var e=t.taskData,a=[].concat(Object(c.a)(e),[n]);return localStorage.setItem("tasks",JSON.stringify(a)),{taskData:a}}))}},t.filtrationActiveItem=function(e){t.setState((function(e){var a=e.taskData;return{taskData:Object(c.a)(a).map((function(e){var a=D({view:!(e.class===t.status.COMPLETED)},{hidden:e.class===t.status.COMPLETED});return Object(o.a)(Object(o.a)({},e),{},{view:a})}))}})),t.selectedButton(e)},t.filtrationCompletedItem=function(e){t.setState((function(e){var a=e.taskData;return{taskData:Object(c.a)(a).map((function(e){var a=D({view:e.class===t.status.COMPLETED},{hidden:!(e.class===t.status.COMPLETED)});return Object(o.a)(Object(o.a)({},e),{},{view:a})}))}})),t.selectedButton(e)},t.filtrationAllItem=function(e){t.setState((function(e){var a=e.taskData;return{taskData:Object(c.a)(a).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{view:t.status.VIEW})}))}})),t.selectedButton(e)},t.deleteCompletedItems=function(){t.setState((function(e){var a=e.taskData,n=Object(c.a)(a).filter((function(e){return e.class!==t.status.COMPLETED}));return localStorage.setItem("tasks",JSON.stringify(n)),{taskData:n}}))},t.editTask=function(e,a){t.setState({taskEdit:{text:e,id:a}})},t.eventEdit=function(e,a){if("Enter"===e.key){var n=t.state.taskEdit.text;t.setState((function(t){var e=t.taskData,s=e.findIndex((function(t){return t.id===a})),i=e[s],r=Object(o.a)(Object(o.a)({},i),{},{class:"",description:n}),l=[].concat(Object(c.a)(e.slice(0,s)),[r],Object(c.a)(e.slice(s+1)));return localStorage.setItem("tasks",JSON.stringify(l)),{taskData:l}}))}},t.workItemPlay=function(e){var a=Date.now();t.id=setInterval((function(){t.delta=Date.now()-a,t.setState((function(a){var n=a.taskData,s=n.findIndex((function(t){return t.id===e})),i=n[s],r=Object(o.a)(Object(o.a)({},i),{},{timeWorkTask:t.delta}),l=[].concat(Object(c.a)(n.slice(0,s)),[r],Object(c.a)(n.slice(s+1)));return localStorage.setItem("tasks",JSON.stringify(l)),{taskData:l}}))}),1e3)},t.workItemPause=function(e){t.setState((function(a){var n=a.taskData,s=n.findIndex((function(t){return t.id===e})),i=n[s],r=i.sumTimeWorkTask+t.delta,l=Object(o.a)(Object(o.a)({},i),{},{sumTimeWorkTask:r,timeWorkTask:0}),u=[].concat(Object(c.a)(n.slice(0,s)),[l],Object(c.a)(n.slice(s+1)));return localStorage.setItem("tasks",JSON.stringify(u)),{taskData:u}})),clearInterval(t.id)},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("tasks"),e=JSON.parse(t);this.setState((function(t){t.taskData;return{taskData:e}}))}},{key:"componentWillUnmount",value:function(){localStorage.setItem("tasks",JSON.stringify(this.state.taskData))}},{key:"createItem",value:function(t,e){return{class:"",description:t,view:"view",created:Object(k.a)(new Date,{includeSeconds:!0}),id:Object(f.a)(),timeWorkTask:0,sumTimeWorkTask:e}}},{key:"selectedButton",value:function(t){this.setState((function(e){var a=e.buttonData;return{buttonData:Object(c.a)(a).map((function(e){var a=D({selected:e.id===t},{"":!(e.id===t)});return Object(o.a)(Object(o.a)({},e),{},{class:a})}))}}))}},{key:"render",value:function(){var t=this.state.taskData,e=this.state.taskEdit,a=this.state.buttonData;return Object(m.jsxs)("section",{className:"todoapp",children:[Object(m.jsx)(b,{addTask:this.addItem}),Object(m.jsxs)("section",{className:"main",children:[Object(m.jsx)(h,{tasks:t,completedTask:this.completedItem,deleteTask:this.deleteItem,editTask:this.editItem,changeEditTask:this.editTask,handlingEventEdit:this.eventEdit,value:e,workTaskPlay:this.workItemPlay,workTaskPause:this.workItemPause}),Object(m.jsx)(x,{tasks:t,filtrationActiveTask:this.filtrationActiveItem,filtrationCompletedTask:this.filtrationCompletedItem,filtrationAllTask:this.filtrationAllItem,buttons:a,deleteCompletedTasks:this.deleteCompletedItems})]})]})}}]),a}(n.Component);i.a.render(Object(m.jsx)(w,{}),document.getElementById("app"))}],[[22,1,2]]]);
//# sourceMappingURL=main.9e8ab733.chunk.js.map