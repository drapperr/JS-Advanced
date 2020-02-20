class Computer {
    constructor(ramMemory, cpuGHz, hddMemory) {
        this.ramMemory = ramMemory;
        this.cpuGHz = cpuGHz;
        this.hddMemory = hddMemory;
        this.taskManager = [];
        this.installedPrograms = [];
    }

    installAProgram(name, requiredSpace) {
        if (requiredSpace > this.hddMemory) {
            throw new Error("There is not enough space on the hard drive");
        }

        let program = {
            name,
            requiredSpace
        }

        this.hddMemory -= requiredSpace;
        this.installedPrograms.push(program);

        return program;
    }

    uninstallAProgram(name) {
        let program = this.installedPrograms.find((x) => x.name === name);

        if (!program) {
            throw new Error("Control panel is not responding");
        }

        this.installedPrograms = this.installedPrograms.filter((x) => x !== program);

        this.hddMemory+=program.requiredSpace;

        return this.installedPrograms;
    }

    openAProgram(name){
        let program = this.installedPrograms.find((x) => x.name === name);

        if (!program) {
            throw new Error(`The ${name} is not recognized`);
        }

        let isOpened=this.taskManager.some((x)=>x.name===name);

        if (isOpened) {
            throw new Error(`The ${name} is already open`);
        }

        let neededRam=(program.requiredSpace / this.ramMemory) * 1.5;
        let neededCpu=( ( program.requiredSpace / this.cpuGHz ) / 500) * 1.5;

        if ((this.taskManager.reduce((sum,el)=>sum+el.cpuGHz,0)+neededRam)>=100) {
            throw new Error(`${name} caused out of memory exception`);
        }

        if ((this.taskManager.reduce((sum,el)=>sum+el.ramUsage,0)+neededRam)>=100) {
            throw new Error(`${name} caused out of cpu exception`);
        }

        let obj={
            name,
            ramUsage:neededRam,
            cpuUsage:neededCpu
        }

        this.taskManager.push(obj);

        return obj;
    }

    taskManagerView(){
        if (this.taskManager.length===0) {
            return "All running smooth so far";
        }
        let result=[];
        this.taskManager.forEach((el) => {
            result.push(`Name - ${el.name} | Usage - CPU: ${el.cpuUsage.toFixed(0)}%, RAM: ${el.ramUsage.toFixed(0)}%`)
        });

        return result.join('\n');
    }
}


let computer = new Computer(4096, 7.5, 250000);


computer.installAProgram('Word', 7300);
computer.installAProgram('Excel', 10240);
computer.installAProgram('PowerPoint', 12288);
computer.installAProgram('Solitare', 1500);

computer.openAProgram('Word');
computer.openAProgram('Excel');
computer.openAProgram('PowerPoint');
computer.openAProgram('Solitare');

console.log(computer.taskManagerView())
let expectedResult = 
`Name - Word | Usage - CPU: 3%, RAM: 3%
Name - Excel | Usage - CPU: 4%, RAM: 4%
Name - PowerPoint | Usage - CPU: 5%, RAM: 5%
Name - Solitare | Usage - CPU: 1%, RAM: 1%`;
