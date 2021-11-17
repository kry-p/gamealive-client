import React, { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from '../../lib/styles/theme';
import { useSelector } from 'react-redux';

const ThemeProviderContainer = () => {
  const option = useSelector((state) => state.option);
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    if (option.darkmode) setCurrentTheme(darkTheme);
    else setCurrentTheme(lightTheme);
  }, [option]);
  return <></>;
};

export default ThemeProviderContainer;
