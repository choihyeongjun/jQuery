let members=[];

members.push({name:"hong",point:80});
members.push({name:"hwang",point:100});
members.push({name:"park",point:95});
members.push({name:"choi",point:50});
members.push({name:"ryu",point:30});

$(members).each((a,b)=>{
    console.log(a,b);
});
console.clear();
let grepMem=$.grep(members,(a,b)=>{
    console.log(a,b);
    return a.point>50 ? a : null;
})
console.clear();
let sum=$(grepMem).map((a,b)=>{
    return b.point;
}).get();
console.log("전체 point값: "+sum);
