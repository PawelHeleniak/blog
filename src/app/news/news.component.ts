import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ngOnInit() {
    this.pagination = this.items.length%4;

    this.handleSort(1)
  }
  options = {
    maxDisplay: 4,
  }

  pagination = 0;
  activePagination = 1;
  paginationArray: any = {};

  handleSort(item:any){
    this.pagination = Math.ceil(this.itemsData.length/this.options.maxDisplay)
    for (let i: number = 1; i < this.pagination+1; i++) {
      this.paginationArray['item' + i] = i;
    }
    this.activePagination = item;

    this.items = [];
    for (let i:number = (this.activePagination-1)*this.options.maxDisplay; i < this.activePagination*this.options.maxDisplay; i++) {
      if(this.itemsData.length > i)
        this.items.push(this.itemsData[i]);
    }
  }

  itemsData = [
    {
      title: "Nowy model karty graficznej Nvidia RTX 4060Ti",
      date: "08.06.2023",
      description: "AI nadal rozwija się dynamicznie, a technologie oparte na sztucznej inteligencji stają się coraz bardziej zaawansowane, można spodziewać się większej liczby inteligentnych asystentów w smartfonach i komputerach oraz bardziej zaawansowanych funkcji przetwarzania języka naturalnego i rozpoznawania obrazu.",
      img: "../../assets/image/4060ti.jpg",
      imgAlt: "RTX 4060Ti",
      ID: 1,
    },
    {
      title: "Rzeczywistość rozszerzona (AR) i wirtualna (VR)",
      date: "08.06.2023",
      description: "AR i VR mają coraz większe zastosowanie w dziedzinie rozrywki, edukacji i biznesu. W 2023 roku możemy spodziewać się większej liczby aplikacji i treści opartych na AR i VR, które oferują interaktywne i immersywne doświadczenia użytkownikom.",
      img: "../../assets/image/gogle-apple-ar.jpg",
      imgAlt: "gogle apple ar/vr",
      ID: 2,
    },
    {
      title: "Nowe nazewnictwo procesorów intela",
      date: "08.06.2023",
      description: "Intel potwierdził, że procesory 14. generacji Meteor Lake weszły już w fazę produkcji, a ich premiera powinna odbyć się w drugiej połowie roku. Na pewno na rynek trafią mobilne wersje nowej generacji CPU.",
      img: "../../assets/image/intel-14th.webp",
      imgAlt: "intel 14th",
      ID: 3,
    },
    {
      title: "Wprowadzenie technologii 6G",
      date: "08.06.2023",
      description: "W 2023 roku mogą pojawić się pierwsze rozmowy na temat technologii 6G, która będzie następcą 5G. 6G przyniesie jeszcze większe przepustowości i niższe opóźnienia, otwierając drzwi dla nowych zastosowań, takich jak rozszerzona rzeczywistość holograficzna, autonomiczne pojazdy i zaawansowane połączenia maszynowe.",
      img: "../../assets/image/network.jpg",
      imgAlt: "6G technology",
      ID: 4,
    },
    {
      title: "Wprowadzenie technologii 6G",
      date: "08.06.2023",
      description: "W 2023 roku mogą pojawić się pierwsze rozmowy na temat technologii 6G, która będzie następcą 5G. 6G przyniesie jeszcze większe przepustowości i niższe opóźnienia, otwierając drzwi dla nowych zastosowań, takich jak rozszerzona rzeczywistość holograficzna, autonomiczne pojazdy i zaawansowane połączenia maszynowe.",
      img: "../../assets/image/network.jpg",
      imgAlt: "6G technology",
      ID: 5,
    },
    {
      title: "Nowe nazewnictwo procesorów intela",
      date: "08.06.2023",
      description: "Intel potwierdził, że procesory 14. generacji Meteor Lake weszły już w fazę produkcji, a ich premiera powinna odbyć się w drugiej połowie roku. Na pewno na rynek trafią mobilne wersje nowej generacji CPU.",
      img: "../../assets/image/intel-14th.webp",
      imgAlt: "intel 14th",
      ID: 6,
    },
  ]
  items: Array<Items> = []
}
interface Items{
  title: string;
  date: string;
  description: string;
  img: string;
  imgAlt: string;
  ID: number;
}