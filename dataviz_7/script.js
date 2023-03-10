d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      color: {scheme: 'accent'},
      var i
      for (i = 0; i < 158; i++){
        
      }
      y: {
        domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nacionalidad),
      },
        marks: [
        Plot.barX(data, {
          x: 'mision_hs',
          y: 'genero',
          fill: 'genero',
        }),
        Plot.frame(),
      ],
      facet: {
        data: data,
        y: 'genero',
      },
      height: 300,
      marginLeft: 150,
    })
    d3.select('#chart').append(() => chart)
  })
  