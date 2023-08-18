
function trianglebtn(){
    const triangleinput1call=calculategeo('inputtriangle1')
    const triangleinput2call=calculategeo('inputtriangle2')

    if(isNaN(triangleinput1call) || isNaN(triangleinput2call)){
        alert('please provide a number')
        return;
     }    

     const addtriangle=0.5*triangleinput1call*triangleinput2call
     calculateforinner('triangleid',addtriangle)

     newarwaadd('triangle',addtriangle)
    
}

function rectanglebtn(){
    const reactanglcall1=calculategeo('rectangleinput1')
    const reactanglcall2=calculategeo('rectangleinput2')
    if(isNaN(reactanglcall1) || isNaN(reactanglcall2)){
        alert('please provide a number')
        return;
     }    
    const rectanglearea=reactanglcall1*reactanglcall2
    
    calculateforinner('rectangleid',rectanglearea)

    newarwaadd('rectangle',rectanglearea)

}

function parallelogrambtn(){
    const parallelogramcall1=calculategeo('parallelograminput1')
    const parallelogramcall2=calculategeo('parallelograminput2')
    if(isNaN(parallelogramcall1) || isNaN(parallelogramcall2)){
        alert('please provide a number')
        return;
     }    

    const areaparalle=parallelogramcall1 * parallelogramcall2
    calculateforinner('parallelogramid', areaparalle)
    newarwaadd('parallaelogram',areaparalle)

}

function Ellipsebtn(){
    const Ellipsecall1=calculategeo('Ellipse1')
    const Ellipsecall2=calculategeo('Ellipse2')
    if(isNaN(Ellipsecall1) || isNaN(Ellipsecall2)){
        alert('please provide a number')
        return;
     }    
    const areaEllipse=3.1415*Ellipsecall1*Ellipsecall2
    const area=areaEllipse.toFixed(2)
    calculateforinner('Ellipseid',area)

    newarwaadd('ellipse',area)
}




function newadd(newchild,anothernew){
    const totaladd=document.getElementById(newchild)
    const inneradd=totaladd.innerText
    inneradd.appendchild(anothernew)

}

function calculategeo(inputid){
    const geomatry=document.getElementById(inputid)
    const geomatryadd=geomatry.value
    const convertgeo=parseFloat(geomatryadd)
    const anotherconvert=convertgeo.toFixed(2)
    geomatry.value=''
    return anotherconvert
    
} 

function calculateforinner(value,newvalue){
    const forinner=document.getElementById(value)
    forinner.innerText=newvalue

}

function newarwaadd(areatype,area){
  console.log(areatype+ ' ' +area)
  const newarea=document.getElementById('showall')
  const count=newarea.childElementCount
  p=document.createElement('p')
  p.classList.add('my-4')
  p.innerHTML=` ${count +1}. ${areatype}=  ${area}  cm <sup>2</sup>  <button class='btn border-t-pink-950 bg-fuchsia-800'>convert</button`
  newarea.appendChild(p)
}



