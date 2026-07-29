import * as d3 from 'd3';
import * as React from 'react';

interface ChartDatum {
  row: string;
  column: string;
  value: number;
}

interface D3GroupedBarProps {
  data: ChartDatum[];
  title: string;
}

const CHART_WIDTH: number = 760;
const CHART_HEIGHT: number = 440;
const LEGEND_ITEM_WIDTH: number = 170;
const KEY_SEPARATOR: string = '\u0000';

function unique(values: string[]): string[] {
  return values.filter(
    (value: string, index: number) => values.indexOf(value) === index
  );
}

function D3GroupedBar({ data, title }: D3GroupedBarProps) {
  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    if (!svgRef.current || data.length === 0) {
      return;
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const rowKeys: string[] = unique(data.map((item: ChartDatum) => item.row));
    const columnKeys: string[] = unique(
      data.map((item: ChartDatum) => item.column)
    );
    const legendColumns: number = Math.max(
      1,
      Math.floor((CHART_WIDTH - 100) / LEGEND_ITEM_WIDTH)
    );
    const legendRows: number = Math.ceil(columnKeys.length / legendColumns);
    const margin = {
      top: 54 + legendRows * 24,
      right: 24,
      bottom: 72,
      left: 78
    };
    const innerWidth: number = CHART_WIDTH - margin.left - margin.right;
    const innerHeight: number = CHART_HEIGHT - margin.top - margin.bottom;
    const valueLookup: { [key: string]: number } = {};

    data.forEach((item: ChartDatum) => {
      valueLookup[item.row + KEY_SEPARATOR + item.column] = item.value;
    });

    const x0 = d3.scaleBand<string>()
      .domain(rowKeys)
      .range([0, innerWidth])
      .padding(0.18);
    const x1 = d3.scaleBand<string>()
      .domain(columnKeys)
      .range([0, x0.bandwidth()])
      .padding(0.08);
    const maximumValue: number =
      d3.max(data, (item: ChartDatum) => item.value) || 0;
    const y = d3.scaleLinear()
      .domain([0, Math.max(maximumValue, 1)])
      .nice()
      .range([innerHeight, 0]);
    const color = d3.scaleOrdinal<string, string>()
      .domain(columnKeys)
      .range(d3.schemeTableau10);
    const formatValue = d3.format('$,.0f');

    svg
      .attr('viewBox', `0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    svg.append('title').text(title);
    svg.append('text')
      .attr('class', 'chart-title')
      .attr('x', CHART_WIDTH / 2)
      .attr('y', 24)
      .attr('text-anchor', 'middle')
      .text(title);

    const legend = svg.append('g')
      .attr('class', 'chart-legend')
      .attr('transform', `translate(${margin.left}, 42)`);

    const legendItems = legend.selectAll('g')
      .data(columnKeys)
      .join('g')
      .attr('transform', (column: string, index: number) => {
        const x: number = (index % legendColumns) * LEGEND_ITEM_WIDTH;
        const yPosition: number = Math.floor(index / legendColumns) * 24;
        return `translate(${x}, ${yPosition})`;
      });

    legendItems.append('rect')
      .attr('width', 12)
      .attr('height', 12)
      .attr('rx', 2)
      .attr('fill', (column: string) => color(column));

    legendItems.append('text')
      .attr('x', 18)
      .attr('y', 10)
      .text((column: string) => column);

    const plot = svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    plot.append('g')
      .attr('class', 'chart-grid')
      .call(
        d3.axisLeft(y)
          .ticks(5)
          .tickSize(-innerWidth)
          .tickFormat(() => '')
      );

    plot.append('g')
      .attr('class', 'chart-axis')
      .call(
        d3.axisLeft(y)
          .ticks(5)
          .tickFormat((value: any) => `$${d3.format('~s')(value)}`)
      );

    plot.append('g')
      .attr('class', 'chart-axis')
      .attr('transform', `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(x0))
      .selectAll('text')
      .attr('transform', 'rotate(-20)')
      .style('text-anchor', 'end');

    plot.append('text')
      .attr('class', 'axis-title')
      .attr('x', innerWidth / 2)
      .attr('y', innerHeight + 62)
      .attr('text-anchor', 'middle')
      .text('Row members');

    plot.append('text')
      .attr('class', 'axis-title')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerHeight / 2)
      .attr('y', -60)
      .attr('text-anchor', 'middle')
      .text('Aggregated value');

    const groups = plot.selectAll('.bar-group')
      .data(rowKeys)
      .join('g')
      .attr('class', 'bar-group')
      .attr('transform', (row: string) => `translate(${x0(row) || 0}, 0)`);

    const bars = groups.selectAll('rect')
      .data((row: string) => columnKeys.map((column: string): ChartDatum => ({
        row: row,
        column: column,
        value: valueLookup[row + KEY_SEPARATOR + column] || 0
      })))
      .join('rect')
      .attr('class', 'data-bar')
      .attr('x', (item: ChartDatum) => x1(item.column) || 0)
      .attr('y', (item: ChartDatum) => y(item.value))
      .attr('width', x1.bandwidth())
      .attr('height', (item: ChartDatum) => innerHeight - y(item.value))
      .attr('fill', (item: ChartDatum) => color(item.column))
      .attr('tabindex', 0)
      .attr('role', 'img')
      .attr('aria-label', (item: ChartDatum) =>
        `${item.row}, ${item.column}: ${formatValue(item.value)}`
      );

    bars.append('title')
      .text((item: ChartDatum) =>
        `${item.row} — ${item.column}: ${formatValue(item.value)}`
      );
  }, [data, title]);

  if (data.length === 0) {
    return (
      <p className="chart-empty" aria-live="polite">
        Preparing the visualization...
      </p>
    );
  }

  return (
    <svg
      ref={svgRef}
      className="d3-chart"
      role="img"
      aria-label={title}
      tabIndex={0}
    />
  );
}

export default D3GroupedBar;
