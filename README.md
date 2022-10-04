## @unvented/translate

### Installation

```bash
npm i @unvented/translate
```

### Usage

```jsonc
// de.json
{
  "$id": "de",
  "welcomeMessage": "Hallo {name}"
}
```

```jsonc
// en.json
{
  "$id": "en",
  "welcomeMessage": "Hello {name}"
}
```

```ts
import { useTranslate } from '@unvented/translate'
import de from './de.json'
import en from './en.json'

const translate = useTranslate(
  [de, en], // locales
  'de', // selected locale (the locale to translate to)
  'en' // fallback locale (if the specified key doesn't exist on the selected locale
)

, translation = translate('welcomeMessage', { name: 'Samuel' }) // Hallo Samuel
```
