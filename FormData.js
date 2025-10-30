class FormData {
    constructor(name, address, Phone ){
        this.name = name ;
        this.address = address;
        this.Phone = Phone ;
    }
    //DataDisplay->method
    DataDisplay(){
        let output = "<h1>Form Information</h1>";
        output += "Name : " + this.name + "<br>" ;
        output += "Address : " + this.address + "<br>" ;
        output += "Phone : " + this.Phone + "<br>" ;
        return output ;
    }
}  