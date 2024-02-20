import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series:any | ApexAxisChartSeries;
  chart:any | ApexChart;
  xaxis:any | ApexXAxis;
  yaxis:any | ApexYAxis | ApexYAxis[];
  title:any | ApexTitleSubtitle;
  labels:any | string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill:any | ApexFill;
  tooltip:any | ApexTooltip;
};
@Component({
  selector: 'app-taxi-revenu-by-day',
  templateUrl: './taxi-revenu-by-day.component.html',
  styleUrl: './taxi-revenu-by-day.component.scss'
})
export class TaxiRevenueByDayComponent implements OnInit {

  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "This week revenue",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Last week revenue",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chart: {
        height: 400,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "Taxi Revenue Chart",
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "10 June 2023",
        "11 June 2023",
        "12 June 2023",
        "13 June 2023",
        "14 June 2023",
        "15 June 2023",
        "16 June 2023",
        "17 June 2023",
        "18 June 2023",
        "19 June 2023",
        "20 June 2023",
        "21 June 2023"
      ],
      xaxis: {
        type: "datetime"
      },
      yaxis: [
        {
          title: {
            text: "This week revenue",
            fontSize: "100px",
          }
        },
        {
          opposite: true,
          title: {
            text: "Last week revenue"
          }
        }
      ]
    };
  }

  ngOnInit(): void {
  }
}