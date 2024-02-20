import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexPlotOptions
} from 'ngx-apexcharts';

export type ChartOptions = {
  series: any | ApexAxisChartSeries;
  chart: any | ApexChart;
  dataLabels: any | ApexDataLabels;
  xaxis: any | ApexXAxis;
  yaxis: any | ApexYAxis | ApexYAxis[];
  title: any | ApexTitleSubtitle;
  plotOptions: any | ApexPlotOptions;
};

@Component({
  selector: 'app-traffic-by-day',
  templateUrl: './traffic-by-day.component.html',
  styleUrls: ['./traffic-by-day.component.scss']
})
export class TrafficByDayComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Traffic',
          data: [120, 150, 180, 200, 160, 140, 130] // Sample data for each day of the week
        }
      ],
      chart: {
        type: 'bar',
        height: 400
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Number of Traffic'
        },
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      yaxis: {
        title: {
          text: 'Week Days'
        }
      },
      title: {
        text: 'Traffic Per Day'
      }
    };
  }

  ngOnInit(): void {}
}