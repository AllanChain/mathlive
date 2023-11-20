import type { KeyboardLayoutName } from '../../public/options';

// From https://www.w3.org/TR/uievents-code/
type Keycode =
  | 'Sleep'
  | 'WakeUp'
  | 'KeyA'
  | 'KeyB'
  | 'KeyC'
  | 'KeyD'
  | 'KeyE'
  | 'KeyF'
  | 'KeyG'
  | 'KeyH'
  | 'KeyI'
  | 'KeyJ'
  | 'KeyK'
  | 'KeyL'
  | 'KeyM'
  | 'KeyN'
  | 'KeyO'
  | 'KeyP'
  | 'KeyQ'
  | 'KeyR'
  | 'KeyS'
  | 'KeyT'
  | 'KeyU'
  | 'KeyV'
  | 'KeyW'
  | 'KeyX'
  | 'KeyY'
  | 'KeyZ'
  | 'Digit1'
  | 'Digit2'
  | 'Digit3'
  | 'Digit4'
  | 'Digit5'
  | 'Digit6'
  | 'Digit7'
  | 'Digit8'
  | 'Digit9'
  | 'Digit0'
  | 'Enter'
  | 'Escape'
  | 'Backspace'
  | 'Tab'
  | 'Space'
  | 'Minus'
  | 'Equal'
  | 'BracketLeft'
  | 'BracketRight'
  | 'Backslash'
  | 'Semicolon'
  | 'Quote'
  | 'Backquote'
  | 'Comma'
  | 'Period'
  | 'Slash'
  | 'CapsLock'
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  | 'F13'
  | 'F14'
  | 'F15'
  | 'F16'
  | 'F17'
  | 'F18'
  | 'F19'
  | 'F20'
  | 'F21'
  | 'F22'
  | 'F23'
  | 'F24'
  | 'PrintScreen'
  | 'ScrollLock'
  | 'Pause'
  | 'Insert'
  | 'Home'
  | 'PageUp'
  | 'Delete'
  | 'End'
  | 'PageDown'
  | 'ArrowRight'
  | 'ArrowLeft'
  | 'ArrowDown'
  | 'ArrowUp'
  | 'NumLock'
  | 'Numpad1'
  | 'Numpad2'
  | 'Numpad3'
  | 'Numpad4'
  | 'Numpad5'
  | 'Numpad6'
  | 'Numpad7'
  | 'Numpad8'
  | 'Numpad9'
  | 'Numpad0'
  | 'NumpadDivide'
  | 'NumpadMultiply'
  | 'NumpadSubtract'
  | 'NumpadAdd'
  | 'NumpadEnter'
  | 'NumpadDecimal'
  | 'NumpadEqual'
  | 'NumpadParenLeft'
  | 'NumpadParenRight'
  | 'IntlBackslash'
  | 'ContextMenu'
  | 'Power'
  | 'Help'
  | 'Undo'
  | 'Cut'
  | 'Copy'
  | 'Paste'
  | 'AudioVolumeMute'
  | 'AudioVolumeUp'
  | 'AudioVolumeDown'
  | 'NumpadComma'
  | 'IntlRo'
  | 'KanaMode'
  | 'IntlYen'
  | 'Convert'
  | 'NonConvert'
  | 'Lang1'
  | 'Lang2'
  | 'Lang3'
  | 'Lang4'
  | 'ControlLeft'
  | 'ShiftLeft'
  | 'AltLeft'
  | 'MetaLeft'
  | 'ControlRight'
  | 'ShiftRight'
  | 'AltRight'
  | 'MetaRight'
  | 'MediaTrackNext'
  | 'MediaTrackPrevious'
  | 'MediaStop'
  | 'Eject'
  | 'MediaPlayPause'
  | 'MediaSelect'
  | 'LaunchMail'
  | 'LaunchApp2'
  | 'LaunchApp1'
  | 'BrowserSearch'
  | 'BrowserHome'
  | 'BrowserBack'
  | 'BrowserForward'
  | 'BrowserStop'
  | 'BrowserRefresh'
  | 'BrowserFavorites';

export type KeyboardLayout = {
  id: KeyboardLayoutName;
  displayName: string; // Doesn't have to be unique
  virtualLayout: 'qwerty' | 'azerty' | 'qwertz' | 'dvorak' | 'colemak';
  locale: string;
  platform: 'windows' | 'apple' | 'linux' | '';
  score: number;
  mapping: { [K in Keycode]?: [string, string, string, string] };
};