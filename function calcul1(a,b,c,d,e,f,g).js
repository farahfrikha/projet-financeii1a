function calcul1(a,b,c,d,e,f,g){
    var taux1 = document.getElementById(new String(b)).value; 
    var nbr1 = document.getElementById(new String(c)).value;
    var nbr2 = document.getElementById(new String(d)).value;
    var val1 = document.getElementById(new String(a)).value;
    const t1 = new Number (taux1);
    const v1 = new Number (val1);
    const d1 = new Date (nbr1);
    const d2 = new Date (nbr2);
    const time1 = Math.abs(d2-d1);
    const days1 = Math.ceil(time1 / (1000 * 60 * 60 * 24 ))+1;
    const inter1 = ((days1 * v1 * t1)/36000);
    const act1 = v1 - inter1;
    if(v1<0)
        alert("Essayez d'inserez une valeur nominale positive")
    else if  (days1>360 || days1<0){
        alert("Oops Dates Invalides!")
    }       
    else if (t1>100 || t1<0){
        alert("Attention!,Modifier le Taux")
    }
    else{    
      document.getElementById(new String(g)).innerHTML=act1;
      document.getElementById(new String(f)).innerHTML=days1;
      document.getElementById(new String(e)).innerHTML=inter1;
    }
}
