import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  items = [
    {
      title: "Nowy model karty graficznej Nvidia RTX 4060Ti",
      date: "08.06.2023",
      description: "AI nadal rozwija się dynamicznie, a technologie oparte na sztucznej inteligencji stają się coraz bardziej zaawansowane, można spodziewać się większej liczby inteligentnych asystentów w smartfonach i komputerach oraz bardziej zaawansowanych funkcji przetwarzania języka naturalnego i rozpoznawania obrazu.",
      img: "../../assets/image/4060ti.jpg",
      imgAlt: "RTX 4060Ti",
    },
    {
      title: "Rzeczywistość rozszerzona (AR) i wirtualna (VR)",
      date: "08.06.2023",
      description: "AR i VR mają coraz większe zastosowanie w dziedzinie rozrywki, edukacji i biznesu. W 2023 roku możemy spodziewać się większej liczby aplikacji i treści opartych na AR i VR, które oferują interaktywne i immersywne doświadczenia użytkownikom.",
      img: "../../assets/image/gogle-apple-ar.jpg",
      imgAlt: "gogle apple ar/vr",
    },
    {
      title: "Nowe nazewnictwo procesorów intela",
      date: "08.06.2023",
      description: "Intel potwierdził, że procesory 14. generacji Meteor Lake weszły już w fazę produkcji, a ich premiera powinna odbyć się w drugiej połowie roku. Na pewno na rynek trafią mobilne wersje nowej generacji CPU.",
      img: "../../assets/image/intel-14th.webp",
      imgAlt: "intel 14th",
    },
    {
      title: "Wprowadzenie technologii 6G",
      date: "08.06.2023",
      description: "W 2023 roku mogą pojawić się pierwsze rozmowy na temat technologii 6G, która będzie następcą 5G. 6G przyniesie jeszcze większe przepustowości i niższe opóźnienia, otwierając drzwi dla nowych zastosowań, takich jak rozszerzona rzeczywistość holograficzna, autonomiczne pojazdy i zaawansowane połączenia maszynowe.",
      img: "../../assets/image/network.jpg",
      imgAlt: "6G technology",
    },
  ]
}
