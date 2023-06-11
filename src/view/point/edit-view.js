import {createPointEditTemplate} from '../../template/point/edit';
import {createElement} from '../../render';

export default class PointEditView {

  constructor(point) {
    this.point = point;
  }

  getTemplate() {
    return createPointEditTemplate(this.point);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
