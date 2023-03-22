d3.csv('astronautas.csv', d3.autoType).then(data => {
    let datos_2016 = data.filter(d => d.anio_mision == '2016')
    let chart = Plot.plot({
      color: {
        scheme: 'spectral',
        //range: ['#9e0142', '#d53e4f', '#a454b0', '#4daf4a', '#fee08b', '#e6f598', '#abdda4', 'lemonchiffon', 'yellowgreen', '#4daf4a', '#71d1b3'],
        //       Alemania    Canada     Rusia    Dinamarca    EE.UU.               Francia        Italia          Japon     Kazajistan
        //range: ['#FF69B4', '#87cefa', '#7b68ee', '#98fb98', '#f08080', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'], '#bc80bd','#ffed6f'
      },
      marks: [
        Plot.axisY({ 
          anchor: "Left",
          ticks: 10,
          grid: true, 
          label: "Horas de misión", 
          labelOffset: 70,
          fontSize: 12,
        }),
        Plot.barY(data, 
          Plot.groupX({y: 'sum'}, {
            x: 'anio_mision', 
            y: 'mision_hs', 
            fill: 'nacionalidad',
            fillOpacity: 0.5,
            stroke: 'nacionalidad',
            strokeOpacity: 0.1,
            strokeWeight: 0.1,
            sort: 'nacionalidad',
            title: (d) =>
          `${d.nacionalidad}`
          //Horas de misión: ${(d.mision_hs).toFixed(2)} horas`,
       // Horas de misión: ${Math.round(d.mision_hs/24)} días`,
          }),
          ),
        // Plot.text(data, Plot.binX({y:'sum'}, {
        //   x: 'anio_mision',
        //   //y: 'mision_hs',
        //   text: 'mision_hs',
        //   fill: '#000000',
        //   fontWeight: 'light',
        //   fontSize: 12,
        //   //dy: -20,
        // })),
      ],
      x: {
        tickFormat: 'd',
        label: "Año de Misión",
      },
      style: {
        fontSize: 12,
      },
      marginLeft: 210,
      marginBottom: 50,
      height: 550,
      width: 700,
    })
    d3.select('#chart').append(() => chart)
  })
  