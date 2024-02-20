import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexXAxis,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexPlotOptions
} from 'ng-apexcharts';

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
  selector: 'app-traffic-taxi-vs-bus',
  templateUrl: './traffic-taxi-vs-bus.component.html',
  styleUrls: ['./traffic-taxi-vs-bus.component.scss']
})
export class TrafficTaxiVsBusComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Taxi',
          data: [50, 60, 55, 70, 65, 75, 80] // Sample taxi traffic data for each day of the week
        },
        {
          name: 'Bus',
          data: [30, 40, 35, 50, 45, 55, 60] // Sample bus traffic data for each day of the week
        }
      ],
      chart: {
        type: 'line',
        height: 400
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        title: {
          text: 'Week Days'
        },
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      yaxis: {
        title: {
          text: 'Number of Vehicles'
        }
      },
      title: {
        text: 'Traffic Comparison: Taxi vs Bus'
      }
    };
  }

  ngOnInit(): void {}
}