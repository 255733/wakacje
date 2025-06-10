import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Przewija okno do góry (pozycja 0,0)
  }, [pathname]); // Uruchamia się za każdym razem, gdy zmienia się ścieżka URL

  return null;
}

export default ScrollToTop;