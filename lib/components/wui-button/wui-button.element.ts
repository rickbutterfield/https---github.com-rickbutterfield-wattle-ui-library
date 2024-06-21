import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { WUILook } from "../../types/Look";

/**
 * wui-button
 * @element wui-button
 * @slot - for default content
 * @description - All-around button
 */
@customElement('wui-button')
export class WUIButton extends LitElement {
  constructor() {
    super();
  }

  /**
   * Setting an href will turn this button into a styled anchor tag
   * @type {string}
   * @attr
   * @default undefined
   */
  @property({type: String })
  public href?: string;

  @property({ reflect: true })
  look: WUILook = 'default';

  /**
   * 
   * @
   */

  render() {
    return this.href ?
    html`
      <a
        id="button"
        href=${ifDefined(this.href)}>
          <slot></slot>
      </a>
    ` : 
    html`
      <button
        id="button">
          <slot></slot>
      </button>
    `
  }

  static styles = [
    css`
      #button {
        display: inline-flex;
        background-color: #f5f5f5;
        border: 0;
        padding: 12px var(--wui-test-var);
        border-radius: 8px;
        font-family: montserrat, sans-serif;
        font-weight: 500;
        cursor: pointer;
        font-size: 1rem;
        text-decoration: none;
        color: #000;

        &:hover,
        &:focus {
          background-color: #f9a425;
          color: #000;
        }
      }

      :host([look='primary']) #button {
        background-color: #f2b100;
        color: #000;

        &:hover,
        &:focus {
          background-color: #f9a425;
        }
      }
    `
  ]
}

declare global {
  interface HTMLElementTagNameMap {
    'wui-button': WUIButton;
  }
}