//1
const dayRate=(hourlyRate)=>{
  return 8*hourlyRate
  }
const dR=dayRate(89)
console.log("1",dR)

//2
const dIB=(X,dayRate)=>{
return X/dayRate/8
}
const daysInBuget=dIB(20000,89)
console.log("2",daysInBuget)

//3

  const billabledays=22
hourlyRate=89
const valpeluna=(billabledays,hourlyRate)=>{
  return 8*billabledays*hourlyRate
  }
const Val=valpeluna(22,89)
console.log(Val)
//val discount pe luna
const valdisc=(Val)=>{
  return 0.42*Val
  }
  const valLuna=valdisc(15664)
  console.log(valLuna)
//val primita pe luna
const valPrimitaPeLuna=(Val,valLuna)=>{
  return Val-valLuna
}
const VPL=valPrimitaPeLuna(15664,6578.88)
console.log("3 valoare intermediara", VPL)
//val primita in 10 luni
const xluni=(VPL)=>{
  return 10*VPL
}
const valin10luni=xluni(9085.1199)
console.log("3 valoare intermediara", valin10luni)

//10 zile
const days=(D)=>{
  return 8*10*D
}
const tendays=days(89)
console.log("3 valoare intermediara", tendays)

//cost projects
const costprojects=(a,b)=>{
  return a+b
}
const cost=costprojects(90851,7120)
console.log("3 valoare finala",cost)
