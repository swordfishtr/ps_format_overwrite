# PS Format Overwrite (UNSAFE VERSION)

Browser extension that overwrites the format of the currently viewed team on Pokemon Showdown's teambuilder. This is most useful for old metagames that retain teambuilder support but aren't present in the given list of formats. Skips the part of teambuilding where you have to scroll down to view the legal Pokemon for your tier. You can duplicate the team afterwards - there's no need to use this extension for every new team.

The method used is provided by the Showdown client, so even when the formatting of stored teams changes, this extension should remain perfectly functional.

**There's no safety measure in this version to prevent you from corrupting the teambuilder. Backup your teams!**

## Usage

Valid format names consist of only numbers and lowercase letters. Examples: `gen9ou` `gen8bdspnu` `gen7letsgoru`

There's no list of 'Every Format Ever' - they're constantly added and removed. Start here for a lot of (but not all) formats with teambuilder support: https://github.com/smogon/pokemon-showdown/blob/master/config/formats.ts

1. Navigate to the team whose format you wish to overwrite, or create a new one.

2. Open the extension's popup, type in the desired format name and click OK!

3. If successful, the popup will close itself. The change is immediate and nothing else needs to be done.

## Install instructions

This extension has cross-browser compatibility.

1. Download as zip and then unzip.

2. Chromium users: go to `chrome://extensions/` and enable Developer mode, then Load unpacked and select the directory that has manifest.json in it.

2. Firefox users: go to `about:debugging#/runtime/this-firefox` then Load Temporary Add-on... and select manifest.json directly.

3. Chrome users should disable the extension after they're done with it. Firefox will do this on shutdown.