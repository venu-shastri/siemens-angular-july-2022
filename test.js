//js-module
//IIFE (Immedialtely Invoked Function Expression)
// (function(){})();

var DeviceClass=(function(){
    function Device(id,name,price){

        this.Id=id;
        this.Name=name;
        this.Price=price
        return this;
    }
    Device.prototype.getPrice=function(){
        return this.price;
    }
    //Projection
    return Device;
})();

var obj=new DeviceClass("D100","XCV",345);

