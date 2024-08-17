(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[822,367],{7965:function(e,n,t){"use strict";var o=t(6426),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,a,i,l,c,d,u=!1;n||(n={}),t=n.debug||!1;try{if(i=o(),l=document.createRange(),c=document.getSelection(),(d=document.createElement("span")).textContent=e,d.ariaHidden="true",d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(o){if(o.stopPropagation(),n.format)if(o.preventDefault(),void 0===o.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=r[n.format]||r.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(n.format,e);n.onCopy&&(o.preventDefault(),n.onCopy(o.clipboardData))})),document.body.appendChild(d),l.selectNodeContents(d),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(s){t&&console.error("unable to copy using execCommand: ",s),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),u=!0}catch(s){t&&console.error("unable to copy using clipboardData: ",s),t&&console.error("falling back to prompt"),a=function(e){var n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),d&&document.body.removeChild(d),i()}return u}},1004:function(e,n,t){"use strict";t.r(n);var o=t(6540),r=t(9399);n.default=()=>{const{0:e,1:n}=(0,o.useState)('\n    `timescale 1ns/1ps\n    module hadder(output S,C ,input A,B);\n        assign S=A^B;\n        assign C=A&&B;\n    endmodule\n        \n        module hadder_tb();\n        reg A,B;\n        wire S,C;\n        hadder o(.A(A),.B(B),.S(S),.C(C));\n        initial begin\n        A=0;B=0;\n        $dumpfile("hadder.vcd");\n        $dumpvars(0,hadder_tb);\n        #5\n        B=1;\n        #5\n        A=1;B=0;\n        #5\n        A=1;B=1;\n        #5\n        $finish;\n        end\n        \n        initial begin\n        $monitor("Time = ",$time,"A=%b , B=%b ,S=%b, C=%b",A,B,S,C); \n        \n        end\n        endmodule \n    '),{0:t,1:a}=(0,o.useState)('\n    `timescale 1ns/1ps\n    module hadderS(output S,C ,input A,B);\n        xor(S,A,B);\n        and(C,A,B);\n    endmodule\n        \n        module hadderS_tb();\n        reg A,B;\n        wire S,C;\n        hadderS os(.A(A),.B(B),.S(S),.C(C));\n        initial begin\n        A=0;B=0;\n        $dumpfile("hadderS.vcd");\n        $dumpvars(0,hadderS_tb);\n        #5\n        B=1;\n        #5\n        A=1;B=0;\n        #5\n        A=1;B=1;\n        #5\n        $finish;\n        end\n        \n        initial begin\n        $monitor("Time = ",$time,"A=%b , B=%b ,S=%b, C=%b",A,B,S,C); \n        \n        end\n        endmodule'),{0:i,1:l}=(0,o.useState)('\n    `timescale 1ns/1ps\n    module hadderB(output reg S,C ,input A,B);\n        always @(*)\n        begin\n        S=A^B;\n        C=A&&B;\n        end\n    endmodule\n        \n        module hadderB_tb();\n        reg A,B;\n        wire S,C;\n        hadderB oB(.A(A),.B(B),.S(S),.C(C));\n        initial begin\n        A=0;B=0;\n        $dumpfile("hadderB.vcd");\n        $dumpvars(0,hadderB_tb);\n        #5\n        B=1;\n        #5\n        A=1;B=0;\n        #5\n        A=1;B=1;\n        #5\n        $finish;\n        end\n        \n        initial begin\n        $monitor("Time = ",$time,"A=%b , B=%b ,S=%b, C=%b",A,B,S,C); \n        \n        end\n        endmodule\n    '),{0:c,1:d}=(0,o.useState)('\n    `timescale 1ns/1ps\n\n    module fadderS(output Sum,Carry,input A,B,Cin);\n        wire P,Q,R;\n        xor(P,A,B);\n        and(Q,A,B);\n        xor(Sum,P,Cin);\n        and(R,P,Cin);\n        or(Carry,Q,R);\n        \n    endmodule\n    \n    module fadderS_tb();\n        reg a,b,c;\n        wire Sum,Carry;\n        fadderS f(.A(a),.B(b),.Cin(c),.Sum(Sum),.Carry(Carry));\n        initial begin\n        a=0;b=0;c=0;\n        $dumpfile("fadderS.vcd");\n        $dumpvars(0,fadderS_tb);\n        #5\n        c=1;\n        #5\n        b=1;c=0;\n        #5\n        c=1;\n        #5\n        a=1;b=0;c=0;\n        #5\n        c=1;\n        #5\n        a=1;b=1;c=0;\n        #5\n        c=1;\n        #5\n        $finish;\n        end\n        \n        initial begin\n        $monitor("Time ",$time,"A=%b,B=%b,Cin=%b,Sum=%b,Carry=%b",a,b,c,Sum,Carry);\n        end\n    endmodule\n    '),{0:u,1:s}=(0,o.useState)("\n    module binary_to_gray(output[3:0] g,input[3:0] b);\n    assign g[3]=b[3];\n    assign g[2]=b[3]^b[2];\n    assign g[1]=b[2]^b[1];\n    assign g[0]=b[1]^b[0];\nendmodule\n\nmodule btog_test;\n    reg [3:0] b;\n    wire [3:0] g;\n    binary_to_gray btg(g,b);\n    initial begin\n        $dumpfile(\"btog.vcd\");\n        $dumpvars(1);\n    end\n    initial begin\n        $display(\"\nBINARY TO GRAY CODE CONVERTER\n\nBinary\t Gray\");\n        $monitor(\" \",b[3],b[2],b[1],b[0],\"\t \",g[3],g[2],g[1],g[0]);\n        b = 4'b0000;\n        #1;\n        b = 4'b0001;\n        #1;\n        b = 4'b0010;\n        #1;\n        b = 4'b0011;\n        #1;\n        b = 4'b0100;\n        #1;\n        b = 4'b0101;\n        #1;\n        b = 4'b0110;\n        #1;\n        b = 4'b0111;\n        #1;\n        b = 4'b1000;\n        #1;\n        b = 4'b1001;\n        #1;\n        b = 4'b1010;\n        #1;\n        b = 4'b1011;\n        #1;\n        b = 4'b1100;\n        #1;\n        b = 4'b1101;\n        #1;\n        b = 4'b1110;\n        #1;\n        b = 4'b1111;\n        #1;\n    end\nendmodule\n    "),{0:p,1:b}=(0,o.useState)("\n    module gray_to_binary(output [3:0]b,input [3:0] g);\n    assign b[3] = g[3];\n    assign b[2] = b[3]^g[2];\n    assign b[1] = b[2]^g[1];\n    assign b[0] = b[1]^g[0];\nendmodule\n\nmodule gtob_test;\n    reg [3:0] g;\n    wire [3:0] b;\n    gray_to_binary gtb(b,g);\n    initial begin\n        $dumpfile(\"gtob.vcd\");\n        $dumpvars(1);\n        $display(\"\nGRAY CODE TO BINARY CONVERTER\n\n Gray\tBinary\");\n        $monitor(\" \",g[3],g[2],g[1],g[0],\"\t \",b[3],b[2],b[1],b[0]);\n        g = 4'b0000;\n        #1;\n        g = 4'b0001;\n        #1;\n        g = 4'b0010;\n        #1;\n        g = 4'b0011;\n        #1;\n        g = 4'b0100;\n        #1;\n        g = 4'b0101;\n        #1;\n        g = 4'b0110;\n        #1;\n        g = 4'b0111;\n        #1;\n        g = 4'b1000;\n        #1;\n        g = 4'b1001;\n        #1;\n        g = 4'b1010;\n        #1;\n        g = 4'b1011;\n        #1;\n        g = 4'b1100;\n        #1;\n        g = 4'b1101;\n        #1;\n        g = 4'b1110;\n        #1;\n        g = 4'b1111;\n        #1;\n    end\nendmodule\n    "),{0:m,1:f}=(0,o.useState)('\n    module decade_counter(input clk,output [3:0] q);\n    reg [3:0] q =4\'b000;\n    always @(posedge clk) \n    begin\n        if(q<4\'b1001)\n            q=q+1\'b1;\n        else\n            q=4\'b0000;\n    end\nendmodule\n\nmodule decade_test;\n    reg clk;\n    wire [3:0] q;\n    decade_counter dc(clk,q);\n    \n    initial begin\n        $dumpfile("decade.vcd");\n        $dumpvars(1);\n        $display("\nDECADE COUNTER\n\nClk Q3 Q2 Q1 Q0 ");\n        $monitor(clk,"   ",q[3],"  ",q[2],"  ",q[1],"  ",q[0]);\n        clk=0;\n    end    \n    always #1 clk=~clk;\nendmodule\n    '),{0:y,1:g}=(0,o.useState)('\n    module synchronous_counter(input mode,clk,output [2:0] q);\n    reg [2:0] q =0;\n    always @(posedge clk) \n    begin\n        if(mode==0)\n            q=q+1\'b1;\n        else\n            q=q-1\'b1;\n    end\nendmodule\n\nmodule synchronous_test;\n    reg mode,clk;\n    wire [2:0] q;\n    synchronous_counter sc(mode,clk,q);    \n    initial begin\n        $dumpfile("synchro.vcd");\n        $dumpvars(1);\n        $display("\nSYNCHRONOUS UP-DOWN COUNTER\n\nmode Clk Q2 Q1 Q0");\n        $monitor(mode,"    ",clk,"   ",q[2],"  ",q[1],"  ",q[0]);\n        mode=0;\n        clk=0;\n    end    \n    always #1 clk=~clk;\n    always #15 mode=~mode;\nendmodule\n    '),{0:C,1:h}=(0,o.useState)(!1),{0:x,1:v}=(0,o.useState)("");return o.createElement("div",{style:{margin:20}},C?o.createElement("span",{style:{color:"red"}},"Copied ",x):null,o.createElement("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap",gap:50},className:"expContainer"},o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," Development of Verilog modules for half adder in 3 modeling styles (dataflow)."),o.createElement(r.CopyToClipboard,{text:e,onCopy:()=>{v("exp2a"),h(!0)}},o.createElement("button",null,"exp2a"))),o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," structural"),o.createElement(r.CopyToClipboard,{text:t,onCopy:()=>{v("exp2b"),h(!0)}},o.createElement("button",null,"exp2b"))),o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," Behavioural"),o.createElement(r.CopyToClipboard,{text:i,onCopy:()=>{v("exp2c"),h(!0)}},o.createElement("button",null,"exp2c"))),o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," Development of Verilog modules for full adder in structural modeling using half adder."),o.createElement(r.CopyToClipboard,{text:c,onCopy:()=>{v("exp2d"),h(!0)}},o.createElement("button",null,"exp2d"))),o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," 4- bit binary to gray code converter"),o.createElement(r.CopyToClipboard,{text:u,onCopy:()=>{v("exp3a"),h(!0)}},o.createElement("button",null,"exp3a"))),o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," 4- bit gray to binary code converter"),o.createElement(r.CopyToClipboard,{text:p,onCopy:()=>{v("exp3b"),h(!0)}},o.createElement("button",null,"exp3b"))),o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," Development of Verilog modules for an asynchronous decade counter."),o.createElement(r.CopyToClipboard,{text:m,onCopy:()=>{v("exp4a"),h(!0)}},o.createElement("button",null,"exp4a"))),o.createElement("div",{style:{display:"flex",gap:"40px",minWidth:500,maxWidth:500},className:"exp"},o.createElement("p",{style:{fontSize:23}}," Development of Verilog modules for a 3 bit synchronous up-down counter."),o.createElement(r.CopyToClipboard,{text:y,onCopy:()=>{v("exp4b"),h(!0)}},o.createElement("button",null,"exp4b")))))}},5264:function(e,n,t){"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.CopyToClipboard=void 0;var r=l(t(6540)),a=l(t(7965)),i=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){y(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function s(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},p(e,n)}function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=f(e);if(n){var a=f(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return function(e,n){if(n&&("object"===o(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,t)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&p(e,n)}(c,e);var n,t,o,l=b(c);function c(){var e;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,c);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return y(m(e=l.call.apply(l,[this].concat(t))),"onClick",(function(n){var t=e.props,o=t.text,i=t.onCopy,l=t.children,c=t.options,d=r.default.Children.only(l),u=(0,a.default)(o,c);i&&i(o,u),d&&d.props&&"function"==typeof d.props.onClick&&d.props.onClick(n)})),e}return n=c,(t=[{key:"render",value:function(){var e=this.props,n=(e.text,e.onCopy,e.options,e.children),t=u(e,i),o=r.default.Children.only(n);return r.default.cloneElement(o,d(d({},t),{},{onClick:this.onClick}))}}])&&s(n.prototype,t),o&&s(n,o),Object.defineProperty(n,"prototype",{writable:!1}),c}(r.default.PureComponent);n.CopyToClipboard=g,y(g,"defaultProps",{onCopy:void 0,options:void 0})},9399:function(e,n,t){"use strict";var o=t(5264).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},6426:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],o=0;o<e.rangeCount;o++)t.push(e.getRangeAt(o));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}}}}]);
//# sourceMappingURL=component---src-pages-1-js-3048ef71cddb3d1e6efe.js.map