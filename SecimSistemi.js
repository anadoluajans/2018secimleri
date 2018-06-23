var anadoluajans={
adaylar:["tayip","ince","meral","demirtas","perincek","diger"],
kisiler:[],
toplam_oy:0,
tarih:Date.now(),
bekle:20,
yukle:function(){
   for(var i=0; i<this.adaylar.length; i++)
   this.kisiler[this.adaylar[i]]={isim:this.adaylar[i],oy:0};
},
secim:function(hile=true){
     this.yukle();
     while(this.topla()<100){
     	    if(	(Date.now()-this.tarih)>this.bekle){
     	    	this.tarih=Date.now();     	    	
                this.hainlik();
     	    }     
     }
},
topla:function(print=true){
	if(	(Date.now()-this.tarih)< this.bekle) return this.toplam_oy; 
    let durum=0;
	for(var i=0; i<this.adaylar.length; i++){
		let oy=this.kisiler[this.adaylar[i]].oy;
		durum+=oy;
	    if(print) console.log(this.adaylar[i]+"="+oy);
    }
	if(print)console.log("------------------");	
    this.toplam_oy=durum;
	return durum;
},
hainlik:function(aday=this.adayver()){
	let oy=this.oyla();
	switch(aday.isim){
           case 'tayip':
                 aday.oy+=oy;
           		break;
           case 'ince':                 
                 if(this.kisiler["tayip"].oy-aday.oy>5 || aday.oy<4) aday.oy+=oy;
           		break;
           case 'meral':
                 if((aday.oy+oy)<this.kisiler["demirtas"].oy) aday.oy+=oy;
           		break;
           case 'demirtas':
                 if((aday.oy+oy)<this.kisiler["ince"].oy&&aday.oy<13) aday.oy+=oy;
           		break;
           case 'perincek':if(aday.oy<1)aday.oy+=oy;break;
           default:if((aday.oy+oy)<this.kisiler["perincek"].oy) aday.oy+=oy;break;    	
	}
},
adayver:function(){
	return this.kisiler[this.adaylar[Math.floor(Math.random() * this.adaylar.length)]];
},
oyla:function(){
    let bol=Math.floor(Math.random() * 20);
    return 1/((bol==0)?1:bol);
},
};
