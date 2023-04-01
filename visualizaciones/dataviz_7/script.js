d3.csv('astronautas.csv', d3.autoType).then(data => {
    let data2016_2019 = data.filter(d => d.anio_mision == '2016' || d.anio_mision == '2019')  
    let chart = Plot.plot({
      //color: { scheme: 'dark2' },
      marks: [
        Plot.barX(data2016_2019, Plot.groupY( {x: 'sum'}, {
          x: 'mision_hs',
          y: 'anio_mision',
          fill: 'anio_mision',
          fillOpacity: 0.5,
          stroke: 'anio_mision',
          strokeOpacity: 1,
        })),
        Plot.frame(),
        Plot.axisY({
          // tickFormat: 'd',
          // labelOffset: 40,
          fontSize: 0,
          // fontWeight: 'bold',
          // domain: d3.sort(data2016_2019, (a, b) => d3.descending(a.mision_hs, b.emision_hs)).map(d => d.anio_mision),
        }),
        Plot.textY(data2016_2019, {
          x: 'mision_hs',
          y: 'anio_mision',
          text: ['Año'],
          fill: '#111111', 
          fontSize: 13.5,
          dx: -65,
          dy: 24,
        }),
        Plot.axisX({
          ticks: 11,
          domain: [0, 80000],
          label: 'Horas de misión',
          labelOffset: 40,
          fontSize: 12,
          //fontWeight: 'bold',
        }),
        Plot.textX(data2016_2019, {
          x: 'mision_hs',
          y: 'anio_mision',
          text: ['Horas de misión'],
          fill: '#111111', 
          fontSize: 12,
          fontWeight: 'bold',
          fontFamily: 'sans-serif',
          dx: -42,
          dy: -60,
        }),
      ],
      y: { 
        label: null,
      },
      color: { 
        //range: ['#5e4fa2','#66c2a5']
        range: ['#4daf4a','#984ea3'],
      },
      height: 175,
      width: 550,
      marginTop: 50,
      marginLeft: 70,
      marginBottom: 30,
      insetRight: 20,
      insetTop: 10,
      insetBottom: 10,

      // facet: {
      //   data: data2016_2019,
      //   y: 'anio_mision',
      //   label: null,
      //   format: 'years',
      // },
    })
    d3.select('#chart').append(() => chart)


    let chart2 = Plot.plot({
      marks: [
      Plot.barX(data2016_2019, Plot.groupY( {x: 'sum'}, {
        x: 'eva_mision_hs',
        y: 'anio_mision',
        fill: 'anio_mision',
        fillOpacity: 0.5,
        stroke: 'anio_mision',
        strokeOpacity: 1,
      })),
      Plot.frame(),
      Plot.axisY({
      //   tickFormat: 'd',
        fontSize: 0,
      //   fontWeight: 'bold',
      //   domain: d3.sort(data2016_2019, (a, b) => d3.descending(a.mision_hs, b.emision_hs)).map(d => d.anio_mision),
      }),
      Plot.textY(data2016_2019, {
        x: 'eva_mision_hs',
        y: 'anio_mision',
        text: ['Año'],
        fill: '#111111', 
        fontSize: 13.5,
        dx: -85,
        dy: 25,
      }),
      Plot.axisX({
        ticks: 10,
        domain: [0, 100],
        label: 'Horas de actividades extravehiculares',
        labelOffset: 40,
        fontSize: 12,
        //fontWeight: 'bold',
      }),
      Plot.textX(data2016_2019, {
        x: 'eva_mision_hs',
        y: 'anio_mision',
        text: ['Horas de misión extravehicular'],
        fill: '#111111', 
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        dx: -20,
        dy: -60,
      }),
    ],
    y: {
      label: null,
    },
    color: { 
      //range: ['#bc80bd','#ffed6f']
      range: ['#4daf4a','#984ea3'],
    },
    height: 190,
    width: 550,
    marginTop: 70,
    marginLeft: 70,
    marginBottom: 30,
    insetRight: 20,
    insetTop: 10,
    insetBottom: 10,
  })
    d3.select('#chart').append(() => chart2)
})

  