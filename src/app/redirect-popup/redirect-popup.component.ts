import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-redirect-popup',
  templateUrl: './redirect-popup.component.html',
  styleUrls: ['./redirect-popup.component.scss']
})
export class RedirectPopupComponent implements OnInit {
  @Input() timer = 5000;

  public disappear = true;
  public width = 100;
  public index = 0;
  @ViewChild('progress', {static: false}) progressDiv: ElementRef | undefined;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.disappear = false;
    }, this.timer);

    this.durationMove();
  }

  public durationMove() {
    if (this.index == 0) {
      this.index = 1;
      const id = setInterval(() => {
        if (this.width <= 0) {
          clearInterval(id);
          this.index = 0;
        } else {
          this.width--;
          this.renderer.setStyle(this.progressDiv?.nativeElement, 'width', this.width + "%");
        }
      }, 40);
    }
  }

  closePopup() {
    this.disappear = false;
  }
}
