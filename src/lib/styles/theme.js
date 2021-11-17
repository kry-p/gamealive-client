import palette from './palette';

export const lightTheme = {
  logoLeft: palette.logo_base[0],
  logoRight: '#000000',
  text: '#000000',
  link: palette.gray[5],
  icon: palette.gray[5],
  snsShare: snsShare,
};

export const darkTheme = {
  logoLeft: palette.logo_base[0],
  logoRight: '#FFFFFF',
  text: '#FFFFFF',
  link: palette.gray[5],
  icon: palette.gray[5],
  snsShare: snsShare,
};

const snsShare = {
  snsKakao: palette.kakaotalk,
  snsFacebook: palette.facebook,
};

export const theme = {
  lightTheme,
  darkTheme,
};
