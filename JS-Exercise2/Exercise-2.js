var fTemp=0;
        var cTemp=0;

do{
    fTemp=prompt("Enter Fahrenheit Temperature");
    fTemp=parseInt(fTemp);
    cTemp=fTemp;
    
    if(fTemp>=-100 && fTemp<=212){
        fTemp=(fTemp-32) * 5/9;
        
        alert("Fahrenheit temperature is "+Math.round(fTemp) +"\n\nCelsuis temperature is "+cTemp);

    }else {
        alert("You entered "+cTemp+"\nEntry must range from -100 to +212");
    }
    
  }

while(fTemp!=999);
alert("Closing the application");