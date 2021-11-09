import React, { useState } from "react"
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Ds1 = () => {


    const [exp2a, setexp2a] = useState(`
    \`timescale 1ns/1ps
    module hadder(output S,C ,input A,B);
        assign S=A^B;
        assign C=A&&B;
    endmodule
        
        module hadder_tb();
        reg A,B;
        wire S,C;
        hadder o(.A(A),.B(B),.S(S),.C(C));
        initial begin
        A=0;B=0;
        $dumpfile("hadder.vcd");
        $dumpvars(0,hadder_tb);
        #5
        B=1;
        #5
        A=1;B=0;
        #5
        A=1;B=1;
        #5
        $finish;
        end
        
        initial begin
        $monitor("Time = ",$time,"A=%b , B=%b ,S=%b, C=%b",A,B,S,C); 
        
        end
        endmodule 
    `)
    const [exp2b, setexp2b] = useState(`
    \`timescale 1ns/1ps
    module hadderS(output S,C ,input A,B);
        xor(S,A,B);
        and(C,A,B);
    endmodule
        
        module hadderS_tb();
        reg A,B;
        wire S,C;
        hadderS os(.A(A),.B(B),.S(S),.C(C));
        initial begin
        A=0;B=0;
        $dumpfile("hadderS.vcd");
        $dumpvars(0,hadderS_tb);
        #5
        B=1;
        #5
        A=1;B=0;
        #5
        A=1;B=1;
        #5
        $finish;
        end
        
        initial begin
        $monitor("Time = ",$time,"A=%b , B=%b ,S=%b, C=%b",A,B,S,C); 
        
        end
        endmodule`)
    const [exp2c, setexp2c] = useState(`
    \`timescale 1ns/1ps
    module hadderB(output reg S,C ,input A,B);
        always @(*)
        begin
        S=A^B;
        C=A&&B;
        end
    endmodule
        
        module hadderB_tb();
        reg A,B;
        wire S,C;
        hadderB oB(.A(A),.B(B),.S(S),.C(C));
        initial begin
        A=0;B=0;
        $dumpfile("hadderB.vcd");
        $dumpvars(0,hadderB_tb);
        #5
        B=1;
        #5
        A=1;B=0;
        #5
        A=1;B=1;
        #5
        $finish;
        end
        
        initial begin
        $monitor("Time = ",$time,"A=%b , B=%b ,S=%b, C=%b",A,B,S,C); 
        
        end
        endmodule
    `)

    const [exp2d, setexp2d] = useState(`
    \`timescale 1ns/1ps

    module fadderS(output Sum,Carry,input A,B,Cin);
        wire P,Q,R;
        xor(P,A,B);
        and(Q,A,B);
        xor(Sum,P,Cin);
        and(R,P,Cin);
        or(Carry,Q,R);
        
    endmodule
    
    module fadderS_tb();
        reg a,b,c;
        wire Sum,Carry;
        fadderS f(.A(a),.B(b),.Cin(c),.Sum(Sum),.Carry(Carry));
        initial begin
        a=0;b=0;c=0;
        $dumpfile("fadderS.vcd");
        $dumpvars(0,fadderS_tb);
        #5
        c=1;
        #5
        b=1;c=0;
        #5
        c=1;
        #5
        a=1;b=0;c=0;
        #5
        c=1;
        #5
        a=1;b=1;c=0;
        #5
        c=1;
        #5
        $finish;
        end
        
        initial begin
        $monitor("Time ",$time,"A=%b,B=%b,Cin=%b,Sum=%b,Carry=%b",a,b,c,Sum,Carry);
        end
    endmodule
    `)

    const [exp3a, setexp3a] = useState(`
    module binary_to_gray(output[3:0] g,input[3:0] b);
    assign g[3]=b[3];
    assign g[2]=b[3]^b[2];
    assign g[1]=b[2]^b[1];
    assign g[0]=b[1]^b[0];
endmodule

module btog_test;
    reg [3:0] b;
    wire [3:0] g;
    binary_to_gray btg(g,b);
    initial begin
        $dumpfile("btog.vcd");
        $dumpvars(1);
    end
    initial begin
        $display("\nBINARY TO GRAY CODE CONVERTER\n\nBinary\t Gray");
        $monitor(" ",b[3],b[2],b[1],b[0],"\t ",g[3],g[2],g[1],g[0]);
        b = 4'b0000;
        #1;
        b = 4'b0001;
        #1;
        b = 4'b0010;
        #1;
        b = 4'b0011;
        #1;
        b = 4'b0100;
        #1;
        b = 4'b0101;
        #1;
        b = 4'b0110;
        #1;
        b = 4'b0111;
        #1;
        b = 4'b1000;
        #1;
        b = 4'b1001;
        #1;
        b = 4'b1010;
        #1;
        b = 4'b1011;
        #1;
        b = 4'b1100;
        #1;
        b = 4'b1101;
        #1;
        b = 4'b1110;
        #1;
        b = 4'b1111;
        #1;
    end
endmodule
    `)
    const [exp3b, setexp3b] = useState(`
    module gray_to_binary(output [3:0]b,input [3:0] g);
    assign b[3] = g[3];
    assign b[2] = b[3]^g[2];
    assign b[1] = b[2]^g[1];
    assign b[0] = b[1]^g[0];
endmodule

module gtob_test;
    reg [3:0] g;
    wire [3:0] b;
    gray_to_binary gtb(b,g);
    initial begin
        $dumpfile("gtob.vcd");
        $dumpvars(1);
        $display("\nGRAY CODE TO BINARY CONVERTER\n\n Gray\tBinary");
        $monitor(" ",g[3],g[2],g[1],g[0],"\t ",b[3],b[2],b[1],b[0]);
        g = 4'b0000;
        #1;
        g = 4'b0001;
        #1;
        g = 4'b0010;
        #1;
        g = 4'b0011;
        #1;
        g = 4'b0100;
        #1;
        g = 4'b0101;
        #1;
        g = 4'b0110;
        #1;
        g = 4'b0111;
        #1;
        g = 4'b1000;
        #1;
        g = 4'b1001;
        #1;
        g = 4'b1010;
        #1;
        g = 4'b1011;
        #1;
        g = 4'b1100;
        #1;
        g = 4'b1101;
        #1;
        g = 4'b1110;
        #1;
        g = 4'b1111;
        #1;
    end
endmodule
    `)

    const [exp4a, setexp4a] = useState(`
    module decade_counter(input clk,output [3:0] q);
    reg [3:0] q =4'b000;
    always @(posedge clk) 
    begin
        if(q<4'b1001)
            q=q+1'b1;
        else
            q=4'b0000;
    end
endmodule

module decade_test;
    reg clk;
    wire [3:0] q;
    decade_counter dc(clk,q);
    
    initial begin
        $dumpfile("decade.vcd");
        $dumpvars(1);
        $display("\nDECADE COUNTER\n\nClk Q3 Q2 Q1 Q0 ");
        $monitor(clk,"   ",q[3],"  ",q[2],"  ",q[1],"  ",q[0]);
        clk=0;
    end    
    always #1 clk=~clk;
endmodule
    `)
    const [exp4b, setexp4b] = useState(`
    module synchronous_counter(input mode,clk,output [2:0] q);
    reg [2:0] q =0;
    always @(posedge clk) 
    begin
        if(mode==0)
            q=q+1'b1;
        else
            q=q-1'b1;
    end
endmodule

module synchronous_test;
    reg mode,clk;
    wire [2:0] q;
    synchronous_counter sc(mode,clk,q);    
    initial begin
        $dumpfile("synchro.vcd");
        $dumpvars(1);
        $display("\nSYNCHRONOUS UP-DOWN COUNTER\n\nmode Clk Q2 Q1 Q0");
        $monitor(mode,"    ",clk,"   ",q[2],"  ",q[1],"  ",q[0]);
        mode=0;
        clk=0;
    end    
    always #1 clk=~clk;
    always #15 mode=~mode;
endmodule
    `)



    const [copied, setcopied] = useState(false)
    const [copiedExp, setcopiedExp] = useState('')
    return (
        <div style={{ margin: 20 }}>

            {copied ? <span style={{ color: 'red' }}>Copied {copiedExp}</span> : null}
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 50 }} className="expContainer">


                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> Development of Verilog modules for half adder in 3 modeling styles
                        (dataflow).</p>
                    <CopyToClipboard text={exp2a}
                        onCopy={() => {
                            setcopiedExp('exp2a')
                            setcopied(true)
                        }}>
                        <button>exp2a</button>
                    </CopyToClipboard>
                </div>

                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> structural</p>
                    <CopyToClipboard text={exp2b}
                        onCopy={() => {
                            setcopiedExp('exp2b')
                            setcopied(true)
                        }}>
                        <button>exp2b</button>
                    </CopyToClipboard>
                </div>

                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> Behavioural</p>
                    <CopyToClipboard text={exp2c}
                        onCopy={() => {
                            setcopiedExp('exp2c')
                            setcopied(true)
                        }}>
                        <button>exp2c</button>
                    </CopyToClipboard>
                </div>


                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> Development of Verilog modules for full adder in structural modeling using half adder.</p>
                    <CopyToClipboard text={exp2d}
                        onCopy={() => {
                            setcopiedExp('exp2d')
                            setcopied(true)
                        }}>
                        <button>exp2d</button>
                    </CopyToClipboard>
                </div>


                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> 4- bit binary to gray code converter</p>
                    <CopyToClipboard text={exp3a}
                        onCopy={() => {
                            setcopiedExp('exp3a')
                            setcopied(true)
                        }}>
                        <button>exp3a</button>
                    </CopyToClipboard>
                </div>


                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> 4- bit gray to binary code converter</p>
                    <CopyToClipboard text={exp3b}
                        onCopy={() => {
                            setcopiedExp('exp3b')
                            setcopied(true)
                        }}>
                        <button>exp3b</button>
                    </CopyToClipboard>
                </div>


                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> Development of Verilog modules for an asynchronous decade counter.</p>
                    <CopyToClipboard text={exp4a}
                        onCopy={() => {
                            setcopiedExp('exp4a')
                            setcopied(true)
                        }}>
                        <button>exp4a</button>
                    </CopyToClipboard>
                </div>


                <div style={{ display: 'flex', gap: '40px', minWidth: 500, maxWidth: 500 }} className="exp">
                    <p style={{ fontSize: 23 }}> Development of Verilog modules for a 3 bit synchronous up-down counter.</p>
                    <CopyToClipboard text={exp4b}
                        onCopy={() => {
                            setcopiedExp('exp4b')
                            setcopied(true)
                        }}>
                        <button>exp4b</button>
                    </CopyToClipboard>
                </div>

            </div>
        </div>
    )
}

export default Ds1
