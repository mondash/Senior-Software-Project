const TOGGLE_SIDEBAR = 'sidebar/TOGGLE_SIDEBAR';
const OPEN_SIDEBAR = 'sidebar/OPEN_SIDEBAR';
const CLOSE_SIDEBAR = 'sidebar/CLOSE_SIDEBAR';

const initialState = {
  sidebarOpened: false,
  sidebarStatic: false,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpened: !state.sidebarOpened,
      };
    case OPEN_SIDEBAR:
      return {
        ...state,
        sidebarOpened: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpened: false,
      };
  }
  return state;
};

export default sidebarReducer;

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};
export const openSidebar = () => {
  return {
    type: OPEN_SIDEBAR,
  };
};

export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};
