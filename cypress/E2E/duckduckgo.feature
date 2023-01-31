Scenario Outline: Steps will run conditionally if tagged
  
  When user visits <site>
  Then <site> search bar will display

  @google
  Examples:
    | site                  |
    | google.com            |

  @duckduckgo
  Examples:
    | site                   |
    | duckduckgo.com         |