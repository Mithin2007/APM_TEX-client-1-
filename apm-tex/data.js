/*
  APM TEX catalogue source of truth.
  Every category below owns an isolated, 10-image array. Replace a category's
  URLs with APM TEX's licensed original photography later; no HTML/JS changes
  are needed. The temporary image service uses precise fashion tags + a stable
  lock per image, so categories never reuse another category's image set.
*/
window.SITE_CONFIG={brand:'APM TEX',location:'Vadakankulam, Tamil Nadu',founded:'1996',year:'2026',phone:'9843406519',whatsapp:'919843406519',maps:'https://www.google.com/maps/search/?api=1&query=7H95%2BW68%2C%20Mahendragiri%20R.F.%2C%20Vadakankulam%2C%20Tamil%20Nadu%20629301'};

/* Temporary image helper. Its stable locks deliberately make all 200 URLs unique. */
var fashionImages=function(tags,lockStart){return Array.from({length:10},function(_,index){return 'https://loremflickr.com/1200/1600/'+tags+'?lock='+(lockStart+index)});};
var catalogue=function(label,images){return images.map(function(image,index){return {name:label+' '+String(index+1).padStart(2,'0'),image:image};});};

window.CATALOGUE_IMAGES={
  men:{
    tshirts:fashionImages('men,tshirt,fashion',1100),
    shirts:fashionImages('men,shirt,fashion',1200),
    jeans:fashionImages('men,jeans,denim,fashion',1300),
    trousers:fashionImages('men,trousers,pants,fashion',1400),
    formalWear:fashionImages('men,suit,blazer,formal,fashion',1500),
    ethnicTraditional:fashionImages('men,kurta,sherwani,traditional,india',1600)
  },
  women:{
    sarees:fashionImages('woman,saree,indian,fashion',2100),
    kurtis:fashionImages('woman,kurti,indian,fashion',2200),
    churidarsEthnic:fashionImages('woman,salwar,kameez,ethnic,india',2300),
    tops:fashionImages('woman,top,fashion',2400),
    dresses:fashionImages('woman,dress,fashion',2500),
    festiveWear:fashionImages('woman,festive,indian,fashion',2600)
  },
  kids:{
    boys:fashionImages('boy,clothing,fashion',3100),
    girls:fashionImages('girl,clothing,fashion',3200),
    casual:fashionImages('kids,casual,clothing,fashion',3300),
    festive:fashionImages('kids,festive,clothing,india',3400)
  },
  ethnic:{
    traditionalWear:fashionImages('indian,traditional,clothing,fashion',4100),
    festiveLooks:fashionImages('indian,festive,clothing,fashion',4200),
    specialOccasion:fashionImages('indian,occasion,fashion,clothing',4300),
    familyCollections:fashionImages('indian,family,festive,fashion',4400)
  }
};

var i=window.CATALOGUE_IMAGES;
window.SHOWROOMS={
  men:{label:"Men's Wear",tagline:'Contemporary. Classic. Timeless.',cover:i.men.tshirts[0],categories:{'T-Shirts':catalogue('Men’s T-Shirt',i.men.tshirts),'Shirts':catalogue('Men’s Shirt',i.men.shirts),'Jeans':catalogue('Men’s Denim',i.men.jeans),'Trousers':catalogue('Men’s Trouser',i.men.trousers),'Formal Wear':catalogue('Men’s Formal Look',i.men.formalWear),'Ethnic / Traditional':catalogue('Men’s Traditional Look',i.men.ethnicTraditional)}},
  women:{label:"Women's Wear",tagline:'Colour, cloth and occasion — beautifully considered.',cover:i.women.sarees[0],categories:{'Sarees':catalogue('Saree',i.women.sarees),'Kurtis':catalogue('Kurti',i.women.kurtis),'Churidars / Ethnic':catalogue('Churidar Set',i.women.churidarsEthnic),'Tops':catalogue('Women’s Top',i.women.tops),'Dresses':catalogue('Dress',i.women.dresses),'Festive Wear':catalogue('Women’s Festive Look',i.women.festiveWear)}},
  kids:{label:"Kids' Wear",tagline:'Made for every growing celebration.',cover:i.kids.boys[0],categories:{'Boys':catalogue('Boys Look',i.kids.boys),'Girls':catalogue('Girls Look',i.kids.girls),'Casual':catalogue('Kids Casual Look',i.kids.casual),'Festive':catalogue('Kids Festive Look',i.kids.festive)}},
  ethnic:{label:'Ethnic & Festive',tagline:'For the rituals, reunions and celebrations that matter.',cover:i.ethnic.traditionalWear[0],categories:{'Traditional Wear':catalogue('Traditional Look',i.ethnic.traditionalWear),'Festive Looks':catalogue('Festive Look',i.ethnic.festiveLooks),'Special Occasion':catalogue('Occasion Look',i.ethnic.specialOccasion),'Family Collections':catalogue('Family Festive Look',i.ethnic.familyCollections)}}
};

window.APMCollections=[
 {key:'men',no:'01',title:'Men',sub:'T-Shirts · Shirts · Occasion wear',description:'Contemporary classics and celebration dressing, thoughtfully selected.',image:i.men.tshirts[0]},
 {key:'women',no:'02',title:'Women',sub:'Sarees · Kurtis · Festive',description:'Sarees, silhouettes and colour stories for the everyday and unforgettable.',image:i.women.sarees[0]},
 {key:'kids',no:'03',title:'Kids',sub:'Joyful dressing for little celebrations',description:'Comfort, colour and a little bit of occasion for every growing memory.',image:i.kids.boys[0]},
 {key:'ethnic',no:'04',title:'Ethnic & Festive',sub:'Traditional · Occasion · Family',description:'Textiles that catch the light and become part of the celebration.',image:i.ethnic.traditionalWear[0]}
];
