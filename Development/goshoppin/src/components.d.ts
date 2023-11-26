/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GoShoppinListApp {
        "userkey": string;
    }
    interface ListTitle {
        /**
          * The title of the list
         */
        "title": string;
    }
}
declare global {
    interface HTMLGoShoppinListAppElement extends Components.GoShoppinListApp, HTMLStencilElement {
    }
    var HTMLGoShoppinListAppElement: {
        prototype: HTMLGoShoppinListAppElement;
        new (): HTMLGoShoppinListAppElement;
    };
    interface HTMLListTitleElement extends Components.ListTitle, HTMLStencilElement {
    }
    var HTMLListTitleElement: {
        prototype: HTMLListTitleElement;
        new (): HTMLListTitleElement;
    };
    interface HTMLElementTagNameMap {
        "go-shoppin-list-app": HTMLGoShoppinListAppElement;
        "list-title": HTMLListTitleElement;
    }
}
declare namespace LocalJSX {
    interface GoShoppinListApp {
        "userkey"?: string;
    }
    interface ListTitle {
        /**
          * The title of the list
         */
        "title"?: string;
    }
    interface IntrinsicElements {
        "go-shoppin-list-app": GoShoppinListApp;
        "list-title": ListTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "go-shoppin-list-app": LocalJSX.GoShoppinListApp & JSXBase.HTMLAttributes<HTMLGoShoppinListAppElement>;
            "list-title": LocalJSX.ListTitle & JSXBase.HTMLAttributes<HTMLListTitleElement>;
        }
    }
}
