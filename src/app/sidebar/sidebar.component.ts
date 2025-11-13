import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


interface MenuItem {
  label: string;
  routerLink?:any;
  children?: MenuItem[];
  isOpen?: boolean;
}


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    {
      label: 'Reactive Form',
      isOpen: false,
      children: [
        { label: '1. Form Control', routerLink:""},
        { label: '2. Form Group' ,routerLink:"formgroup" },
        { label: '3. Form Array',routerLink:"formarray" },
        { label: '4. CheckBox',routerLink:"checkbox" },
        { label: '5. Select Box',routerLink:"select"},
        { label: '6. Dynamic Form Array',routerLink:"dynamicformarray" },
      ]
    },
    {
      label: 'Services',
      isOpen: false,
      children: [
        { label: '1. Use Class', routerLink:"useclass"},
        { label: '2. Use Factory', routerLink:"usefactory"},
        { label: '3. Use Value', routerLink:"usevalue"},
        { label: '3. Use Existing', routerLink:"useexisting"}
      ]
    },
    {
      label: 'Dynamic Components',
      isOpen: false,
      children: [
        { label: 'Create Dynamic', routerLink:"dynamic"},
        { label: 'TemplateRef', routerLink:"template"}
      ]
    },
        {
      label: 'Singal',
      isOpen: false,
      children: [
        { label: 'Signal', routerLink:"signal"}
      ]
    },
    {
      label: 'NGRX',
      isOpen: false,
      children: [
        { label: 'NGRX', routerLink:"ngrxroute"}
      ]
    }
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}
