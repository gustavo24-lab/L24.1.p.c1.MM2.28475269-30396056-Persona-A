export default class Cl_Contador{
    constructor(){
        this.cantMujeres = 0;
        this.cantHombres = 0;  
        this.cantPersonas = 0;  

}
procesarPersona(per){
    if(per.sexo == "M"){
        this.cantHombres++;
    }
    else if (per.sexo == "F" ){
        this.cantMujeres++;
    }
    this.cantPersonas++;
}
PorcentajeMujeres(){
    return this.cantMujeres*100/this.cantPersonas.toFixed(2)
}
MayorSexo(){
  if( this.cantMujeres> this.cantHombres )
    return 'mas Mujeres'
else if(this.cantMujeres<this.cantHombres)
    return ' mas Hombres'

else (this.cantMujeres=this.cantHombres)
return ' la misma cantidad'
}
}