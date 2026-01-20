
import { Dashboard } from '../views/Dashboard.js';
import { render } from '../core/render.js';

export function router() {
  const route = location.hash;

  switch (route) {
    default:
      render(Dashboard());
  }
}
