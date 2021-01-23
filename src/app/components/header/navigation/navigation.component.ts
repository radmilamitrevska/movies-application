import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {
  isVisibleMobileNavigation: boolean = false;

  navigationBtnClick() {
    this.isVisibleMobileNavigation = !this.isVisibleMobileNavigation;
  }
}
