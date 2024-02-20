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
  selector: 'app-services-by-day',
  templateUrl: './services-by-day.component.html',
  styleUrls: ['./services-by-day.component.scss']
})
export class ServicesByDayComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

constructor() {
  this.chartOptions = {
    series: [
      {
        name: "Monday",
        data: this.generateData(24, {
          min: 10,
          max: 30
        })
      },
      {
        name: "Tuesday",
        data: this.generateData(24, {
          min: 10,
          max: 30
        })
      },
      {
        name: "Wednesday",
        data: this.generateData(24, {
          min: 10,
          max: 30
        })
      },
      {
        name: "Thursday",
        data: this.generateData(24, {
          min: 10,
          max: 30
        })
      },
      {
        name: "Friday",
        data: this.generateData(24, {
          min: 10,
          max: 30
        })
      },
      {
        name: "Saturday",
        data: this.generateData(24, {
          min: 10,
          max: 30
        })
      },
      {
        name: "Sunday",
        data: this.generateData(24, {
          min: 10,
          max: 30
        })
      }
    ],
    chart: {
      height: 300,
      type: "heatmap"
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        colorScale: {
          ranges: [
            {
              from: 10,
              to: 15,
              name: "low",
              color: "#00A100"
            },
            {
              from: 16,
              to: 20,
              name: "medium",
              color: "#128FD9"
            },
            {
              from: 21,
              to: 25,
              name: "high",
              color: "#FFB200"
            },
            {
              from: 26,
              to: 30,
              name: "extreme",
              color: "#FF0000"
            }
          ]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: "Services Per Day and Hours"
    },
    yaxis: {
      title: {
        text: 'Days'
      }
    },
    xaxis: {
      title: {
        text: 'Hours of the day'
      },
      // type: "category",
      categories: Array.from({ length: 24 }, (_, i) => `${i}:00`)
    }
  };
}

public generateData(count: number, yrange: { min: any; max: any; }) {
  const series = [];
  for (let i = 0; i < count; i++) {
    series.push({
      x: i % 24, // Hours
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
  }
  return series;
}


  ngOnInit(): void {}
}