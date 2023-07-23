import React from "react";

const defaultValue = {
  locale: 'English',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);