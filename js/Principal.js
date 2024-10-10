/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más
mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
Liz, Marcos y Leo*/
import  { Cl_Persona }  from "./persona.js";
import Cl_Contador from "./contador.js";

let persona1=new Cl_Persona("Luisa","F")
let persona2=new Cl_Persona("Ana","F")
let persona3=new Cl_Persona("Jose","M")
let persona4=new Cl_Persona("Carmen","F")
let persona5=new Cl_Persona("Rosa","F")
let persona6=new Cl_Persona("Jose","M")
let persona7=new Cl_Persona("Maria","F")
let persona8=new Cl_Persona("Luz","F")
let persona9=new Cl_Persona("Rafael","M")
let persona10=new Cl_Persona("Liz","F")
let persona11=new Cl_Persona("Marcos","M")
let persona12=new Cl_Persona("Leo","M")

let contador=new Cl_Contador()
contador.procesarPersona(persona1)
contador.procesarPersona(persona2)
contador.procesarPersona(persona3)
contador.procesarPersona(persona4)
contador.procesarPersona(persona5)
contador.procesarPersona(persona6)
contador.procesarPersona(persona7)
contador.procesarPersona(persona8)
contador.procesarPersona(persona9)
contador.procesarPersona(persona10)
contador.procesarPersona(persona11)
contador.procesarPersona(persona12)

let salida = document.getElementById("salida");
salida.innerHTML= "Resultado"
salida.innerHTML+= "<br> porcentaje de mujeres:" + contador.PorcentajeMujeres().toFixed(2)
salida.innerHTML+= "<br> Hay " +  contador.MayorSexo()