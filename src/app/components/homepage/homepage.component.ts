import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  data: any = [
    {
      image: 'https://static-01.daraz.pk/p/b6f77e64c41a203cbebae66056182f59.jpg_100x100.jpg_.webp',
      title: 'Garlic Cutter - Kitchen',
      price: '$10',
      oldPrice: '$20',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://static-01.daraz.pk/p/739dd6b72d29a1f6ccb2f6bb2bdb2b72.jpg_100x100.jpg_.webp',
      title: 'Large Silver Suit Case',
      price: '$30',
      oldPrice: '$40',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://pk-live-21.slatic.net/kf/S191110238bd148bcba8e12c890fcfcaes.jpg',
      title: 'BIAHS Sleeper Branded',
      price: '$50',
      oldPrice: '$60',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://pk-live-21.slatic.net/kf/S191110238bd148bcba8e12c890fcfcaes.jpg',
      title: 'BIAHS Sleeper Branded',
      price: '$50',
      oldPrice: '$60',
      discount: '40%',
      starRating: 5
    }
  ];

  arrival: any = [
    {
      image: 'https://static-01.daraz.pk/p/b6f77e64c41a203cbebae66056182f59.jpg_100x100.jpg_.webp',
      title: 'Garlic Cutter - Kitchen',
      price: '$10',
      oldPrice: '$20',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://static-01.daraz.pk/p/739dd6b72d29a1f6ccb2f6bb2bdb2b72.jpg_100x100.jpg_.webp',
      title: 'Large Silver Suit Case',
      price: '$30',
      oldPrice: '$40',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://pk-live-21.slatic.net/kf/S191110238bd148bcba8e12c890fcfcaes.jpg',
      title: 'BIAHS Sleeper Branded',
      price: '$50',
      oldPrice: '$60',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://pk-live-21.slatic.net/kf/S191110238bd148bcba8e12c890fcfcaes.jpg',
      title: 'BIAHS Sleeper Branded',
      price: '$50',
      oldPrice: '$60',
      discount: '40%',
      starRating: 5
    }
  ];

  sale: any = [
    {
      image: 'https://static-01.daraz.pk/p/b6f77e64c41a203cbebae66056182f59.jpg_100x100.jpg_.webp',
      title: 'Garlic Cutter - Kitchen',
      price: '$10',
      oldPrice: '$20',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://static-01.daraz.pk/p/739dd6b72d29a1f6ccb2f6bb2bdb2b72.jpg_100x100.jpg_.webp',
      title: 'Large Silver Suit Case',
      price: '$30',
      oldPrice: '$40',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://pk-live-21.slatic.net/kf/S191110238bd148bcba8e12c890fcfcaes.jpg',
      title: 'BIAHS Sleeper Branded',
      price: '$50',
      oldPrice: '$60',
      discount: '40%',
      starRating: 5
    },
    {
      image: 'https://pk-live-21.slatic.net/kf/S191110238bd148bcba8e12c890fcfcaes.jpg',
      title: 'BIAHS Sleeper Branded',
      price: '$50',
      oldPrice: '$60',
      discount: '40%',
      starRating: 5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
