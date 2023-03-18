d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      color: {scheme: 'spectral'},
      marks: [
        Plot.axisY({ anchor: "Left", label: "Horas de misión" }),
        Plot.barY(data, 
          //Plot.groupX({y: 'sum'}),
          {
          x: 'anio_mision', 
          y: 'mision_hs', 
          fill: 'nacionalidad',
          opacity: 0.7,
          sort: 'nacionalidad',
          title: (d) =>
          `${d.nacionalidad}
          Horas de misión: ${(d.mision_hs).toFixed(2)} horas`,
       // Horas de misión: ${Math.round(d.mision_hs/24)} días`,
       },),
       //),
      //  Plot.text(data,{
      //   x: 'anio_mision',
      //   y: 'mision_hs',
      //   text: 'mision_hs',
      //   fill: d => (d.anio_mision == '2016' ? '#000000' : 'transparent'),
      //   fontWeight: 'light',
      //   fontSize: 12,
      //   dy: -20,
      // }),
      ],
      x: {
        tickFormat: 'd',
        label: "Año de Misión",
        labelOffset: 35,
      },
      style: {
        fontSize: 12,
      },
      marginLeft: 70,
      marginBottom: 50,
      height: 700,
      width: 500,
    })
    d3.select('#chart').append(() => chart)
  })
  