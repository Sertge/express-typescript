class unPerro{
  constructor(nombre,raza){
    this.nombre=nombre
    this.raza=raza
  }
  addField(fieldKey,fieldValue){
    this[fieldKey]=fieldValue
  }
  mostrar(){console.log(this)}
}
const miPerro=new unPerro("Azul","Border Collie")
miPerro.mostrar()
miPerro.addField("color","Blanco")
miPerro.mostrar()


const fecha1=new Date()
const fecha2=new Date("11/10/1991")

console.log(fecha2.getDay())