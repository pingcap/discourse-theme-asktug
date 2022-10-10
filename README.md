# discourse-theme-asktug

A discourse theme used in AskTUG.

## Before start

It's recommended to read [https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648](https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648) before you start to develop a discourse theme.

This is the best guide I have ever seen.

## How to preview the changes

See https://meta.discourse.org/t/install-the-discourse-theme-cli-console-app-to-help-you-build-themes/82950

## Theme features

### Custom header

This feature is checked by default.

If you want to disable this feature, please uncheck the `custom_header_items`.

This feature allows you to define both of the first level menu and second level menu before the header-buttons (top-right buttons). The rules are:

- if you only want a first level menu, just modify the `header items`. for example, if you want to add a new item, just write `name;href`, split by `;`.

- if you want a second level menu, you must let the first level menu item be a single `name` or `name;href`. Then, at the same position of the `subheader items`, write you dropdown items. For example, you can write as `name1;href1,name2;href2`, same as first level menu but just need to remember use `,` to split the items.

- if you want a third level menu, you need to add new items in `third level items`. The format is:

  `header_index-subheader_index,name;href`

  For example, `1-1,Baidu;https://baidu.com` will treat the first subheader item under the first header item as a dropdown.

- Use `#...` as a placeholder when a first level menu item is between two second level menu items. Start by `#`, end with any characters.

You can view the example in `settings.yaml`.

### Show Create Topic Button when not logged in

As the title.

This feature still has a configuration item named `check_is_login_*`. When you click the Create Topic Button but are not logged in, It will open a modal box to prompt you to log in.

## How to contribute

Open an issue or pull a request to describe your problems or changes.
