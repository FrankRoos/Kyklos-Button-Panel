import { e2e } from '@grafana/e2e';

/**
 * Dashboard
 */
const json = require('../../provisioning/dashboards/home.json');
const testedPanel = json.panels[0];

describe('Viewing an Button panel', () => {
  beforeEach(() => {
    e2e.flows.openDashboard({
      uid: json.uid,
    });
  });

  it('Should display Panel', () => {
    const currentPanel = e2e.components.Panels.Panel.title(testedPanel.title);
    currentPanel.should('be.visible');
  });
});
