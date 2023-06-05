fetch('https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D')
.then((res)=>{return res.json()})
.then((data)=>{
    console.log(data)
})