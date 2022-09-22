import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(
    private title: Title,
  ) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    if (pageTitle) {
      this.title.setTitle(`${pageTitle} | Angular App 😊`);
    }

  }
}
