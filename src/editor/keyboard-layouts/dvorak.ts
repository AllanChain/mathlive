import { KeyboardLayout } from './types';

export const DVORAK: KeyboardLayout = {
  id: 'dvorak',
  locale: 'en',
  displayName: 'Dvorak',
  virtualLayout: 'dvorak',
  platform: '',
  score: 0,
  mapping: {
    KeyA: ['a', 'A', 'å', 'Å'],
    KeyB: ['x', 'X', '≈', '˛'],
    KeyC: ['j', 'J', '∆', 'Ô'],
    KeyD: ['e', 'E', '´', '´'],
    KeyE: ['.', '>', '≥', '˘'],
    KeyF: ['u', 'U', '¨', '¨'],
    KeyG: ['i', 'I', 'ˆ', 'ˆ'],
    KeyH: ['d', 'D', '∂', 'Î'],
    KeyI: ['c', 'C', 'ç', 'Ç'],
    KeyJ: ['h', 'H', '˙', 'Ó'],
    KeyK: ['t', 'T', '†', 'ˇ'],
    KeyL: ['n', 'N', '˜', '˜'],
    KeyM: ['m', 'M', 'µ', 'Â'],
    KeyN: ['b', 'B', '∫', 'ı'],
    KeyO: ['r', 'R', '®', '‰'],
    KeyP: ['l', 'L', '¬', 'Ò'],
    KeyQ: ["'", '"', 'æ', 'Æ'],
    KeyR: ['p', 'P', 'π', '∏'],
    KeyS: ['o', 'O', 'ø', 'Ø'],
    KeyT: ['y', 'Y', '¥', 'Á'],
    KeyU: ['g', 'G', '©', '˝'],
    KeyV: ['k', 'K', '˚', ''],
    KeyW: [',', '<', '≤', '¯'],
    KeyX: ['q', 'Q', 'œ', 'Œ'],
    KeyY: ['f', 'F', 'ƒ', 'Ï'],
    KeyZ: [';', ':', '…', 'Ú'],
    Digit1: ['1', '!', '¡', '⁄'],
    Digit2: ['2', '@', '™', '€'],
    Digit3: ['3', '#', '£', '‹'],
    Digit4: ['4', '$', '¢', '›'],
    Digit5: ['5', '%', '∞', 'ﬁ'],
    Digit6: ['6', '^', '§', 'ﬂ'],
    Digit7: ['7', '&', '¶', '‡'],
    Digit8: ['8', '*', '•', '°'],
    Digit9: ['9', '(', 'ª', '·'],
    Digit0: ['0', ')', 'º', '‚'],
    Space: [' ', ' ', ' ', ' '],
    Minus: ['[', '{', '“', '”'],
    Equal: [']', '}', '‘', '’'],
    BracketLeft: ['/', '?', '÷', '¿'],
    BracketRight: ['=', '+', '≠', '±'],
    Backslash: ['\\', '|', '«', '»'],
    Semicolon: ['s', 'S', 'ß', 'Í'],
    Quote: ['-', '_', '–', '—'],
    Backquote: ['`', '~', '`', '`'],
    Comma: ['w', 'W', '∑', '„'],
    Period: ['v', 'V', '√', '◊'],
    Slash: ['z', 'Z', 'Ω', '¸'],
    NumpadDivide: ['/', '/', '/', '/'],
    NumpadMultiply: ['*', '*', '*', '*'],
    NumpadSubtract: ['-', '-', '-', '-'],
    NumpadAdd: ['+', '+', '+', '+'],
    Numpad1: ['1', '1', '1', '1'],
    Numpad2: ['2', '2', '2', '2'],
    Numpad3: ['3', '3', '3', '3'],
    Numpad4: ['4', '4', '4', '4'],
    Numpad5: ['5', '5', '5', '5'],
    Numpad6: ['6', '6', '6', '6'],
    Numpad7: ['7', '7', '7', '7'],
    Numpad8: ['8', '8', '8', '8'],
    Numpad9: ['9', '9', '9', '9'],
    Numpad0: ['0', '0', '0', '0'],
    NumpadDecimal: ['.', '.', '.', '.'],
    IntlBackslash: ['§', '±', '§', '±'],
    NumpadEqual: ['=', '=', '=', '='],
    AudioVolumeUp: ['', '=', '', '='],
  },
};