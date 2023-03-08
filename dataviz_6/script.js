let chart
let data
let valuesDomainX
let valuesDomainY

let selectElement = d3.select('#input')
selectElement.on('input', event => {
  let yearSelected = event.target.value
  changeValueInput(yearSelected)
  createChart(yearSelected)
})

d3.csv('astronautas.csv', d3.autoType).then(dataChart => {
  data = dataChart
  let initYear = selectElement.attr('value')
  valuesDomainX = [d3.min(data, d => d.mision_hs), d3.max(data, d => d.mision_hs)]
  valuesDomainY = [d3.min(data, d => d.eva_mision_hs), d3.max(data, d => d.eva_mision_hs)]
  changeValueInput(initYear)
  createChart(initYear)
})

function changeValueInput(value) {
  const resultado = document.querySelector('#value-input')
  resultado.textContent = value
}

function createChart(yearSelected) {
  let dataFilter = data.filter(d => d.anio_mision == yearSelected)
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    zero: true,
    marks: [
      Plot.dot(dataFilter, {
        x: 'mision_hs',
        y: 'eva_mision_hs',
        fill: 'nacionalidad',
        fillOpacity: 0.6,
        r: 'edad_mision',
        title: 'nombre',
      }),
    ],
    color: {
      legend: true,
      className: 'legend-clusters',
    },
    r: {range:[0,5]},
    x: {
      domain: valuesDomainX,
    },
    y: {
      domain: valuesDomainY,
    },
  })

  /* Agrega un título a la leyenda x d3 */
  d3.select(chart)
    .select('.legend-clusters')
    .insert('h4', 'span')
    .attr('class', 'legend-title')
    .text('Grupos de países: ')
    .classed('legend-title')

  d3.select('#chart figure').remove()
  d3.select('#chart').append(() => chart)
}
