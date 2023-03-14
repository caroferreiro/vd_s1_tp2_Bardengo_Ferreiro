d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      color: {scheme: 'tableau10', type: 'categorical'},
        marks: [
        Plot.barX(data, {
          x: 'mision_hs',
          y: 'ocupacion',
          fill: 'status',
          sort: 'status',
          title: (d) => `Status: ${d.status}`,
        }),
      ],
      y: {
        domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.ocupacion),
      },
      x: {
        grid: true,
      },
      height: 300,
      marginLeft: 150,
    })
    d3.select('#chart').append(() => chart)
  })
  