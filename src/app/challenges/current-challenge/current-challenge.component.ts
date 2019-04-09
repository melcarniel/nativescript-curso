import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';
import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '~/app/shared/ui.service';

@Component({
  selector: 'ns-current-challenge',
  templateUrl: './current-challenge.component.html',
  styleUrls: ['./current-challenge.component.scss'],
  moduleId: module.id
})
export class CurrentChallengeComponent implements OnInit {
 
  weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  days: { dayInMonth: number, dayInWeek: number }[] = [];
  private currentYear: number;
  private currentMonth: number;

  constructor(private router: RouterExtensions,
              private modalDialog: ModalDialogService,
              private vcRef: ViewContainerRef,
              private uiService: UIService) {}

  // onEdit() {
  //   this.router.navigate(['/challenges/edit'], {
  //     transition: { name: 'slideLeft' }
  //   });
  // }

  ngOnInit(){
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    for (let i = 1; i < daysInMonth + 1; i++){
      const date = new Date(this.currentYear, this.currentMonth, i);
      const dayinWeek = date.getDay();
      this.days.push({dayInMonth: i, dayInWeek: dayinWeek})
    }
  }

  getRow(index: number, day: { dayInMonth: number, dayInWeek: number }){
    const starRow = 1;
    const weekRow = Math.floor(index / 7);
    const firstWeekDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
    return starRow + weekRow + irregularRow;
  }

  onChangeStatus(){
    this.modalDialog.showModal(DayModalComponent, {
      fullscreen: true,
      viewContainerRef: this.uiService.getRootVCRef() ? this.uiService.getRootVCRef() : this.vcRef,
      context: {date: new Date()}
    }).then((result: string) => {
      console.log(result)
    });
  }
}
