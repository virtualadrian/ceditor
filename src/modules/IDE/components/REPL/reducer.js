import { ipcRenderer } from 'electron';

import { OPEN_REPL, CLOSE_REPL, OPEN_MODAL, CLOSE_MODAL, SET_COMMANDS } from './actions';

const initialState = {
  REPLIsOpen: false,
  modalIsOpen: false,
  commands: ipcRenderer.sendSync('getCommands'),
};

const REPLReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_REPL:
      return { ...state, REPLIsOpen: true };
    case CLOSE_REPL:
      return { ...state, REPLIsOpen: false };
    case OPEN_MODAL:
      return { ...state, modalIsOpen: true };
    case CLOSE_MODAL:
      return { ...state, modalIsOpen: false };
    case SET_COMMANDS:
      return { ...state, commands: { ...action.commandsState } };
    default:
      return state;
  }
};

export const getREPLIsOpen = state => state.IDEReducer.REPLReducer.REPLIsOpen;
export const getModalIsOpen = state => state.IDEReducer.REPLReducer.modalIsOpen;
export const getCommands = state => state.IDEReducer.REPLReducer.commands;

export default REPLReducer;
