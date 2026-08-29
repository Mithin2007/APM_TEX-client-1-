/*
  APM TEX catalogue source of truth.
  Every category below owns an isolated image array. Local collection folders
  are the source of truth for gallery imagery.
*/
window.SITE_CONFIG={brand:'APM TEX',location:'Vadakankulam, Tamil Nadu',founded:'1996',year:'2026',phone:'9843406519',whatsapp:'919843406519',maps:'https://www.google.com/maps/search/?api=1&query=7H95%2BW68%2C%20Mahendragiri%20R.F.%2C%20Vadakankulam%2C%20Tamil%20Nadu%20629301'};

/* Local asset helper: maps the existing numbered files in each category folder. */
var localCollectionImages=function(group,category){return Array.from({length:10},function(_,index){return 'assets/collections/'+group+'/'+category+'/image-'+String(index+1).padStart(2,'0')+'.jpg';});};
var catalogue=function(label,images){return images.map(function(image,index){return {name:label+' '+String(index+1).padStart(2,'0'),image:image};});};

window.CATALOGUE_IMAGES={
  men:{
    tshirts:localCollectionImages('mens','t-shirts'),
    shirts:localCollectionImages('mens','shirts'),
    jeans:localCollectionImages('mens','jeans')
  },
  women:{
    sarees:localCollectionImages('womens','sarees'),
    kurtis:localCollectionImages('womens','kurtis'),
    churidars:localCollectionImages('womens','churidars-ethnic')
  },
  kids:{
    boys:localCollectionImages('kids','boys'),
    girls:localCollectionImages('kids','girls'),
    festive:localCollectionImages('kids','festive')
  }
};

var i=window.CATALOGUE_IMAGES;
window.SHOWROOMS={
  men:{label:"Men's Wear",tagline:'Contemporary. Classic. Timeless.',cover:i.men.tshirts[0],categories:{'T-Shirts':catalogue('Men’s T-Shirt',i.men.tshirts),'Shirts':catalogue('Men’s Shirt',i.men.shirts),'Jeans':catalogue('Men’s Denim',i.men.jeans)}},
  women:{label:"Women's Wear",tagline:'Colour, cloth and occasion — beautifully considered.',cover:i.women.sarees[0],categories:{'Sarees':catalogue('Saree',i.women.sarees),'Kurtis':catalogue('Kurti',i.women.kurtis),'Churidars':catalogue('Churidar Set',i.women.churidars)}},
  kids:{label:"Kids' Wear",tagline:'Made for every growing celebration.',cover:i.kids.boys[0],categories:{'Boys':catalogue('Boys Look',i.kids.boys),'Girls':catalogue('Girls Look',i.kids.girls),'Festive':catalogue('Kids Festive Look',i.kids.festive)}}
};

window.APMCollections=[
 {key:'men',no:'01',title:'Men',sub:'T-Shirts · Shirts · Jeans',description:'Contemporary classics, thoughtfully selected.',image:i.men.tshirts[0]},
 {key:'women',no:'02',title:'Women',sub:'Sarees · Kurtis · Churidars',description:'Sarees, silhouettes and colour stories for the everyday and unforgettable.',image:i.women.sarees[0]},
 {key:'kids',no:'03',title:'Kids',sub:'Boys · Girls · Festive',description:'Comfort, colour and a little bit of occasion for every growing memory.',image:i.kids.boys[0]}
];
