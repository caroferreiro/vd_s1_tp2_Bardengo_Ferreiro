d3.csv('astronautas.csv', d3.autoType).then(data => {
  let data_masc = data.filter(d => d.genero == 'masculino')
  let data_fem = data.filter(d => d.genero == 'femenino')
  let chart = Plot.plot({
    color: {
      range: ['hotpink', '#48a0d6'],
      //range: ['#8c7bd6', '#ffa247' ]
      //legend: true, ["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]
    },
      marks: [
      Plot.barX(data,  Plot.groupY({x: 'sum'}, {
        x: 'mision_hs',
        y: 'genero',
        fill: 'genero',
        fillOpacity: 0.7,
        stroke: 'genero',
        strokeWidth: 1.2,
        title: (d) => `Género: ${d.genero}`,
      })),
      Plot.axisY(data, {
        label: 'Género',
        labelOffset: 50,
        fontSize: 15,
        //fontWeight: 'bold',
      }),
      Plot.axisX({
        ticks: 5,
        label: 'Horas de misión',
        labelOffset: 40,
        fontSize: 12,
      }),
      Plot.text(data_masc, {
        x: 'mision_hs',
        y: 'genero',
        text: ['M'],
        fill: '#111111', //["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"] ["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]
        fontWeight: 'bold',
        fontSize: 11,
        dx: -30,
        dy: 1,
      }),
      Plot.text(data_fem,  {
        x: 'mision_hs',
        y: 'genero',
        text: ['F'],
        fill: d => (d.mision_hs == 0 ? '#transparent' : '#111111'),
        fontWeight: 'bold',
        fontSize: 11,
        dx: -30,
        dy: 1,
      }),
    ],
    facet: {
      data: data,
      y: 'nacionalidad',
      label: null,
    },
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.genero),
    },
    style: {
      //fontWeight: 'bold',
      fontSize: 12,
    },
    axisX: {
      valueFormatString: "#",
      interval: 1,
    },
    grid: true,
    nice: true,
    zero: true,
    width: 900,
    height: 800,
    marginLeft: 60,
    marginRight: 120,
    marginTop: 10,
    marginBottom: 40,
    r: { range: [0, 18] },
  })
  d3.select('#chart').append(() => chart)
})
