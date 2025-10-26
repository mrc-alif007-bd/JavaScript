class StudentClass {
    constructor(name, roll, address){
        this.name = name;
        this.roll = roll ;
        this.address = address ;
    }
    StudentInfo(){
        let output = "<h1>Student Information</h1>"
      output += "Name : " + this.name + "<br>" ;
      output += "roll : " + this.roll + "<br>" ;
      output += "address : " + this.address + "<br>" ;
      return output ;
    }

}