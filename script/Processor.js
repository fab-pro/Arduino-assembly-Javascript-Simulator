class Processor{

  	constructor(program)
  	{

		this.prog = program;
    		//memory = new Memory(program);
    		this.procStatus = new ProcessorStatus();
		this.operationList = new Operation();
  	}



    	start()
  	{
  		var line;
  		var command;
  		var op = new Array(2);
  		var i=0;
  		for(i=0;i<this.prog.length;i++)
  		{
  			line = this.prog[i].split(" ");
  			command = line[0];
  			line = line[1].split(",");
  			op[0] = line[0];
  			op[1] = line[1];
  			this.procStatus.PC = this.procStatus.PC + 1;
        		this.execInstruction(command,op);

  		}

  	}

  	execInstruction(instr,op)
 	{
     

  	}

}
