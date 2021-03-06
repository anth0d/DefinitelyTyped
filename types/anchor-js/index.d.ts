// Type definitions for anchor-js 4.1
// Project: https://github.com/bryanbraun/anchorjs
// Definitions by: Brian Surowiec <https://github.com/xt0rted>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace anchorjs {
    interface Anchor {
        options: AnchorOptions;

        add(selector?: string): Anchor;
        remove(selector?: string): Anchor;
        removeAll(): void;
    }

    type AnchorPlacement = 'left' | 'right';
    type AnchorVisibility = 'always' | 'hover' | 'touch';

    interface AnchorOptions {
        arialabel?: string;
        class?: string;
        icons?: string;
        placement?: AnchorPlacement;
        truncate?: number;
        visible?: AnchorVisibility;
    }

    interface AnchorStatic {
        new(options?: AnchorOptions): Anchor;
    }
}

declare const anchors: anchorjs.Anchor;
declare const AnchorJS: anchorjs.AnchorStatic;

export = AnchorJS;

export as namespace AnchorJS;

declare global {
    const anchors: anchorjs.Anchor;
}
