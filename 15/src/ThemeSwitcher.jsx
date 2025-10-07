import React from 'react';
import { ButtonGroup, ToggleButton,ToggleButtonGroup } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  handleThemeChange = (selectedThemeName) => {
    const { themes, setCurrentTheme } = this.context;
    const theme = themes.find(t => t.name === selectedThemeName);
    if (theme) {
      setCurrentTheme(theme);
    }
  }

  render() {
    const { themes, currentTheme } = this.context;

    return (
      <ButtonGroup className="mb-3">
        <ToggleButtonGroup
          type="radio"
          name="theme"
          value={currentTheme.name}
          onChange={this.handleThemeChange}
        >
          {themes.map((theme) => (
            <ToggleButton
              key={theme.name}
              id={`theme-${theme.name}`}
              value={theme.name}
              variant="outline-primary"
              size="sm"
            >
              {theme.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ButtonGroup>
    );
  }
}
  // END


export default ThemeSwitcher;
