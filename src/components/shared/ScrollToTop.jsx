import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top of page when the route changes.
 * Fixes the "content rendering on top" issue where scroll position
 * persists across navigations, making new page content appear below the fold.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
