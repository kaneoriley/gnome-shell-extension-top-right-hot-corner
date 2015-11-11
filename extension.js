/*
Version 1
*/

const Main = imports.ui.main;

function init() {
}

function enable() {
  Main.layoutManager._rtl = true;
  Main.layoutManager._updateHotCorners();
}

function disable() {
  Main.layoutManager._rtl = false;
  Main.layoutManager._updateHotCorners();
}
