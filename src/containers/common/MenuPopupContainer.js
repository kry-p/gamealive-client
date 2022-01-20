import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MenuPopup from '../../components/menu/MenuPopup';
import {
  toggleDarkmode,
  toggleCancelled,
  toggleRejected,
  toggleMenuOpen,
} from '../../modules/option';

const MenuPopupContainer = ({ history }) => {
  const settings = useSelector((state) => state.option);
  const dispatch = useDispatch();

  const onToggleDarkmode = useCallback(
    () => dispatch(toggleDarkmode()),
    [dispatch],
  );
  const onToggleCancelled = useCallback(
    () => dispatch(toggleCancelled()),
    [dispatch],
  );
  const onToggleRejected = useCallback(
    () => dispatch(toggleRejected()),
    [dispatch],
  );
  const onToggleMenuOpen = useCallback(
    () => dispatch(toggleMenuOpen()),
    [dispatch],
  );

  return (
    <>
      <MenuPopup
        settings={settings}
        history={history}
        onToggleDarkmode={onToggleDarkmode}
        onToggleCancelled={onToggleCancelled}
        onToggleRejected={onToggleRejected}
        onToggleMenuOpen={onToggleMenuOpen}
      />
    </>
  );
};

export default MenuPopupContainer;
