import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  ngOnInit() {
    let theme = localStorage.getItem("theme");

    if(theme === "dark"){
      document.body.classList.add('dark-theme')
      this.isDark = !this.isDark;
    }
  }

  isDark = false;
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.isDark = !this.isDark
    
    if(this.isDark){
      localStorage.setItem("theme", "dark");
    }else{
      localStorage.setItem("theme", "light");
    }
  }
  menu:boolean = false;

  navList: any =[
    {
        name: "Nowości",
        href: "/nowosci",
    },
    {
      name: "Galeria",
      href: "/galeria",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
},
  ]
}
