## @unvented/translate

### Installation

```bash
npm i @unvented/translate
```

### Usage

```jsonc
// de.json
{
  "welcomeMessage": "Hallo {name}",
  "a": {
    "very": {
      "deep": {
        "translation": "Irgendwas"
      }
    }
  }
}
```

```jsonc
// en.json
{
  "welcomeMessage": "Hello {name}",
  "a": {
    "very": {
      "deep": {
        "translation": "Something"
      }
    }
  }
}
```

```ts
import { useTranslate } from '@unvented/translate'
import de from './de.json'
import en from './en.json'

const translate = useTranslate({ de, en }, '<currentLocale>' /* e.g. 'de' */, '<fallbackLocale>' /* e.g. 'en' */)

, translationOne = translate('welcomeMessage', { name: 'Samuel' }) // Hallo Samuel
, translationTwo = translate('a.very.deep.translation') // Irgendwas
```
