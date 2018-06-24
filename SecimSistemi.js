var anadoluajans={
adaylar:["tayip","ince","meral","demirtas","perincek","temel","diger"],
kisiler:[],
toplam_oy:0,
tarih:Date.now(),
bekle:20,
hile:true,
yukle:function(hile){
   for(var i=0; i<this.adaylar.length; i++)
   this.kisiler[this.adaylar[i]]={isim:this.adaylar[i],oy:0};

   this.hile=hile;
},
secim:function(hile=true){
     this.yukle(hile);
     while(this.topla()<100){
     	    if(	(Date.now()-this.tarih)>this.bekle){
     	    	this.tarih=Date.now();     	    	
                this.hainlik();
     	    }     
     }
     console.log("Açılan Sandık Oranı: "+this.toplam_oy+ ", Şüpheli Sandık Oranı: "+(this.toplam_oy-100));
},
topla:function(print=true){
	if(	(Date.now()-this.tarih)< this.bekle) return this.toplam_oy; 
    let durum=0;
	for(var i=0; i<this.adaylar.length; i++){
		let oy=this.kisiler[this.adaylar[i]].oy;
		durum+=oy;
	    if(print) console.log(this.adaylar[i]+"="+Math.round(oy));
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
                 if(this.kisiler["tayip"].oy-aday.oy>30 || aday.oy<15 || !this.hile) aday.oy+=oy;
           		break;
           case 'meral':
                 if((aday.oy+oy)<this.kisiler["demirtas"].oy || !this.hile) aday.oy+=oy;
           		break;
           case 'demirtas':
                 if((aday.oy+oy)<this.kisiler["ince"].oy&&aday.oy<13 || !this.hile) aday.oy+=oy;
           		break;
           case 'temel':
                 if((aday.oy+oy)<this.kisiler["demirtas"].oy&&aday.oy<2 || !this.hile) aday.oy+=oy;
           		break;
           case 'perincek':if(aday.oy<1 || !this.hile)aday.oy+=oy;break;
           default:if((aday.oy+oy)<this.kisiler["perincek"].oy || !this.hile) aday.oy+=oy;break;    	
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
