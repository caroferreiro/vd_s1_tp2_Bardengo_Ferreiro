d3.csv('astronautas.csv', d3.autoType).then(data => {
  let dataABC = data.filter(
    d => d.nombre== 'Anton Shkaplerov' || d.nombre == 'Oleg Skripochka'|| d.nombre == 'Fyodor Yurchikhin' || d.nombre == 'Aleksandr Jr. Skvortsov'
  ) 
  let chart = Plot.plot({
    marks: [
      Plot.line(dataABC, {
        x: 'anio_mision',
        y: 'mision_hs',
        z: 'nombre',
        stroke: 'nombre',
        title: (d) =>
        `${d.nombre}
        `,
      }),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
  })
  d3.select('#chart').append(() => chart)
})

  