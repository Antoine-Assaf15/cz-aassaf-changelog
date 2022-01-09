# cz-aassaf-changelog
Part of the [commitizen](https://github.com/commitizen/cz-cli) family. Prompts for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) and for [aassaf](https://github.com/Antoine-Assaf15/cz-aassaf-changelog) standard.

## Note:

This package only adds new commit prefixes to the original prefixes of the [conventional changelog](https://github.com/conventional-changelog/conventional-changelog)

## New Commit Types

| <p style="width:100px">Commit Prefix</p>   | <p style="width:250px">Description</p>                         |          
| --------------------                       | -----------------------------------                            |           
| wip                                        |  A feature, fix, or change that is still a work in progress    |
| remove                                     |  A feature or code block that is being removed                 |
| update                                     |  Indicates a change to package versions, project version, etc. |
| security                                   |  Indicates any change related to the security features of the project like updating a vulnerable package        |

## Configuration

### package.json

Like commitizen, you specify the configuration of cz-conventional-changelog through the package.json's `config.commitizen` key.

```json5
{
// ...  default values
    "config": {
        "commitizen": {
            "path": "./node_modules/cz-conventional-changelog",
            "disableScopeLowerCase": false,
            "disableSubjectLowerCase": false,
            "maxHeaderWidth": 100,
            "maxLineWidth": 100,
            "defaultType": "",
            "defaultScope": "",
            "defaultSubject": "",
            "defaultBody": "",
            "defaultIssues": "",
            "types": {
              ...
              "feat": {
                "description": "A new feature",
                "title": "Features"
              },
              ...
            }
        }
    }
// ...
}
```
In the case of this package, the config variable in package.json points to index.js where the configuration can be found. Alongside the commit types of [conventional changelog](https://github.com/conventional-changelog/conventional-changelog), custom types imported from customTypes.js can be found.

### Environment variables

The following environment variables can be used to override any default configuration or package.json based configuration.

- CZ_TYPE = defaultType
- CZ_SCOPE = defaultScope
- CZ_SUBJECT = defaultSubject
- CZ_BODY = defaultBody
- CZ_MAX_HEADER_WIDTH = maxHeaderWidth
- CZ_MAX_LINE_WIDTH = maxLineWidth

### Commitlint

If using the [commitlint](https://github.com/conventional-changelog/commitlint) js library, the "maxHeaderWidth" configuration property will default to the configuration of the "header-max-length" rule instead of the hard coded value of 100. This can be ovewritten by setting the 'maxHeaderWidth' configuration in package.json or the CZ_MAX_HEADER_WIDTH environment variable.
